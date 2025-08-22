// components/EarlyBirdModal.tsx
import { useEffect, useRef } from "react";
import Button from "./Button";
import CloseButtonSvg from "./closeButtonSvg";

interface EarlyBirdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EarlyBirdModal = ({ isOpen, onClose }: EarlyBirdModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  // Handle native dialog close events (like pressing Esc)
  const handleDialogClose = () => {
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleDialogClose}
      className="fixed inset-0 z-50 mx-auto my-auto p-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
                bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm
                animate-scaleIn border-none outline-none"
    >
      <div
        className="relative bg-white/20 backdrop-blur-2xl rounded-2xl shadow-lg
                   p-4 sm:p-6 md:p-8
                   text-center border-2 border-white/50
                   min-h-[200px] sm:min-h-[220px] md:min-h-[240px]
                   flex flex-col justify-center gap-3 sm:gap-4 md:gap-6"
      >
        <button
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4
                     text-white text-2xl sm:text-3xl md:text-4xl font-bold
                     hover:text-red-500 cursor-pointer z-50
                     transition-colors duration-200
                     w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
                     flex items-center justify-center"
          onClick={onClose}
          aria-label="Close modal"
        >
          <CloseButtonSvg />
        </button>

        <h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl
                       font-bold text-white tracking-wide drop-shadow-lg
                       leading-tight px-2"
        >
          Early Bird Tickets Out Now!
        </h2>

        <p
          className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg
                      px-2 leading-relaxed"
        >
          Get your tickets before they are gone!
        </p>

        <div className="mt-2 sm:mt-3 md:mt-4">
          <Button
            text={"Get Tickets"}
            isNavigate={false}
            link={"https://www.yepdesk.com/roboignite"}
          />
        </div>
      </div>
    </dialog>
  );
};

export default EarlyBirdModal;
