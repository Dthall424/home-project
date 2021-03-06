import React, {
  Component
} from 'react';
import './CLPro.css';

class Content extends Component {
  constructor() {
    super()
    this.state = {
      repos: []
    }
  }

  async componentDidMount() {
    const res = await fetch('https://api.github.com/users/Dthall424/repos')
    const json = await res.json()
  //  this.setState({
  //    repos: json
  //  })
    let repos = json.map((repo) => {
      return(
        <div key={repo.results}>
          <img src={repo.name} />
        </div>
      )
    })
  console.log(json)
  console.log(this.state.repos.length)
  }

  render() {
    return ( <
      body >
      <
      div className = "wrapper" >
      <
      div className = "flex" >
      <
      p className = "item" >
      In laoreet purus vel orci porttitor dictum.Suspendisse eget luctus eros.Aenean a nibh dictum arcu maximus dapibus et id risus.Aenean gravida nunc quis quam vehicula, at iaculis sapien dictum.Fusce lectus nisl, fermentum sed eleifend ac, volutpat vel elit.In hac habitasse platea dictumst.Phasellus nec finibus justo.Nullam vehicula metus dui, ac rhoncus purus porttitor feugiat.Suspendisse commodo interdum neque, vel bibendum augue viverra sed.Maecenas posuere nulla non augue facilisis laoreet.Praesent et tellus aliquam, efficitur enim a, finibus arcu.Cras nisi purus, mollis at volutpat finibus, cursus a nunc. <
      /p> <
      p className = "item" >
      Sed molestie tellus ac lectus accumsan, quis cursus elit imperdiet.Fusce et nunc at massa interdum tincidunt at in nunc.Sed iaculis malesuada tellus, et hendrerit risus cursus dictum.Sed in neque rhoncus, mollis sapien eu, egestas metus.Fusce eu ullamcorper mauris.Vivamus rutrum, elit et vulputate lobortis, ligula enim mollis urna, et facilisis diam enim non purus.Vivamus at efficitur purus.Aliquam id elementum quam.Nullam vehicula metus dui, ac rhoncus purus porttitor feugiat.Suspendisse commodo interdum neque, vel bibendum augue viverra sed.Maecenas posuere nulla non augue facilisis laoreet.Praesent et tellus aliquam, efficitur enim a, finibus arcu.Cras nisi purus, mollis at volutpat finibus, cursus a nunc.Donec tincidunt mauris felis, id tempor risus auctor vel.Quisque dapibus mauris varius enim aliquam placerat. <
      /p> <
      p className = "item" >
      dolor sit amet, consectetur adipiscing elit.Sed nec finibus neque, et aliquet turpis.Maecenas finibus aliquam tortor, in pulvinar mauris lacinia quis.Proin iaculis, est id facilisis pretium, tellus enim imperdiet eros, ut mattis ex libero quis sapien.Praesent posuere erat at ex bibendum, in accumsan dolor sollicitudin.Ut condimentum est quis vestibulum accumsan.Integer tempus lacinia risus.Mauris ac sollicitudin nunc, non blandit mauris.Donec tempor faucibus bibendum.Nunc elementum odio sed ipsum vehicula pharetra.Praesent diam quam, consectetur et dui et, mattis vestibulum ante.Vivamus tempus a magna ac tincidunt.Sed at cursus diam.Morbi suscipit ante non massa hendrerit vehicula.Sed viverra tellus non pharetra varius.Morbi eget ante consectetur augue rhoncus blandit. <
      /p> <
      p className = "item" >
      ipsum dolor sit amet, consectetur adipiscing elit.Sed nec finibus neque, et aliquet turpis.Maecenas finibus aliquam tortor, in pulvinar mauris lacinia quis.Proin iaculis, est id facilisis pretium, tellus enim imperdiet eros, ut mattis ex libero quis sapien.Praesent posuere erat at ex bibendum, in accumsan dolor sollicitudin.Ut condimentum est quis vestibulum accumsan.Integer tempus lacinia risus.Mauris ac sollicitudin nunc, non blandit mauris.Donec tempor faucibus bibendum.Nunc elementum odio sed ipsum vehicula pharetra.Praesent diam quam, consectetur et dui et, mattis vestibulum ante.Vivamus tempus a magna ac tincidunt.Sed at cursus diam.Morbi suscipit ante non massa hendrerit vehicula.Sed viverra tellus non pharetra varius.Morbi eget ante consectetur augue rhoncus blandit. <
      /p> <
      /div>
      <h6 className="mainhead">
      Dylan Hall<br />
      Junior Software Developer
      </h6> <
      /div> <
      /body>
    );
  }
}

export default Content
