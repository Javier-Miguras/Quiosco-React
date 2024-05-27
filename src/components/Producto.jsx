import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Producto({producto, botonAgregar = false, botonDisponible = false}) {

    const { handleClickModal, handleSetProducto, handleClickProductoAgotado } = useQuiosco();
    const { nombre, imagen, precio } = producto    

    return (
        <div className="bg-white shadow p-3 border">
            <img src={`/img/${imagen}.jpg`} className="w-full" alt={`Imagen ${nombre}`} />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="text-4xl font-black mt-5 text-amber-500">{ formatearDinero(precio) }</p>
                
                {botonAgregar && (
                    <button 
                    type="button" 
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                    onClick={() => {
                        handleClickModal();
                        handleSetProducto(producto);
                    }}
                    >Agregar</button>
                )}

                {botonDisponible && (
                    <button 
                    type="button" 
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                    onClick={() => handleClickProductoAgotado(producto.id)}
                    >Producto Agotado</button>
                )}
            </div>
        </div>
    )
}
