import { useEffect, useState } from "react";
import { areaLabels, characterLabels, layerLabels, typeLabels } from "../../data/labels";
import type { BusinessHours, Spot } from "../../types/spot";
import type { UserSpotState } from "../../types/userState";
import { getGoogleMapsButtonLabel, getGoogleMapsUrl } from "../../utils/googleMaps";
import { getMarkerCategory, markerCategoryLabels } from "../../utils/markerCategory";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { EmptyState } from "../ui/EmptyState";
import { SpotStatusButtons } from "./SpotStatusButtons";

interface SpotDetailPanelProps {
  spot?: Spot;
  state?: UserSpotState;
  onToggleVisited: (spotId: string) => void;
  onToggleFavorite: (spotId: string) => void;
  onToggleWishlist: (spotId: string) => void;
}

function getSubtitle(spot: Spot) {
  const parts = [spot.name.ja, spot.originalGoogleMapsName].filter(
    (value, index, values): value is string => Boolean(value) && values.indexOf(value) === index && value !== spot.name.zh,
  );

  return parts.join(" / ");
}

function formatWeekdayHours(hours: BusinessHours) {
  if (hours.weekdayOpen && hours.weekdayClose) {
    return `${hours.weekdayOpen} ～ ${hours.weekdayClose}`;
  }

  return hours.weekdayOpen || hours.weekdayClose;
}

function formatPrice(hours: BusinessHours) {
  const priceParts = [];

  if (typeof hours.weekdayPriceYen === "number") {
    priceParts.push(`平日 ${hours.weekdayPriceYen} 円`);
  }

  if (typeof hours.weekendPriceYen === "number") {
    priceParts.push(`土日祝 ${hours.weekendPriceYen} 円`);
  }

  if (hours.priceNote) {
    priceParts.push(hours.priceNote);
  }

  return priceParts.join(" / ");
}

function BusinessHoursSection({ hours }: { hours?: BusinessHours }) {
  if (!hours) {
    return (
      <section className="detail-section business-hours-box">
        <h3>营业信息</h3>
        <p className="muted-note">暂无整理营业时间，请以 Google Maps / 官方信息为准。</p>
      </section>
    );
  }

  const weekdayHours = formatWeekdayHours(hours);
  const price = formatPrice(hours);
  const sourceLabel = hours.source === "numazu_pdf" ? "用户整理 PDF 参考表" : "用户整理参考表";

  return (
    <section className="detail-section business-hours-box">
      <h3>营业信息</h3>
      <dl className="business-hours-list">
        {weekdayHours ? (
          <>
            <dt>平日</dt>
            <dd>{weekdayHours}</dd>
          </>
        ) : null}
        {hours.weekendHours ? (
          <>
            <dt>土日祝</dt>
            <dd>{hours.weekendHours}</dd>
          </>
        ) : null}
        {hours.regularHoliday ? (
          <>
            <dt>定休</dt>
            <dd>{hours.regularHoliday}</dd>
          </>
        ) : null}
        {hours.specialHolidayNote ? (
          <>
            <dt>特殊说明</dt>
            <dd>{hours.specialHolidayNote}</dd>
          </>
        ) : null}
        {price ? (
          <>
            <dt>费用</dt>
            <dd>{price}</dd>
          </>
        ) : null}
        {hours.businessNote ? (
          <>
            <dt>备注</dt>
            <dd>{hours.businessNote}</dd>
          </>
        ) : null}
        <dt>来源</dt>
        <dd>{sourceLabel}</dd>
      </dl>
      {hours.lastCheckedAt ? <small>最后整理：{hours.lastCheckedAt}</small> : null}
      <small>营业时间可能变化，出行前请以官方 / Google Maps 为准。</small>
    </section>
  );
}

function getSpotNoteKey(spotId: string) {
  return `numazu-spot-note:${spotId}`;
}

function SpotNoteEditor({ spotId }: { spotId: string }) {
  const [draftNote, setDraftNote] = useState("");
  const [savedNote, setSavedNote] = useState("");

  useEffect(() => {
    try {
      const storedNote = window.localStorage.getItem(getSpotNoteKey(spotId)) ?? "";
      setDraftNote(storedNote);
      setSavedNote(storedNote);
    } catch {
      setDraftNote("");
      setSavedNote("");
    }
  }, [spotId]);

  function handleSave() {
    try {
      const nextNote = draftNote.trim();
      if (nextNote) {
        window.localStorage.setItem(getSpotNoteKey(spotId), nextNote);
      } else {
        window.localStorage.removeItem(getSpotNoteKey(spotId));
      }
      setDraftNote(nextNote);
      setSavedNote(nextNote);
    } catch {
      // localStorage may be unavailable in restricted browsing modes.
    }
  }

  function handleClear() {
    try {
      window.localStorage.removeItem(getSpotNoteKey(spotId));
    } catch {
      // localStorage may be unavailable in restricted browsing modes.
    }
    setDraftNote("");
    setSavedNote("");
  }

  return (
    <section className="detail-section user-note-box">
      <div className="section-heading-row">
        <h3>我的备注</h3>
        {savedNote ? <Badge tone="green">已保存</Badge> : null}
      </div>
      <textarea
        value={draftNote}
        onChange={(event) => setDraftNote(event.target.value)}
        placeholder="写下这个地点的备注、巡礼计划或打卡感想……"
        rows={5}
      />
      <div className="note-actions">
        <Button variant="primary" onClick={handleSave}>
          保存备注
        </Button>
        <Button variant="ghost" onClick={handleClear}>
          清空
        </Button>
      </div>
      <small>备注只保存在本机 localStorage，不会上传云端。</small>
    </section>
  );
}

export function SpotDetailPanel({
  spot,
  state,
  onToggleVisited,
  onToggleFavorite,
  onToggleWishlist,
}: SpotDetailPanelProps) {
  if (!spot || !state) {
    return (
      <Card className="detail-panel">
        <EmptyState title="请选择一个点位" description="点击地图 marker 或点位列表查看详情。" />
      </Card>
    );
  }

  const googleMapsUrl = getGoogleMapsUrl(spot);
  const isCoordinateVerified = spot.coordinateStatus === "verified";
  const subtitle = getSubtitle(spot);
  const markerCategory = getMarkerCategory(spot);

  return (
    <Card className="detail-panel">
      <div className="detail-header">
        <div>
          <h2>{spot.name.zh}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <Badge tone="green">{areaLabels[spot.area]}</Badge>
      </div>

      <div className="badge-row">
        <Badge tone="gray">{typeLabels[spot.type]}</Badge>
        {spot.spotLayer ? <Badge tone="gray">{layerLabels[spot.spotLayer]}</Badge> : null}
        <Badge tone="blue">{markerCategoryLabels[markerCategory]}</Badge>
        {spot.isFeatured ? <Badge tone="green">推荐</Badge> : null}
        {spot.characters.map((character) => (
          <Badge key={character} tone="blue">
            {characterLabels[character]}
          </Badge>
        ))}
      </div>

      {spot.recommendedDurationMinutes ? (
        <div className="duration-box">建议预留：约 {spot.recommendedDurationMinutes} 分钟</div>
      ) : null}

      <div className="detail-actions">
        {googleMapsUrl ? (
          <a className="button button-primary" href={googleMapsUrl} target="_blank" rel="noreferrer">
            {getGoogleMapsButtonLabel(spot)}
          </a>
        ) : null}
        <SpotStatusButtons
          state={state}
          onToggleVisited={() => onToggleVisited(spot.id)}
          onToggleFavorite={() => onToggleFavorite(spot.id)}
          onToggleWishlist={() => onToggleWishlist(spot.id)}
        />
      </div>

      <BusinessHoursSection hours={spot.businessHours} />
      <SpotNoteEditor spotId={spot.id} />

      {spot.tags?.length ? (
        <section className="detail-section compact-tags">
          <h3>标签</h3>
          <div className="badge-row">
            {spot.tags.map((tag) => (
              <Badge key={tag} tone="gray">
                #{tag}
              </Badge>
            ))}
          </div>
        </section>
      ) : null}

      <section className="detail-section coordinate-status-box">
        <h3>坐标状态</h3>
        <p>{isCoordinateVerified ? "坐标已校对" : "坐标待校对，位置可能不准确"}</p>
        {spot.lastVerifiedAt ? <small>最后校对：{spot.lastVerifiedAt}</small> : null}
        {spot.verificationNote ? <small>{spot.verificationNote}</small> : null}
        {spot.isHiddenByDefault ? <small>默认隐藏，需切换到“全部已校对点”查看。</small> : null}
      </section>
    </Card>
  );
}
