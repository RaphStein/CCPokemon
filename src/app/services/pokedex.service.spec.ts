import { TestBed } from '@angular/core/testing';
import { PokedexService } from './pokedex.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('PokedexService', () => {
  let service: PokedexService;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PokedexService);
    httpClient = TestBed.inject(HttpClient);
  });
  
  it('should call httpClient.get', () => {
    spyOn(httpClient, 'get').and.returnValue(of(mockResponse))
    service.getPokemonInfos("Exeggcute");
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });

  it('should set currentPokemon with the values', () => {
    spyOn(httpClient, 'get').and.returnValue(of(mockResponse))
    service.getPokemonInfos("Exeggcute");
    service.currentPokemon.subscribe(current =>{
      expect(current?.name).toEqual("exeggcute");
      expect(current?.height).toEqual(4);
      expect(current?.weight).toEqual(25);
      expect(current?.types.length).toEqual(2);
      expect(current?.abilities.length).toEqual(2);
    })
  });

 
});



const mockResponse = {
  "abilities": [
      {
          "ability": {
              "name": "chlorophyll",
              "url": "https://pokeapi.co/api/v2/ability/34/"
          },
          "is_hidden": false,
          "slot": 1
      },
      {
          "ability": {
              "name": "harvest",
              "url": "https://pokeapi.co/api/v2/ability/139/"
          },
          "is_hidden": true,
          "slot": 3
      }
  ],
  "base_experience": 65,
  "forms": [
      {
          "name": "exeggcute",
          "url": "https://pokeapi.co/api/v2/pokemon-form/102/"
      }
  ],
  "game_indices": [
      {
          "game_index": 12,
          "version": {
              "name": "red",
              "url": "https://pokeapi.co/api/v2/version/1/"
          }
      },
      {
          "game_index": 12,
          "version": {
              "name": "blue",
              "url": "https://pokeapi.co/api/v2/version/2/"
          }
      },
      {
          "game_index": 12,
          "version": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version/3/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "gold",
              "url": "https://pokeapi.co/api/v2/version/4/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "silver",
              "url": "https://pokeapi.co/api/v2/version/5/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version/6/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "ruby",
              "url": "https://pokeapi.co/api/v2/version/7/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "sapphire",
              "url": "https://pokeapi.co/api/v2/version/8/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version/9/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "firered",
              "url": "https://pokeapi.co/api/v2/version/10/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "leafgreen",
              "url": "https://pokeapi.co/api/v2/version/11/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "diamond",
              "url": "https://pokeapi.co/api/v2/version/12/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "pearl",
              "url": "https://pokeapi.co/api/v2/version/13/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version/14/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "heartgold",
              "url": "https://pokeapi.co/api/v2/version/15/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "soulsilver",
              "url": "https://pokeapi.co/api/v2/version/16/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "black",
              "url": "https://pokeapi.co/api/v2/version/17/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "white",
              "url": "https://pokeapi.co/api/v2/version/18/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "black-2",
              "url": "https://pokeapi.co/api/v2/version/21/"
          }
      },
      {
          "game_index": 102,
          "version": {
              "name": "white-2",
              "url": "https://pokeapi.co/api/v2/version/22/"
          }
      }
  ],
  "height": 4,
  "held_items": [
      {
          "item": {
              "name": "psychic-seed",
              "url": "https://pokeapi.co/api/v2/item/899/"
          },
          "version_details": [
              {
                  "rarity": 5,
                  "version": {
                      "name": "sun",
                      "url": "https://pokeapi.co/api/v2/version/27/"
                  }
              },
              {
                  "rarity": 5,
                  "version": {
                      "name": "moon",
                      "url": "https://pokeapi.co/api/v2/version/28/"
                  }
              },
              {
                  "rarity": 5,
                  "version": {
                      "name": "ultra-sun",
                      "url": "https://pokeapi.co/api/v2/version/29/"
                  }
              },
              {
                  "rarity": 5,
                  "version": {
                      "name": "ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version/30/"
                  }
              }
          ]
      }
  ],
  "id": 102,
  "is_default": true,
  "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/102/encounters",
  "moves": [
      {
          "move": {
              "name": "swords-dance",
              "url": "https://pokeapi.co/api/v2/move/14/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "headbutt",
              "url": "https://pokeapi.co/api/v2/move/29/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "take-down",
              "url": "https://pokeapi.co/api/v2/move/36/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "double-edge",
              "url": "https://pokeapi.co/api/v2/move/38/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "psybeam",
              "url": "https://pokeapi.co/api/v2/move/60/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 27,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "strength",
              "url": "https://pokeapi.co/api/v2/move/70/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "absorb",
              "url": "https://pokeapi.co/api/v2/move/71/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "mega-drain",
              "url": "https://pokeapi.co/api/v2/move/72/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 15,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "leech-seed",
              "url": "https://pokeapi.co/api/v2/move/73/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 28,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 28,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 13,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 13,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 13,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 13,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 13,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 11,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 11,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 11,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 11,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 13,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 13,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 11,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 11,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 11,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 11,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 11,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 34,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 10,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "solar-beam",
              "url": "https://pokeapi.co/api/v2/move/76/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 42,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 42,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 43,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 48,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 55,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "poison-powder",
              "url": "https://pokeapi.co/api/v2/move/77/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 31,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 31,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 31,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 31,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 31,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 21,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 21,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 21,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 21,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 31,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 31,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 21,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 21,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 21,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 21,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 21,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 18,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "stun-spore",
              "url": "https://pokeapi.co/api/v2/move/78/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 32,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 32,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 25,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 25,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 25,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 25,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 25,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 25,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 25,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 16,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "sleep-powder",
              "url": "https://pokeapi.co/api/v2/move/79/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 48,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 48,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 23,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 23,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 23,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 23,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 23,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 23,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 23,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 23,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 23,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 20,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "toxic",
              "url": "https://pokeapi.co/api/v2/move/92/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "confusion",
              "url": "https://pokeapi.co/api/v2/move/93/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 27,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 27,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 27,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 27,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 19,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 27,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 27,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 27,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 27,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 27,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 14,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 20,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "psychic",
              "url": "https://pokeapi.co/api/v2/move/94/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 47,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 47,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 47,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 47,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "hypnosis",
              "url": "https://pokeapi.co/api/v2/move/95/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "rage",
              "url": "https://pokeapi.co/api/v2/move/99/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "teleport",
              "url": "https://pokeapi.co/api/v2/move/100/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "mimic",
              "url": "https://pokeapi.co/api/v2/move/102/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "double-team",
              "url": "https://pokeapi.co/api/v2/move/104/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "light-screen",
              "url": "https://pokeapi.co/api/v2/move/113/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "reflect",
              "url": "https://pokeapi.co/api/v2/move/115/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 25,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 25,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 7,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 41,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 5,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "bide",
              "url": "https://pokeapi.co/api/v2/move/117/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "self-destruct",
              "url": "https://pokeapi.co/api/v2/move/120/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "egg-bomb",
              "url": "https://pokeapi.co/api/v2/move/121/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "dream-eater",
              "url": "https://pokeapi.co/api/v2/move/138/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "barrage",
              "url": "https://pokeapi.co/api/v2/move/140/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "flash",
              "url": "https://pokeapi.co/api/v2/move/148/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "psywave",
              "url": "https://pokeapi.co/api/v2/move/149/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "explosion",
              "url": "https://pokeapi.co/api/v2/move/153/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "rest",
              "url": "https://pokeapi.co/api/v2/move/156/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "substitute",
              "url": "https://pokeapi.co/api/v2/move/164/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "red-blue",
                      "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "yellow",
                      "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "thief",
              "url": "https://pokeapi.co/api/v2/move/168/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "nightmare",
              "url": "https://pokeapi.co/api/v2/move/171/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "snore",
              "url": "https://pokeapi.co/api/v2/move/173/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "curse",
              "url": "https://pokeapi.co/api/v2/move/174/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "protect",
              "url": "https://pokeapi.co/api/v2/move/182/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "sludge-bomb",
              "url": "https://pokeapi.co/api/v2/move/188/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "giga-drain",
              "url": "https://pokeapi.co/api/v2/move/202/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 35,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "endure",
              "url": "https://pokeapi.co/api/v2/move/203/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "rollout",
              "url": "https://pokeapi.co/api/v2/move/205/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "swagger",
              "url": "https://pokeapi.co/api/v2/move/207/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "attract",
              "url": "https://pokeapi.co/api/v2/move/213/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "sleep-talk",
              "url": "https://pokeapi.co/api/v2/move/214/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "return",
              "url": "https://pokeapi.co/api/v2/move/216/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "frustration",
              "url": "https://pokeapi.co/api/v2/move/218/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "synthesis",
              "url": "https://pokeapi.co/api/v2/move/235/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 25,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "moonlight",
              "url": "https://pokeapi.co/api/v2/move/236/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "hidden-power",
              "url": "https://pokeapi.co/api/v2/move/237/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "sunny-day",
              "url": "https://pokeapi.co/api/v2/move/241/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "psych-up",
              "url": "https://pokeapi.co/api/v2/move/244/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "ancient-power",
              "url": "https://pokeapi.co/api/v2/move/246/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "gold-silver",
                      "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "crystal",
                      "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "uproar",
              "url": "https://pokeapi.co/api/v2/move/253/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 1,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 45,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "facade",
              "url": "https://pokeapi.co/api/v2/move/263/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "lets-go-pikachu-lets-go-eevee",
                      "url": "https://pokeapi.co/api/v2/version-group/19/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "nature-power",
              "url": "https://pokeapi.co/api/v2/move/267/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "ingrain",
              "url": "https://pokeapi.co/api/v2/move/275/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "skill-swap",
              "url": "https://pokeapi.co/api/v2/move/285/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "secret-power",
              "url": "https://pokeapi.co/api/v2/move/290/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "extrasensory",
              "url": "https://pokeapi.co/api/v2/move/326/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 47,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 47,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 47,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 47,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 47,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 40,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "bullet-seed",
              "url": "https://pokeapi.co/api/v2/move/331/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ruby-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "emerald",
                      "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "firered-leafgreen",
                      "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
              },
              {
                  "level_learned_at": 17,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 17,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 17,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 17,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "colosseum",
                      "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "xd",
                      "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
              },
              {
                  "level_learned_at": 17,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 17,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 17,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 17,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 17,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 30,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "block",
              "url": "https://pokeapi.co/api/v2/move/335/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "gravity",
              "url": "https://pokeapi.co/api/v2/move/356/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "natural-gift",
              "url": "https://pokeapi.co/api/v2/move/363/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 37,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "lucky-chant",
              "url": "https://pokeapi.co/api/v2/move/381/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "power-swap",
              "url": "https://pokeapi.co/api/v2/move/384/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "worry-seed",
              "url": "https://pokeapi.co/api/v2/move/388/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 33,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 33,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 33,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 33,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 33,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 33,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 33,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 33,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 33,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 50,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "seed-bomb",
              "url": "https://pokeapi.co/api/v2/move/402/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "energy-ball",
              "url": "https://pokeapi.co/api/v2/move/412/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "trick-room",
              "url": "https://pokeapi.co/api/v2/move/433/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "leaf-storm",
              "url": "https://pokeapi.co/api/v2/move/437/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "captivate",
              "url": "https://pokeapi.co/api/v2/move/445/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "grass-knot",
              "url": "https://pokeapi.co/api/v2/move/447/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "diamond-pearl",
                      "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "platinum",
                      "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "heartgold-soulsilver",
                      "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "telekinesis",
              "url": "https://pokeapi.co/api/v2/move/477/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "round",
              "url": "https://pokeapi.co/api/v2/move/496/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "bestow",
              "url": "https://pokeapi.co/api/v2/move/516/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 53,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-white",
                      "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
              },
              {
                  "level_learned_at": 53,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "black-2-white-2",
                      "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
              },
              {
                  "level_learned_at": 50,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 50,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 50,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 50,
                  "move_learn_method": {
                      "name": "level-up",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "grassy-terrain",
              "url": "https://pokeapi.co/api/v2/move/580/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "egg",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "confide",
              "url": "https://pokeapi.co/api/v2/move/590/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "infestation",
              "url": "https://pokeapi.co/api/v2/move/611/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "x-y",
                      "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "omega-ruby-alpha-sapphire",
                      "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "sun-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
              },
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "machine",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                      "name": "ultra-sun-ultra-moon",
                      "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
              }
          ]
      },
      {
          "move": {
              "name": "grassy-glide",
              "url": "https://pokeapi.co/api/v2/move/803/"
          },
          "version_group_details": [
              {
                  "level_learned_at": 0,
                  "move_learn_method": {
                      "name": "tutor",
                      "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                      "name": "sword-shield",
                      "url": "https://pokeapi.co/api/v2/version-group/20/"
                  }
              }
          ]
      }
  ],
  "name": "exeggcute",
  "order": 160,
  "past_types": [],
  "species": {
      "name": "exeggcute",
      "url": "https://pokeapi.co/api/v2/pokemon-species/102/"
  },
  "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/102.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/102.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/102.png",
      "front_shiny_female": null,
      "other": {
          "dream_world": {
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/102.svg",
              "front_female": null
          },
          "home": {
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/102.png",
              "front_female": null,
              "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/102.png",
              "front_shiny_female": null
          },
          "official-artwork": {
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
              "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/102.png"
          }
      },
      "versions": {
          "generation-i": {
              "red-blue": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/102.png",
                  "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/102.png",
                  "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/102.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/102.png",
                  "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/102.png",
                  "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/102.png"
              },
              "yellow": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/102.png",
                  "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/102.png",
                  "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/102.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/102.png",
                  "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/102.png",
                  "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/102.png"
              }
          },
          "generation-ii": {
              "crystal": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/102.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/102.png",
                  "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/102.png",
                  "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/102.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/102.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/102.png",
                  "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/102.png",
                  "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/102.png"
              },
              "gold": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/102.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/102.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/102.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/102.png",
                  "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/102.png"
              },
              "silver": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/102.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/102.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/102.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/102.png",
                  "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/102.png"
              }
          },
          "generation-iii": {
              "emerald": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/102.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/102.png"
              },
              "firered-leafgreen": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/102.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/102.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/102.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/102.png"
              },
              "ruby-sapphire": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/102.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/102.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/102.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/102.png"
              }
          },
          "generation-iv": {
              "diamond-pearl": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/102.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/102.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/102.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/102.png",
                  "front_shiny_female": null
              },
              "heartgold-soulsilver": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/102.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/102.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/102.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/102.png",
                  "front_shiny_female": null
              },
              "platinum": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/102.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/102.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/102.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/102.png",
                  "front_shiny_female": null
              }
          },
          "generation-v": {
              "black-white": {
                  "animated": {
                      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/102.gif",
                      "back_female": null,
                      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/102.gif",
                      "back_shiny_female": null,
                      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/102.gif",
                      "front_female": null,
                      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/102.gif",
                      "front_shiny_female": null
                  },
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/102.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/102.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/102.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/102.png",
                  "front_shiny_female": null
              }
          },
          "generation-vi": {
              "omegaruby-alphasapphire": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/102.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/102.png",
                  "front_shiny_female": null
              },
              "x-y": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/102.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/102.png",
                  "front_shiny_female": null
              }
          },
          "generation-vii": {
              "icons": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/102.png",
                  "front_female": null
              },
              "ultra-sun-ultra-moon": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/102.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/102.png",
                  "front_shiny_female": null
              }
          },
          "generation-viii": {
              "icons": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/102.png",
                  "front_female": null
              }
          }
      }
  },
  "stats": [
      {
          "base_stat": 60,
          "effort": 0,
          "stat": {
              "name": "hp",
              "url": "https://pokeapi.co/api/v2/stat/1/"
          }
      },
      {
          "base_stat": 40,
          "effort": 0,
          "stat": {
              "name": "attack",
              "url": "https://pokeapi.co/api/v2/stat/2/"
          }
      },
      {
          "base_stat": 80,
          "effort": 1,
          "stat": {
              "name": "defense",
              "url": "https://pokeapi.co/api/v2/stat/3/"
          }
      },
      {
          "base_stat": 60,
          "effort": 0,
          "stat": {
              "name": "special-attack",
              "url": "https://pokeapi.co/api/v2/stat/4/"
          }
      },
      {
          "base_stat": 45,
          "effort": 0,
          "stat": {
              "name": "special-defense",
              "url": "https://pokeapi.co/api/v2/stat/5/"
          }
      },
      {
          "base_stat": 40,
          "effort": 0,
          "stat": {
              "name": "speed",
              "url": "https://pokeapi.co/api/v2/stat/6/"
          }
      }
  ],
  "types": [
      {
          "slot": 1,
          "type": {
              "name": "grass",
              "url": "https://pokeapi.co/api/v2/type/12/"
          }
      },
      {
          "slot": 2,
          "type": {
              "name": "psychic",
              "url": "https://pokeapi.co/api/v2/type/14/"
          }
      }
  ],
  "weight": 25
}
