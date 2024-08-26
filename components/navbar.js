// components/Navbar.js
import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">

        <Image 
          src="/assets/redes.png" 
          alt="Logo" 
          width={60} 
          height={100} 
          style={{ 
            height: "auto",
            paddingRight: "15px",
             }} />
             
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="Search" style={{ height: "34px"  }} />
      </div>

      <div className="navbar-icons">

      <Image
          src="/assets/hogar.png"
          alt="Logo"
          width={40}  // Por ejemplo, defines solo el width
          height={50} // También defines el height si quieres que sea fijo
          style={{ height: "auto" }} // Permites que el height se ajuste automáticamente
        />
        <Image
          src="/assets/usuario.png"
          alt="Logo"
          width={40}  // Por ejemplo, defines solo el width
          height={50} // También defines el height si quieres que sea fijo
          style={{ height: "auto" }} // Permites que el height se ajuste automáticamente
        />
        <Image
          src="/assets/agregar.png"
          alt="Logo"
          width={39}  // Por ejemplo, defines solo el width
          height={50} // También defines el height si quieres que sea fijo
          style={{ height: "auto" }} // Permites que el height se ajuste automáticamente
        />

        </div>
    </nav>
  );
}

export default Navbar;
