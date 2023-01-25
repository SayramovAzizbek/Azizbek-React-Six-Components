import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an imortant agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        bibendum in turpis vel imperdiet. Fusce nec sagittis mauris. In sed
        ornare erat, ac elementum arcu. Duis dapibus, sapien ac vulputate
        commodo, sem dui consequat orci, a blandit neque est non quam. Donec
        cursus nisi quis feugiat pharetra. In quis tempor nunc, nec ornare urna.
        Donec maximus viverra lorem ac fringilla. Quisque ut ultrices enim.
        Fusce consectetur nunc id velit tincidunt, nec semper purus malesuada.
        Sed sit amet nisi tellus.
      </p>
    </div>
  );
};

export default ModalPage;
