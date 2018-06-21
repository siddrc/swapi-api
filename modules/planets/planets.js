const Formatter = require("../utils/format")
const uuidv4 = require('uuid/v4');
class Planets{
  static getResults(results){
    const data = []
    results.map(result=>{
      data.push({
        "id":uuidv4(),
        "name": result.name,
        "rotation_period": result.rotation_period,
        "orbital_period": result.orbital_period,
        "diameter": result.diameter,
        "climate": result.climate,
        "url":Formatter.getServiceURL(result.url)
      })
    })
    return data
  }
  static getFormattedAttributes(results){
    results.residents = Formatter.formatServiceURL(results.residents)
    results.films = Formatter.formatServiceURL(results.films)
    return results
  }
}
module.exports = Planets
