import React from 'react';
import { IconHome } from '../icons';

/* eslint-disable-next-line */
export interface ToastProps {}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (props, ref) => {
    return (
      <div
        className="bg-blue-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
        id="static-example"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-mdb-autohide="false"
      >
        <div className="bg-blue-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-blue-500 rounded-t-lg">
          <p className="font-bold text-white flex items-center justify-center">
            <IconHome />
            <div className='mx-1 align-bottom'>MDBootstrap</div>
          </p>
          <div className="flex items-center">
            <p className="text-white opacity-90 text-xs">11 mins ago</p>
            <button
              type="button"
              className="box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
              data-mdb-dismiss="toast"
              aria-label="Close"
              // bg-img
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E")`,
              }}
            ></button>
          </div>
        </div>
        <div className="p-3 bg-blue-600 rounded-b-lg break-words text-white">
          Hello, world! This is a toast message.
        </div>
      </div>
    );
  }
);

export default Toast;
