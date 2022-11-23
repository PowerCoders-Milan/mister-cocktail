import cocktailController from "../../../controllers/cocktail";


export default async function handler(req, res) {
  const { title, description } = req.query;
  const cocktail = await cocktailController.create({
    title, description
  })
  res.status(200).redirect(`/cocktails/${cocktail.id}`);
}
