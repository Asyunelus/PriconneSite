import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Title from './components/SubTitle.js'

const useStyles = theme => ({
    root: {
      display: 'flex',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    tableWrapper: {
      maxHeight: 440,
      overflow: 'auto',
    },
    title: {
        fontWeight: 'bold',
    },
    tablecell: {
        fontWeight: 'bold',
    },
});

class NotFound extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={12}>
                                <Card className={classes.card_1}>
                                    <CardContent>
                                        <Title>404 Not Found!</Title>
                                        <Title>없는 페이지입니다.</Title>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </div>
        );
    }
}


export default withStyles(useStyles)(NotFound);