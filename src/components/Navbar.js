import React, { useState, useContext } from "react";
import { Drawer } from "@mantine/core";
import logo from "../assets/logo192.png";
import { Context } from "./MainContainer";
import defaultProfileImg from "../İmages/images.jpg";
import { useDispatch, useSelector } from "react-redux";
import { populateRandomData } from "../redux/reducers/CardDataReducer";

export const Navbar = () => {
  const dispatch = useDispatch();
  const cardData = useSelector((store) => store.cardData);
  const [opened, setOpened] = useState(false);
  const { selectedOption } = useContext(Context);

  return (
    <div className="navbar">
      <div
        className="logo-title"
        onClick={() => {
          dispatch(populateRandomData(10));
        }}
      >
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
