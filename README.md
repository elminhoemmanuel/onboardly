<!-- Please update value in the {}  -->

<h1 align="center">Onboardly</h1>

<div align="center">
   Solution for a challenge from  <a href="https://investondaba.notion.site/Front-End-3rd-party-data-Integration-Intermediate-Test-7d472915904e4b98b384012b7687eb31" target="_blank">daba front end intermediate coding exercise</a>.
</div>

<div align="center">
  <h3>
    <a href="https://www.loom.com/share/4130c738f34a4a349da7fcc46187f5ec">
      Demo
    </a>
    <span> | </span>
    <a href="https://newstify.vercel.app/">
      Solution
    </a>
    <span> | </span>
    <a href="https://investondaba.notion.site/Front-End-3rd-party-data-Integration-Intermediate-Test-7d472915904e4b98b384012b7687eb31">
      Exercise
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How To Use this application locally](#how-to-use-this-application-locally)

<!-- OVERVIEW -->

## Overview

![screenshot](/public/images/preview.png)



- Find a demo of this web application at work [here](https://www.loom.com/share/4130c738f34a4a349da7fcc46187f5ec) . 

- Find a video explaining my process in deploying this web application live online [here](https://www.loom.com/share/ca8d824e5af543ab9f31a466638fe76d) . 

- The live demo of this project can be found deployed live on vercel [here](https://newsly-pi.vercel.app) . However to be able to use the third party API ( News API ) given for this project for apps that are in production requires a premium plan subscription which I currently dont have as it is quite expensive, hence the live web application may not work as expected in terms of fetching the required data so I recommend using the instructions [here](#how-to-use-this-application-locally) to test project locally. 


- My experience building this web application was enlightening. It afforded me the opportunity to flex my muscles with some technologies I use frequently as well as some new libraries like moment.js ( as opposed to formatting my dates using plain javascript) and this was tasking and rewarding. I also enjoyed how I was able to manage the data fetching and storage effectively using redux

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Redux](https://redux.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [SASS/SCSS](https://sass-lang.com/)
- [Vercel](https://vercel.com/) for deployment

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

The Features I developed are?

- Fetch all top news stories based on a particular country on page load.
- Display first news headline as top header.
- Built the "View All" button to enable a summarized or full view of news headlines
- Added the like/react functionality with animation
- Setup routing to single full news page to read more about a clicked news headline.
- Added an extra feature (not included in the required user stories) that enables user go to the original web page source of the news to read the more detailed news

## How To Use this application locally

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/elminhoemmanuel/newsly.git

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```