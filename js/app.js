
//console.log("hola")

const arrayGeneral = ["zapatos", "pantalones", "buzos"]

let zapatos =
    // cantidad objetos 6
    [
        { id: 10, nombre: "zapatos Enzo Bonafé", categoria: "casual", precio: 14150, marca: "Enzo Bonafé", color: "marron", imagen: "http://drive.google.com/uc?export=view&id=1nomq9AHEnzqzUQpRcUlDZyLcbmDZ55O9" },
        { id: 11, nombre: "zapatos Enzo Bonafé", categoria: "casual", precio: 19000, marca: "Enzo Bonafé", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1rfTS9VS7Ee0Yze-2CdmL7ZBjfj0DsXu8" },
        { id: 12, nombre: "zapatos Enzo Bonafé", categoria: "casual", precio: 17200, marca: "Enzo Bonafé", color: "marron", imagen: "http://drive.google.com/uc?export=view&id=1GI4pUClimFcBZNAhnpJb_nxCKch731a7" },
        { id: 13, nombre: "zapatos Santoni", categoria: "salir", precio: 18000, marca: "Santoni", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1WEOmqcywddLSPeEkPiro07Drm8lb_Vph" },
        { id: 14, nombre: "zapatos Santoni", categoria: "salir", precio: 19550, marca: "Santoni", color: "marron", imagen: "http://drive.google.com/uc?export=view&id=12zWjlUWaUz5TY6MvoGXHxjICouMvb55L" },
        { id: 15, nombre: "zapatos Santoni", categoria: "salir", precio: 18600, marca: "Santoni", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1nwRAPphrk85AzZUUob9LKGNg3F9qn_nd" }
    ]

let pantalones =
    // cantidad objetos 8
    [
        { id: 20, nombre: "gabardina", categoria: "vestir", precio: 13150, marca: "Tommy Hilfiger", color: "azul oscuro", imagen: "http://drive.google.com/uc?export=view&id=1o0XZ0FaCds_eibBaXabIYxPgSeD0dUvS" },
        { id: 21, nombre: "gabardina", categoria: "vestir", precio: 13000, marca: "Tommy Hilfiger", color: "beige", imagen: "http://drive.google.com/uc?export=view&id=1ApQ7Q1P0V-CvI2q_BQnk7KqzwPqzQgVF" },
        { id: 22, nombre: "gabardina", categoria: "vestir", precio: 13200, marca: "Tommy Hilfiger", color: "gris oscuro", imagen: "http://drive.google.com/uc?export=view&id=1x5IunsOrI_XT9QnkUoHw08So2gcpmPX9" },
        { id: 23, nombre: "gabardina", categoria: "vestir", precio: 14000, marca: "Tommy Hilfiger", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1dC0Fcx7_inIBsrEe75079hozlOoMSTcw" },
        { id: 24, nombre: "jeans", categoria: "diario", precio: 20550, marca: "Levi's", color: "azul petroleo", imagen: "http://drive.google.com/uc?export=view&id=1rX9D4bkz9DglwJXkrfFRcY5FUU1B3_r1" },
        { id: 25, nombre: "jeans", categoria: "diario", precio: 24600, marca: "Levi's", color: "celeste", imagen: "http://drive.google.com/uc?export=view&id=1wVEu2Ktnl3NG-nD8IQiat7dYKmCip5wQ" },
        { id: 26, nombre: "jeans", categoria: "diario", precio: 25550, marca: "Levi's", color: "azul", imagen: "http://drive.google.com/uc?export=view&id=1iwPs4KC6UAFlB6keoSr6vhVSBt4opXWm" },
        { id: 27, nombre: "jeans", categoria: "diario", precio: 27600, marca: "Levi's", color: "gris oscuro", imagen: "http://drive.google.com/uc?export=view&id=1as7T0t81jZ9akxAlzb53TRhJ-zeSBgT3" }
 
    ]

let buzos =
    // cantidad objetos 7
    [
        { id: 30, nombre: "buzo canguro", categoria: "vestir", precio: 13150, marca: "adidas", color: "blanco", imagen: "http://drive.google.com/uc?export=view&id=1ZWcsDK6hYIydMAll6y0gO5J4YEmpKScm" },
        { id: 31, nombre: "buzo canguro", categoria: "vestir", precio: 13000, marca: "adidas", color: "gris", imagen: "http://drive.google.com/uc?export=view&id=1MMuARsjcyoMT0zTZks1jzHkGIiL-EpcB" },
        { id: 32, nombre: "buzo canguro", categoria: "vestir", precio: 13200, marca: "adidas", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=12k8x9wKxP5nKNjOtxStTVFq4lqC0IfQL" },
        { id: 33, nombre: "garbardina", categoria: "vestir", precio: 14000, marca: "nike", color: "azul", imagen: "http://drive.google.com/uc?export=view&id=13B-MgNeqcHuNG_g8F7dYKzS-iHuEC976" },
        { id: 34, nombre: "jeans", categoria: "diario", precio: 20550, marca: "nike", color: "blanco", imagen: "http://drive.google.com/uc?export=view&id=1cpGJ3qHTUvdPCLERsNHmwXL0cEic5p-2" },
        { id: 35, nombre: "jeans", categoria: "diario", precio: 24600, marca: "nike", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1JPNLGxk-TMjrkrLn7u_EWLiIX0pP4d2t" },
        { id: 36, nombre: "jeans", categoria: "diario", precio: 25550, marca: "nike", color: "rojo", imagen: "http://drive.google.com/uc?export=view&id=1cpGJ3qHTUvdPCLERsNHmwXL0cEic5p-2" },
    ]

let contenedorRenderCarrito=document.getElementById("contenedorRenderCarrito")
let contenedoRender = document.getElementById("contenedoRender")

let filtroZapatos = document.getElementById("zapatos")
let filtroPantalones = document.getElementById("pantalones")
let filtroBuzos = document.getElementById("buzos")

filtroZapatos.addEventListener("click", seleccionarArrayProductos)
filtroPantalones.addEventListener("click", seleccionarArrayProductos)
filtroBuzos.addEventListener("click", seleccionarArrayProductos)



function seleccionarArrayProductos(e) {
    let inicial = arrayGeneral.find(elemento => elemento == e.target.id)
    
    switch (inicial) {
        case "zapatos":
            renderizarContenedor(zapatos)
            console.log(inicial)
            break;
        case "pantalones":
            renderizarContenedor(pantalones)
            console.log(inicial)
            break;
        case "buzos":
            renderizarContenedor(buzos)
            console.log(buzos)
            break;
        default:
    }

}

function renderizarContenedor(arrayDeProductos) {
contenedoRender.innerHTML=""
    for (const producto of arrayDeProductos) {
        let tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = `
        <h3>${producto.nombre}</h3>
        <h4>$${producto.precio}</h4>
        <h4>${producto.marca}</h4>
        <h4>${producto.color}</h4>
        <img src=${producto.imagen}>
       <button class="agreCarrito"id= ${producto.id}>Agregar al Carrito</button>
        `
        contenedoRender.appendChild(tarjeta)
    }
    // let botones = document.getElementsByClassName("agreCarrito")
    // for (const agreCarrito of botones){
    //     agreCarrito.addEventListener("click",agregarCarrito)
    // }

}

// function agregarCarrito(event){
//     let productoBuscado=
// }