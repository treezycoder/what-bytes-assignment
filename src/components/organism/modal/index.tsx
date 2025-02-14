import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // Prevent click events from propagating to the overlay
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose} // Close modal on overlay click
    >
      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* Modal Container */}
      <div
        className="relative bg-transparent dark:bg-gray-800 w-fit transition-transform transform scale-100"
        onClick={handleContentClick}
      >
        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
