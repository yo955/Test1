
// import React from 'react';
// import logoName from '../photos/logo-name.png';
// import logoIcon from '../photos/logo-icon.png';
// import './css/navbar.css';
// //mui
// import { useTheme } from '@emotion/react';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import IconButton from '@mui/material/IconButton';

// export default function Navbar({setMymode}){
//   const theme = useTheme()
    
//     return(
//   <nav className="navbar">
//   <div className = "logo">
//     <img src = {logoName} className ="logo-name" alt ="Logo Navbar"/>
//     <img src = {logoIcon} className ="logo-icon" alt = "Logo Name"/>
//   </div>
//   <div className = "nav-links">
//     <ul>
//       <li> About Us</li>
//       <li> Services</li>
//       <li> Case Studies</li>
//       <li> Blog</li>
//       <li> How it works</li>
//       <li> Hire</li>
//     </ul>
//   </div>
//   <div className = "contact-btn">
//     <button>Contact US</button>

//   </div>
//   <IconButton sx={{ ml: 1 }} onClick={()=>{
//     setMymode(theme.palette.mode==="light"?"dark":"light")
//   }}
//   color="inherit">
//   {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
// </IconButton>
//   </nav>
  
//     );
// }


// ////////////////////////////////
// import logoName from '../photos/logo-name.png';
import logoIcon from '../photos/logo.png';
import './css/navbar.css';
import { useTheme } from '@emotion/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import {NavLink} from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import { useMediaQuery } from 'react-responsive';

export default function Navbar({ setMymode }) {
  const theme = useTheme();
  // const [showMenu, setShowMenu] = useState(false);
  // const isMobile = useMediaQuery({ query: '(max-width: 685px)' });

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src={logoName} className="logo-name" alt="Logo Navbar" /> */}
        <img src={logoIcon} className="logo-icon" alt="Logo Name" />
      </div>
      <div className="nav-links mobile-menu">
          <ul>
            <NavLink to={"/about-us"}>About Us</NavLink>
            <NavLink to={"/services"}>Services</NavLink>
            <NavLink to={"/case-study"}>Case Studies</NavLink>
            <NavLink to={"our-team"}>Blog</NavLink>
          </ul>
        </div>
      {/* {isMobile ? (
        <div className="navbar-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      ) : (
        <div className="nav-links">
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>How it works</li>
            <li>Hire</li>
          </ul>
        </div>
      )}
      {isMobile && showMenu && (
        <div className="nav-links mobile-menu">
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>How it works</li>
            <li>Hire</li>
          </ul>
        </div>
      )} */}
      <div className="contact-btn">
        <button>Contact US</button>
      </div>
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => {
          setMymode(theme.palette.mode === 'light' ? 'dark' : 'light');
        }}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </nav>
  );
}

