import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import RoomPage from '../../pages/offer-page/offer-page';
import { Offer } from '../../types/offer';
import { Comment } from '../../types/comment';

type AppProps = {
  cardsCount: number;
  offers: Offer[];
  comments: Comment[];
}

function App({cardsCount, offers, comments}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage cardsCount={cardsCount}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route
            path={AppRoute.Room}
            element={
              <RoomPage
                offers={offers}
                comments={comments}
              />
            }
          />
          <Route
            path="*"
            element={<NotFoundPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
