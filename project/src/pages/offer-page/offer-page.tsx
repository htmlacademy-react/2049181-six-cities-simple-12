import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/useAppSelector/use-app-selector';
import OfferGallery from '../../components/offer/gallery/gallery';
import Mark from '../../components/offer/mark/mark';
import Name from '../../components/offer/name/name';
import Rating from '../../components/offer/rating/rating';
import Features from '../../components/offer/features/features';
import Price from '../../components/offer/price/price';
import Goods from '../../components/offer/goods/goods';
import { Navigate, useParams } from 'react-router-dom';
import Host from '../../components/offer/host/host';
import ReviewsList from '../../components/offer/reviews-list/reviews-list';
import { ClassType, PageType } from '../../const';
import Header from '../../components/header/header';
import { useAppDispatch } from '../../hooks/useAppDispatch/use-App-Dispatch';
import { fetchCommentsAction, fetchNearbyOffersAction } from '../../store/api-actions';
import { useEffect, useState } from 'react';
import LoadingPage from '../loading-page/loading-page';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';

function OfferPage(): JSX.Element {
  const [activePointId, setActivePointId] = useState(-1);
  const dispatch = useAppDispatch();
  const {id} = useParams() as {id: string};
  const offers = useAppSelector((store) => store.allOffers);
  const nearbyOffers = useAppSelector((store) => store.nearbyOffers);
  const offer = offers.find((o) => o.id === parseInt(id, 10));
  const isReviewsLoading = useAppSelector((state) => state.reviewsDataLoadingStatus);

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
    dispatch(fetchNearbyOffersAction(id));
  }, [id, dispatch]);

  if (!offer) {
    return <Navigate to="*"/>;
  }

  const {
    city:{name},
    images,
    type,
    title,
    rating,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description
  } = offer;

  if (isReviewsLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="page">
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <Helmet>
        <title>{`Six Cities: ${name} room page`}</title>
      </Helmet>

      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <OfferGallery images={images} type={type}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && <Mark classType={ClassType.OfferPage}/>}
              <Name title={title}/>
              <Rating rating={rating}/>
              <Features type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
              <Price price={price}/>
              <Goods goods={goods}/>
              <Host host={host} description={description}/>
              <ReviewsList />
            </div>
          </div>
          <Map points={nearbyOffers} type={PageType.Near} selectedPointId={activePointId}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList type={PageType.Near} offers={nearbyOffers} onSelectedPinChange={setActivePointId}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
