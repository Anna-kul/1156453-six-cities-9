import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  availableOffersCount: number;
}

function App({availableOffersCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<MainScreen availableOffersCount={availableOffersCount} />}
        />
        <Route
          path = {AppRoute.SingIn}
          element = {<LoginScreen/>}
        />
        <Route
          path = {AppRoute.Favorites}
          element = {
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.Room}
          element = {<PropertyScreen/>}
        />
        <Route
          path = "*"
          element = {<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
