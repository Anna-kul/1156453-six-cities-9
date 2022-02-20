import Logo from '../logo/logo';
function NotFoundScreen(): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>
      <section className="locations container">
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </section>
    </div>
  );
}

export default NotFoundScreen;

