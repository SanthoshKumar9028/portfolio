import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (openState: boolean) => () => {
    setOpen(openState);
  };

  return "NavBar";
}

export default NavBar;
