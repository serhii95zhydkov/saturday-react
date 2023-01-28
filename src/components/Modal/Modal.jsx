import { Component } from "react";
import styles from "./modal.module.css";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeByEsc);
  }

  closeByEsc = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  render() {
    const {
      currentImage: { alt, src },
      closeModal,
    } = this.props;
    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${src}`}
            alt={alt}
            width="300"
          />
          <button className={styles.modalClose} onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
