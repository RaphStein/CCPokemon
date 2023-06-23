import { Types, Type } from '../interfaces/PokemonResponse';
import { PokemonTypesPipe } from './pokemon-types.pipe';

describe('PokemonTypesPipe', () => {
  const pipe = new PokemonTypesPipe();
  const type1: Type = {
      "name": "grass",
      "url": "https://pokeapi.co/api/v2/type/12/"
  }
  const type2: Type = {
    "name": "psychic",
    "url": "https://pokeapi.co/api/v2/type/14/"
  }

  const types = [
    {
      "slot": 1,
      "type": type1
    },
    {
      "slot": 2,
      "type": type2
    }
  ]

  xit('create an instance', () => {
    
    expect(pipe).toBeTruthy();
  });
  it('transforms types to "grass, psychic"', () => {

    expect(pipe.transform(types, ", ")).toBe("grass, psychic");
  });

});
