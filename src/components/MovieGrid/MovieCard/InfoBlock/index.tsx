import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InfoBlockContainer from './Container';
import RatingCircle from '../../../RatingCircle';

interface InfoBlockProps {
  voteAverage: number;
  voteCount: number;
  releaseDate: Date;
  originalLanguage: string;
}

const InfoBlock = ({
  voteAverage,
  voteCount,
  releaseDate,
  originalLanguage,
}: InfoBlockProps) => {
  return (
    <InfoBlockContainer>
      <RatingCircle value={voteAverage} maxValue={10} count={voteCount} />

      <Stack spacing={1}>
        <Typography variant="body2">
          Released: {releaseDate.toLocaleDateString()}
        </Typography>

        <Typography variant="body2">
          Language: {originalLanguage.toUpperCase()}
        </Typography>
      </Stack>
    </InfoBlockContainer>
  );
};

export default InfoBlock;
