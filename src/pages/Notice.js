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

class Notice extends Component {
    state = {loaded: false, page:1, results:[]};

    componentDidMount() {
        fetch(`/api/notice/${this.state.page}`)
        .then(res => res.json())
        .then(results => {
            this.setState({results})
            this.setState({loaded: true});
        })
    }

    onTablerowClicked = (no) => {
        document.location = "./board/" + no;
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
                                        <Title>Notice</Title>
                                        <Title>클랜배틀 공지사항</Title>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className={classes.tablecell} component="th" scope="row">No.</TableCell>
                                                    <TableCell className={classes.tablecell} align="right">제목</TableCell>
                                                    <TableCell className={classes.tablecell} align="right">작성자</TableCell>
                                                    <TableCell className={classes.tablecell} align="right">작성일</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {this.state.loaded && data.notice.map((row) => (
                                                    <TableRow className={classes.tablerow} key={row.no} onClick={() => this.onTablerowClicked(row.no)} >
                                                        <TableCell className={classes.tablecell} component="th" scope="row">{row.no}</TableCell>
                                                        <TableCell className={classes.tablecell} align="right">{row.title}</TableCell>
                                                        <TableCell className={classes.tablecell} align="right">{row.author}</TableCell>
                                                        <TableCell className={classes.tablecell} align="right">{row.writeday}</TableCell>
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


export default withStyles(useStyles)(Notice);