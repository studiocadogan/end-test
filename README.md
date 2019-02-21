# END. SSR React Test

This app was built by Antony Cadogan to demonstrate the implementation of SSR with React + Express.

## How to run

The app is separated into three workspaces: `server`, `app` and `web` with package.json files that handle all the needed modules across each workspace. Yarn is recommended for this as it comes with workspace support out the box.

### Using Yarn

1.  `yarn`
2.  `yarn start` or `yarn workspace server start`

### Using NPM

If you're using NPM, you'll have to `cd` into each workspace and `npm install`, after which you can `cd` into `/src/server` and run `npm start`

## File Structure

I split the folders into four individual sections to demonstrate their purposes:

- /app - Contains all shared react components and state management
- /data - Contains data that's shared amongst backend and frontend (for demo purposes)
- /web - Contains logic for hydrating the app on the client side
- /server - Handles backend logic and server-side rendering

Component files were built using a `components/componentName/index.js` file structure to make importing them from their respective directories a bit more like importing a node module.

## Considerations

- I chose not to use React classes in order to reduce the amount of boilerplate code in each component. As most of them are purely presentational, don't need access to `this` and don't have their own state, I chose to make a myriad of 'dumb' components and utilize `recompose` in the event I needed to access `state`.

- I used `styled-components` to get around issues with component bulk and server-side CSS loading. I find that it's overall a tidier experience than using SCSS and rendering a compiled SCSS file although it can make identifying each component more difficult. There are debug configs to remedy this but it's still an annoyance.

- I implemented lodash-FP to demonstrate the use of a selector for getting data from the state. This was because it enables us to swap out the state for a new one, without needing to do any major refactors. This could be leveraged using `_.get` and a series of UUIDs to allow for a more intricate rendering of the state.

- Unfortunately, I did not have enough time to implement Redux, which would have replaced the need for the `data` directory. I would have liked to demonstrate the usage of selectors using the redux state which would have allowed for a more sophisticated presentation of data, but given time constraints I opted for some demo selectors that split the data into three columns and passed the childRoute prop into them, which provides a similar output given the nature of selectors described above.

- For the sake of convenience, the `dist` folder generated during the build process is inside the `server` folder, so that the script import doesn't give away any information on the server structure, which may have some slight security implications.

- I used `compose` for High-Order components (and would have used `flow` in my selectors) to escape callback hell (i.e. `thisFunction(secondFunction(thirdFunction(Component)))`). Instead I can use `compose(thisFunction, secondFunction, thirdFunction)(Component)` and curry the functions I wish to wrap my component in. This makes adding, removing, and swapping around HOCs a lot easier.
