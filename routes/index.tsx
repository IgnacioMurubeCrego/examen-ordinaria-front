/*
Muestra la lista completa de personajes.
Cada personaje debe tener un botón o icono para marcarlo o desmascarlo como favorito (FAV).
Al marcarlo, la estrella se vuelve amarilla.
El nombre o imagen del personaje debe enlazar a su página de detalle.
*/

import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterViewer from "../islands/CharacterViewer.tsx";
import { Character } from "../types.ts";

type Props = {
  characters: Character[];
};

export const handler: Handlers = {
  GET: (_req: Request, ctx: FreshContext) => {
    return ctx.render(ctx.state.characters);
  },
};

const Home = (props: PageProps<Character[]>) => {
  const characters = props.data;
  return <CharacterViewer characters={characters} />;
};
export default Home;
