import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function AdminSidebar() {

    const { logout } = useAuth({middleware: 'auth'})

  return (
    <div className="md:w-72 h-screen">
        <div className="p-4">
            <img src="/img/logo.svg" alt="Imagen logotipo" className="w-40" />
        </div>

        <nav className="flex flex-col p-4">
            <Link to="/admin" className="font-bold text-lg">Ordenes</Link>
            <Link to="/admin/productos" className="font-bold text-lg">Productos</Link>
        </nav>

        <div className="my-5 px-5">
            <button type="button" className="bg-red-500 text-white font-bold p-3 text-ceter w-full truncate" onClick={logout}>
                Cerrar Sesión
            </button>
        </div>
    </div>
  )
}
