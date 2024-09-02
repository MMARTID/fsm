import { initializeApp } from 'firebase/app';
import { init } from 'next-firebase-auth';
import absoluteUrl from 'next-absolute-url';

let admin;
if (typeof window === 'undefined') {
  // Importar solo en el servidor
  admin = require('firebase-admin');
}

// Configuración para el cliente
const firebaseClientInitConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Inicialización de Firebase para el cliente
initializeApp(firebaseClientInitConfig);

// Inicialización de Firebase Admin en el servidor
if (typeof window === 'undefined' && admin && !admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

// Función para la inicialización de la autenticación
const initAuth = () => {
  init({
    debug: true,

    authPageURL: ({ ctx }) => {
      const isServerSide = typeof window === 'undefined';
      const origin = isServerSide
        ? absoluteUrl(ctx.req).origin
        : window.location.origin;
      const destPath =
        typeof window === 'undefined' ? ctx.resolvedUrl : window.location.href;
      const destURL = new URL(destPath, origin);

      return `/auth-ssr?destination=${encodeURIComponent(destURL.toString())}`;
    },

    appPageURL: ({ ctx }) => {
      const isServerSide = typeof window === 'undefined';
      const origin = isServerSide
        ? absoluteUrl(ctx.req).origin
        : window.location.origin;
      const params = isServerSide
        ? new URL(ctx.req.url, origin).searchParams
        : new URLSearchParams(window.location.search);
      const destinationParamVal = params.get('destination')
        ? decodeURIComponent(params.get('destination'))
        : undefined;

      let destURL = '/';
      if (destinationParamVal) {
        const allowedHosts = [
          'localhost:3000',
          'nfa-example.vercel.app',
          'nfa-example-git-v1x-gladly-team.vercel.app',
        ];
        const allowed =
          allowedHosts.indexOf(new URL(destinationParamVal).host) > -1;
        if (allowed) {
          destURL = destinationParamVal;
        } else {
          console.warn(
            `Redirect destination host must be one of ${allowedHosts.join(
              ', '
            )}.`
          );
        }
      }
      return destURL;
    },

    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',

    // Configuración del servidor - solo se debe definir en el servidor
    ...(typeof window === 'undefined' && admin && {
      firebaseAdminInitConfig: {
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      },
    }),

    firebaseClientInitConfig,

    // Configuración de cookies - solo en el servidor
    cookies: typeof window === 'undefined'
      ? {
          name: 'ExampleApp',
          keys: [
            process.env.COOKIE_SECRET_CURRENT,
            process.env.COOKIE_SECRET_PREVIOUS,
          ],
          httpOnly: true,
          maxAge: 12 * 60 * 60 * 24 * 1000, // doce días
          overwrite: true,
          path: '/',
          sameSite: 'lax',
          secure: process.env.NEXT_PUBLIC_COOKIE_SECURE === 'true',
          signed: true,
        }
      : undefined,
  });
};

export default initAuth;
