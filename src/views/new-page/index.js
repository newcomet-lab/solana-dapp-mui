// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const NewPage = () => (
    <MainCard title="Sample Card">
        <Typography variant="body2">This is new page.</Typography>
    </MainCard>
);

export default NewPage;
