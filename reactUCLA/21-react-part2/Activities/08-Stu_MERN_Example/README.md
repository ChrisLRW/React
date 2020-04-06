# MERN Example

This is a full-stack MERN application, so there are a lot of files at play here. It's important to take stock of the current codebase before jumping into the actual assignment below. With a partner, try to answer the following questions:

1. Which files are front-end and which files are back-end?

2. Why are there two `package.json` files?

3. What is running on port 3000, and what is running on port 3001?

4. How is the front-end going to communicate with the back-end? (HINT: it's not that different than how we've done it in the past)

### TODO

Once you are comfortable with the existing code, it's time to finish the app. The front-end currently displays three random people, but when the "Save" button is clicked, nothing happens. Ultimately, we want to save that person's data in our database. Tackle this in two steps:

1. In `routes/api.js`, add a POST route that will save posted data into the database. Reference the Mongoose model/schema to see what data we're allowing into our database. Use Postman to make test POST requests and Robo 3T to verify that the data is actually making it into Mongo. _Remember that your server is running on port 3001!_

2. In `client/src/App.js`, use the axios library within the saveUser() method to send the selected user data to the back-end.