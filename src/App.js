import Header from './component/header/index.js';
import Hero from './component/hero/index.js';
import Clients from './component/clients/index.js';
import Features from './component/features/index.js';
import Pricing from './component/pricing/index.js';
import Footer from './component/footer/index.js';

const App = () => {
  return (
  <div className="body-wrap">
    <Header />
    <main className="site-content">
    <Hero />
    <Clients />
    <Features />
    <Pricing />
    </main>
    <Footer />
  </div>
  )
};
export default App;
