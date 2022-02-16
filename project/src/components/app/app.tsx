import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  availableOffersCount: number;
}

function App({availableOffersCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen availableOffersCount={availableOffersCount} />
  );
}

export default App;
