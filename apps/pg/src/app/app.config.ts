import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { shellRoutes } from '@pg/shell';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(shellRoutes)],
};
