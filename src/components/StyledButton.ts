import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { RefAttributes } from 'react';
import { LinkProps } from 'react-router-dom';

const StyledButton = styled(Button)<
  ButtonProps | (LinkProps & RefAttributes<HTMLAnchorElement>)
>(({ theme }) => ({
  '&.Mui-disabled': {
    color: theme.palette.background.paper,
    borderColor: theme.palette.background.paper,
  },
}));

export default StyledButton;
