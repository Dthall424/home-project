import React, {
  Component
} from 'react';
import './CLPro.css';

class Contact extends Component {
  render() {
    return ( <
      body >
      <
      header >

      <
      ul className = "main-nav" >
      <
      li > < a href = "..\HTML\CLPro.html" > Home < /a></li >
      <
      li > < a href = "..\HTML\CLabout.html" > About < /a></li >
      <
      li > < a href = "..\HTML\CLcontact.html" > Contact < /a></li >
      <
      /ul> < /
      header > <
      div id = "sWrapper" >
      <
      h2 > Send me your information! < /h2> <
      input type = "text"
      id = "name"
      name = "user_name"
      placeholder = "Full Name" / > < br / >
      <
      input type = "date"
      id = "date"
      name = "date"
      placeholder = "Date" / > < br / >
      <
      input type = "email"
      id = "email"
      name = "email"
      placeholder = "Email Address" / > < br / >
      <
      input type = "number"
      id = "phone"
      name = "phone"
      placeholder = "Phone Number (optional)" / > < br / >
      <
      button type = "submit"
      id = "submit" > Submit < /button> < /
      div > <
      /body>
    );
  }
}

export default Contact
