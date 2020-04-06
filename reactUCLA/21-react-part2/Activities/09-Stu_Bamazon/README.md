# Bamazon, the MERN Way

We're going to revisit the idea of building a Bamazon storefront, but this time as a full-stack MERN application! Don't worry, this is just going to be a prototype, so we don't need to bother with user logins or any actual checkout process. What we do want, though, is an admin page so we can add products, and then two other pages to display the product info.

### Front-End

Use React and `react-router-dom` to make three routes/pages:

  * `/admin` : A form that will allow users to enter new products into the database. This does not need to be password-protected.

  * `/` : The homepage that shows a list of all products in the database. Only show the product name and a link to the next route.

  * `/product/:upc` : Individual product page that shows the full product description and quantity. This is a dynamic route that will pull any product info based on the URL parameter.

### Back-End

Install `mongoose` and define a Product model to capture the following data:

  * product name
  * description
  * quantity
  * UPC code

Also build three API routes to:

  * POST a new product into Mongo DB
  * GET all products that have a quantity greater than zero
  * GET a single product based on a given UPC code

### Hints

Don't waste time on styling. You can always make it look pretty later when the functionality is there.

It may be easier to start on the back-end first and get all three API routes working. Remember, you can use Postman to test routes when you don't have a front-end yet. But be mindful of which localhost port you are testing on.

On the front-end, tackle your pages/components one at a time. Do the Homepage component first, then the individual Product component, then the Admin component.

Reference the following for help with using parameters in react-router: <https://tylermcginnis.com/react-router-url-parameters/>

### BONUS

On the individual product page, include a "Buy One" button that, when clicked, subtracts one from the quantity. This means you'll need to add a PUT route on the back-end that updates Mongo DB accordingly.