import { Hero } from '../components/Hero';
import { ProductList } from '../components/ProductList';
import { WhatsappButton } from '../components/WhatsappButton';
import { Footer } from '../components/Footer';

type HomePageType = {
  products?: TProduct[];
};

const HomePage = ({ products = [] }: HomePageType) => (
  <>
    <Hero />
    <ProductList products={products} />
    <WhatsappButton
      redirectUrl={`https://wa.me/${process.env.prefixInternationalNumber}${process.env.wpBtnNumber}`}
    />
    <Footer />
  </>
);

export default HomePage;
