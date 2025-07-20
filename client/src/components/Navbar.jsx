import { ShoppingCart, User, Search, Mic, Menu } from "lucide-react";
import { useState } from "react";
import '../css/Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav class="navbar">
  <div class="navbar-container">
    
    <div class="navbar-logo">
      <a href="/">TechStore</a>
    </div>

   
    <div class="navbar-search">
      <input type="text" placeholder="Search for electronics..." />
      <button><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>


    <div class="navbar-icons">
      <button class="icon-button mic"><i class="fa-solid fa-microphone"></i></button>
      <a href="/profile" class="icon-button"><i class="fa-solid fa-user"></i></a>
      <a href="/cart" class="icon-button cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <span class="cart-count">3</span>
      </a>
      <button class="icon-button menu"><i class="fa-solid fa-list"></i></button>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
