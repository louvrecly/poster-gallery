import Stack from '@mui/material/Stack';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

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
  const pages = Array.from(Array(pageCount).keys()).map((key) => key + 1);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      <IconButton
        color="primary"
        onClick={() => navigateToPage(currentPage - 1)}
        disabled={currentPage >= 1}
      >
        <Icon>arrow_left</Icon>
      </IconButton>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        spacing={1}
        sx={{ overflow: 'auto' }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            color="primary"
            onClick={() => navigateToPage(page)}
            disabled={currentPage === page}
            sx={{ p: 0 }}
          >
            {page}
          </Button>
        ))}
      </Stack>

      <IconButton
        color="primary"
        onClick={() => navigateToPage(currentPage + 1)}
        disabled={currentPage >= pageCount}
      >
        <Icon>arrow_right</Icon>
      </IconButton>
    </Stack>
  );
};

export default PageControl;
