import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 } from 'uuid';

export const successToast = (mes: string) => {
    toast.success(
        <div className='success'>
            {mes}
        </div>,
        {
            toastId: v4(),
        }
    );
};
export const warningToast = (mes: string) => {
    toast.warning(
        <div className='warning'>
            {mes}
        </div>,
        {
            toastId: v4(),
        }
    );
};
export const errorToast = (mes: string) => {
    toast.error(
        <div className='error'>
            {mes}
        </div>,
        {
            toastId: v4(),
        }
    );
};
export const infoToast = (mes: string) => {
    toast.info(
        <div className='info'>
            {mes}
        </div>,
        {
            toastId: v4(),
            position: 'top-right',
        }
    );
};
