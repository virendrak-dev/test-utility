function formatDate(date) {
  return new Date(date).toISOString().split("T")[0];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function test_method(str) {
  return 'test_method';
}

module.exports = { formatDate, capitalize, test_method };
