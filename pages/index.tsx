import { Hero } from '@components/Hero';
import { ProductList } from '@components/ProductList';
import { Navbar } from '@components/Navbar';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <ProductList />
  </>
);

export default Home;
