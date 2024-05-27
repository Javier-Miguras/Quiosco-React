import { createRef, useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";

export default function login() {

    const emailRef = createRef();
    const passwordRef = createRef();

    const [errores, setErrores] = useState([])
    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    })

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        login(datos, setErrores)
    }

  return (
    <>
    <h1 className="text-4xl font-black">Iniciar sesión</h1>
    <p>Para crear un pedido debes iniciar sesión</p>

    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form
            onSubmit={handleSubmit}
            noValidate
        >

            {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}

            <div className="mb-4">
                <label
                    className="text-slate-800"
                    htmlFor="email"
                    >Email:</label>
                <input
                    type="email" 
                    id="email"
                    className="mt-2 w-full bg-gray-100 border border-slate-200 p-1"
                    name="email"
                    placeholder="Tu email"
                    ref={emailRef}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-slate-800"
                    htmlFor="password"
                    >Password:</label>
                <input
                    type="password" 
                    id="password"
                    className="mt-2 w-full bg-gray-100 border border-slate-200 p-1"
                    name="password"
                    placeholder="Tu password"
                    ref={passwordRef}
                />
            </div>

            <input 
                type="submit" 
                className="bg-violet-500 hover:bg-violet-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer text-center"
                value= "Iniciar Sesión"
            />

        </form>
    </div>

    <nav className="mt-5">
        <Link to="/auth/registro">¿No tienes cuenta? Crea una</Link>
    </nav>
    </>
  )
}
