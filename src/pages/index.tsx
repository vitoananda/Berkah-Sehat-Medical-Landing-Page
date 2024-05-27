import Layout from '../components/Layout';
import { Slider } from '../templates/Slider';
import { Category } from '../templates/Categories';
import { FAQ } from '../templates/Faq';

const Index = () => (
  <Layout>
    <Slider />
    <Category />
    <FAQ />
  </Layout>
);

export default Index;
