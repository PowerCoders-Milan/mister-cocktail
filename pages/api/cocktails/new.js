import cocktailController from "../../../controllers/cocktail";

export default async function handler(req, res) {
  const { title, description, imageUrl } = req.body;
  console.log('cloudinary image', req.body)
  const cocktail = await cocktailController.create({
    title, description, imageUrl
  })
  res.status(200).redirect(`/cocktails/${cocktail.id}`);
}
