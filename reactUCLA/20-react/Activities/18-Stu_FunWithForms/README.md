# Fun with Forms

In this activity we will add some new functionality to the previous form example.

## Instructions

* Replace your React application's `src` folder with [Unsolved/src](Unsolved/src). Stop the dev server if it is already running. Start the app in dev mode by running `yarn start`.

* Update the `Form` component to add the following:

  * A new property on state called "password" and a corresponding input that hooks up to this state value.

  * Disable/hide the submit button if any of the three inputs have been left blank.
  
  * Change the background or border color of the input boxes when there is no data inside them. As soon as the user types, the input color should change back to normal. Remember that you can construct inline CSS with objects in JSX.
  
  * As the user types in their password, they should see a real-time message telling them if their password is weak, okay, or strong. This can be as simple as basing it off of the length, but as a bonus, try to force users to include uppercase letters, numbers, etc. (HINT: regular expressions!)