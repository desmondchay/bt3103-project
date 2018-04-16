import React from "react";
import { Link } from "react-router-dom";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import { MenuItem } from "material-ui/Menu";

import StarIcon from "material-ui-icons/Star";

export const DrawerMenuItems = (
  <div>
    <Link className="linkStyle" to="/">
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Divider />
    <List>
      <Link className="linkStyle" to="/student">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Student View" />
        </ListItem>
      </Link>
      <Link className="linkStyle" to="/course">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Course Coordinator View" />
        </ListItem>
      </Link>
      <Link className="linkStyle" to="/cohort">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Cohort Coordinator View" />
        </ListItem>
      </Link>
      <Link className="linkStyle" to="/overall">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Overall View" />
        </ListItem>
      </Link>
    </List>
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </List>
  </div>
);

function btn_logout() {
  console.log("CLICK!");
}

const AppBarMenuItems = ({ onClick, logout }) => (
  <div>
    <MenuItem
      onClick={() => {
        onClick();
        btn_logout();
      }}
    >
      My account
    </MenuItem>
    <MenuItem
      onClick={() => {
        onClick();
        btn_logout();
      }}
    >
      Logout
    </MenuItem>
  </div>
);

export const AppBarMenuItemsExport = AppBarMenuItems;
