import useMap from '../../hooks/useMap/use-map';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { City } from '../../types/offer';

type MapProps = {
city: City;
}

function Map({city}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  useMap(mapRef, city.location);

  return(
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
