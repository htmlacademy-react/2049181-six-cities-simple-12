import { MAX_OFFER_GALLERY_IMAGES } from '../../../const';
import { capitalize } from '../../../utils/adapt';

type GalleryProps = {
images: string[];
type: string;
}

function OfferGallery({images, type}: GalleryProps): JSX.Element {
  const slicedImages = images.slice(0, MAX_OFFER_GALLERY_IMAGES);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          slicedImages.map((image) => (
            <div className="property__image-wrapper" key={image}>
              <img className="property__image" src={image} alt={capitalize(type)}/>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default OfferGallery;
