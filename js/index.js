// URL del servicio JSON
const url =
  "https://my-json-server.typicode.com/lobo-anibal/apis-json-archive/db";

// Utilizamos fetch para hacer la solicitud GET al servicio JSON
fetch(url)
  .then((response) => {
    // Comprobar si la respuesta es exitosa (código de respuesta HTTP 200)
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    // Parsear la respuesta JSON
    return response.json();
  })
  .then((data) => {
    // Los datos JSON están disponibles aquí y aqui va el codigo para trabajar
    console.log(data);
    let aux = "";
    for (let i = 0; i < data.productos.length; i++) {
      // console.log(`Cantidad del producto ${i}`);
      aux += `
            <div class="tarjetaP"> 
            <h6>${data.productos[i].nombre}</h6>
            <img src="${data.productos[i]["imagen-del-producto"]}" alt="${data.productos[i].nombre}" />
            <h6>${data.productos[i].precio}</h6>
            <h6>${data.productos[i].descripcion}</h6>
            </div>
         `;
    }
    document.getElementById("data").innerHTML = aux;
  })
  .catch((error) => {
    console.error("Hubo un error:", error);
  });


let encabezado="";

encabezado=`
<div class="menu">
                <div class="menu-left">
                    <img src="./img/logo.png" alt="">
                </div>
                <nav class="menu-right">
                    <a href="#">Inicio</a>
                    <a href="#quienes-somos">Quienes Somos</a>
                    <a href="#Servicios">Servicios</a>
                    <a href="#Asesoramiento">Asesoramientos</a>
                    <a href="#Contacto">Contacto</a>
                </nav>
            </div>
            <section class="textos-header">
                <h1>Brindamos Soluciones para tu Empresa</h1>
                <h2> Soporte IT </h2>
            </section>
            <div class="wave" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150"
                    preserveAspectRatio="none" style="height: 100%; width: 100%;">
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style="stroke: none; fill: #fff;"></path>
                </svg></div>

`
document.querySelector(".encabezado").innerHTML=encabezado;