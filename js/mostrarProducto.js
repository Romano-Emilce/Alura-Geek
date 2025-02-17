import { conexionApi } from "./api.js";

const lista = document.querySelector("[data-lista]"); //contenedor de los cuadros

function crearCard(id,nombre, precio, imagen){
    //creamos el marco fluor que tendrá el cuadro, titulo y tecnica...
    const card = document.createElement("div");
    card.className="figure";

    //Creamos la estructura dentro del div <<figure_>>



    card.innerHTML=`<figure class=" figure border-radius border bg-color " id="figure_cocodrilo" >
                    <div>
                        <img src="${imagen}" alt="Dibujo de " class=" border border-radius bg-white w-medium">
                    </div>
                    <div class="figure-text">
                        <p class="w-color ibm-plex-mono-regular " id="nombre_mariposa">”${nombre}”</p>
                        <div class="figure-price" id="precio_mariposa">
                            <p class="w-color ibm-plex-mono-bold "> $“${precio}” </p>
                            <button class="bt-eliminar" id="bt-eliminar" data-id="${id}">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 6.00022H16V4.33022C15.9765 3.69004 15.7002 3.08528 15.2315 2.64851C14.7629 2.21174 14.1402 1.97861 13.5 2.00022H10.5C9.85973 1.97861 9.23703 2.21174 8.7684 2.64851C8.29977 3.08528 8.02343 3.69004 7.99997 4.33022V6.00022H2.99997C2.73475 6.00022 2.4804 6.10558 2.29286 6.29311C2.10533 6.48065 1.99997 6.735 1.99997 7.00022C1.99997 7.26544 2.10533 7.51979 2.29286 7.70733C2.4804 7.89486 2.73475 8.00022 2.99997 8.00022H3.99997V19.0002C3.99997 19.7959 4.31604 20.5589 4.87865 21.1215C5.44126 21.6842 6.20432 22.0002 6.99997 22.0002H17C17.7956 22.0002 18.5587 21.6842 19.1213 21.1215C19.6839 20.5589 20 19.7959 20 19.0002V8.00022H21C21.2652 8.00022 21.5195 7.89486 21.7071 7.70733C21.8946 7.51979 22 7.26544 22 7.00022C22 6.735 21.8946 6.48065 21.7071 6.29311C21.5195 6.10558 21.2652 6.00022 21 6.00022ZM9.99997 16.0002C9.99997 16.2654 9.89461 16.5198 9.70708 16.7073C9.51954 16.8949 9.26519 17.0002 8.99997 17.0002C8.73475 17.0002 8.4804 16.8949 8.29286 16.7073C8.10533 16.5198 7.99997 16.2654 7.99997 16.0002V12.0002C7.99997 11.735 8.10533 11.4806 8.29286 11.2931C8.4804 11.1056 8.73475 11.0002 8.99997 11.0002C9.26519 11.0002 9.51954 11.1056 9.70708 11.2931C9.89461 11.4806 9.99997 11.735 9.99997 12.0002V16.0002ZM9.99997 4.33022C9.99997 4.17022 10.21 4.00022 10.5 4.00022H13.5C13.79 4.00022 14 4.17022 14 4.33022V6.00022H9.99997V4.33022ZM16 16.0002C16 16.2654 15.8946 16.5198 15.7071 16.7073C15.5195 16.8949 15.2652 17.0002 15 17.0002C14.7348 17.0002 14.4804 16.8949 14.2929 16.7073C14.1053 16.5198 14 16.2654 14 16.0002V12.0002C14 11.735 14.1053 11.4806 14.2929 11.2931C14.4804 11.1056 14.7348 11.0002 15 11.0002C15.2652 11.0002 15.5195 11.1056 15.7071 11.2931C15.8946 11.4806 16 11.735 16 12.0002V16.0002Z" fill="white"/>
                                </svg>                              
                            </button>
                        </div>
                    </div>
                </figure>`;


    //Código para eliminar un cuadro desde el botón "papelera"
    const botonEliminar =card.querySelector(".bt-eliminar");
    botonEliminar.addEventListener("click", () => {
        conexionApi.borrarProducto(id)
        .then(() => {
            card.remove();
        })
        .catch(err => console.log(err));
    });

    lista.appendChild(card);
    return card;
}

const producto= async () => {
    try{
        const listaApi= await conexionApi.listarProductos()

        listaApi.forEach(card => {
            lista.appendChild(
                crearCard(
                    card.id,
                    card.nombre,
                    card.precio,
                    card.imagen)
                );
    });

    } catch(error) {
        console.log(error)
    };

};

producto()
