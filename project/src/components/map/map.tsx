import useMap from '../../hooks/useMap/use-map';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { City, Offer } from '../../types/offer';
import { Icon, Marker } from 'leaflet';

type MapProps = {
city: City;
points: Offer[];
}

const defaultPin = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({city, points}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        },
        {
          icon: defaultPin
        });
        marker.addTo(map);
      }
      );
    }
  }, [map, points]);

  return(
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
