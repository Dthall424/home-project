import React, {
  Component
} from 'react';
import './CLPro.css';
import Contact from './Contact'
import Content from './Content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      repos: []
    }
  }

  async componentDidMount() {
    const res = await fetch('https://api.github.com/users/Dthall424/repos')
    const json = await res.json()
    this.setState({
      repos: json
    })
    console.log(json)
  }
  render() {
    return ( <
      body >
      <
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

      <
      Content / >

      <
      Contact / >
      <
      /body>
    );
  }
}

export default App;
