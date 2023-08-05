import { Link } from 'expo-router';
import { Box, Button, useColorMode } from 'native-base';

const Home = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box flex='1'>
      <Button onPress={toggleColorMode}>Press</Button>
      <Link href='pages/add_money'>Add p Money</Link>
      <Link href='pages/transfer'>Transfer</Link>
      <Link href='pages/withdraw'>Withdraw</Link>
    </Box >
  );
};

export default Home;
