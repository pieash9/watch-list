interface Character {
  name: string;
}
export interface WATCH_LIST {
  image?: string | undefined;
  name: string;
  air_date: string;
  episode: string;
  added_date?: string;
  id: string;
  characters?: Character[];
}

export interface themeState {
  mode: "dark" | "light";
}

export interface MovieModalType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  episode: WATCH_LIST;
  image: string | undefined;
}
