import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withRouterConfig, withInMemoryScrolling, withEnabledBlockingInitialNavigation, withViewTransitions, withHashLocation } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { DropdownModule, SidebarModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from './environments/environment'; // Asegúrate de que esta ruta sea correcta

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      withHashLocation()
    ),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(SidebarModule, DropdownModule),
    IconSetService,
    provideAnimations(),
    provideAnimationsAsync(),
    // Aquí utilizamos importProvidersFrom para AngularFire
    importProvidersFrom(AngularFireModule.initializeApp(environment.firebase)), // Solución
    importProvidersFrom(AngularFirestoreModule),
    
  ]
};
