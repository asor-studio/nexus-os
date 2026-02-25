import { ApplicationConfig, APP_INITIALIZER, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { NexusIcons } from './config/nexus-icons.config';
import { StateService, CacheInterceptor, ErrorInterceptor, MockHttpInterceptor, MockOrchestratorService } from '@asor-studio/asor-core';
import { routes } from './app.routes';
import { initializeAsorCoreApp } from './config/nexus-asor.config';
import { APP_BASE_HREF } from '@angular/common';

export const appConfig: ApplicationConfig = {
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: initializeAsorCoreApp,
			deps: [StateService, MockOrchestratorService],
			multi: true,
		},
		provideZonelessChangeDetection(),
		{
			provide: LUCIDE_ICONS,
			multi: true,
			useValue: new LucideIconProvider(NexusIcons),
		},
		provideRouter(routes, withComponentInputBinding()),
		provideHttpClient(withInterceptorsFromDi()),
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MockHttpInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CacheInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true,
		},
		{
			provide: APP_BASE_HREF,
			useValue: '/nexus-os/',
		},
	],
};
