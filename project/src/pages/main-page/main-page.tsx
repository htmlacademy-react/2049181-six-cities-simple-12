import { Helmet } from 'react-helmet-async';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import { useAppSelector } from '../../hooks/useAppSelector/use-app-selector';
import Header from '../../components/header/header';
import { PageType, SortType } from '../../const';
import SortOptions from '../../components/sort-options/sort-options';
import { useEffect, useState } from 'react';
import { sortOffers } from '../../utils/sort';
import { useAppDispatch } from '../../hooks/useAppDispatch/use-App-Dispatch';
import { fetchAllOffersAction } from '../../store/api-actions';
import LoadingPage from '../loading-page/loading-page';
import classNames from 'classnames';
import NoOffers from '../../components/no-offers/no-offers';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [currentSortType, setCurrentSortType] = useState(SortType.Popular);
  const [activePointId, setActivePointId] = useState(-1);
  const sortTypeChangeHandler = (sortType: SortType) => setCurrentSortType(sortType);
  const getOffersByCity = (city: string) => offers.filter((offer) => offer.city.name === city);
  const offers = useAppSelector((store) => store.allOffers);
  const selectedCity = useAppSelector((store) => store.city);
  const selectedCityOffers = sortOffers(getOffersByCity(selectedCity), currentSortType);

  useEffect(() => {
    dispatch(fetchAllOffersAction());
  }, [dispatch]);

  const isOffersDataLoading = useAppSelector((state) => state.allOffersDataLoadingStatus);
  const isNoOffers = offers.length === 0;

  if(isOffersDataLoading) {
    return (
      <LoadingPage/>
    );
  }

  return (
    <div className="page page--gray page--main">
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <Helmet>
        <title>Six Cities</title>
      </Helmet>
      <Header/>
      <main className={classNames({
        'page__main': true,
        'page__main--index': true,
        'page__main--index-empty': isNoOffers
      })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs/>
        <div className="cities">
          <div className={
            classNames({
              'cities__places-container': true,
              'container': true,
              'cities__places-container--empty': isNoOffers
            })
          }
          >
            <section className={classNames({
              'cities__places': !isNoOffers,
              'places': !isNoOffers,
              'cities__no-places': isNoOffers
            })}
            >
              {
                isNoOffers
                  ? <NoOffers city={selectedCity}/>
                  : <><h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{selectedCityOffers.length} places to stay in {selectedCity}</b>
                    <SortOptions onSortTypeChange={sortTypeChangeHandler}/>
                    <OffersList offers={selectedCityOffers} type={PageType.Cities} onSelectedPinChange={setActivePointId}/>
                    </>
              }
            </section>
            <div className="cities__right-section">
              {!isNoOffers && <Map points={selectedCityOffers} type={PageType.Cities} selectedPointId={activePointId}/>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
