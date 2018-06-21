const Formatter = require("../utils/format")
const uuidv4 = require('uuid/v4');
class Films{
  static getResults(results){
    const data = []
    results.map(result=>{
      data.push({
        "id":uuidv4(),
        "title":result.title,
        "episode_id" : result.episode_id,
        "director": result.director,
        "producer" : result.producer,
        "release_date": result.release_date,
        "url":Formatter.getServiceURL(result.url)
      })
    })
    return data
  }
  static getFormattedAttributes(results){
    results.characters = Formatter.formatServiceURL(results.characters)
    results.planets = Formatter.formatServiceURL(results.planets)
    results.starships = Formatter.formatServiceURL(results.starships)
    results.vehicles = Formatter.formatServiceURL(results.vehicles)
    results.species = Formatter.formatServiceURL(results.species)
    return results
  }
}
module.exports = Films
