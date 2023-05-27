import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Legend } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box sx={{ padding: 3 }} component="fieldset">
      <Legend>{title}</Legend>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
