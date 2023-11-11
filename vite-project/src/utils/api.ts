import { BASE_URL } from "../BASE_URL";

export const getCharacter = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const { image, name, status, species, gender, location } =
      await response.json();
    return { image, name, status, species, gender, location };
  } catch {
    return;
  }
};

export const getAllCharacters = async (currentPage: number) => {
  try {
    const response = await fetch(`${BASE_URL}/?page=${currentPage}`);

    const { results, info } = await response.json();
    return { results, info };
  } catch {
    return;
  }
};

export const searchCharacter = async (queryParam: string) => {
  try {
    const response = await fetch(`${BASE_URL}?name=${queryParam}`);

    const { results, info } = await response.json();
    return { results, info };
  } catch {
    return;
  }
};
