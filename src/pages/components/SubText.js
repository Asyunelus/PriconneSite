import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function SubText(props) {
  return (
    <Typography component="h3" variant="h6" color="primary" gutterBottom>
      <b>{props.children}</b>
    </Typography>
  );
}

SubText.propTypes = {
  children: PropTypes.node,
};