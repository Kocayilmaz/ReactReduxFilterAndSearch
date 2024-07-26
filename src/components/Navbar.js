import React, { useState } from "react";
import { Drawer } from "@mantine/core";
import logo from "../assets/logo192.png";
import defaultProfileImg from "../İmages/images.jpg";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const selectedOption = useSelector((store) => store.selectedOption);

  return (
    <div className="navbar">
      <div className="logo-title">
        <img src={logo} alt="Logo" className="logo" />
        <span className="title">R🎏DA1</span>
      </div>

      <ul>
        <li>
          <img
            src={selectedOption ? selectedOption.image : defaultProfileImg}
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
