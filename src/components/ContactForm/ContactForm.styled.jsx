// import { styled } from '@mui/material';
import { Form } from 'formik';
import styled from '@emotion/styled';

export const FormContainer = styled(Form)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  margin: '0 auto',
}));

export const RowContainer = ({ children }) => (
  <div
    style={{
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '1fr 1fr',
      justifyContent: 'center',
      marginBottom: '16px',
      gap: '8px',
    }}
  >
    {children}
  </div>
);
