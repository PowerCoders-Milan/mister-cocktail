# EX 1 - Broken mister cocktail

Today you are going to train the skill of **fixing broken applications**.

Many time when you are **interviewed** you have to examine an application and add a feature or fix some errors (you have to find the errors first).

The exercise today will be to make **Mister Cocktail work properly**!

## Step 1 - Yarn

Whenever you download the repository of an application you need to **check** that all the **libraries have been installed** on the project.

If these aren't added you will not be able to make the app work.

So as a first step run `yarn` in the terminal.

`yarn` will **install al packages** and create the node modules folder and the yarn.lock file.

## Step 2 - DB

Now in order for our application to work we need to check what kind of DB is using.

We will need to **create a local version** of the DB on our PC. Luckily the app uses PostgreSQL wich we are already set up for and Seqeulize, which we know ow to use.

**Check the config file** (the last developer might have left his username).

**Check** that the **migrations**, the **models** and the **seeds** exist.

Run the commands to:
- create the db
- run the migrations
- run the seeds

**Open PgAdmin** to check that the **DB has been created** and the data + Tables are there.

## Launch the localhost

If the DB is set up we are ready to see if the application is running and where the problems are.

Run `yarn dev` to launch the localhost and navigate to the main page.

## Fixing errors

Some pages and functionalities are not going to work..

The way to solve this issue is to try pages from the localhost, see what doesn't work (errors or missing functionality) and go to the code to fix it.

Here **console.log is you best friend** to see the variables, the props, the body of the request and much more. Once you log it and see what's inside you can easily fix it.

**Visit every page** and **try all the functionalities** until the app is completely fixed.

There are some **comments** that the developer before you left, these comments describe the code and explain what he wanted to do before he stopped working.

Keep this as a list:

- in the index.js page I need to be able to see all the cocktails and click on one to go to the cocktail detailed page

- the cocktail detailed page needs to show the info of the cocktail

- the Navbar needs to send me to the list of all cocktail and to the creation of a new Cocktail.

-  the new.js page needs to take all the form data and send it to the api to create a new cocktail

- the api needs to create a cocktail and then redirect to the new cocktail details route

# EX 2 - Next Auth

Now that the App is working, **follow today's slides** to add next auth to the application and track the users.

We recommend adding Credentials.

*Extra* You can also choose to try and add one external Provider (more difficult, check the documentation).

Make sure to:
- install the library
- create the auth api route
- set the session in _app.js
- get the session in all the pages
- add the sign in and sign out button in the navbar

*Extra*

In the new.js api page find the current user and associate the new cocktail to it.

# Extra: EX 3 - add Coudinary as a Component

We are going to create a **cloudinary image uploader component**. Then we can add it to our form to easily upload images.

Add a **migration** that adds imageUrl to the cocktail Table.

Run the migration.

Create **ImageUpload.jsx** in the components folder.

Add this code to the page to create the component.

Read the code and try to understand how it works.. Concole log what you don't understand to try to get it.

```
import { useState } from "react"

export default function ImageUpload () {
  const [url, setUrl] = useState('')
  const handleChange = async (event) => {
    // logs the file to check that it's the right event target
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
    // Gets the image url from the cloudinary response
    const secureUrl = responseCloudinaryData.secure_url
    console.log(secureUrl)
    // Set the image url as the value of the hidden form field
    // This value will be passed with the others at the form submit
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
```

**Add this component to the form** in pages/cocktails/new.js

Make sure to add this new value in the cocktail creation in api/cocktails/new.js

Test it and see if it is working..

# Extra: EX 4 - Push to Heroku

Everything is setup to be pushed to heroku.

Create an account, follow the instructions of the heroku slides to push you application to heroku. Check if everything is still working.

You might have to add NEXTAUTH_URL as an environment variable of Heroku..
