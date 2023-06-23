import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environment/environment';
import { PokemonResponse } from '../interfaces/PokemonResponse';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private url ="https://pokeapi.co/api/v2/pokemon/";
  
  currentPokemon = new BehaviorSubject<PokemonResponse | undefined>(undefined)

  constructor(private http: HttpClient) { }

  getPokemonInfos(pokemonName: string){
    this.http.get<PokemonResponse>(this.url + pokemonName).subscribe((reponse)=>{
      this.currentPokemon.next(reponse)
    });

  }
}
