import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div id="main">
      <div className="fof">
        <h1>Error 404</h1>
        <div className='message'>Page not found because it was never there</div>
        <div><a href='/'><button className="button">Go to home page</button></a></div>
      </div>
    </div>
  );
}

export default NotFoundPage;
