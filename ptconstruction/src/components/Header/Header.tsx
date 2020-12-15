import * as React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    Container
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navbar: {
            backgroundColor: 'white',
        },
        navbarDisplayFlex: {
            display: `flex`,
            justifyContent: `space-between`,
            color: 'grey',
        },
        navDisplayFlex: {
            display: `flex`,
            justifyContent: `space-between`
        },
        linkText: {
            textDecoration: `none`,
            textTransform: `uppercase`,
            color: 'grey',
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
    { title: `home`, path: `/home` },
    { title: `residential`, path: `/residential` },
    { title: `commercial`, path: `/commercial` },
    { title: `about us`, path: `/about-us` },
    { title: `contact us`, path: `/contact-us` }
];

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.navbar}>
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
