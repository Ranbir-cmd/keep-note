import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const navList = [
  { id: 1, name: "Notes", icon: <Lightbulb />, route: "/" },
  { id: 2, name: "Archives", icon: <Archive />, route: "/archive" },
  { id: 3, name: "Trash", icon: <Delete />, route: "/trash" },
];

const NavList = () => {
  return (
    <div>
      <List>
        {navList.map((list) => (
          <Link
            to={list.route}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem button key={list.id}>
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default NavList;
