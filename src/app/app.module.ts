import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/pokedex/search-bar/search-bar.component';
import { ResultDisplayComponent } from './components/pokedex/result-display/result-display.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PokemonTypesPipe } from './pipes/pokemon-types.pipe';
import { PokedexService } from './services/pokedex.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultDisplayComponent,
    CapitalizePipe,
    PokemonTypesPipe,
    PokedexService
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
