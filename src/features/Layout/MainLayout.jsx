import React, { Fragment, useState } from 'react';
import AppBarAdmin from './component/AppBar'
import Menuleft from './component/MenuLeft'
const MainLayout = () => {
    const [open, setOpen] = useState(true);
    const callBackOpen = ()=>{
        setOpen(!open);
    }
    return (
        <Fragment>
            <AppBarAdmin open={open} callBackOpen={callBackOpen} />
            <Menuleft open={open} callBackOpen={callBackOpen} />
        </Fragment>
    );
};

export default MainLayout;