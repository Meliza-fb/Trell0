function trello(){
  var container=document.getElementById('container');
  //creo un boton y un input al hacer click//
  var btn= document.createElement('button');
  var input= document.createElement('input');
  //guardo el texto//
  var nodoText= document.createTextNode('Guardar');


  //atributos//
  input.setAttribute('id', 'valor');

//nodos//
  btn.appendChild(nodoText);
  container.appendChild(btn);
  container.appendChild(input);

//creo un evento al boton guardar al hacer click esto se guarde o publique mas abajo//
  btn.addEventListener('click', function(){

  //rescato el valor de input para que se guarde//

  var list= document.getElementById('valor').value;
  document.getElementById('valor').value="";

  var contiene=document.getElementById('contiene');
  var parrafo=document.createElement('p');
  var textNuevo=document.createTextNode(list);
  var add=document.createElement('a');
  add.setAttribute('href', '#');

  var textAdd=document.createTextNode('Añadir Tarjeta');


  parrafo.appendChild(textNuevo);
  contiene.appendChild(parrafo);
  add.appendChild(textAdd);
  contiene.appendChild(add);

  add.addEventListener('click', function(){

    var textarea=document.createElement('textarea');
    var add=document.createElement('a');
    add.setAttribute('href', '#');
    var textAdd=document.createTextNode('Añadir Tarjeta');
    add.appendChild(textAdd);
    contiene.appendChild(textarea);
    contiene.appendChild(add);




  })
})


}
