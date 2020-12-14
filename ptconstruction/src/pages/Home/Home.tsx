import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
    }),
);

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h5" align="center">Eco-friendly, simplified container homes & offices</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Vanquish the impossible astonishment quasar invent the universe worldlets stirred by starlight. Realm of the galaxies adipisci velit descended from astronomers finite but unbounded realm of the galaxies Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit? From which we spring sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt extraordinary claims require extraordinary evidence gathered by gravity totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo quis nostrum exercitationem ullam corporis suscipit laboriosam.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt white dwarf Drake Equation extraplanetary shores of the cosmic ocean bits of moving fluff. Euclid the sky calls to us consectetur a still more glorious dawn awaits finite but unbounded a mote of dust suspended in a sunbeam. Qui dolorem ipsum quia dolor sit amet vel illum qui dolorem eum fugiat quo voluptas nulla pariatur encyclopaedia galactica vel illum qui dolorem eum fugiat quo voluptas nulla pariatur invent the universe vastness is bearable only through love.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" align="center">Another SubTitle</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt white dwarf Drake Equation extraplanetary shores of the cosmic ocean bits of moving fluff. Euclid the sky calls to us consectetur a still more glorious dawn awaits finite but unbounded a mote of dust suspended in a sunbeam. Qui dolorem ipsum quia dolor sit amet vel illum qui dolorem eum fugiat quo voluptas nulla pariatur encyclopaedia galactica vel illum qui dolorem eum fugiat quo voluptas nulla pariatur invent the universe vastness is bearable only through love.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
export default Home;