


jf-buzzfeed

Show
README.md
# BuzzFeed - Technical Exercise
​
### Setup
​
We have set up this workspace to work automatically with React so that you're able to write in JSX if you like - but you're very welcome to delete the existing files in `app/` and use a different framework.
​
If you prefer to develop locally you can use the "Tools" and "Export" menu to download this project. Note, this tools menu is only visible once you have remixed the project.
​
### Carrying out the exercise
​
1. Hit the "Remix to Edit" button to fork the project.
2. Make your changes! Please don't spend more than a couple of hours on this task. 
3. Once you're finished please send a link to your work to your point of contact within BuzzFeed Recruitment. If you have developed offline you should send your finished project in the email.
​
​
## The exercise: Twitter Timeline
​
The goal of this exercise it to render a page of Tweets and give the user the ability to page through, search and filter them.
​
The JSON data for the list of tweets is imported for you into app.jsx so there is no need to do any data fetching. You should only need to change files within `app/`.
​
### Tasks
​
#### 1. Render and style the first page obof tweets.
​
a) Each page should consist of 10 tweets. Each tweet should show:
   - Avatar
   - Author
   - Text
   - Favourite Count
   - Retweet Count
​
b) Style the tweets so they look like media objects. They should look similar to the below but this is only a guideline.
​
   ![tweet example](https://cdn.glitch.com/9a8a2b63-234f-4e14-abaf-c98158061e5c%2Ftweet.png?1540204261739)
​
**Please note:** Some of the tweets contain URLs. You do not need to render these as links, they can remain plaintext.
​
#### 2. Add a button to load subsequent pages
​
Each time you click this button it should load in another 10 tweets.
​
#### 3. Add a form element to allow the user to search through the tweets by text
​
This, and all subsequent filters, should filter the entire list of tweets and not just the first page.
​
- **Test case**: filtering by 'ob' should render 4 tweets.
- **Test case**: filtering by 'ob' should remove the "load more" button as there is now only one page.
​
#### 4. Add a form element to trigger only displaying tweets with more than 20 favourites
​
- **Test case**: filtering by favourites > 20 should render a full page of tweets.
- **Test case**: filtering by favourites > 20 should still show the "load more" button and the filter should apply to the next tweets.
​




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`