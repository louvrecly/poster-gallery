import Stack from '@mui/material/Stack';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

interface PageControlProps {
  currentPage: number;
  pageCount: number;
  navigateToPage: (page: number) => void;
}

const PageControl = ({
  currentPage,
  pageCount,
  navigateToPage,
}: PageControlProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      <IconButton
        color="warning"
        onClick={() => navigateToPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <Icon>arrow_left</Icon>
      </IconButton>

      <Typography variant="subtitle1" align="center">
        {currentPage} / {pageCount}
      </Typography>

      <IconButton
        color="warning"
        onClick={() => navigateToPage(currentPage + 1)}
        disabled={currentPage >= pageCount}
      >
        <Icon>arrow_right</Icon>
      </IconButton>
    </Stack>
  );
};

export default PageControl;
