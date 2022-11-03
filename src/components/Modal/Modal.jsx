import s from '../../styles/styles.module.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseByEsc);
  }

  handleCloseByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    const { modalData } = this.props.modalData;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={modalData.largeImageURL} alt={modalData.tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
