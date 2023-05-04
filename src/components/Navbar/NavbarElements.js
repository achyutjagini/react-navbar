import styled from "styled-components";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

/*

The padding is set to 0.5rem on the top and bottom,

and calc() 
is used to set the left and right padding to be a calculation

based on the viewport width minus 1000px, with the result being
divided by 2. This centers the content of the navigation bar 
horizontally on the page.

The z-index is set to 10, which
ensures that the navigation bar is positioned above other 
elements on the page with a lower z-index.*/

export const Nav = styled.nav`
background:#000;
height:80px;
display:flex;
justify-content:space-between;
padding: 1rem calc((100vw-1000px)/2);
z-index:10;
`

/*
The NavLink component sets the text color to white, aligns the text and any other 
child elements to the center, sets the text decoration to none
sets the height to 100%, and sets the cursor to a pointer.

 padding: 0 1rem; sets the padding on the left and right
  sides of the element to 1rem, and 0 padding on the top and bottom.
 */

//change the padding and experiment
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
/*  background:red; */
  

  &.active {
    color: #15cdfc;
  }
`;

/*
This is a styled component for the FaBars icon from the react-icons/fa library, which is used 
to display a hamburger menu icon for mobile devices.

This component sets the display to none by default, meaning it will not be visible.
However, when the screen size is smaller than 768px, it sets the display to block 
and adjusts the position, size, and cursor properties to make it
visible and clickable for mobile users.

In this case, transform: translate(-100%, 75%); is used to move the Bars element to a specific position 
on the screen when the screen width is less than 768px. The translate function is moving the
element to the left by 100% of its own width and down by 75% of its own height.
X and Y are the arguments

display: block is a CSS property that is used to set an element's display type to a 
block-level element. Block-level elements are those that occupy the full width of
their parent container and start a new line after the element. Examples of 
block-level elements include <div>, <p>, <ul>, <ol>,
<h1>, <h2>, <h3>, etc.
*/

export const Bars = styled(FaBars)`
display:none;
color: #fff;
@media screen and (max-width: 768px)
{
  display:flex;
  align-items:center;
  justify-content:center
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-500%,75 %);
  font-size: 3rem;
  cursor: pointer;
}
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;   /* to compensate for button */


  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;   /* make this 0 and see to understand */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;  /*rounded border*/

  background: #256ce1; /*blue colour */

  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;









