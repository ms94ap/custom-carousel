# Custom Carousel

I really enjoyed this exercise. Although never worked with a custom carousel before, it gave me the opportunity to work and test different options on how to build a custom carousel. I hope I demonstared an understanidng of how to solve it. Thanks for your time!

## Solution Overview

1. "Fetched" data
   `App.js`
2. Carousel logic
   `app/src/components/Carousel.js`
3. Json Data
   `src/icons.json`
   - Images source: [Unsplash.com](https://unsplash.com/)
4. Sass for styling
   `src/css/carousel.scss`

## Result

The current implementation has obvious room for improvement, but meets the spec by:

1. Selecting a random picture from a block of pictures and display four at a time.
   - currently displaying 3 blocks
2. The user can click left or right with each block moving accordingly.
   - React TransitionGroup add on, provide excellent way to handle block transitions.
   - React useState hook to keep the state of the block index
3. Reaching both ends, buttons are disabled.

## Improvements

Current implementation has standard display functionality from right/left and vice verca. But a possible improvement could be giving the user the option to choose from the following:

- User sets the amount of pictures to be displayed
- Display method. Such as fade in/out etc.
- Amount of pictures loaded from each block

## Requirements

- React (16.04)

## Installing

- `npm install`
  or alternatively
- `yarn install`

## Running

- `npm start`
  or alternatively
- `yarn start`

## Testing

I applied very basic testing despite it not being my strongest skills.

- Carousel Snapshot
- Mocking a click event.
  `Testing - src/tests/Carousel.test.js`

To run tests:
`npm test` or `yarn test`

## Issues

Creating a new React project gives version 17.1. Although Jest is shipped with a new porject when `npx create-react-app my-app`, I also wanted to utilise Enzyme to test the component. Unfortunately the current Enzyme version (16.X) didn't support installed React version so I had to downgrade from React (17.1) to (16.4) which caused project compiling issues.
