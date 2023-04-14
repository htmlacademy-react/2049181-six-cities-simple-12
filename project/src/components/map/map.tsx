import useMap from '../../hooks/useMap/use-map';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { Location, Offer } from '../../types/offer';
import { Icon, Marker, layerGroup } from 'leaflet';
import { PageType } from '../../const';
import classNames from 'classnames';

type MapProps = {
  points: Offer[];
  type: PageType;
  selectedPointId: number;
}

const defaultPin = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const selectedPin = new Icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({points, type, selectedPointId}: MapProps): JSX.Element {
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
  const style = type === PageType.Cities
    ? {}
    : {
      'width': '1144px',
      left: '50%',
      transform: 'translateX(-50%)'
    };

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
          icon: point.id === selectedPointId
            ? selectedPin
            : defaultPin
        });
        marker.addTo(markersLayer);
      }
      );
      map.addLayer(markersLayer);
    }
  }, [map, points, location, markersLayer, selectedPointId]);

  return(
    <section className={classNames({
      'cities__map': type === PageType.Cities,
      'property__map': type === PageType.Near,
      'map': true})} ref={mapRef}
    style={style}
    >
    </section>
  );
}

export default Map;
