console.log("Hello Node js package");
// npm i randomcolor
const randomColor = require("randomcolor"); // import the script
// npm i 를 통해 다운로드받은 외부 모듈은 경로를 명시할 필요 없음

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);
