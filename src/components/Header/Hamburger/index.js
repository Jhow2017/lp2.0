import React, { useState } from "react";

import './hamburguer.css';

const Hamburger = () => {

const [open, setOpen] = useState(false);
return (

    <div
        className={open ? "menu-btn open" : "menu-btn"}
        onClick={() => setOpen(!open)}
      >
        <div className="menu-btn__burger"></div>
      </div>
  );
}

export default Hamburger;