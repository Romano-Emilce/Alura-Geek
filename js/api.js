async function listarProductos(){
    const conexion = await fetch("http://localhost:3000/productos");
    const conexionConvertida=conexion.json();
    return conexionConvertida;
};

async function enviarCuadro(titulo, tecnica, imagen){
    return await fetch("https://alura-geek-api-delta.vercel.app/cuadros",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        });
    })
};

const borrarProducto = async (id) => {
    try{
        const res= await fetch(`http://localhost:3000/productos/${id}`
            {
            method: "DELETE"
        });
        return await res.json();
    } catch(err) {
        return console.log(err);
    }
};


//export
export const conexionApi = {
    listarProductos,
    enviarProducto,
    borrarProducto,
};