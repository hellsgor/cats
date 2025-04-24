const BASE_URL = "https://api.thecatapi.com/v1/images";

export type CatDto = {
  id: string;
  url: string;
  width?: string;
  height?: string;
};

export const catsApi = {
  getRandomCat: async ({ signal }: { signal: AbortSignal }) => {
    return fetch(`${BASE_URL}/search`, { signal }).then(
      (response) => response.json() as Promise<CatDto[]>,
    );
  },
};
