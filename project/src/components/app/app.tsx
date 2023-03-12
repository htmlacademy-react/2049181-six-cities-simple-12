import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import MainEmptyPage from '../../pages/main-empty-page/main-empty-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import RoomNotLoggedPage from '../../pages/room-not-logged-page/room-not-logged-page';
import RoomPage from '../../pages/room-page/room-page';

type AppProps = {
  cardsCount: number;
}

function App({cardsCount}: AppProps): JSX.Element {
  return (
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
  );
}

export default App;
