import React, { useState } from "react";
import { Drawer, Button, List, Textarea } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { setOpenedAction } from "../redux/reducers/OpenerReducer";
import logo from "../assets/logo192.png";
import defaultProfileImg from "../İmages/images.jpg";
import { Home, User, Settings, Logout } from "tabler-icons-react";

export const Navbar = () => {
  const dispatch = useDispatch();
  const opened = useSelector((state) => state.opener.opened);
  const selectedOption = useSelector((state) => state.selectedOption);
  const [communicationOpen, setCommunicationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleCommunicationClick = () => {
    setCommunicationOpen(!communicationOpen);
  };

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };

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
              Home Page
            </List.Item>
            <List.Item icon={<User />} onClick={handleProfileClick}>
              Profile
              {profileOpen && (
                <div style={{ marginTop: "10px" }}>
                  <Textarea
                    value={`PERSONAL
Name: Enes KOCAYILMAZ
Date Of Birth: 2001
Language: English, Turkish

CV
During my journey in web development, 
I have worked with various technologies, 
including React, Redux, and Mantine.
I have gained valuable experience in 
creating responsive and user-friendly 
interfaces, managing state effectively, 
and integrating APIs. My recent project 
involved designing and implementing a 
comprehensive search functionality, 
customizing UI components, 
and ensuring a seamless user experience. 
I am eager to continue learning and 
contributing to innovative projects
that challenge my skills and help in
the growth of the team and the company.`}
                    readOnly
                    autosize
                    minRows={15}
                    maxRows={15}
                    style={{
                      width: "120%",
                      maxWidth: "1200px",
                      marginLeft: "-4%",
                    }}
                  />
                </div>
              )}
            </List.Item>
            <List.Item icon={<Settings />} onClick={handleCommunicationClick}>
              Communication
              {communicationOpen && (
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/eneskocayilmaz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📷Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Kocayilmaz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      👨🏻‍💻GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/enes-kocayilmaz-a5b225253/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🌐LinkedIn
                    </a>
                  </li>
                  <li>📞+90 543 322 3005</li>
                  <li>
                    📧{" "}
                    <a href="mailto:eneskcayilmaz01@gmail.com">
                      eneskcayilmaz01@gmail.com
                    </a>
                  </li>
                </ul>
              )}
            </List.Item>
            <List.Item
              icon={<Logout />}
              onClick={() => dispatch(setOpenedAction(false))}
            >
              Exit
            </List.Item>
          </List>
          <Button
            variant="outline"
            color="blue"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={() => dispatch(setOpenedAction(false))}
          >
            Close
          </Button>
        </div>
      </Drawer>
    </div>
  );
};
