import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterViewer from "../islands/CharacterViewer.tsx";
import { getFavorites } from "../utils/cookies.ts";
import { Character } from "../types.ts";

export const handler: Handlers = {
  GET: (_req: Request, ctx: FreshContext) => {
    const characters: Character[] = ctx.state.characters as Character[];
    const favorites: string[] = getFavorites();
    console.log("Favorites: " + favorites);
    const favoriteCharacters: Character[] = characters.filter((ch) =>
      favorites.includes(ch.name)
    );
    return ctx.render(favoriteCharacters);
  },
};

const favorites = (props: PageProps<Character[]>) => {
  const characters = props.data;
  return (
    <>
      <CharacterViewer characters={characters} />
    </>
  );
};
export default favorites;
