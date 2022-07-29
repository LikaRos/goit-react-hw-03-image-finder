import { Component } from 'react';
import styles from './Modal.module.css';

import PropTypes from 'prop-types';

// export const Modal = ({ onClose }) =>
export class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }
  componentWillUnount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }
  handleCloseModal = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    const { onClose, title, children } = this.props;

    return (
      <>
        <div className={styles.backdrop}>
          <div className={styles.modalDiv}>
            <img className={styles.imageStyle} src="" alt="" />

            <div className="modal-body">{children}</div>

            <button type="button" className={styles.btn} onClick={onClose}>
              {' '}
              Ok
            </button>
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
