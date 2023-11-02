import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Software from './components/Services/Software/Software';
import Digital from './components/Services/DigitalMarketing/Digital';
import Hardware from './components/Services/Hardware/Hardware';
import Web from './components/Services/WebDesigning/Web';
import Graphic from './components/Services/GraphicDesigning/Graphic';
import IChef from './components/ProductPages/IChef/IChef';
import Iroute from './components/ProductPages/IRoute/IRoute';
import Albergo from './components/ProductPages/Albergo/Albergo';
import Forzaerp from './components/ProductPages/ForzaErp/Forzaerp';
import Forzaretail from './components/ProductPages/ForzaRetail/Forzaretail';
import SoftPulse from './components/ProductPages/SoftPulse/SoftPulse';
import Essattoo from './components/ProductPages/Essatto/Essattoo';
import WhatWeAre from './components/WhatWeDo/WhatWeAre';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';

const App = () => {
  return (
    <>
      <Layout>

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/About" element={<About />} exact />
          <Route path="/Contact" element={<Contact />} exact />
          <Route path="/software" element={<Software />} />
          <Route path="/digital" element={<Digital />} exact />
          <Route path="/hardware" element={<Hardware />} exact />
          <Route path="/web" element={<Web />} exact />
          <Route path="/graphic" element={<Graphic />} exact />
          <Route path="/i-chef" element={<IChef />} exact />
          <Route path="/i-route" element={<Iroute />} exact />
      /about    <Route path="/albergo" element={<Albergo />} exact />
          <Route path="/forza-erp" element={<Forzaerp />} exact />
          <Route path="/forza-retail" element={<Forzaretail />} exact />
          <Route path="/softpulse" element={<SoftPulse />} exact />
          <Route path="/esalto" element={<Essattoo />} exact />
          <Route path="/whatwedo" element={<WhatWeAre />} exact />
          <Route path="*" element={<NotFound />} exact />


        </Routes>
      </Layout>



    </>

  );
};

export default App;
