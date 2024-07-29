import React from "react";
import { Drawer } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { setOpenedAction } from "../redux/reducers/OpenerReducer";
import logo from "../assets/logo192.png";
import defaultProfileImg from "../İmages/images.jpg";

export const Navbar = () => {
  const dispatch = useDispatch();
  const opened = useSelector((state) => state.opener.opened);
  const selectedOption = useSelector((state) => state.selectedOption);

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
            onClick={() => dispatch(setOpenedAction(true))}
          />
        </li>
      </ul>

      <Drawer
        opened={opened}
        onClose={() => dispatch(setOpenedAction(false))}
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
