import React from "react";

function NavBar() {
  /*- an `<a>` element, with the `href` attribute set to `#home`, and the content
  text set to "Home"
  - an `<a>` element, with the `href` attribute set to `#about`, and the content
    text set to "About"*/
  return <nav>
          <a href="#home" >Home</a>
          <a href="#about"> About</a>
        </nav>;
}

export default NavBar;
