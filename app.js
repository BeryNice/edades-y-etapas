//pedir edad con prompt
var edad = parseInt(prompt("¿Qué edad tienes?"));
console.log(edad);
//clasificar a la persona en

if (edad >1 && edad <= 3 && edad != 0) {
  //toddler 1 a 3 años,
  alert("eres un toddler");
} else if (edad > 3 && edad <=5) {
  //preschooler 3 a 5 años,
  alert("Eres preschooler");
} else if (edad > 5 && edad <=12) {
  //gradeschooler 5 a 12 años,
  alert("Eres gradeschooler");
} else if (edad > 12 && edad <=18) {
  //teenager 12 a 18 años,
  alert("Eres teenager");
} else if (edad > 18 && edad <=21) {
  //young adult and adult 18 a 21 años
  alert("Eres young adult");
} else if (edad >21) {
  // adult +21 años
  alert("Eres adult");
} else {
  alert("No introdujiste tu edad correctamente");
}
