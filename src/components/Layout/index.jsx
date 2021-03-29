import { Link } from "@chakra-ui/react"

import React from "react";

function NavBar() {
  return (
    <div>
      <Link color="blue">Home</Link>
      <Link>About</Link>
      <Link>Contact</Link>
    </div>
  );
}

export default NavBar;
