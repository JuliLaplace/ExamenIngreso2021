function mostrar()
{
   /*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
  nombre
  Tipo curasada("libre";"presencial";"remota")
  cantidad de materias( mas de cero y menos de 8)
  Sexo ( femenino , masculino , no binario)
  Nota promedio (entre 0 y 10)
  edad (validar)
  e debe informar de existir, o informar que no existe , en el caso que corresponda.
  a) El nombre del mejor promedio que no sea masculino
  b) El nombre del mas joven de los alumnos entre los que la dan libre
  c) El promedio de nota por sexo
  d) La edad y nombre del que cursa mas mas materias que no sean en forma remota*/
  let nombre;
  let cursada;
  let sexo;
  let nota;
  let edad;
  let respuesta;
  let cantidad;

  let mejorProm;
  let nombreMejorProm;
  let flagProm =1;

  let flagEdad=1;
  let nombreJovenL;
  let edadJovenLibre;

  let contF=0;
  let contM=0;
  let contNB=0;
  let acumNotasM=0;
  let acumNotasF=0;
  let acumNotasNB=0;
  let promedioF;
  let promedioM;
  let promedioNB;

  let nombreMasMaterias;
  let edadMasMaterias;
  let maxMaterias;
  let flagMaterias=1;




  do{
    nombre = prompt("Ingrese nombre: ").toLowerCase();
		
    cursada = prompt("Ingrese cursada libre/presencial/remota: ").toLowerCase();
		while(cursada!="libre" && cursada !="presencial" && cursada !="remota"){
			cursada = prompt(" Error: Ingrese cursada libre/presencial/remota:  ").toLowerCase();
		}

    sexo = prompt("Ingrese sexo: femenino/masculino/nobinario ").toLowerCase();
		while(sexo!="femenino" && sexo !="masculino" && sexo !="nobinario"){
			sexo = prompt(" Error: Ingrese sexo: femenino/masculino/nobinario").toLowerCase();
		}
				
		nota = parseInt(prompt("Ingrese nota entre 0 y 10 "));
		while(!(nota>=0 && nota<=10)){
			nota =parseInt(prompt(" Error: Ingrese nota entre 0 y 10 "));
		}

    cantidad = parseInt(prompt("Ingrese cantidad de materias entre 0 y 8 "));
		while(!(cantidad>=0 && cantidad<=8)){
			cantidad =parseInt(prompt(" Error: Ingrese cantidad de materias entre 0 y 8"));
		}

    edad = parseInt(prompt("Ingrese edad:"));
		while(isNaN(edad)){
			edad =parseInt(prompt(" Error: Ingrese nota entre 0 y 10 "));
		}

    //A
    if(sexo !="masculino" && (flagProm || nota>mejorProm)){
      mejorProm = nota;
      nombreMejorProm=nombre;
      flagProm=0;
    }

    //B
    if(cursada=="libre" && (flagEdad || edad>edadJovenLibre)){
      edadJovenLibre = edad;
      nombreJovenL=nombre;
      flagProm=0;
    }
    
    //C
    if(sexo =="masculino"){
      acumNotasM+=nota;
      contM++;
    } else if (sexo == "nobinario"){
      acumNotasNB+=nota;
      contNB++;
    }else {
      acumNotasF+=nota;
      contF++;
    }

    //D
    if(cursada != "remota" && (flagMaterias || cantidad>maxMaterias)){
      nombreMasMaterias = nombre;
      edadMasMaterias=edad;
      maxMaterias=cantidad;
      flagMaterias =0;
    }


    respuesta = prompt("Desea cargar mas datos? si/no: ")
  } while(respuesta =="si");

    if(contM!=0){
      promedioM = acumNotasM / contM;
    }else{
      promedioM = "No se ingresaron notas de personas masculinas";
    }

    if(contF!=0){
      promedioF = acumNotasF / contF;
    }else{
      promedioF = "No se ingresaron notas de personas femeninas";
    }

    if(contNB!=0){
      promedioNB = acumNotasNB / contNB;
    }else{
      promedioNB = "No se ingresaron notas de personas no binarias";
    }

  console.log(`El nombre de la persona con mejor promedio y no masculino es ${nombreMejorProm}`)
  console.log(`El nombre de la persona mas joven que da la materia libre es ${nombreJovenL}`)
  console.log(`El promedio de notas de mujeres es ${promedioF}, el promedio de notas de masculinos es: ${promedioM} y el promedio de notas no binarias es ${promedioNB}`)
  console.log(`El nombre de la persona que cursa mas materias es ${nombreMasMaterias} y su edad es de ${edadMasMaterias} años`)
}
