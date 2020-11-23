# Custom Carousel

## Overview

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

1. Selecting a random picture from a block of pictures and display four at a time.
   - currently displaying 3 blocks
2. The user can click left or right with each block moving accordingly.
   - React TransitionGroup add on, provide excellent way to handle block transitions.
   - React useState hook to keep the state of the block index
3. Reaching both ends, buttons are disabled.

## Requirements

- React (16.04)

## Installing and Running with NPM

- `npm install`
- `npm start`

## Installing and Running with Yarn

- `yarn install`
- `yarn start`

## Testing

- Carousel Snapshot
- Mocking a click event.
  `Testing - src/tests/Carousel.test.js`

To run tests:
`npm test` or `yarn test`
