import './not-found-page.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <div id="nfp">

      <Helmet>
        <title>Six Cities: page not found</title>
      </Helmet>

      <div className="fof">
        <h1>Error 404</h1>
        <div className='message_404'>Page not found because it was never there</div>
        <Link to="/" className="button_404">Go to home page</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
