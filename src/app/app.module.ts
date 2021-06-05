import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { FeComponent } from './components/fe/fe.component';
import { FormComponent } from './components/form/form.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { SearchComponent } from './components/search/search.component';
import { DataProtectionComponent } from './components/data-protection/data-protection.component';

import { DataProtectionService } from './services/data-protection.service';
import { CacheService } from './services/cache.service';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    FeComponent,
    FormComponent,
    TodolistComponent,
    SearchComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AmplifyUIAngularModule
  ],
  providers: [CacheService, DataProtectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
