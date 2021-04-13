const register: React.FC = () => {
  return (
    <div className="bg-primary w-full h-full flex justify-center items-center">
      <section className="container w-80 h-auto flex flex-col items-center justify-start ">
        <span className="text-white font-extrabold text-4xl mb-1">
          Únete hoy
        </span>
        <p className="text-white mb-6">Empieza tú camino de aprendizaje</p>
        <button className="bg-blue-600 font-bold rounded h-14 w-full px-5 mb-3 text-white">
          <path
            fill="white"
            d="M14.001.67C6.64.67.67 6.638.67 14c0 6.654 4.875 12.168 11.25 13.172v-9.317H8.532v-3.855h3.387v-2.937c0-3.344 1.99-5.188 5.034-5.188 1.46 0 2.987.26 2.987.26v3.279h-1.685c-1.654 0-2.17 1.029-2.17 2.084v2.5h3.694l-.59 3.854h-3.105v9.318c6.375-.999 11.25-6.515 11.25-13.17C27.333 6.64 21.363.67 14 .67z"
          ></path>
          Registrate con Facebook
        </button>
        <button className="bg-white font-bold rounded h-14 w-full px-5 mb-3 ">
          Regístrate con Google
        </button>
        <form className="flex flex-col w-full">
          <div className="flex flex-col h-22 mb-3">
            <label className="text-white font-semibold">Correo</label>
            <input className="border-gray-800 bg-gray-700 box-border p-3 text-white rounded h-14  outline-none" />
          </div>
          <div className="flex flex-col h-22 mb-3">
            <label className="text-white font-semibold">Contraseña</label>
            <input className="border-gray-800 bg-gray-700 box-border p-3 text-white rounded h-14  outline-none" />
          </div>
          <button className="bg-gray-400 font-bold rounded h-14 w-full px-5 mb-4 text-white">
            Regístrate
          </button>
        </form>
        <div className="flex items-center text-white">
          <input type="checkbox" className="mx-2" />
          <p className="text-xs text-gray-400">
            <strong className="text-white">Acepto los</strong> Términos,
            Condiciones y Políticas de Crehana.
          </p>
        </div>
      </section>
    </div>
  );
};

export default register;
