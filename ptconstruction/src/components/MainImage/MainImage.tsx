import React from 'react';
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import flw from "../../assets/flw.jpg";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        mainImage: {
            width: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }
    }),
);

const MainImage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={12} className={classes.mainImage}>
                <img alt="container home" src={flw} />
            </Grid>
        </div>
    );
};
export default MainImage;