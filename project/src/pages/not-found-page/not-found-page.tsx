import './not-found-page.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <div id="main">

      <Helmet>
        <title>Six Cities: page not found</title>
      </Helmet>

      <div className="fof">
        <h1>Error 404</h1>
        <div className='message'>Page not found because it was never there</div>
        <Link to="/" className="button">Go to home page</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
