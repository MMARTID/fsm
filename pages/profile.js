import Head from 'next/head';
import Navbar from '@/components/profile/navbar';
import ProfileInfo from '@/components/ProfileInfo';
import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import { withUser, withUserSSR } from 'next-firebase-auth';
import { AuthAction } from 'next-firebase-auth';

function Profile() {
  return (
    <>
    <Head>

        <title>Mi Perfil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

    </Head>

  {/*---------------------BARRA DE NAVEGACION------------------------*/}
       <Navbar />
  {/*----------------------------------------------------------------*/}

     <ProfileInfo />
  
    </>
  );
}

export const getServerSideProps = withUserSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
})(async function getServerSideProps() {
  return {
    props: {},
  };
});

export default withUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
})(Profile);
