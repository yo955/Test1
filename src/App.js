// import logo from './logo.svg';
import './App.css';
import './components/css/styleToAll.css';
import Navbar from './components/Navbar';
// import NavbarBootstrap from './components/NavbarBootstrap'
import Header from './components/Header';
import Custmors from './components/Custmers';
// import Leading from './components/Leading';
// import Building from './components/Building';
import CaseStudy from './components/CaseStudy';
// import Developement from './components/Developement';
import Advertising from './components/Advertising';
import ContactPage from './components/routingpages/Contactpage';
import AboutUs from './components/routingpages/AboutUS';
import { useState } from 'react';
import SimpleSlider from './components/SimbleSlider';
//mui
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [myMode, setMymode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: myMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="container">
          <Navbar setMymode={setMymode} />
          {/* وضع Header خارج Routes بحيث يظهر على جميع الصفحات */}
          <Header />
          <Routes>
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/services' element={<SimpleSlider />} />
            <Route path='/our-team' element={<Custmors />} />
            <Route path='/case-study' element={<CaseStudy />} />
            <Route path='/hire' element={<Advertising />} />
            <Route path='/contact-us' element={<ContactPage />} />
          </Routes>
          <Footer /> {/* وضع Footer هنا لتظهر على جميع الصفحات */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
