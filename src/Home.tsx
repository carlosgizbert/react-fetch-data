import { Badge, Flex, Image, Link, Text } from '@chakra-ui/react';
import { useRepos } from './services/repos';
import { useUser } from './services/users';

const GITHUB_USERNAME = 'carlosgizbert'

const Home = () => {

  const { data: user } = useUser(GITHUB_USERNAME)
  const { data: repos } = useRepos(GITHUB_USERNAME)

  return (
    <Flex direction="column" alignItems="center" paddingTop="32px" paddingBottom="40px">
      <Image src={(user as any)?.avatar_url}
        alt="Avatar"
        width="96px"
        height="96px"
        borderRadius="full"
      />
      <Text
        fontWeight="bold"
        fontSize="24px"
        marginTop="32px">{(user as any)?.name}</Text>
      <Text
        fontWeight="light"
        fontSize="16px"
        marginTop="16px">{(user as any)?.bio}</Text>

      <Text
        fontWeight="bold"
        fontSize="18px"
        marginTop="32px"
        marginBottom="1rem"
      >Repos</Text>

      {repos?.map(repo => (
        <Link
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderRadius="0.25rem"
          marginBottom="0.25rem"
          width="400px"
          height="48px"
          backgroundColor="#0e0326"
          padding="1rem"
          href={repo?.html_url}
          target="_blank"
          _focus={{ boxShadow: 'none' }}
          _hover={{ textDecoration: 'none', outline: '1px solid white' }}
        >
          <Text>{repo.name}</Text>
          <Badge colorScheme='green'>{repo.language}</Badge>
        </Link>
      ))}

    </Flex>
  )
}

export default Home;