import React, { forwardRef, useImperativeHandle, useRef } from "react";

export interface ConfirmModalHandle {
  open: () => void;
  close: () => void;
}

export interface ConfirmModalProps {
  onConfirm: () => void;
}

const ConfirmModal = forwardRef<ConfirmModalHandle, ConfirmModalProps>(
  function ConfirmModal({ onConfirm }, ref) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        dialogRef.current?.showModal();
      },
      close: () => {
        dialogRef.current?.close();
      },
    }));

    return (
      <dialog ref={dialogRef}>
        <p>Are you sure you want to remove this place?</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={() => dialogRef.current?.close()}>No</button>
      </dialog>
    );
  }
);

export default ConfirmModal;
