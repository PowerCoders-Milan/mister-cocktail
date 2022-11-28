import cocktailController from "../../../controllers/cocktail";


export default async function handler(req, res) {
  const { title, description, imageUrl } = req.body;
  console.log('imageUrl ', imageUrl)
  try {
    const cocktail = await cocktailController.create({
      title, description, imageUrl
    })
    res.status(200).redirect(`/cocktails/${cocktail.id}`);
  } catch (error) {
    res.status(500).redirect(`/cocktails/new?error=missing title or description`);
  }
}
