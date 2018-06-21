const appConstants = require("../appconstants.json")
class Formatter{
  static formatServiceURL(data){
    const newData = data.map(datum=>{
      const newDatum = {}
      newDatum.label = datum
      newDatum.serviceURL = Formatter.getServiceURL(datum)
      return newDatum
    })
    return newData
  }
  static getServiceURL(url){
    let newUrl = ""
    newUrl = url.replace("https","http")
    newUrl = newUrl.replace("swapi.co",`${appConstants["IP_ADDRESS"]}:${appConstants["PORT"]}`)
    newUrl = newUrl.replace("api","starwars/api")
    return newUrl
  }
}
module.exports = Formatter
