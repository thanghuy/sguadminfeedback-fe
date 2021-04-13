import React, { Fragment } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
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
}));
const colorCustomer = createMuiTheme({
  palette: {
    primary: {
      main: '#bdbdbd',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});
const AppBarAdmin = (props) => {
    const classes = useStyles();
    const handleDrawerOpen = () => {
        props.callBackOpen();
    };
    return (
        <Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: props.open,
                })}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                    [classes.hide]: props.open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                <ThemeProvider theme={colorCustomer}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="primary" href="#" >
                      Admin
                    </Link>
                    <Typography color="secondary">Quản lý người dùng</Typography>
                  </Breadcrumbs>
                </ThemeProvider>
                </Typography>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={1} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <span style={{fontSize : 15, color : 'white',marginRight : 10}}>
                      Xin chào,
                      <span style={{marginLeft : 10}}>Nguyễn Huy Thắng</span>
                    </span>
                    <AccountCircle />
                  </IconButton>
                </div>
              </Toolbar>  
            </AppBar>
        </Fragment>
    );
};

export default AppBarAdmin;