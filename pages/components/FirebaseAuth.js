import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from '../../styles/StyledFirebaseAuth';

// Configuración de FirebaseAuth para autenticación
const firebaseAuthConfig = {
  signInFlow: 'popup',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
}

const FirebaseAuth = () => {
  const [renderAuth, setRenderAuth] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true);
    }
  }, []);

  // Manejo de autenticación anónima al hacer clic en un botón o alguna acción
  const handleSignInAnonymously = async () => {
    const auth = getAuth();
    try {
      await signInAnonymously(auth);
      console.log('Usuario autenticado anónimamente');
    } catch (error) {
      console.error('Error en la autenticación anónima', error);
    }
  }

  return (
    <div>
      {renderAuth ? (
        <>
          <StyledFirebaseAuth
            uiConfig={firebaseAuthConfig}
            firebaseAuth={getAuth()} // Usa getAuth() ya que next-firebase-auth maneja la inicialización
          />
        </>
      ) : null}
    </div>
  );
}

export default FirebaseAuth;
