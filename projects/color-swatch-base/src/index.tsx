import { render } from 'react-dom';

import Application from './Application';
import { RGBContextProvider } from './context';
import './style.scss';

const rootElement = document.getElementById('root');
render(
  <RGBContextProvider>
    <Application />
  </RGBContextProvider>,
  rootElement
);
