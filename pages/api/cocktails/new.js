import cocktailController from "../../../controllers/cocktail";

export default async function handler(req, res) {
  // TODO take the title and description from the request body
  const cocktail = await cocktailController.create({
    title, description
  })
  // the redirect metod sends the user to the specified path
  res.status(200).redirect(`/cocktails/${cocktail.id}`);
}
