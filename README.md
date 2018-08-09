# Udacity FEND Project #8:  **LakEscapes** - Neighbourhood Map App

 This project's purpose is to build a single page web application from scratch using ReactJS and to add features provided by external APIs (like Maps Javascript API and FourSquare Places APi), focusing on components, props and state.

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

### App Functionality

*


### The looks

#### Process

#### Result
![Lakescapes UI Desktop]()

![Lakescapes UI Mobile]()

## ToDo


## Contributing
If you'd like to play with my code, contribute or suggest how to improve it - I'd welcome any feedback!

I'd love to collaborate so any of the todos I'd gladly include. There are only two requirements I have to for the push request to be accepted:
- code improves app experience
- code is working!

Thank you in advance if you decide to tackle with this one!


## Dependancies
## References
*

## Author
* [**Ozana Buljan**](https://github.com/ozana-buljan)


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
Thanks to Udacity, my mentor and my classmates for this opportunity and all the support!
