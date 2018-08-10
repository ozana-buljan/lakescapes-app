# Udacity FEND Project #8:  **LakEscapes** - Neighbourhood Map App

 This project's purpose is to build a single page web application from scratch using ReactJS and to add features provided by external APIs (like Maps Javascript API and FourSquare Places APi), focusing on components, props and state.



## Table of Contents

* [Running instructions](#)
* [App Details](#)



## Running instructions

### Run locally
*   Download the repository: click download ZIP on the right of the screen and extract the zip file to your computer or clone the repository using Git.
*   Navigate to where you unzipped the file or cloned the repository.
*  In terminal, navigate to this folder
        1. install all project dependencies with `npm install`
        2. run the project on your local server with `npm start`

* With your server running, in your browser, navigate to the site: `http://localhost:3000`

* Check out the app!

### Web live: Coming soon



## App features


### The looks
#### Result
![Lakescapes UI Desktop]()

![Lakescapes UI Mobile]()



## App Details

### File structure
Below is file structure of the app

```bash
LAKESCAPES
├── README.md  # This file
├── LICENSE.md # MIT license for the project
├── package.json # npm package manager file.
├──node_modules # file installed and provided with Create React App.
├── public
│   ├── favicon.ico # App Icon
│   └── index.html
└── src
    ├── Componenents # All React components for this app are in this directory
    │     ├── Header
    │     │     ├── ToggleAsideBtn.js #Button to toggle SideNav
    │     │     └── Header.js # Sticky header
    │     ├── Main
    │     │     ├── Main.js #renders MapContainer
    │     │     └── MapContainer.js #contains all methods for displying map; markers, infowidows; as well as handlers; it renders <Map /> and <Aside /> components
    │     ├── Aside
    │     │     └── Aside.js #contains methods for handling filtering locations; renders <SideNav /> component which contains all the filtering options as well as results of filter
    │     └── Footer
    │           └── Footer.js #sticky footer
    ├── Styles
    │     ├── App.css #custom styling for this app
    │     └── index.css # Global styles
->  ├── App.js # The root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── Utils
    │     ├── places.js #arrays of locations
    │     └── mapStyles.js #custom styles for the map
    ├── Images
    │     └── (...) #images for the app
    └── index.js #This file is used for DOM rendering only.
```




### Making of
#### The task
The full list of the requirements for this proejct is at [Udacity's Project Rubric Link](https://review.udacity.com/#!/rubrics/1351/view).

#### The process

Let me start by saying that building this project tourned out to  be quite a challenge. it took me almost a month and three times starting over(!) until I finally got it right! However, it was also an amazing learning experience - which I failed to appreciate at the time, but definitely can talk about it now with the smile on my face.     ٩(◕‿◕｡)۶

#### Planning
The first thing I've learned on my path as  a web dev is to split a complex problem into a series of smaller steps to take in order to achieve the goal. Sounds easy enough, no? Well, let me tell you about that!

My first instinct when starting to tackle with a new project is to go straight to the drawing board. List all the requirements for the project and sketch how their functionality is inteveined.

![Lakescapes WFs]()

Then, I try to add some decent(ish) looks to it.

![Lakescapes Mockups]()

Since this was a React task, I needed to split that UI into small pieces - legos for my app - and sketch how they interact with each other. I must say oI had to tweak it a few times from the beginning of process to the final app. This is where my lack of experience with some technologies required for this project had really shined through. Let me explain what I mean by that with a quick sketch comparing my initial idea for the app architecture - as opposed to its final version:

![Lakescapes AppArch]()

#### Step by step implementation
##### Preparation
There were few major things to do to get the basic app functioning.
* Since project is created from scratch, I wanted to be on the safe side and used [`create-react-app`](https://github.com/facebook/create-react-app) which pre-configures React app and installs all dependencies
* Register project at Google Map's and Foursquare's API, to get the API keys
* Researching suitable locations; and getting their names and latlng coordinates via HTTP requests
* Then, I compiled arrays of points of interests, by category and and joined them in `allPlaces` array (all in `places.js` file)

##### Map
With data in place, it was time to create Map Markers and InfoWindows. I used `google-maps-react npm` and followed this [blog post](https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/) to tweak the map and markers.

##### Fetching Data for InfoWindows
Next, to populate InfoWindow I needed to send async requests to fetch Foursquare venues data. To make things a bit simpler, I used [`axios npm`](https://www.npmjs.com/package/axios), recommended by a fellow student.

##### Filtering Options
I decided to implement two ways to filter out locations:
    -   By category -> on click on the button
    -   By name -> via search input
Both update the Markers on the Map as well as Search Results List.

##### Responsiveness and A11Y
When I made my app work it was time to  make it accessible and responsive. I used [`react-materialize`](https://www.npmjs.com/package/react-materialize) - by far my favorite CSS framework; shoutout! - and tweaked A11Y features manually. I've checked app's A11Y performance with [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) and it scored 96%;

##### Offline experience
The other important part of this task was to add a service worker to begin the process of creating a seamless offline experience for the users. Since I used [`create-react-app`](https://github.com/facebook/create-react-app), it already had a pre-built service worker. The only thing left was to cache data fetched from API.

Check it out: in Dev Tools,  disconnect the internet or set the throttling to a low Internet speed to check out the offline experience of the app!

##### Making Demo Live
Now, GitHub pages are pretty staright forward normally. However, with React app it's a bit more compicated. I used [`gh-pages`](https://github.com/gitname/react-gh-pages) and luckily, I've found [this](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d) tutorial which helped me to make it happen.

Check out the live [demo]()!


### Dependencies

#### React Packages
- [`create-react-app`](https://github.com/facebook/create-react-app). A pre-configured pack to buld React apps
- [`google-maps-react`](https://www.npmjs.com/package/google-maps-react). A declarative Google Map React component using React, lazy-loading dependencies, current-location finder and a test-driven approach by the Fullstack React team.
- [`Prop Types`](https://www.npmjs.com/package/prop-types). Runtime type checking for React props and similar objects.
- [`axios`](https://www.npmjs.com/package/axios). Promise based HTTP client for the browser and node.js
- [`react-materialize`](https://www.npmjs.com/package/react-materialize). Material design components for react, powered by [materializecss](https://materializecss.com/).


#### API
- [Google Maps API](https://cloud.google.com/maps-platform/). Probably the most popular map on the web!
- [Foursquare Place API](https://developer.foursquare.com/). Over 125,000 developers building location-aware experiences with Foursquare technology and data.

## ToDo


## Contributing
If you'd like to play with my code, contribute or suggest how to improve it - I'd welcome any feedback!

I'd love to collaborate so any of the todos I'd gladly include. There are only two requirements I have to for the push request to be accepted:
- code improves app experience
- code is working!

Thank you in advance if you decide to tackle with this one!


## References
* Google Maps React
    - [How to Write a Google Maps React Component](https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/)

*

## Author
* [**Ozana Buljan**](https://github.com/ozana-buljan)


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
Thanks to Udacity, my mentor and my fellow students for this opportunity and all the support! Special thanks to
