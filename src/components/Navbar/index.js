import { NavLink } from "react-router-dom"
//Nav is a styled component
//NavLink 

const Navbar = () => {
  return (
     <>
    <Nav>
      <NavLink to="/">
     <h1>Logo</h1>
      </NavLink>
 {/*
      <Bars/>
      <NavMenu>
        <NavLink to='/about' activeStyle>
          about
        </NavLink>
        <NavLink to='/services' activeStyle>
          Services
        </NavLink>
        <NavLink to='/contact-us' activeStyle>
          Contact us
        </NavLink>
        <NavLink to='/sign-up' activeStyle>
           Sign Up
        </NavLink>
      </NavMenu>
      <NavBtn>
       <NavBtnLink to='/signin'>Sign</NavBtnLink>
      </NavBtn>
  */}
    </Nav>
    </>
  )
}

export default Navbar
