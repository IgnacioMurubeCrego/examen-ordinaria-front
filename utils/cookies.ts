export const setCookie = (name: string, value: string) => {
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    .toUTCString();
  document.cookie = `${name}=${
    encodeURIComponent(value)
  };expires=${expires};path=/`;
};

export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const cookies = document.cookie ? document.cookie.split(";") : [];
  const cookie = cookies.find((c) => c.trim().startsWith(name + "="));
  return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
};

export const getFavorites = (): string[] => {
  const raw = getCookie("favorites");
  try {
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const toggleFavorites = (name: string) => {
  const favorites = getFavorites();
  const index = favorites.indexOf(name);
  if (index >= 0) {
    favorites.splice(index, 1); //remove
  } else {
    favorites.push(name); //add
  }
  setCookie("favorites", JSON.stringify(favorites));
};
