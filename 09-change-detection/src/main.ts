import { bootstrapApplication } from '@angular/platform-browser';
import {provideExperimentalZonelessChangeDetection} from '@angular/core'

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: []
}).catch((err) => console.error(err));
