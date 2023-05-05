"use client";

import { ReactElement, useCallback, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import Button from "../Button";

interface Props {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: Props) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSumbit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  return isOpen ? (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full h-full mx-auto my-6 md:w-4/6 lg:w-3/6 xl:w-2/5 lg:h-auto md:h-auto">
          <main
            className={`${
              showModal
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            } duration-300 h-full`}
          >
            <div className="relative flex flex-col w-full h-full bg-white border-0 rounded-lg shadow-lg outline-none lg:h-auto md:h-auto focus:outline-none">
              {/* HEADER */}
              <div className="relative flex items-center justify-center p-6 border-b rounded-t">
                <button
                  onClick={handleClose}
                  className="absolute p-1 transition border-0 hover:opacity-70 left-9"
                >
                  <MdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* BODY */}
              <div className="relative flex-auto p-6">{body}</div>
              {/* FOOTER */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex items-center w-full gap-4">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSumbit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  ) : null;
};
export default Modal;
