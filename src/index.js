import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import './globalStyled.css';
import './assets/fonts/font-awesome/css/font-awesome.css';
import './assets/fonts/elegant_font/HTML_CSS/style.css';
import './assets/fonts/et-line-font/style.css';
import './assets/fonts/font-awesome/css/font-awesome.css';

import './assets/css/animate.css';


import './assets/css/colors/magenta.css';
import './assets/css/color.css';


import './assets/font-style.css';





ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);


// setTimeout(() => {
// 	ReactDOM.render(
//     <React.StrictMode>
//       <Routes />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 3000);