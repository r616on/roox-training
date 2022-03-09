export const getItems = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return await res.json();
};
export const getFullPeole = async (id: string) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}/`);
  return await res.json();
};
