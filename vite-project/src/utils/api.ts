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
