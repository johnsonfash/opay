import { Link } from 'expo-router';
import { Flex } from 'native-base';

const Home = () => {
  return <Flex flex='1' >
    <Link href='pages/add_money'>Add Money</Link>
    <Link href='pages/transfer'>Transfer</Link>
    <Link href='pages/withdraw'>Withdraw</Link>
  </Flex>;
};

export default Home;
