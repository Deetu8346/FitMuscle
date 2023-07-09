import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack>
);
// This code represents the JSX structure for a navigation bar component. Let's go through each part:

// <Stack>: The Stack component is used to create a container for its child elements. In this case, it is used to wrap the entire navigation bar and stack its child elements horizontally.

// direction="row": The Stack component has the direction prop set to "row", which arranges its child elements in a horizontal direction.

// justifyContent="space-around": The Stack component has the justifyContent prop set to "space-around", which evenly distributes the child elements and provides space around them.

// sx={{ ... }}: The sx prop is used to apply custom styling to the Stack component. In this case, it sets various styles like the gap between child elements, margin-top, and horizontal padding.

// <Link to="/">: The Link component from react-router-dom is used to create a clickable link. The to prop is set to "/", indicating that the link leads to the root of the application.

// <img src={Logo} alt="logo" style={{ ... }} />: This <img> tag displays the logo image imported earlier using the Logo variable. The src attribute is set to {Logo}, and the alt attribute provides alternative text for the image. Inline styles are used to define the width, height, and margin of the image.

// <Stack>: Another Stack component is used to wrap the links within the navigation bar. This nested Stack represents a row of links.

// direction="row": The nested Stack component has the direction prop set to "row", arranging the links horizontally.

// gap="40px": The gap prop sets the gap between the links to 40 pixels.

// fontFamily="Alegreya" and fontSize="24px": These props set the font family and font size for the links.

// <Link to="/"> and <a href="#exercises">: Two types of links are used within the nested Stack. The first one is a Link component from react-router-dom, similar to the logo link. The second one is a regular anchor (<a>) tag with an href attribute set to #exercises.

// Inline styles are used to define the text color, text decoration, and



export default Navbar; // Exporting the Navbar component as the default export enables reusability and modularity in your React application.
// Other components or files can import and use the Navbar 
