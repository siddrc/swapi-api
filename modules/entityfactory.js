const Films = require("./films/films")
const People = require("./people/people")
const Planets = require("./planets/planets")
const Species = require("./species/species")
const Starships = require("./starships/starships")
const Vehicles = require("./vehicles/vehicles")
class EntityFactory{
  constructor(){
    this.mapOfEntities = {
      "films": Films,
      "people": People,
      "planets": Planets,
      "species": Species,
      "starships": Starships,
      "vehicles": Vehicles
    }
  }
  getEntity(entityName){
    return this.mapOfEntities[entityName]
  }
}
module.exports = EntityFactory
