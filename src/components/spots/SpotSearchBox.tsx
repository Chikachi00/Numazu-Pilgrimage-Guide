interface SpotSearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export function SpotSearchBox({ value, onChange }: SpotSearchBoxProps) {
  return (
    <label className="search-box">
      <span>搜索点位</span>
      <input
        type="search"
        value={value}
        placeholder="输入地点、标签或简介关键词"
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
