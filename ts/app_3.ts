/*class GritoAnimal{
    aullido:string;
    intensidad:number;

}


class Animal
{
    nombre:string;
    apodo:string;
    numPatas:number;
    ruido:GritoAnimal;

    constructor(nombreOtro:string, ruidoOtro:string){
        this.nombre=nombreOtro;

        this.ruido=new GritoAnimal();
        this.ruido.aullido=ruidoOtro;

    }
    
    gritar():void
    {
        alert("el "+this.nombre+ " hace "+ this.ruido.aullido)
    }

}

    let oAnimal = new Animal("perro", "guau");
    let oAnimalMarino = new Animal("delfin", "ñiiii");
    
    let oBoton= document.createElement("button");
    oBoton.type="button";
    oBoton.innerHTML="Gritaaaa!!";
    oBoton.onclick= function(){ oAnimal.gritar()};

    document.getElementById("root").appendChild(oBoton);

    let oBotonMarino=document.createElement("button");
    oBotonMarino.type="button";
    oBotonMarino.innerHTML="Pececito hace..";
    oBotonMarino.onclick=function(){oAnimalMarino.gritar()};

    document.getElementById("root").appendChild(oBotonMarino);*/