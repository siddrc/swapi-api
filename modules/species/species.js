const Formatter = require("../utils/format")
const uuidv4 = require('uuid/v4');
class Species{
  static getResults(results){
    const data = []
    results.map(result=>{
      data.push({
        "id":uuidv4(),
        "name": result.name,
        "classification": result.classification,
        "designation": result.designation,
        "average_height": result.average_height,
        "skin_colors": result.skin_colors,
        "url":Formatter.getServiceURL(result.url)
      })
    })
    return data
  }
  static getFormattedAttributes(results){
    results.people = Formatter.formatServiceURL(results.people)
    results.films = Formatter.formatServiceURL(results.films)
    return results
  }
}
module.exports = Species
