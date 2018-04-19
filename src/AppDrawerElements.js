import React from "react";
import { Link } from "react-router-dom";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import { MenuItem } from "material-ui/Menu";

export const DrawerMenuItems = (
  <div><center>
    <Link className="linkStyle" to="/app">
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Divider />
    <List>
      <Link className="linkStyle" to="/student">
        <ListItem button>
          <ListItemText primary="Student" />
        </ListItem>
      </Link>
      <Link className="linkStyle" to="/course">
        <ListItem button>
          <ListItemText primary="Course" />
        </ListItem>
      </Link>
      <Link className="linkStyle" to="/cohort">
        <ListItem button>
          <ListItemText primary="Cohort" />
        </ListItem>
      </Link>
      <Link className="linkStyle" to="/overall">
        <ListItem button>
          <ListItemText primary="Overall" />
        </ListItem>
      </Link>
    </List>
    <Divider />
    <List>
    <Link className="linkStyle" to="/about">
      <ListItem button>
        <ListItemText primary="About" />
      </ListItem>
      </Link>
    </List></center>
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
