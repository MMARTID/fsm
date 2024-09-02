import React, { useEffect, useState } from 'react'
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from './StyledFirebaseAuth'

// Configuración de FirebaseAuth para autenticación
const firebaseAuthConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
      //
    },
    {
      provider: GithubAuthProvider.PROVIDER_ID,
      // Añade opciones específicas si es necesario
    },
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
}

const FirebaseAuth = () => {
  // Manejar la renderización condicional para evitar SSR
  const [renderAuth, setRenderAuth] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, [])

  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={getAuth()} // Usa getAuth() ya que next-firebase-auth maneja la inicialización
        />
      ) : null}
    </div>
  )
}

export default FirebaseAuth
