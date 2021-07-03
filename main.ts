////https://stackoverflow.com/questions/46991237/how-to-import-json-file-into-a-typescript-file
const searchBar = document.getElementById("barra");
const searchButton = document.getElementById("searchButton");

interface Dog {
  "razza" :string,
  "descrizione":string,
  "luogo":string,
  "temperamento":string
}
const functionFetch= async()=>{
  return await (await fetch("./db.json")).json();
}

var dataFromDatabase = null;

(async ()=>{
  dataFromDatabase = await functionFetch();
})();


searchButton?.addEventListener('click', (event:Event) => {
  event.preventDefault();
  let informazioni:Dog;
  if(dataFromDatabase!== null){
    if(event!=null ){
      let input:HTMLInputElement= searchBar as HTMLInputElement;
      let inputUtente = input.value;
      informazioni = dataFromDatabase.find((element: Dog) => {
        return element.razza.includes(inputUtente);
      })
    }
    const modale = document.createElement("div");
    
    /*modale.innerHTML = `<div class="modal" tabindex="1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${informazioni.razza}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>${informazioni.descrizione + '' + informazioni.temperamento}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
    </div> `*/
    //Inner Template in JavaScript, è una stringa utilizzabile per scrivere pezzi di codice
    modale.innerHTML = `<div class="modal" tabindex="1" role="dialog" style="display: block">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${informazioni.razza}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>${informazioni.descrizione + '\n' + informazioni.temperamento}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`
    document.getElementById("spawnModale").appendChild(modale);
    console.log(informazioni);
  }
});

//ONce è un foreach che fa un break quando trova l'elemente



//JS è asincrono. (esempio gelato: sincrono = do il gelato a tutti e poi mangiano)
//sincrono = do il gelato al primo e inizia a mangiare
//CONCETTO DI PROMISE, è la promessa di ricevere un tipo di dato (non necessariamente specificato) senza sapere quando
//Ma a noi i dati del json servono subito, quindi E' UN MODO PER RENDERE SINCRONO QUESTO PROCESSO

//File System non posso accedere dal client. Questi problemi li hai avuti perché le richieste che abbiamo fatto (require) 
//sono misti back-end/front-end
//USA LA FETCH