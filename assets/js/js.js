

//LA SIGUIENTE FUNCIÓN REALIZA casi TODAS LAS TAREAS
function crearLista(Lista){
	//CREA ELEMENTO UL EN EL HTML
		var nuevaLista = document.createElement('UL');
	//OBTIENE EL NOMBRE DE LA LISTA QUE SE VA A ASIGNAR AL UL
		var nombreDeNuevaLista =document.getElementById("nombreNuevaLista").value;
	//CONVIERTE A TEXTO NODO EL NOMBRE DE LA NUEVA LISTA
		var nodo = document.createTextNode(nombreDeNuevaLista);
	//SE ASIGNA EL NOMBRE DE LA NUEVA LISTA AL ELEMENTO UL COMO CONTENIDO
		nuevaLista.appendChild(nodo);
	//OBTIENE EL LUGAR EN DONDE SE CREARÁ UN ELEMENTO LI NUEVO
		var aquiHareOtraLista = document.getElementById("listasNuevas");
	//ASIGNA LA NUEVA LISTA COMO ELEMENTO HIJO DE UN SECTION CON ID: LISTAS NUEVAS
		aquiHareOtraLista.appendChild(nuevaLista);

//-----------------------------------------------------------------------------------------	

	//Agrega botón para crear un nuevo elemento en la lista
	//Crea un elemento input de tipo botón
		var boton = document.createElement("input");
		boton.type = "button";
	//A nuesttro botón dinámico le asignamos el valor con el nombre que aparecerá dentro del botón
		boton.value= "Agregar elemento";
	//Se creo una clase al botón para darle estilo de apariencia
		boton.className= "botoncito"
	//Se asihgna un evento que realiza la función de crear una etiqueta LI para agregar elementos a la lista
		boton.onclick = function(){
			var elementoLi = document.createElement("LI");
	//Por el método prompt se obtiene el contenido del nuevo elemento
	//Esta solución es temporal, en equipo pensamos resolverlo con input text y cambios de Id.
			var nombreElemento = prompt("Que tarea quieres agregar?");
	//se transforma el nuevo elemento en texto en nodo
			var nodo = document.createTextNode(nombreElemento);
	//Se le asigna su lugar con DOM, como hijo de LI
				elementoLi.appendChild(nodo);
			
			//Agrega todo el elemento Li a la Lista UL
				nuevaLista.appendChild(elementoLi);

//--------------------------------------------------------------------------------------------------
	//BORRAR ELEMENTOS DE LA LISTA
		//Agrega botón de borrar elemento a cada uno de los elementos, borra los elementos y borra el botón. 
			var botonBorrar = document.createElement('input');
				botonBorrar.type = "button";
				botonBorrar.className = "botoncito"
				botonBorrar.value = "x";
			botonBorrar.onclick = function(){
				nuevaLista.removeChild(elementoLi);
				nuevaLista.removeChild(botonBorrar);
			}
		//Agrega el elemento input botón como hijo del elemento UL, variable NUEVA LISTA
			nuevaLista.appendChild(botonBorrar);
		}
		//Agregar boton como nodo de nueva lista
		nuevaLista.appendChild(boton);
		//Botón que borra toda la lista y también el botón.
		var botonBorrarLista = document.createElement("input");
		botonBorrarLista.type = "button";
		botonBorrarLista.className = "botoncito"
		botonBorrarLista.value = "x";
		botonBorrarLista.onclick = function(){
			aquiHareOtraLista.removeChild(nuevaLista);
			aquiHareOtraLista.removeChild(botonBorrarLista);
		}
		nuevaLista.appendChild(botonBorrarLista);
		borrarInput();

		
}
//Esta función vacía el input Agregar nombre de Lista
function borrarInput(){
	var input = document.getElementById("nombreNuevaLista");
	var valor=""
	input.value =valor;
}


