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
    │     └── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── Images
    │     └── (...) #images for the app
    └── index.js #This file is used for DOM rendering only.
```

### App Functionality

* In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books:
    - Currently Reading
    - Want to Read
    - Read

* Each book has a control that lets user to select the shelf for that book. When selection changes, the book moves onto selected shelf. The default value for the control is the current shelf the book is on.

* The main page also has a link to search page, which allows user to find books and add to their library.

* The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets user add the book to the library.

* When a book is on a bookshelf, it has the same state on both the main application page and the search page.

* The search page also has a link to / (the root URL), which leads back to the main page.

* When navigating back to the main page from the search page, user instantly sees all of the selections they made on the search page in the library.

### Backend Server NB

To simplify the development process, we've been provided with a backend server to develop against. The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend!

### The looks
The basic look for the app was already provided. However, I've done some (minimal) redesign. Check it out!

![Bookerly UI Desktop](https://raw.githubusercontent.com/ozana-buljan/Bookerly/master/public/Bookerly-UI-Desktop.png)

![Bookerly UI Mobile](https://raw.githubusercontent.com/ozana-buljan/Bookerly/master/public/Bookerly-UI-Mobile.png)

## ToDo
Simple ones that should enhance UX:
* Add "Rate a book" functionality
* Filter books by rating
* Bulk move books from one shelf to another

Not so simple ones (but hey, let's think big):
* Add new books to the database
* User's profile (similar to Goodreads)

## Contributing
If you'd like to play with my code, contribute or suggest how to improve it - I'd welcome any feedback!

I'd love to collaborate so any of the todos I'd gladly include. There are only two requirements I have to for the push request to be accepted:
- code improves app experience
- code is working!

Thank you in advance if you decide to tackle with this one!

## References
*   Original repo: [Starter Code for the React MyReads Project by Udacity](https://github.com/udacity/reactnd-project-myreads-starter)

## Author
* [**Ozana Buljan**](https://github.com/ozana-buljan)
* *Initial work* - [Udacity](https://github.com/udacity/reactnd-project-myreads-starter)


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
Thanks to Udacity, my mentor and my classmates for this opportunity and all the support!
