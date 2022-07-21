const parseUser = jsonData => {
  let a;
  try {
    a = JSON.parse(jsonData);
  } catch (err) {
    return null;
  }
  return a;
};
parseUser('{"name":"Tom}');
