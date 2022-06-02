import './Spinner.css';
import { CircularProgress } from "@mui/material";

const Spinner = () => {
    return(
        <div className="spinner-container">
            <CircularProgress color='inherit' />
        </div>
    )
}

export default Spinner