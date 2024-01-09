import Content from './Views/Content';
import Publication from './Views/Publication'
import People from './Views/People'
import Contact from './Views/Contact'

import Footer from './Components/Footer';
import Header from './Components/Header';

import { MantineProvider } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <MantineProvider>
      <TypographyStylesProvider>



        <Router>
          
          <Header/>
  
          <Routes>
            <Route path="/" element={<Content/>}/>
            <Route path="/publication" element={<Publication/>}/>
            <Route path="/people" element={<People/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>

          <Footer/>

        </Router>


      </TypographyStylesProvider>
    </MantineProvider>
  );
  
}

export default App;