export interface TopAnimes {
  top: number;
  name: string;
  sinopsis: string;
  content: string;
  img: string;
  fechaEstreno: Date;
  rating?: number;
  episodes?: number;
  genre?: string;
}
