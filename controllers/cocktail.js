import db from '../database'

const cocktailController = {
  all: async () => {
    const cocktails = await db.Cocktail.findAll()
    const parsedCocktail = JSON.parse(JSON.stringify(cocktails))
    return parsedCocktail
  },
  find: async (id) => {
    const cocktail = await db.Cocktail.findByPk(id)
    const parsedCocktail = JSON.parse(JSON.stringify(cocktail))
    return parsedCocktail
  },
  associate: async (id, user) => {
    const cocktail = await db.Cocktail.findByPk(id)
    user.addCocktail(cocktail)
    cocktail.setUser(user)
  },
  create: async (data) => {
    const cocktail = await db.Cocktail.create(data)
    return JSON.parse(JSON.stringify(cocktail))
  }
}

export default cocktailController
