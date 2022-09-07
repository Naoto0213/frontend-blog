import {
  Box,
  Button,
  Center,
  Stack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Center>
      <Stack flexDirection="column" spacing={4} m={16}>
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="solid">
            Button
          </Button>
          <Button colorScheme="teal" variant="outline">
            Button
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Button
          </Button>
          <Button colorScheme="teal" variant="link">
            Button
          </Button>
        </Stack>

        <Stack direction="row">
          <Stack align="center" direction="row">
            <Switch size="sm" />
            <Switch size="md" />
            <Switch size="lg" />
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Home;
