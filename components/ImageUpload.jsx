import { useState } from "react"

export default function ImageUpload () {
  const [url, setUrl] = useState('')
  const handleChange = async (event) => {
    console.log(event.target.files[0])
    const imageInput = event.target.files[0]
    const imageFormData = new FormData()
    imageFormData.append('file', imageInput)
    imageFormData.append('upload_preset', 'unsigned_upload')
    console.log(Object.fromEntries(imageFormData))
    const responseCloudinary = await fetch('https://api.cloudinary.com/v1_1/dzvox0kev/image/upload', {
      method: "POST",
      body: imageFormData
    })
    const responseCloudinaryData = await responseCloudinary.json()
    const secureUrl = responseCloudinaryData.secure_url
    console.log(secureUrl)
    setUrl(secureUrl)
  }
  return (
    <>
      <label htmlFor="image">Upload an Image</label>
      <input type="file" accept=".jpg, .png, .jpeg" name="image" id="image" onChange={handleChange}/>
      <input type="text" hidden={true} name="imageUrl" id="imageUrl" defaultValue={url}/>
      <br />
      <br />
    </>
  )
}
