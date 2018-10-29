import React, {
  Component
} from 'react';
import './CLPro.css';

class Navbar extends Component {
  render() {
      return ( <
          
          header className = "sticky" >
          <
          ul className = "main-nav" >
          <
          li > < a href = "..\HTML\CLPro.html" > Home < /a></li >
          <
          li > < a href = "..\HTML\CLabout.html" > About < /a></li >
          <
          li > < a href = "..\HTML\CLcontact.html" > Contact < /a></li >
          <
          /ul>

          <
          /header>
        );
      }
    }

    export default Navbar;
