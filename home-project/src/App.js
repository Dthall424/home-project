import React, {
  Component
} from 'react';
import './CLPro.css';
import Contact from './Contact'
import Content from './Content'
import Navbar from './Navbar'

class App extends Component {
//  constructor() {
  //  super()
  //  this.state = {
  //    repos: []
  //  }
  //}

  //async componentDidMount() {
    //const res = await //fetch('https://api.github.com/users/Dthall424/repos')
    //const json = await res.json()
    //this.setState({
  //    repos: json
  //  })
  //console.log(json)
  //console.log(this.state.repos.length)
  //}

  render() {
    return ( <
      body >
      <
      Navbar / >

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
