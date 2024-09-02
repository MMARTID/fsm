import React from 'react'
import FirebaseAuth from '@/components/FirebaseAuth'
import { AuthAction, withUser } from 'next-firebase-auth'

// Mantén la configuración aquí si quieres usarla en FirebaseAuth.js
const firebaseAuthConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: 'github.com', // Actualiza el proveedor según tu configuración
    }
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
}

function Auth() {
  return (
    <div> 

      <p>PAGINA DE AUTENIFICACION DONDE, SI NO ESTAS REGUISTRADO NO PUEDES AVANZAR</p>
      <FirebaseAuth />
    </div>
  )
}

export default withUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(Auth)
