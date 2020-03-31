import {registerApplication, start} from 'single-spa';

import configureStore from './store/configureStore';
import './styles/index.scss';

const store = configureStore();

registerApplication(
    'root',
    () => import('./apps/root'),
    () => true,
    {store}
);

start();
