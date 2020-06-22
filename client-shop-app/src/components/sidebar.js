import React from 'react';
import '../assets/style/index.css';
export default function sidebar() {
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <aside className="sidebar">
      <h3>shopping catagories</h3>
      <button className="closeMenu" onClick={closeMenu}>
        &#x274C;
      </button>
      <ul>
        <li>
          <a href="#">paints</a>
        </li>
        <li>
          <a href="#">shirt</a>
        </li>
      </ul>
    </aside>
  );
}
