function mostrar()
{
/*debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/
	
///juli
	let nombre;
	let estado;
	let edad;
	let temperatura;
	let sexo;
	let respuesta;
	let precio = 600;

	let contViudosM=0;

	let flagM=1;
	let edadMasJoven;
	let nombreMasJoven;

	let contPasajeros=1;
	let precioFinal;

	let precioMayoresFinal;
	let contMayores60=0;

	do{

		nombre = prompt("Ingrese nombre: ").toLowerCase();

		sexo = prompt("Ingrese sexo: femenino/masculino ").toLowerCase();
		while(sexo!="femenino" && sexo !="masculino"){
			sexo = prompt(" Error: Ingrese sexo: femenino/masculino").toLowerCase();
		}

		estado = prompt("ingrese estado civil: soltero/casado/viudo");
		while(estado!="soltero" && estado !="viudo" && estado!="casado"){
			sexo = prompt(" Error: Ingrese estado civil valido: soltero/casado/viudo").toLowerCase();
		}

		edad = parseInt(prompt("Ingrese edad:"));
		while(isNaN(edad) || edad<17){
			edad =parseInt(prompt(" Error: Ingrese edad"));
		}

		temperatura = parseInt(prompt("Ingrese temperatura:"));
		while(isNaN(temperatura) || temperatura<0){
			temperatura =parseInt(prompt(" Error: Ingrese temperatura valida "));

			
		}

		//a) La cantidad de personas con estado "viudo" de mas de 60 años.

		if(estado =="viudo" && edad>60){
			contViudosM++;
		}

		//b) el nombre y edad de la mujer soltera mas joven.
		if(sexo=="femenino" && estado =="soltero" && (flagM || edad<edadMasJoven)){
			edadMasJoven=edad;
			nombreMasJoven=nombre;
			flag=0;
		}

		//c
		contPasajeros++;
		//d
		contMayores60++;

		

		respuesta = prompt("Desea ingresar mas pasajeros?: si/no");
	}while(respuesta =="si");

	//c) cuanto sale el viaje total sin descuento.
	
	precioFinal = contPasajeros*precio;

	//d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , 
	//el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

	if(contMayores60>(contPasajeros/2)){
		precioMayoresFinal = precioFinal*0.75;
		console.log(`El precio final por tener mas de la mitad de pasajeros mayores a 60 años es: $ ${precioMayoresFinal}`);
	} else{
		console.log("No hay mas del 50% de mayores de 60 años");
	}




	console.log(`La cantidad de personas viudas mayores a 60 años es ${contViudosM}`);
	console.log(`El nombre de la mujer soltera y mas joven es ${nombreMasJoven}`);
	console.log(`El precio final del viaje es de ${precioFinal}`);
	//console.log(`El precio final por tener mas de la mitad de pasajeros mayores a 60 años es: $ ${precioMayoresFinal}`);
}
