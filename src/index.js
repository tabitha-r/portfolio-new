import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { About } from './pages/about/about';
import { Services } from './pages/services';
import { NotFound } from './pages/notFound';
import { HomePage } from './pages/home';
import { Contact } from './pages/contact';
import { Legals } from './pages/legals'; 
import Portfolio from './pages/portfolio/portfolio';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
              <Route path="" element={<HomePage />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="*" element={<NotFound />} />
              <Route path="contact" element={<Contact />} />
              <Route path="legals" element={<Legals />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

