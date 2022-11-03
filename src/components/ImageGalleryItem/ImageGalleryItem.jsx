import s from '../../styles/styles.module.css';
// const ImageGalleryItem = ({ title, url }) => {
//   return (
//     <li className={s.ImageGalleryItem}>
//       <img className={s.ImageGalleryItemImage} src={url} alt={title} />
//     </li>
//   );
// };

// export default ImageGalleryItem;

import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { largeImageURL, webformatURL, tags } = this.props.item;
    return (
      <li className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={() => this.props.openModal({ largeImageURL, tags })}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
