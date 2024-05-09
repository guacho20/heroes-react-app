
export const bank = () => {
  return (
    <div className="bg-zinc-100">
      <h1>Hola</h1>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-wrap md:flex-nowrap bg-white shadow-lg rounded-lg overflow-hidden">

          <div className="w-full md:w-1/2 p-8">
            <div className="mb-4">
              <img src="https://placehold.co/150x50?text=Logo" alt="Bank Logo" />
            </div>
            <h2 className="text-2xl font-semibold mb-6">Verifica en tu navegador que estás en Banca Web.</h2>
            <div className="flex items-center mb-6">
              <span className="bg-green-500 text-white rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 8V4a2 2 0 00-2-2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2z" />
                </svg>
              </span>
              <span className="text-sm">https://bancaweb.pinchincha.com/pinchincha/login</span>
            </div>
            <ul className="text-sm space-y-2">
              <li>01. Cuida tu usuario y contraseña.</li>
              <li>02. Antes de ingresar a la Clave Digital verifica que los 4 últimos dígitos de tu cédula sean correctos.</li>
            </ul>
            <p className="text-xs text-zinc-600 mt-6">Términos de uso © 2022 Banco Pichincha. Todos los derechos reservados</p>
          </div>

          <div className="w-full md:w-1/2 bg-zinc-50 p-8">
            <h2 className="text-xl font-semibold mb-4">Bienvenido a tu Banca Web</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-zinc-700">Usuario</label>
                <input type="text" id="username" className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Usuario" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-zinc-700">Contraseña</label>
                <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Contraseña" />
              </div>
              <div className="flex justify-between items-center mb-6">
                <a href="#" className="text-sm text-blue-600 hover:underline">¿Olvidaste tu usuario?</a>
                <a href="#" className="text-sm text-blue-600 hover:underline">¿Olvidaste tu contraseña?</a>
              </div>
              <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Ingresar</button>
            </form>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 border border-zinc-300 rounded-lg">
                <span className="block mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V9m0 12c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z" />
                  </svg>
                </span>
                <a href="#" className="text-sm text-blue-600 hover:underline">Desbloquea tu Banca Web</a>
              </div>
              <div className="text-center p-4 border border-zinc-300 rounded-lg">
                <span className="block mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V9m0 12c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z" />
                  </svg>
                </span>
                <a href="#" className="text-sm text-blue-600 hover:underline">Regístrate a Banca Web</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}