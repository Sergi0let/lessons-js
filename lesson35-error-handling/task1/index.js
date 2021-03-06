window.addEventListener('error', function onUnhandledError(e) {
  console.log(e);
});

try {
  const jsonString = '{"name":"Tom"'; // invalid JSON
  throw new ReferenceError();
  const userData = JSON.parse(jsonString);
  console.log(userData);
} catch (err) {
  if (err instanceof SyntaxError) {
    console.error('Handled');
  } else {
    throw err;
  }
} finally {
  console.log('Some actions');
}
