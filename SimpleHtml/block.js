window.onload = inicio;
  function inicio ()
   {
    //ESCUCHA EL CLICK EN BTN
    var btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", clickbtnAdd);
    

    var btnclean = document.getElementById("btnclean");
    btnclean.addEventListener("click", clickbtnbtnclean);
    mostrarNota();
    }

    function clickbtnbtnclean() {
      localStorage.clear();
      mostrarNota();
    }
    /*  CADA VEZ QUE SE EJECUTA UNA FUNCION SE DEBE ALMACENAR EN ALGÚN LADO POR ESO
    CREO LA FUNCION PERSONA  QUE IGUALAMOS A UN ARREGLO [] */
    function clickbtnAdd(){
       
      var NotaTxt = document.getElementById("NotaTxt");
      var notas = [];
      if (localStorage.notas) {
        notas= JSON.parse(localStorage.notas);
      }
      notas.push(NotaTxt.value);
      localStorage.notas = JSON.stringify(notas);
       //RENDERIZA LA NOTA
    mostrarNota();
    
}
function mostrarNota (){
     //TRAE EL DIV listNota
  var listNota = document.getElementById("listNota");
  //le asigna las notas al localStorage
  var notas = [];
   if (localStorage.notas) {
    notas= JSON.parse(localStorage.notas);
  }
  var html = " ";
  for (var nota of notas ){
    html += nota + "<br/>";
  }
  listNota.innerHTML = html;
    debugger;
}
