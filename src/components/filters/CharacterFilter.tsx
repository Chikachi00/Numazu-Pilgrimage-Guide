import { characterLabels } from "../../data/labels";
import type { Character } from "../../types/spot";
import { Button } from "../ui/Button";

const characters = Object.keys(characterLabels) as Character[];

interface CharacterFilterProps {
  selectedCharacters: Character[];
  onToggle: (character: Character) => void;
}

export function CharacterFilter({ selectedCharacters, onToggle }: CharacterFilterProps) {
  return (
    <div className="filter-group">
      <h3>角色</h3>
      <div className="chip-row">
        {characters.map((character) => (
          <Button
            key={character}
            isActive={selectedCharacters.includes(character)}
            onClick={() => onToggle(character)}
          >
            {characterLabels[character]}
          </Button>
        ))}
      </div>
    </div>
  );
}
