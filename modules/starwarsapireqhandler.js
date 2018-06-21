const router = require("express").Router()
const Entity = require("./entity/entity")
class StarWarsAPIReqHandler {
  static getRouter() {
    router.get("/:entity", async (req, res) => {
      try {
        const entity = req.params.entity
        const page = req.query.page
        const response = await Entity.getData(entity,page)
        res.status(200).json(response)
      } catch (e) {
        res.status(500).send(e)
      }
    })
    router.get("/:entity/:id", async (req, res) => {
      try {
        const entity = req.params.entity
        const id = req.params.id
        const response = await Entity.getDatum(entity,id)
        res.send(response)
      } catch (e) {
        res.status(500).send(e)
      }
    })
    return router
  }
}
module.exports = StarWarsAPIReqHandler
