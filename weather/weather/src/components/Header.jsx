import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <Link className="link" to='/'> Home </Link>
      <Link className="link" to='favorites'> Favorite </Link>
      <Link className="link" to='forcast'> Forcast </Link>
      <Link className="link" to='signin'>Sign In </Link>
      
    </div>
  )
}

export default Header
