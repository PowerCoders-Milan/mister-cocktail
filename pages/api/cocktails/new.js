import cocktailController from "../../../controllers/cocktail";


export default async function handler(req, res) {
  // take the title and description from the request body
  const cocktail = await cocktailController.create({
    title, description
  })
  res.status(200).redirect(`/cocktails/${cocktail.id}`);
}
