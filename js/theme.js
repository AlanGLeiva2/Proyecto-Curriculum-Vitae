  //Cambiar de color
  function darkmode(){
    const body = document.body;
    body.classList.toggle('darkmode');
    let body_tema=document.getElementsByClassName("darkmode");

    if (body_tema.length==1){
      localStorage.setItem("tema-pagina", "dark");
    }
    else
    {
      localStorage.setItem("tema-pagina", "light");
    }
}