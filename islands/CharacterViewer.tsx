import { FunctionComponent } from "preact";
import { Character } from "../types.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import { getFavorites } from "../utils/cookies.ts";

type Props = {
  characters: Character[];
};

const CharacterViewer: FunctionComponent<Props> = (props) => {
  const characters = props.characters;
  const favorites = getFavorites();
  return (
    <>
      <div class="grid">
        {characters.map((ch) => (
          <CharacterCard
            key={ch.id}
            character={ch}
            favorite={favorites.includes(ch.name) ? true : false}
          />
        ))}
      </div>
    </>
  );
};

export default CharacterViewer;
