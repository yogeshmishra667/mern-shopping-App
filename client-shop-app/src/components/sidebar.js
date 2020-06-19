import React from 'react';
import '../index.css';
export default function sidebar() {
  return (
    <aside className="sidebar">
      <h3>shopping catagories</h3>
      <button className="closeMenu" onclick="closeMenu()">
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
