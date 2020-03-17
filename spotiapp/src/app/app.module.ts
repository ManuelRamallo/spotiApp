import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { CardsComponent } from './shared/cards/cards.component';

// ROUTES
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// PETIS HTTP
import { HttpClientModule } from '@angular/common/http';

// PIPES
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './shared/loading/loading.component';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    FooterComponent,
    FullLayoutComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
