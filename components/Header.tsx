import { FunctionComponent } from "preact";

const Header: FunctionComponent = () => {
  return (
    <>
      <div class="header">
        <a href="/">Todos</a>
        <a href="/favorites">Favoritos</a>
      </div>
    </>
  );
};

export default Header;
