const Formatter = require("../utils/format")
const uuidv4 = require('uuid/v4');
class Vehicles{
  static getResults(results){
    const data = []
    results.map(result=>{
      data.push({
        "id":uuidv4(),
        "name": result.name,
        "model": result.model,
        "manufacturer": result.manufacturer,
        "cost_in_credits": result.cost_in_credits,
        "length": result.length,
        "url":Formatter.getServiceURL(result.url)
      })
    })
    return data
  }
  static getFormattedAttributes(results){
    results.pilots = Formatter.formatServiceURL(results.pilots)
    results.films = Formatter.formatServiceURL(results.films)
    return results
  }
}
module.exports = Vehicles
