# Mr. Cocktail

In the next 3 days we will create a small application to create a cocktail library with the names, images and recipes of the cocktails.

Follow every step of the guide to create the correct models and connect everything together.

On Wednesday you will present your application (if you are done) to the class.

Before we start run `yarn` and `yarn add sequelize sequelize-cli pg` to install all the libraries that you need in this project.

- remember to commit your code any time you create something new

We want to make sure that we always have a working version of the App so that if we break some functionality and we want to go back to a previuous version we are always able to. (it may happen even today that we want to go back)

## Step 1 - Design the schema

The basic schema of the app has been designed for you today. You can **find it in the /database folder**.

For the final projects, and if you do the **extra** at the end of the exercise of today, you will have to design the schema by yourself

## Step 2 - Create the models

The **database folder is already setup for you**, for the Team Projects you will have to set it up yourselves!

- insert your pc username in config.json to pass the correct user for the DB creation
- remove the example.js files from models, migrations and seeders

Now you're ready!

- Use **sequelize-cli to generate the migrations** to create the Models shown in the schema.
Do you remember how to do it? --> check the slides!

The properties shown in the schema are the bare minimum, you can add more details to the models.

**Remember** to modify the automatically created Models and to connect them in index.js like shown in the slides.

## Step 3.1 - Create the seeds for Cocktails

Lets **create two cocktails** in our DB so that *we have something to show* when we render the index.js page (it's going to be where we show all the cocktails).

- Use sequelize-cli to create the seeds for 2 cocktails.
Do you remember how to do it? --> check the slides!

## Step 3.2 - Create the seeds for Admin User

We want our Admin User to alway be present. If we don't have an admin user, how will we manage the App once it is public?

Have you seen the models schema? the admin user can have the name that you prefer but he must have **admin:true**

- Use sequelize-cli to create the seeds for 1 admin user.
Do you remember how to do it? --> check the slides!

## Step 4 - Create DB and Tables

Now that you created the migrations and the seeds we can crete the DB and synchronize it with all the changes that we have done so far.

Run in this sequence:

`sequelize-cli db:create`

`sequelize-cli db:migrate`

`sequelize-cli db:seed:all`

If you mess up your DB you can always erase it with `sequelize-cli db:drop` and then recreate it.

Now *use PgAdmin 4 to visualize your DB*. Don't remember how? --> Check the slides

## Step 5 - Create the controllers

Now that you created the models and the seeds let's create the controllers to better handle our data.

- Create the controllers for User and Cocktail
Do you remember how to do it? --> check the slides!

Every time that you need to do something new with the DB, you can create a method in the controllers and use it :)

Hint: Do not create all the methods right away, create them only when you need them.

## Step 6 - Create the pages

For our most basic version of the App we need to be able to **display all the cocktails**, open up **one specific cocktail** in one page and **create a new cocktail** to add to our list.

- /pages/index.js will list all the cocktails
- /pages/cocktails/[id].js will show the info of only one cocktail
- /pages/cocktails/new.js will allow you to create once cocktail

Make sure to **use the Link element to connect the 3 pages** otherwise how will we navigate?

### Step 6.1 - List all: index.js

Here you will get all the cocktails from the DB and display them in a list.

You can use a placeholder image for all the cocktails.

- start by writing all the html that you need to list all the cocktail that you get from the DB

Aftwerwards you can refactor it by creating the **Card component** to render 1 cocktail and then the **Cocktails** component to render many **Cards**.

### Step 6.2 - View one cocktail: [id].js

Once we select one cocktail from the index we want to see alll its details in a new page just for that cocktail.

We will use the Link element to redirect us to the cocktail route and we will have to pass the id of the cocktail, for example the first one will have the route /cocktails/1

- get the id of the cocktail and find it from the DB, use what you find to render the detailed page of the cocktail.

Do you remember how to do it? --> check the slides!

### Step 6.3 - How to create an item: new.js

In the new.js page we can use a simple html form rendered in the component to get the info that we need and send it to a specific api route for the object creation.

- create an html form to get all the info, create an api route to receive these info and create a new cocktail

```
// how to create a form that points to an api route
// pages/cocktails/new.js
<form action="/api/cocktails/new">
  <label htmlFor="name">Cocktail name:</label><br/>
  <input type="text" id="name" name="name" /><br/>
  <label htmlFor="recipe">Recipe:</label><br/>
  <input type="text" id="recipe" name="recipe"/><br /><br />
  <input type="submit" value="Submit"/>
</form>
```
// api/cocktails/new.js
export default async function handler(req, res) {
  const {name, recipe} = req.query;
  const cocktail = await cocktailController.create({
    name, recipe
  })
  res.status(200).redirect(`/cocktails/${cocktail.id}`);
  // the redirect method will send you to the correct page
}

The **redirect** can send you to a new page once you are done with the creation of the Cocktail.

## Step 7 - Style

Everyone should have a unique style for his Mr. Cocktail App.

- Check the lecture on Next Frontend to see how to create you own style for the App and make it unique.

When we will present the App we will **vote for the best styles!**

- Add a nice logo to your App
- Add a Navbar to navigate your App

# Extras

Congrats on finishing the basic exercise, now you can add some more functionalities!

Pick the ones you like the most ;)

- Before adding extra features make sure that you commit your code.

We want to make sure that we always have a working version of the App so that if we break some functionality and we want to go back to a previuous version we are always able to.

## Extra 1 - No more placeholder

Arent you bored of placeholders as cocktails pictures?

Add random image to cocktails with this

- in getServerSideProps send a request to get a random image using a search term (in the example it is martini)
https://pixabay.com/api/?key=8552570-540dab6f18162a9471dc11307&q=martini&image_type=photo&pretty=true

The API Key is mine and if you all use it it will stop working (it has a daily limit)

To get your own API key and to understand how it all works check out the documentation and register as a Developer https://pixabay.com/api/docs/ (for free!).

Once you receive a response you should get the url of an image and use that.

Look carefully, what response do we get? How can we make it random?

## Extra 2 - Searchbar

Let's say our App increases to 1 million cocktails.. would we be able to find the one we want to see in the index.js page? Let's create a simple searchBar.

- Add a searchbar component that will filter the Cocktails based on their names and return only the ones that match to be displayed.

Remember to use the useEffect and useState.

## Extra 3 - Reviews

It would be nice if we could review all the cocktails and then sort them by the best rated ones, no?

Let's add the Review Table to our DB:

- Recreate the DB schema on https://draw.io/ and add the Reviews Table with all its properties and associations
- create a migration for the new model Review which takes a score from 1 to 5 and a comment

What is the relationship between the Review and the Cocktails? How would you associate them?

- In the page of a single cocktail add a form to rate and comment the cocktail
- Make sure to also show all the existing reviews of the cocktail and calculate the average score

Remember that these calculations belong to the controllers, not the pages.

**Even more Extra** in index.js calculate the average score of all the cocktails and sort them by best score.

## Extra 4 - Ingredients

Many cocktails share the same ingredients, meaning that in our App the ingredients do not have to only be in the description. They can be a Model of their own.

Why would we do this? First of all in the future we could filter for ingredients and for example get all the drinks that contain Vodka. Moreover we can add many properties to the Ingredients like the price $$ and then be able to calculate the cost of a drink!

- Recreate the DB schema on https://draw.io/ and add the Ingredients Table with all its properties and associations
- Create the Ingredients Table with the sequelize-cli migrations
- Ingredients have a name and a price

How would you associate them witht the Cocktails?

When is it that you add the ingredients to the cocktail?

Do you create the Ingredients before, after or during the creation of a New Cocktail?

## Extra 5 - Even more features

Are you still not satisfied?
You can add any feature you want..

- Make sure to keep the DB schema updated
- Save many versions of the App in case you
