import { Link } from "gatsby"
import React from "react"
import './header.css'


class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hasScrolled: false
    }
  }


  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }
  
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      // Move all content between parentheses to here.
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
  <div className="HeaderGroup">
    <Link to="/"><img width="30" src={require('../images/logo-designcode.svg')} />
</Link>
    <Link to="/courses">Courses</Link>
    <Link to="/downloads">Downloads</Link>
    <Link to="/workshops">Workshops</Link>
    <Link to="/buy"><button>Log</button></Link>
  </div>
</div>
    )
  }
}


export default Header
