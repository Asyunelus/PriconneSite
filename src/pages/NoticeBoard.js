import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import Title from './components/Title.js'
//import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
//import TableRow from '@material-ui/core/TableRow';
//import { TableHead } from '@material-ui/core';

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
    tablerow: {
        '&:hover': {
            background: "#ddd",
        }
    },
});

class Notice extends Component {
    state = {nid:this.props.match.params.nid, loaded: false, results:[]};

    componentDidMount() {
        fetch(`/api/board/${this.state.nid}`)
        .then(res => res.json())
        .then(results => {
            this.setState({results})
            this.setState({loaded: true});
        })
    }
    render() {
        const { classes } = this.props;
        //var data = this.state.results;
        return (
            <div className={classes.root}>
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={12}>
                                <Card className={classes.card_1}>
                                    <CardContent>
                                    {this.state.loaded && (
                                        <span>{this.state.results.text}</span>
                                    )}
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


export default withStyles(useStyles)(Notice);