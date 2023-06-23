import { Pipe, PipeTransform } from '@angular/core';
import { Types } from '../interfaces/PokemonResponse';

@Pipe({
  name: 'pokemonTypes'
})
export class PokemonTypesPipe implements PipeTransform {
  transform(value: Types[], arg: string): string {
    return ''
  }

}
