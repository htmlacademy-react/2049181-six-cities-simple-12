import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import RoomNotLoggedPage from '../../pages/room-not-logged-page/room-not-logged-page';
import MainEmptyPage from '../../pages/main-empty-page/main-empty-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import RoomPage from '../../pages/room-page/room-page';

type AppProps = {
  cardsCount: number;
}

function App({cardsCount}: AppProps): JSX.Element {
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
            element={<RoomPage/>}
          />
          <Route
            path={AppRoute.DevMainEmpty}
            element={<MainEmptyPage />}
          />
          <Route
            path={AppRoute.DevPropertyNotLogged}
            element={<RoomNotLoggedPage />}
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
