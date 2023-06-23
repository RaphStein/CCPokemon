import { Pipe, PipeTransform } from '@angular/core';
import { Types } from '../interfaces/PokemonResponse';
import { Type } from '@angular/compiler';

@Pipe({
  name: 'pokemonTypes'
})
export class PokemonTypesPipe implements PipeTransform {
  transform(value: Types[], arg: string): string {
    let valeur:string = "";
    for (let i in value) {
      if ( valeur !== ""){
        valeur += arg
      }
      console.log(value[i]) ;
      valeur += value[i].type.name;
    }
    return valeur;
  }
}
