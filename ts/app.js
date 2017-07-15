var Pajareria = (function () {
    function Pajareria(nombrePajareria) {
        this.nombre = nombrePajareria;
    }
    Pajareria.prototype.anadirAnimal = function (oAnimal) {
        if (this.animales == null) {
            this.animales = new Array();
        }
        this.animales.push(oAnimal);
    };
    return Pajareria;
}());
var GritoAnimal = (function () {
    function GritoAnimal() {
    }
    return GritoAnimal;
}());
var Animal = (function () {
    function Animal(nombreOtro, ruidoOtro) {
        this.nombre = nombreOtro;
        this.ruido = new GritoAnimal();
        this.ruido.aullido = ruidoOtro;
    }
    Animal.prototype.gritar = function () {
        alert("el " + this.nombre + " hace " + this.ruido.aullido);
    };
    return Animal;
}());
var oAnimal = new Animal("perro", "guau");
var oAnimalMarino = new Animal("delfin", "ñiiii");
var oBoton = document.createElement("button");
oBoton.type = "button";
oBoton.innerHTML = "Gritaaaa!!";
oBoton.onclick = function () { oAnimal.gritar(); };
document.getElementById("root").appendChild(oBoton);
var oBotonMarino = document.createElement("button");
oBotonMarino.type = "button";
oBotonMarino.innerHTML = "Pececito hace..";
oBotonMarino.onclick = function () { oAnimalMarino.gritar(); };
document.getElementById("root").appendChild(oBotonMarino);
var oPajareria = new Pajareria("Tio Tom");
oPajareria.anadirAnimal(new Animal("PioRojo", "PioPio"));
for (var i = 0; i < 100; i++) {
    var oAnimalFantastico = new Animal("Animal" + i, "GGrrrr" + i);
    oPajareria.anadirAnimal(oAnimalFantastico);
}
for (var i = 0; i < oPajareria.animales.length; i++) {
    MeterAnimal(oPajareria.animales[i]);
}
function MeterAnimal(oAnimal) {
    var oBton = document.createElement("button");
    oBton.type = "button";
    oBton.innerHTML = oAnimal.nombre;
    oBton.onclick = function () { oAnimal.gritar(); };
    document.getElementById("root").appendChild(oBton);
}
