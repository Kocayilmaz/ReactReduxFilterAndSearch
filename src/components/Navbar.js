import React, { useState } from "react";
import { Drawer } from "@mantine/core";
import profileImg from "../İmages/Profileİmg.jpeg";
import logo from "../assets/logo192.png";

export const Navbar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="navbar">
      <div className="logo-title">
        <img src={logo} alt="Logo" className="logo" />
        <span className="title">R🎏DA1</span>
      </div>

      <div className="navbar-title">𝐑𝐞𝐚𝐜𝐭 𝐅𝐢𝐠𝐦𝐚 𝐃𝐞𝐬𝐢𝐧𝐠 𝐀𝐭𝐭𝐞𝐦𝐩𝐭 1</div>

      <ul>
        <li>
          <img
            src={profileImg}
            alt="Profile"
            className="profile-image"
            onClick={() => setOpened(true)}
          />
        </li>
      </ul>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
        size="md"
      >
        <div className="menu-content">
          <h2>Menu</h2>
          {/* Menü içeriği */}
        </div>
      </Drawer>
    </div>
  );
};
