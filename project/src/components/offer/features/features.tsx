import { capitalize } from '../../../utils/adapt';

type FeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

function Features({type, bedrooms, maxAdults}: FeaturesProps): JSX.Element {
  const handleBedrooms = (quantity: number) => quantity !== 1
    ? `${quantity} Bedrooms`
    : `${quantity} Bedroom`;
  const handleAdults = (quantity: number) => quantity !== 1
    ? `Max ${quantity} adults`
    : `Max ${quantity} adult`;

  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {capitalize(type)}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {handleBedrooms(bedrooms)}
      </li>
      <li className="property__feature property__feature--adults">
        {handleAdults(maxAdults)}
      </li>
    </ul>
  );
}

export default Features;
