export type CardType = {
  id: number | string;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image: string;
  url?: string;
  created?: string;
};
