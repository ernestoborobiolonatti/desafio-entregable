let nombre = prompt("BIENVENIDO - Ingrese su nombre por favor");
let apellido = prompt("Ahora ingrese su apellido");
let edad = prompt("Ingresa tu edad");

if (edad >= "18") {
  alert("Login correcto, Bienvenido " + nombre + " " + apellido + "...");
} else {
  alert("LOGIN INCORRECTO!, debes ser mayor de edad para acceder al sitio...");
}
