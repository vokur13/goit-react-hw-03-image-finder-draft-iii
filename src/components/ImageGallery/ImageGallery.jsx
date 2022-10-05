// import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ data }) => {
  return (
    <ul className="ImageGallery">
      {data.map(item => (
        <li key={item.id} className="ImageGalleryItem">
          <img
            className="ImageGalleryItem-image"
            src={item.webformatURL}
            alt={item.tag}
          />
        </li>
      ))}
    </ul>
  );
};
