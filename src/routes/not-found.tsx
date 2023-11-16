import { useNavigate } from 'react-router';
import ErrorDisplay from '../components/ErrorDisplay';

const NotFound = () => {
  const error = new Error('Page Not Found.');
  const navigate = useNavigate();

  return (
    <ErrorDisplay
      error={error}
      actionText="Back to Home Page"
      onButtonClicked={() => navigate('/')}
    ></ErrorDisplay>
  );
};

export default NotFound;
