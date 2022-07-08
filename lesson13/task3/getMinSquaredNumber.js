export default (arr) => {
  if (arr.length === 0 || !Array.isArray(arr)) return null;
  return Math.min(...arr.map((num) => num * num));
};
