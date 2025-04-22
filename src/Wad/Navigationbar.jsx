import Home from './Home'
import Login from './Login'
function Navigationbar() {
  return (
    <div className=" text-dark py-2">
      <ul className="nav justify-content-end me-3">
        <li className="nav-item">
          <Link className="nav-link active" to="">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="register">Register</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="login">Login</Link>
        </li>

      </ul>

    </div>
  )
}
export default Navigationbar;