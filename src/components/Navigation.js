import React from "react";

import {NavLink} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import Link from "@material-ui/core/Link";

const Navigation = () => {
    return (

        <AppBar position="static" style={{backgroundColor:'#4527a0'}}>
            <Toolbar>
                <a href={"/"}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
            </a>
                <Typography variant="h6">
                    Papiro Moderno
                </Typography>
                <a href={"/gestion-noticias"} style={{marginLeft: 80+'%'}}>
                    <p style={{color: "beige"}}>Gestión de Noticias</p>
                </a>
            </Toolbar>
        </AppBar>

    );
}
export default Navigation;