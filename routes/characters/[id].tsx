import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Character } from "../../types.ts";
import CharacterInfo from "../../components/CharacterInfo.tsx";

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    //const id = url.searchParams.get("id");
    const id = url.toString().split("/")[4];
    const characters: Character[] = ctx.state.characters as Character[];
    const character = characters.filter((ch) => ch.id === id)[0];
    return ctx.render(character);
  },
};

const InfoPage = (props: PageProps<Character>) => {
  const character = props.data;
  return (
    <>
      <CharacterInfo character={character} />
    </>
  );
};

export default InfoPage;
