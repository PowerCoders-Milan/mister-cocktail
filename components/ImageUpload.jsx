import { useState } from "react"

export default function Component() {
  // on change
  // send the image to cloudinary
  // wait for the response
  // get the url from the response
  // set the url to the cloudinary image url

  const [url, setUrl] = useState('')

  const handleChange = async (event) => {
    //select the file from the event target
    const file = event.target.files[0]
    //crete a form data to send image
    const imageFormData = new FormData()
    imageFormData.append('file', file)
    imageFormData.append('upload_preset', 'unsigned_upload')
    // send the image as a post to cloudinary
    const responseCloudinary = await fetch('https://api.cloudinary.com/v1_1/dzvox0kev/image/upload', {
      method: "POST",
      body: imageFormData
    })
    const response = await responseCloudinary.json()
    setUrl(response.secure_url)
  }

  return (
      <>
        <label htmlFor="image">Upload Image:</label><br />
        <input type="file" id="image" name="image" onChange={handleChange} /><br /><br />
        <input hidden={true} id="imageUrl" name="imageUrl" defaultValue={url}></input>
      </>
  )
}
