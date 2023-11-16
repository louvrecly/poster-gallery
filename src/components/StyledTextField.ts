import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& label': {
    color: theme.palette.background.paper,
  },
  '& input': {
    color: theme.palette.background.paper,
  },
  '& fieldset': {
    borderColor: `${theme.palette.background.paper}A`,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  '&:hover': {
    '& .MuiOutlinedInput-root fieldset': {
      borderColor: theme.palette.background.paper,
    },
  },
}));

export default StyledTextField;
