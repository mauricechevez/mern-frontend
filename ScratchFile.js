// Ternary to If Else Statement

{
  props.isAuth 
  ? <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <NavLink className="nav-link"  to="/profile">Profile</NavLink>
      </li>
      <li className="nav-item">
          <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
      </li>
  </ul>
  : <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <NavLink className="nav-link"  to="/signup">Create Account</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link"  to="/login">Login</NavLink>
      </li>
    </ul>
}

// is equal to
{
  if (props.isAuth){
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <NavLink className="nav-link"  to="/profile">Profile</NavLink>
      </li>
      <li className="nav-item">
          <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
      </li>
  </ul>
  } else {
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <NavLink className="nav-link"  to="/signup">Create Account</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link"  to="/login">Login</NavLink>
      </li>
    </ul>
  }

}