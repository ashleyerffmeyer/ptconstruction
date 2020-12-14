import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    Container
} from "@material-ui/core";
import Home from "../../pages/Home/Home";
import Residential from '../../pages/Residential/Residential';
import ContactUs from '../../pages/ContactUs/ContactUs';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Commercial from '../../pages/Commercial/Commercial';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navbarDisplayFlex: {
            display: `flex`,
            justifyContent: `space-between`,
        },
        navDisplayFlex: {
            display: `flex`,
            justifyContent: `space-between`
        },
        linkText: {
            textDecoration: `none`,
            textTransform: `uppercase`,
            color: `white`
        },
        title: {
            display: 'flex',
            marginTop: theme.spacing(2),
            justifyContent: `space-between`,
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
    }));

const navLinks = [
    { title: `home`, path: `/` },
    { title: `residential`, path: `/residential` },
    { title: `commercial`, path: `/commercial` },
    { title: `about us`, path: `/about-us` },
    { title: `contact us`, path: `/contact-us` }
];

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
                    <div>
                        <Typography className={classes.title} variant="h5" noWrap>
                            PT Construction
                        </Typography>
                    </div>
                    <List
                        component="nav"
                        aria-labelledby="main navigation"
                        className={classes.navDisplayFlex}
                    >
                        {navLinks.map(({ title, path }) => (
                            <a href={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </a>
                        ))}
                    </List>
                </Container>
            </Toolbar>
        </AppBar >
    );
};
export default Header;
