import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./sidebar.css";
import EmployeeOptions from "../../data/dropdown";
import AdminOption from "../../data/adminDropdown";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import initialDropdown from "../../data/initialList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from "react-router";
import { withRouter } from "react-router";
import { AccountCircle } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: '#fff',
    color: "black",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    background: '#fff',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  btn: {
    color: "#424949",
  },
  logout: {
    marginLeft: 950
  }
}));

function Sidenav({ props, children, logout }) {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [menuName, setMenuName] = React.useState(false);
  const [sidenavControl, setSideNavControl] = React.useState([]);
  const [dropdownPath, setDropdownPath] = React.useState('');
  const [Employeedropdown, setEmployeedropdown] = React.useState(EmployeeOptions)
  const [AdminDropdown, setAdminDropdown] = React.useState(AdminOption);
  const [InitialSideNav, setInitialSideNav] = React.useState(initialDropdown);
  const [userRole, setUserRole] = React.useState(localStorage.getItem('role'))
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [age, setAge] = React.useState(false);
  const [listControl, setlistControl] = React.useState(false);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = (type) => {
    setAnchorEl(null);
    console.log('type', type);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };


  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handlesideBar = async (children, name, path) => {
    debugger;
    setAnchorEl(null);
    console.log("children", children)
    await setSideNavControl(old => children
    )
    setMenuName(name);
    await setDropdownPath(path);
    history.push(path);
    setlistControl(true);
    console.log("path", dropdownPath);
  }
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleLogout = () => {
    debugger;
    localStorage.removeItem('auth-token');
    localStorage.removeItem('role');
    logout()

  }
  return (

    <div className={classes.root}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
              {menuName == "" ? "Home" : menuName}<ArrowDropDownIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              onChange={handleChange}

            >
              {userRole === 'Admin' ? AdminDropdown.map(dropdown => {
                return (
                  <MenuItem key={dropdown.id} onClick={() => handlesideBar(dropdown.children, dropdown.name, dropdown.path)} > {dropdown.name}</MenuItem>
                );
              }) : Employeedropdown.map(dropdown => {
                return (
                  <MenuItem key={dropdown.id} onClick={() => handlesideBar(dropdown.children, dropdown.name, dropdown.path)} > {dropdown.name}</MenuItem>
                );
              })}
            </Menu>
          </Typography>
          <Button className={classes.logout} onClick={handleLogout}>Logout</Button>
        </Toolbar>

      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        {listControl ?
          <List>
            {sidenavControl.map((side, index) => {
              return (
                <div>
                  <ListItem button key={side.id} onClick={() => history.push(side.path)}>
                    <ListItemIcon>{index % 2 === 0 ? <FontAwesomeIcon icon={side.icons} /> : <FontAwesomeIcon icon={side.icons} />}</ListItemIcon>
                    <ListItemText>{side.name}</ListItemText>
                  </ListItem>
                </div>
              );
            })}

          </List> :
          <List>
            {InitialSideNav.map((side, index) => {
              return (
                <div>
                  <ListItem button key={side.id} onClick={() => history.push(side.path)}>
                    <ListItemIcon>{index % 2 === 0 ? <FontAwesomeIcon icon={side.icons} /> : <FontAwesomeIcon icon={side.icons} />}</ListItemIcon>
                    <ListItemText>{side.name}</ListItemText>
                  </ListItem>
                </div>
              );
            })}

          </List>}

        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>

  );
}
export default withRouter(Sidenav);