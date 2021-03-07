
function mostrar()
{
	/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/


	let tipo;
	let precio;
	let cantidad;
	let inflamable;
	let marca;

	let contA=0;
	let contI=0;
	let contQ = 0;
	let acumA=0;
	let acumI=0;
	let acumQ=0;
	let promedioA;
	let promedioI;
	let promedioQ;

	let acumIn=0;
	let acumC=0;
	let acumE=0;
	let inflamableMayor;

	let acumIacM=0;

	let precioMayor;
	let tipoM;
	let marcaM;
	let flag = 1;
	


	for(let i = 1; i<=5; i++){
		tipo = prompt("Ingrese tipo de producto alcohol/iac/quat: ").toLowerCase();
		while(tipo!="alcohol" && tipo !="iac" && tipo !="quat"){
			tipo = prompt(" Error: Ingrese tipo de producto alcohol/iac/quat: ").toLowerCase();
		}
		
		precio = parseFloat(prompt("Ingrese precio de producto entre $100 y $300 "));
		while(!(precio>=100 && precio<=300)){
			precio =parseFloat(prompt(" Error: Ingrese precio de producto entre $100 y $300 "));
		}
		
		cantidad = parseInt(prompt("Ingrese cantidad de productos hasta 1000: "));
		while(!(cantidad>0 && cantidad<=1000)){
			cantidad = parseInt(prompt(" Error: Ingrese cant de producto (hasta 1000): "));
		}
		
		inflamable = prompt("Ingrese tipo de inflamable inifugo/combustible/explosivo: ").toLowerCase();
		while(inflamable!="inifugo" && inflamable !="combustible" && inflamable !="explosivo"){
			inflamable = prompt(" Error: Ingrese tipo de inflamable inifugo/combustible/explosivo: ").toLowerCase();
		}
		marca = prompt("Ingrese marca: ");
		


		///A
		if(tipo=="alcohol"){
			contA++;
			acumA+=cantidad;
		} else if(tipo =="iac"){
			contI++;
			acumI+=cantidad;
		}else{
			contQ++;
			acumQ+=cantidad;
		}
		///B

		if(inflamable =="combustible"){
			acumC+=cantidad;
		} else if (inflamable == "explosivo"){
			acumE+=cantidad;
		} else {
			acumIn+=cantidad;
		}

		///C
		if(tipo =="iac" && precio<=200){
			acumIacM+=cantidad;
		}

		///D
		if(flag || precio>precioMayor){
			precioMayor=precio;
			tipoM= tipo;
			marcaM = marca;
			flag=0;
		}

		
	}//fuera del for

	/////A
	if(contQ!=0){
		promedioQ = acumQ/contQ;
	} else{
		promedioQ ="No no agregarcon productos de Quat";
	}

	if(contI!=0){
		promedioI = acumI/contI;
	}else{
		promedioQ ="Invalido, no se  agregaron productos de Iac";
	}

	if (contA!=0){
		promedioA = acumA/contA;
	}else{
		promedioQ ="No no agregarcon productos de Alcohol";
	}

	///B
	if(acumE>acumIn && acumE>acumC){
		inflamableMayor="Explosivo";
	} else if (acumIn>=acumE &&  acumIn>=acumC){
		inflamableMayor="Inifugo";
	} else{
		inflamableMayor="Combustible";
	}




	console.log(`el promedio de los productos de alcohol es ${promedioA} , el de iac es ${promedioI} y el de quat es ${promedioQ}`);
	console.log(`el tipo de inflabamble con mas cantidad de productos es ${inflamableMayor}`);
	console.log(`LA cantidad de unidades compradas de IAC a menos de $200 son: ${acumIacM}`);
	console.log(`El tipo de mayor precio es ${tipoM}, el nombre e la marca es ${marcaM}`);
}