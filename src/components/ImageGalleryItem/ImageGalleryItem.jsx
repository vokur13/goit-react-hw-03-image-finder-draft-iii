import { Modal } from 'components/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { item, onClick } = this.props;
    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={item.webformatURL}
          alt={item.tags}
        />
        <button type="button" onClick={this.openModal}>
          Open
        </button>
        {isModalOpen && (
          <Modal
            largeImageURL={item.largeImageURL}
            tags={item.tags}
            onClose={this.closeModal}
          />
        )}
      </li>
    );
  }
}
