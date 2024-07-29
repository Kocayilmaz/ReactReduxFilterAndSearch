import React from "react";
import { Drawer, Button, List } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { setOpenedAction } from "../redux/reducers/OpenerReducer";
import logo from "../assets/logo192.png";
import defaultProfileImg from "../İmages/images.jpg";
import { Home, User, Settings, Logout } from "tabler-icons-react";

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
          <List>
            <List.Item
              icon={<Home />}
              onClick={() => dispatch(setOpenedAction(false))}
            >
              Ana Sayfa
            </List.Item>
            <List.Item
              icon={<User />}
              onClick={() => dispatch(setOpenedAction(false))}
            >
              Profilim
            </List.Item>
            <List.Item
              icon={<Settings />}
              onClick={() => dispatch(setOpenedAction(false))}
            >
              Çıkış Yap
            </List.Item>
          </List>
          <Button
            variant="outline"
            color="blue"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={() => dispatch(setOpenedAction(false))}
          >
            Kapat
          </Button>
        </div>
      </Drawer>
    </div>
  );
};
