const Formatter = require("../utils/format")
const uuidv4 = require('uuid/v4');
class People{
  static getResults(results){
    const data = []
    results.map(result=>{
      data.push({
        "id":uuidv4(),
        "name": result.name,
        "height":result.height,
        "mass" : result.mass,
        "hair_color" : result.hair_color,
        "skin_color" : result.skin_color,
        "url":Formatter.getServiceURL(result.url)
      })
    })
    return data
  }
  static getFormattedAttributes(results){
    results.films = Formatter.formatServiceURL(results.films)
    results.species = Formatter.formatServiceURL(results.species)
    results.vehicles = Formatter.formatServiceURL(results.vehicles)
    results.starships = Formatter.formatServiceURL(results.starships)
    return results
  }
}
module.exports = People
