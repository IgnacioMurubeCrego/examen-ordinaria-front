import { FunctionComponent } from "preact";
import { Character } from "../types.ts";
import { toggleFavorites } from "../utils/cookies.ts";
import { useState } from "preact/hooks";

type Props = {
  character: Character;
  favorite: boolean;
};

const CharacterCard: FunctionComponent<Props> = (props: Props) => {
  const [favorite, setFavorite] = useState<boolean>(props.favorite);
  const character = props.character;
  return (
    <>
      <div class="card">
        <a href={`/characters/${character.id}`}>
          <img
            src={character.image ??
              "static\no-image.jpg"}
            alt={character.name}
          />
        </a>
        <div class="card-info">
          <a class="name" href={`/characters/${character.id}`}>
            {character.name}
          </a>
          <span
            class={favorite ? "yellowStar" : "star"}
            onClick={(_e) => {
              toggleFavorites(character.name);
              setFavorite(!favorite);
            }}
          >
            ★
          </span>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
