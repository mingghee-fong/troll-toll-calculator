import express from 'express'
import * as dbFavBridge from '../db/favourite-bridges.ts'

const router = express.Router()

//FAVOURITE BRIDGES ROUTES
// GET /api/v1/bridges/fav
router.get('/', async (req, res) => {
  try {
    const favBridges = await dbFavBridge.getFavBridgesDb()
    res.json(favBridges)
    console.log(favBridges)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// POST /api/v1/bridges/fav
router.post('/', async (req, res) => {
  try {
    console.log("I'm being called")
    const bridge = req.body
    console.log(bridge)
    const addedBridge = await dbFavBridge.addFavBridgeDb(bridge)
    res.json(addedBridge)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// POST /api/v1/bridges/fav/:user_id
router.get('/:id', async (req, res) => {
  try {
    console.log('User Calling FavBridges')
    const id = req.params.id
    //console.log(id)
    const getFavBridge = await dbFavBridge.getFavBridgesByUserIdDb(Number(id))
    res.json(getFavBridge)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

//DELETE /api/v1/bridges/fav/:id
router.delete('/:id', async (req, res) => {
  {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      res.status(400).send('Bad Request: ID must be a number')
      return
    }
    try {
      await dbFavBridge.deleteFavBridgeDb(id)
      res.sendStatus(200)
    } catch (err) {
      console.log(err)
      res.status(500).send('Could not delete favourite bridge!')
    }
  }
})

export default router
