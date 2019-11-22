import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Title from './components/SubTitle.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { TableHead } from '@material-ui/core';

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

class AnalysisMain extends Component {
    state = {loaded: false, results:[]};

    componentDidMount() {
        fetch(`/api/cbd`)
        .then(res => res.json())
        .then(results => {
            this.setState({results})
            this.setState({loaded: true});
        })
    }

    onTablerowClicked = (no) => {
        document.location = "./analysis/" + no;
    }

    render() {
        const { classes } = this.props;
        var data = this.state.results;
        return (
            <div className={classes.root}>
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={12}>
                                <Card className={classes.card_1}>
                                    <CardContent>
                                        <Title>Priconne Clanbattle Analysis</Title>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className={classes.tablecell} component="th" scope="row">No.</TableCell>
                                                    <TableCell className={classes.tablecell} align="right">클랜배틀 회차</TableCell>
                                                    <TableCell className={classes.tablecell} align="right">기간</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {this.state.loaded && data.data.map((row) => (
                                                    <TableRow className={classes.tablerow} key={row.no} onClick={() => this.onTablerowClicked(row.cb)} >
                                                        <TableCell className={classes.tablecell} component="th" scope="row">{row.no}</TableCell>
                                                        <TableCell className={classes.tablecell} align="right">제 {row.turn}회 클랜배틀</TableCell>
                                                        <TableCell className={classes.tablecell} align="right">{row.startDay} ~ {row.endDay}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
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


export default withStyles(useStyles)(AnalysisMain);