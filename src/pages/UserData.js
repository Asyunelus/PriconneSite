import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import TablePagination from '@material-ui/core/TablePagination';
import Title from './components/Title.js'

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

  
class UserData extends Component {
    state = {pid:this.props.match.params.pid, results:[], page:0, rowsPerPage:10};

    componentDidMount() {
        const {pid} = this.state;

        fetch(`/api/user/${pid}`)
        .then(res => res.json())
        .then(results => {
            this.setState({results})
        })

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    }

    handleChangePage(event, newPage) {
        this.setState({page: newPage});
    };
  
    handleChangeRowsPerPage(event) {
        this.setState({rowsPerPage: +event.target.value, page:0});
    };

    render() {
        const { classes } = this.props;
        var data = this.state.results.data;
        return (
            <div className={classes.root}>
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>
                        {this.state.results.response_code === 1 ? (
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={4}>
                                     <Card className={classes.card_1}>
                                        <CardContent>
                                            <Title className={classes.title}>클랜원 {data.name} 최종 점수</Title>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className={classes.tablecell} component="th" scope="row">총합 데미지</TableCell>
                                                        <TableCell className={classes.tablecell} align="right"><NumberFormat value={data.damageall} displayType={'text'} thousandSeparator={true} suffix={' 데미지'} /></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className={classes.tablecell} component="th" scope="row">키무라 점수</TableCell>
                                                        <TableCell className={classes.tablecell} align="right"><NumberFormat value={data.kimuraall} displayType={'text'} thousandSeparator={true} suffix={' 점'} /></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className={classes.tablecell} component="th" scope="row">프팍 기여도</TableCell>
                                                        <TableCell className={classes.tablecell} align="right"><NumberFormat value={data.scoreall} displayType={'text'} thousandSeparator={true} suffix={' 점'} /></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <Tooltip title="클랜전 타격 횟수 및 딜통사기, 막타 기여에 따른 점수입니다. 타격횟수 80점, 딜통사기 및 막타기여 점유율에 따른 20점으로 구성되어 있습니다." placement="bottom">
                                                            <TableCell className={classes.tablecell} component="th" scope="row">
                                                                클랜전 참여 점수
                                                            </TableCell>
                                                        </Tooltip>
                                                        <TableCell className={classes.tablecell} align="right"><NumberFormat value={data.cbscore} displayType={'text'} thousandSeparator={true} suffix={' / 100 점'} /></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                     </Card>
                                 </Grid>
                                <Grid item xs={12} md={8}>
                                     <Card className={classes.card_1}>
                                        <CardContent>
                                            <Title className={classes.title}>보스별 타격 횟수</Title>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                  <TableRow>
                                                    <TableCell className={classes.tablecell}>보스 단계</TableCell>
                                                    <TableCell className={classes.tablecell} align="right">1넴</TableCell>
                                                    <TableCell className={classes.tablecell} align="right">2넴</TableCell>
                                                    <TableCell className={classes.tablecell} align="right">3넴</TableCell>
                                                    <TableCell className={classes.tablecell} align="right">4넴</TableCell>
                                                    <TableCell className={classes.tablecell} align="right">5넴</TableCell>
                                                  </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {data.attack_cnt.map((row, idx) => (
                                                        <TableRow key={row.level}>
                                                            <TableCell className={classes.tablecell} component="th" scope="row">
                                                                {row.level}단계
                                                            </TableCell>
                                                            <TableCell className={classes.tablecell} align="right">{row.b1}회 (x{this.state.results.setting.boss_multiply[idx].b1})</TableCell>
                                                            <TableCell className={classes.tablecell} align="right">{row.b2}회 (x{this.state.results.setting.boss_multiply[idx].b2})</TableCell>
                                                            <TableCell className={classes.tablecell} align="right">{row.b3}회 (x{this.state.results.setting.boss_multiply[idx].b3})</TableCell>
                                                            <TableCell className={classes.tablecell} align="right">{row.b4}회 (x{this.state.results.setting.boss_multiply[idx].b4})</TableCell>
                                                            <TableCell className={classes.tablecell} align="right">{row.b5}회 (x{this.state.results.setting.boss_multiply[idx].b5})</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                     </Card>
                                 </Grid>
                                <Grid item xs={12} md={12}>
                                     <Card className={classes.card_1}>
                                        <CardContent>
                                            <Title className={classes.title}>보스 타격 기록</Title>
                                            <div className={classes.tableWrapper}>
                                                <Table stickyHeader aria-label="sticky table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell className={classes.tablecell}>No.</TableCell>
                                                            <TableCell className={classes.tablecell} align="right">일차/회차/보스</TableCell>
                                                            <TableCell className={classes.tablecell} align="right">데미지</TableCell>
                                                            <TableCell className={classes.tablecell} align="right">타격 유형</TableCell>
                                                            <TableCell className={classes.tablecell} align="right">조합</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {data.attack_log.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row) => (
                                                            <TableRow key={row.idx}>
                                                                <TableCell className={classes.tablecell} component="th" scope="row">
                                                                    {row.idx}
                                                                </TableCell>
                                                                <TableCell className={classes.tablecell} align="right">{row.day}일차 / {row.turn}회차 / {row.boss}넴</TableCell>
                                                                <TableCell className={classes.tablecell} align="right"><NumberFormat value={row.damage} displayType={'text'} thousandSeparator={true} /></TableCell>
                                                                <TableCell className={classes.tablecell} align="right">
                                                                    {row.type === 3 && <span>이월</span>}
                                                                    {row.type === 2 && <span>막타</span>}
                                                                    {row.type === 1 && <span>일반</span>}
                                                                </TableCell>
                                                                <TableCell className={classes.tablecell} align="right">조합 보기</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </div>
                                            <TablePagination
                                              rowsPerPageOptions={[10, 25, 100]}
                                              component="div"
                                              count={data.attack_show}
                                              rowsPerPage={this.state.rowsPerPage}
                                              page={this.state.page}
                                              backIconButtonProps={{
                                                'aria-label': 'previous page',
                                              }}
                                              nextIconButtonProps={{
                                                'aria-label': 'next page',
                                              }}
                                              onChangePage={this.handleChangePage}
                                              onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                            />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <Card className={classes.card_1}>
                                        <CardContent>
                                            {this.state.results ? (
                                                <div>
                                                <Typography variant="h3" component="h4">
                                                    Error #{this.state.results.response_code}
                                                </Typography>
                                                <Typography variant="h6" component="p">
                                                    Error Message : {this.state.results.response_description}
                                                </Typography>
                                                </div>
                                            ) : (
                                                <Typography variant="h3" component="h4">
                                                    Loading...
                                                </Typography>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        )}
                    </Container>
                </main>
            </div>
        );
    }
}

//<GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>

export default withStyles(useStyles)(UserData);