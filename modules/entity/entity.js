const request = require('request-promise-native');
const ServiceURL = require("../serviceurl")
const EntityFactory = require("../entityfactory")
class Entity{
  static async getData(entity,page){
    try{
      const url = ServiceURL.getDataURL(entity,page)
      let responseFromSWAPI = await request(url)
      responseFromSWAPI = JSON.parse(responseFromSWAPI)
      responseFromSWAPI.results = new EntityFactory().getEntity(entity).getResults(responseFromSWAPI.results)
      return responseFromSWAPI
    }catch(e){
      console.error(e)
      throw e
    }
  }
  static async getDatum(entity,id){
    try{
      const url = ServiceURL.getDatumURL(entity,id)
      let responseFromSWAPI = await request(url)
      responseFromSWAPI = JSON.parse(responseFromSWAPI)
      responseFromSWAPI = new EntityFactory().getEntity(entity).getFormattedAttributes(responseFromSWAPI)
      return responseFromSWAPI
    }catch(e){
      console.error(e)
      throw e
    }
  }

}
module.exports = Entity
