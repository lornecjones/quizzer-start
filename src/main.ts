import {bootstrap} from 'angular2/platform/browser'
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy}  from 'angular2/router';

// import {HelloComponent} from 'src/hello'
// bootstrap(HelloComponent);

// import {AboutComponent} from './about'
// bootstrap(AboutComponent);

import {HomeComponent} from './home'
bootstrap(HomeComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: PathLocationStrategy})]);
