import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppModule} from './app.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AppModule,
    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
