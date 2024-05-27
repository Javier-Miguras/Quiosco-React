import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"
import { useAuth } from "../hooks/useAuth"

export default function Sidebar() {
    const { categorias } = useQuiosco()
    const { logout, user } = useAuth({middleware: 'auth'})

  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img className="max-w-40" src="img/logo.svg" alt="logo" />
        </div>

        <p className="my-4 text-center text-md">Hola: {user?.name}</p>

        <div className="mt-10">
            {categorias.map( categoria => (
                <Categoria 
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </div>

        <div className="my-5 px-5">
            <button type="button" className="bg-red-500 text-white font-bold p-3 text-ceter w-full truncate" onClick={logout}>
                Cancelar Orden
            </button>
        </div>
    </aside>
  )
}
