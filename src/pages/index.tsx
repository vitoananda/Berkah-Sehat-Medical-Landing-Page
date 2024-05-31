import Layout from '../components/Layout';
import { Category } from '../templates/Categories';
import { FAQ } from '../templates/Faq';
import { Slider } from '../templates/Slider';

const Index = () => (
  <Layout>
    <Slider />
    <Category />
    <FAQ />
  </Layout>
);

export default Index;
