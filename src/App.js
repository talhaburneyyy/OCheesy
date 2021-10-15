import React from 'react';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo , productDataThree} from './components/Products/data';
import Feature from './components/Feature';
import FeatureDrinks from './components/FeatureDrinks'
import Footer from './components/Footer';
import SidebarContainer from './components/Sidebar'



function App() {
  return (
    <Router>
      <GlobalStyle />
      <SidebarContainer/>
      <Hero />
      <Products heading='Pizza Menu' data={productData} />
      <Feature />
      <Products heading='Des friandises pour vous' data={productDataTwo} />
      <FeatureDrinks />
      <Products heading='Special Lassi ' data={productDataThree} />
      <Footer />
    </Router>
  );
}

export default App;
