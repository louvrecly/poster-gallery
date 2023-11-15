import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';

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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <IconButton
        color="primary"
        onClick={() => navigateToPage(currentPage - 1)}
        disabled={currentPage >= 1}
      >
        <Icon>arrow_left</Icon>
      </IconButton>

      <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
        {currentPage} / {pageCount}
      </Box>

      <IconButton
        color="primary"
        onClick={() => navigateToPage(currentPage + 1)}
        disabled={currentPage >= pageCount}
      >
        <Icon>arrow_right</Icon>
      </IconButton>
    </Box>
  );
};

export default PageControl;
