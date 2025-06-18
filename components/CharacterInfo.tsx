import { FunctionComponent } from "preact";
import { Character } from "../types.ts";

type Props = {
  character: Character;
};

const CharacterInfo: FunctionComponent<Props> = (props: Props) => {
  const character = props.character;
  return (
    <>
      <div class="detail">
        <img src={character.image} alt={character.name} />
        <p>Casa : {character.house}</p>
        <p>{character.alive ? "Vivo" : "Muerto"}</p>
        <a href="/">Volver</a>
      </div>
    </>
  );
};

export default CharacterInfo;
