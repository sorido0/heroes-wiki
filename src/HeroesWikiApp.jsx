import React from 'react'
import { AuthProvider } from './auth/context'
import { AppRuter } from './router/AppRuter'

export const HeroesWikiApp = () => {
  return (
    <>
      {/* Al AuthProvider es para manejar los datos de los componentes  */}
      <AuthProvider>
        {/* Por que aqui entrar las rutas de los router  */}
        <AppRuter />
      </AuthProvider>
      
    </>
  )
}
