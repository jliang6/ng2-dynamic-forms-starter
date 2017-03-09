import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// ng2-dynamic-form
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormsCoreModule } from "@ng2-dynamic-forms/core";
import { DynamicFormsBootstrapUIModule } from "@ng2-dynamic-forms/ui-bootstrap";
import { MyDynamicFormComponent } from "./my-dynamic-form.component";
import { BootstrapExampleComponent } from "./bootstrap-example.component";

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroService } from './hero.service';

@NgModule({
  imports:      [ 
  					BrowserModule,
  					FormsModule,
            HttpModule,
            InMemoryWebApiModule.forRoot(InMemoryDataService),
            AppRoutingModule,

            DynamicFormsCoreModule.forRoot(), 
            DynamicFormsBootstrapUIModule, 
            ReactiveFormsModule
  ],
  declarations: [ 
  					AppComponent,
            DashboardComponent,
  					HeroDetailComponent,
  					HeroesComponent,
            PageNotFoundComponent,
            
            MyDynamicFormComponent,
            BootstrapExampleComponent,

            HeroSearchComponent,
  ],
  providers: [
  					HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
