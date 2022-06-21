import { DialogTitle, Dialog, DialogContent } from '@mui/material';

const Modal = ({handleClose, open, children, title}) => {
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <DialogTitle>{title}</DialogTitle>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal