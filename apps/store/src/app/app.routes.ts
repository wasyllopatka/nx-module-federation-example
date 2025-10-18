import { loadRemote } from '@module-federation/enhanced/runtime';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

type RemoteWithRoutes = { remoteRoutes: Route[] };

export const appRoutes: Route[] = [
  {
    path: 'checkout',
    loadChildren: () =>
      loadRemote('checkout/Routes').then(
        (m) => (m as RemoteWithRoutes).remoteRoutes
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      loadRemote('products/Routes').then(
        (m) => (m as RemoteWithRoutes).remoteRoutes
      ),
  },
  { path: '', component: NxWelcomeComponent },
];
