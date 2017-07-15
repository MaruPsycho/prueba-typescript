

abstract class Base implements IObjetoApp
{
    id:number;
}

interface IObjetoApp
{
   id:number; 
}

interface IPersonaBasica
{
    nombre:string;
    apellido1:string;
    apellido2:string;
    nombreCompleto():string;
}

interface IPersonaFiscal extends IPersonaBasica
{
    dni:string;
}

interface IPersonaVirtual
{
    email:string;
}

class Persona extends Base implements IPersonaFiscal,IPersonaVirtual
{
    nombre:string;
    apellido1:string;
    apellido2:string;
    email:string;
    dni:string;
    fechaNacimiento:Date;
    nombreCompleto():string{
        /*let nombreCompleto=`${this.nombre} ${this.apellido1}`;

        if(this.apellido2 != null){
            nombreCompleto=`${nombreCompleto} ${this.apellido2}`;
        }

        return nombreCompleto;*/

        //La mejor manera
        return `${this.nombre+this.id} ${this.apellido1}${this.apellido2?" " + this.apellido2:""}`
    }

    Imprimir():void
    {
            alert(this.nombreCompleto());
    }

}

class Psicologo extends Persona{
    nColegiado:string;

    Imprimir():void
    {
            alert("Hola soy PsicoLco@, "+this.nombreCompleto());
    }
}

class Usuario extends Base{   
    nick:string;
    password:string;
    persona:Persona;
}

let oBase:Base;



let oPsico= new Psicologo();

let Persona1:Persona;
Persona1= new Persona();


oBase=oPsico;


Persona1.nombre="miguelangel";
Persona1.apellido1="delcampo";
Persona1.apellido2="morales";


//alert(Persona1.nombreCompleto());


function MostrarDatos(oPersona:IPersonaBasica)
{
    oPersona.nombreCompleto();
}