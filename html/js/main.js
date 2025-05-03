console.log("Este es un script externo");

const preCards = document.querySelectorAll('.col'); //because they are classes 
const URLMain = "https://api.escuelajs.co/api/v1/products"


window.addEventListener("load", function (event) {
    console.log("Se termino de cargar la pagina");
    // let txtNombre= document.getElementById("txtNombre");
    // let btnMostrar = document.getElementById("btnMostrar");

    btnMostrar.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("yei you clicked");

        getData("");

        // inputName=txtNombre.value
        // localStorage.setItem( "name",inputName)
    }); //btn mostrar
}); //load 



function getData(cat){
const options = { "method": "GET" };

fetch(URLMain, options)
    .then((response) => {
        console.log("This is the response" + response); //The response object contains metadata about the server's reply (status code, headers, etc.), not the actual data.
        response.json().then((res) => {      //The json() method of the Request interface reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON.
            // console.log(res.length);
            // console.log(res[0].title);
            console.log(res);
        createCards(res);
        });
    })
    .catch((err) => {
        main.insertAdjacentHTML("beforeend",
            `<div class="alert alert-danger" role="alert">
    ${err.message}
</div>`);
    });
} //getData



function createCards(prods) {
    // mainProds.innerHTML = "";
    //tooman 20 productos y los mandes a imprimir en tu main
    //puedo imprimir uno y despues mandar los demas y adjacentHTML
    // for (//inicio//condicion//contador)

    console.log("CreateCards Begins");

    console.log(preCards);
    
    preCards.forEach((element, index) => {
      const cardText = element.querySelector('.card-text');
      if (cardText){
        cardText.innerText= `${index} ${prods[index].description}`
      };
    });
    };
    // preCards.forEach(element => {
      

    //   console.log("this is the begiining forEach");
    //   console.log(element);
    //   const cardText = document.querySelector(".card-text");
    //   // console.log(cardText+ "dfjkdfjksbfjsbjfksdbjk");
    //   cardText.textContent= "GGGOOOGOGOGO";
      
    //   // for (i=1;i<=9;i++){
    //   // };

    // });

  // recorrer las cards que estan en el DOM. talvez un getelementbyTagName - o un getqueryall  y luego un for de 1 a 9;
  // anexando prods[i].title.innerTEXT


    // for (let i = 0; i < prods.length; i++) {
      //     // main.insertAdjacentHTML("beforeend", `<p>Hello</p>`)
      //     console.log(prods[i].title)
      
      //     const modalId = `ExampleModal-${i}`;
      
      //     console.log(prods[i].image)
      //     mainProds.insertAdjacentHTML("beforeend", `<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      //     <div class="col">
      //       <div class="card shadow-sm">
      //         <img src="${prods[i].image}" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>${prods[i].title}</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
      //         <div class="card-body">
      //           <p class="card-text"> ${prods[i].description}.</p>
      //           <div class="d-flex justify-content-between align-items-center">
      //             <div class="btn-group">
      //               <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
      //               <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
      //             </div>
      //             <small class="text-body-secondary">$ price</small>
      //           </div>
      //         </div>
      //       </div>`
      
      //       )
      
      //     // console.log(prods[i].title)
      // }
      
      // console.log("CreateCards ends")
// };



// `
// <div class="card" style="width: 18rem;">
// <img src="${prods[i].image}" class="card-img-top" alt="${prods[i].title}" style="height:300px; object-fit:contain;">
// <div class="card-body">
// <h5 class="card-title">${prods[i].title}</h5>
// <p class="card-text">${prods[i].description.slice(0, 50)} y el precio es $ ${prods[i].price}</p>
// <a href="#" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#${modalId}">Abrir Modal (Saber mas del producto)</a>
// <!-- Modal -->
// <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div class="modal-dialog">
//     <div class="modal-content">
//     <div class="modal-header">
//         <h1 class="modal-title fs-5" id="modalTitle-${i}">${prods[i].title}</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//     </div>
//     <div class="modal-body">
//     ${prods[i].description} <b><br>Precio==$${prods[i].price}</b>
//     </div>
//     <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Comprarlo $_$</button>
//     </div>
//     </div>
// </div>
// </div>
// </div>
// </div>
// `