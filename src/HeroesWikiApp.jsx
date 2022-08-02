import React from 'react'
import { AuthProvider } from './auth/context'
import { AppRuter } from './router/AppRuter'

export const HeroesWikiApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRuter />
      </AuthProvider>
      
    </>
  )
}
