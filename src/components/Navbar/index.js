
import { Nav, NavLink, NavMenu, Bars, NavBtn, NavBtnLink } from "./NavbarElements"
//import { Bars }
//Nav is a styled component
//NavLink 

/*

In this case, the NavMenu component will not occupy the full width of
the Nav component. By default, a div element is a block-level element,
which means it will take up the full width of its parent container.
However, in this case, the NavMenu component has display: flex set,
which means it will only take up as much width as needed to
fit its child elements.

So, the NavMenu component will take up only as much width as 
needed to fit the child elements that are inside it. In this
particular case, the NavMenu component contains NavLinks, 
which are inline-block elements. Therefore, the width of
the NavMenu component will depend on the width of the NavLinks inside it.

The margin-right: -24px is used to compensate for the negative
margin caused by the padding: 0.5rem calc((100vw-1000px)/2)
on the Nav component.

*/


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />

        {/* navmenu is a flex div container for all middle links*/}

        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>

          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>


        </NavMenu>

        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>


      </Nav >
    </>
  )
}

export default Navbar
