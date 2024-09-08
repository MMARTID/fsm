import Head from 'next/head'
import Navbar from '@/components/navbar'
import ProfileInfo from '@/components/ProfileInfo'
import { Container, Heading, Text, VStack, Box, Flex, Badge, Progress } from '@chakra-ui/react'
import { withUser, withUserSSR } from 'next-firebase-auth'
import { AuthAction } from 'next-firebase-auth'
import { useState, useEffect } from 'react'
import { FaTrophy, FaCode, FaGamepad } from 'react-icons/fa'

function Profile() {
  const [level, setLevel] = useState(1)
  const [xp, setXp] = useState(0)
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    // Simulating data fetch
    setLevel(7)
    setXp(750)
    setAchievements([
      { id: 1, name: 'Code Ninja', icon: <FaCode />, description: 'Wrote 1000 lines of code' },
      { id: 2, name: 'Gamer Pro', icon: <FaGamepad />, description: 'Reached level 50 in favorite game' },
      { id: 3, name: 'Community Star', icon: <FaTrophy />, description: 'Helped 100 community members' },
    ])
  }, [])

  return (
    <>
      <Head>
        <title>DevGamer Profile</title>
        <meta name="description" content="Your DevGamer social profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <ProfileInfo />

          <Box bg="gray.800" p={6} borderRadius="lg" color="white">
            <Heading size="lg" mb={4}>DevGamer Stats</Heading>
            <Flex justify="space-between" align="center" mb={4}>
              <Text fontSize="xl">Level {level}</Text>
              <Badge colorScheme="purple" fontSize="md">XP: {xp}/1000</Badge>
            </Flex>
            <Progress value={(xp / 1000) * 100} colorScheme="purple" size="sm" mb={6} />

            <Heading size="md" mb={4}>Achievements</Heading>
            <Flex wrap="wrap" gap={4}>
              {achievements.map((achievement) => (
                <Box key={achievement.id} bg="gray.700" p={3} borderRadius="md" textAlign="center">
                  <Box fontSize="2xl" mb={2}>{achievement.icon}</Box>
                  <Text fontWeight="bold">{achievement.name}</Text>
                  <Text fontSize="sm">{achievement.description}</Text>
                </Box>
              ))}
            </Flex>
          </Box>

          <Box bg="gray.800" p={6} borderRadius="lg" color="white">
            <Heading size="lg" mb={4}>Activity Feed</Heading>
            {/* Add your activity feed component here */}
            <Text>Recent activities will be displayed here...</Text>
          </Box>
        </VStack>
      </Container>
    </>
  )
}

export const getServerSideProps = withUserSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
})(async function getServerSideProps() {
  return {
    props: {},
  }
})

export default withUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
})(Profile)