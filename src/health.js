export function sortHealth(heroes) {
  let result = [];
  result = heroes.sort((a, b) => b.health - a.health);
  return result;
}
