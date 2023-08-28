//генерую випадкові числа від 1 до 35(казино)
function generate() {
  return Math.floor(Math.random() * 36 + 1);
}
module.exports = generate;
