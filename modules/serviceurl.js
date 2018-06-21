const appConstants = require("./appconstants.json")
class ServiceURL {
  static getDataURL(entity,page){
    return `${appConstants["MAIN_URL"]}/${entity}?page=${page}`
  }
  static getDatumURL(entity,id){
    return `${appConstants["MAIN_URL"]}/${entity}/${id}`
  }
}
module.exports = ServiceURL
