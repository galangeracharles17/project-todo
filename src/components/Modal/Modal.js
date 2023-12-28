import React from 'react';
import styles from './Modal.module.scss';
import { RemoveScroll } from 'react-remove-scroll';
function Modal({ children, id, toggleDelete }) {
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === 'Escape') {
        toggleDelete(id);
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [id, toggleDelete]);

  return (
    <RemoveScroll>
      <div className={styles.modalWrapper}>
        <div
          className={styles.backdrop}
          onClick={() => {
            toggleDelete(id);
          }}
        ></div>
        <div className={styles.dialog}>{children}</div>
      </div>
    </RemoveScroll>
  );
}

export default Modal;
