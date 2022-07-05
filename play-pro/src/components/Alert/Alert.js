import { Alert, Stack } from '@mui/material';

const AlertMessage = ({ type, message }) => {
    return (
        <div>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity={type}>{message}</Alert>
            </Stack>
        </div>
    )
}

export default AlertMessage