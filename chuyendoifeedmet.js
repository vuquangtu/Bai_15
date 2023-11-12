let inPutfooT = +prompt("nhap gia tri Foot");
let inPutmeter = +prompt("nhap gia tri met");
function footTomet(foot) {
  let meter = 0.305 * foot;
  return meter;
}
function meterToFoot(meter) {
  let foot = 3.279 * meter;
  return foot;
}
document.write("gia tri chuyen sang met la =" + footTomet(inPutfooT) + "<br>");
document.write("gia tri chuyen sang foot la = " + meterToFoot(inPutmeter));
