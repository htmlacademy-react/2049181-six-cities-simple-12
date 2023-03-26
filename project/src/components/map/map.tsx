import useMap from '../../hooks/useMap/use-map';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { Location, Offer } from '../../types/offer';
import { Icon, Marker, layerGroup } from 'leaflet';

type MapProps = {
  points: Offer[];
}

const defaultPin = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({points}: MapProps): JSX.Element {
  const handleLocation = ():Location => {
    if (points.length > 0) {
      return points[0].city.location;
    }
    return {
      latitude: 46.278573,
      longitude: 36.531350,
      zoom: 12,
    };
  };

  const location = handleLocation();
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const markersLayer = layerGroup();

  useEffect(() => {
    if (map) {
      map.removeLayer(markersLayer);
      map.setView([location.latitude, location.longitude], location.zoom);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        },
        {
          icon: defaultPin
        });
        marker.addTo(markersLayer);
      }
      );
      map.addLayer(markersLayer);
    }
  }, [map, points, location, markersLayer]);

  return(
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
