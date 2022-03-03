export const getItems = async () => {
  const res = await fetch(" https://swapi.dev/api/people/");
  return await res.json();
};
