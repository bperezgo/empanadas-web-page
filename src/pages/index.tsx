import { Hero } from '../components/Hero';
import { ProductList } from '../components/ProductList';
import { WhatsappButton } from '../components/WhatsappButton';
import { Footer } from '../components/Footer';

const Home = () => (
  <>
    <Hero />
    <ProductList />
    <WhatsappButton
      redirectUrl={`https://wa.me/${process.env.prefixInternationalNumber}${process.env.wpBtnNumber}`}
    />
    <Footer />
  </>
);

export default Home;
