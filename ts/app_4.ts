class Pajareria{
    nombre:string;
    direccion:string;
    animales:Array<Animal>;
    constructor(nombrePajareria:string){
        this.nombre=nombrePajareria;
    }
    anadirAnimal(oAnimal:Animal)
    {
        if(this.animales==null)
        {
            this.animales=new Array<Animal>();
        }
        this.animales.push(oAnimal);
    }
}

class GritoAnimal{
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

    document.getElementById("root").appendChild(oBotonMarino);



    let oPajareria=new Pajareria("Tio Tom");
    oPajareria.anadirAnimal(new Animal("PioRojo","PioPio"));

    for(let i=0;i<100;i++)
    {
        let oAnimalFantastico=new Animal("Animal"+i,"GGrrrr"+i);
        oPajareria.anadirAnimal(oAnimalFantastico);
    }

    for(let i=0;i<oPajareria.animales.length;i++)
    {
        MeterAnimal(oPajareria.animales[i]);
    }

    function MeterAnimal(oAnimal:Animal)
    {
    let oBton=document.createElement("button");
    oBton.type="button";
    oBton.innerHTML=oAnimal.nombre;
    oBton.onclick=function(){oAnimal.gritar()};

    document.getElementById("root").appendChild(oBton);
    }