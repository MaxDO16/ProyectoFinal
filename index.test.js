const fs = require("fs");
const path = require("path");

test('La página debe contener "Hola Mundo"', () => {
  const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");
  expect(html).toContain("<h1>Hola Mundo</h1>");
});

//http://localhost:8080 DIRECCION PARA EL HOLA MUNDO