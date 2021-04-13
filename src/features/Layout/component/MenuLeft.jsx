import React from 'react';
import { useStyles } from '../../../assets/style';
import clsx from 'clsx';
import {useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import { menuList,getIcon } from '../ListMenu';


const MenuLeft = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const handleDrawerClose = () => {
        props.callBackOpen()
    };
    
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: props.open,
                [classes.drawerClose]: !props.open,
            }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {
                    menuList.map(item => (
                        <Link to={item.link} key={item.index}>
                            <ListItem
                                button
                                selected={selectedIndex === item.index}
                                onClick={(event) => handleListItemClick(event, item.index)}
                            >
                                <ListItemIcon>
                                    {getIcon(item.icon)}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
      </Drawer>
    );
};

export default MenuLeft;