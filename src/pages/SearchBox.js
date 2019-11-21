import React from 'react';
import DateFormat from "dateformat";
import PropTypes from 'prop-types';
import { fade, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
});
  
class SearchBox extends React.Component {
    constructor(props) {
      super(props);
      
      var ndate = DateFormat(new Date(), "yyyymm");
      this.state = {value: '', date: ndate};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      window.location.assign("/user/"+ this.state.date + "/" +this.state.value);
      event.preventDefault();
    }
  
    render() {
      const { classes } = this.props;
      return (
        <form onSubmit={this.handleSubmit}>
            <InputBase
              placeholder="User Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={this.state.value}
              onChange={this.handleChange}
              inputProps={{ 'aria-label': 'search' }}
            />
        </form>
      );
    }
}

  

SearchBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SearchBox);