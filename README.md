# cineprime 

Deployed: [![Netlify Status](https://api.netlify.com/api/v1/badges/d857d1dc-2f49-4d31-a1c1-5f251145f0a9/deploy-status)](https://app.netlify.com/sites/cineprime/deploys)

## cineprime-frontend
cineprime-frontend is a "cineprime" web applications's  frontend repo - A mern-group-lab project as Unit3 lab assignment. It is built in React, SASS and HTML. 
The frontend app communicates with the back-end API RESTfully to Create, Read, Update, and Destroy resources (using either fetch or axios). The frontend is responsive and works on mobile phones, tablets, and desktops

Squad-Lead: Alex Merced

Team Members: Bojan Josilo, Gourav Auluck, Sampreet Chawla, and Shayan Gagan. Sampreet Chawla is the Tech Lead and Git Master.

#### Project Description

Tha cineprime project is a "Movie Planner" web application which supports visitors to - 

- Browse - through the movies from different genres using the TMDB API. A random movie will be displayed in the banner, and row-wise carousel display of movies for each genre.
- View Details - view the movie details for a selected movie
- Team - Get to the team which built the project. 
- Option to sign up and login and logout.
- Wishlist - Signed in users can add selected movies to a wishlist, where they can 
* View the complete list of movies in their wishlist
* View the list of watched movies and delete any movie from the list
* View the list of 'want to watch' movies, plan their watch date, update their actual watch date, priortize their watch list, and dete movieies from watchlist.  


#### Project Inspirations

We got inspired from the following sites and projects - 

* [Clever Programmer youtube Netflix Clone](https://www.youtube.com/watch?v=XtMThy8QKqU&has_verified=1) and [Movie-Flex](https://movieflex-28ba7.web.app/) - for baneer and carousel 
* [Good Reads Website](https://www.goodreads.com/) - For Wishlist CRUD Functionality
* [Sampreet's bibiophile website](https://bibliophile.netlify.app/) - For initial wishlist inspiration



### User Story:

**User Story**: *As a user, I would love to take a look at movies library, browse the movies and if I find what I like, I can easily 		add it to my watchlist track what I've seen.*   
**Frontend**:  *Welcomes the user with the animated banner, displayed row of the movies and offers account creation to keep track of his profile.*  
**Backend**: *Stores the user's created profile & keeps track of his progress.*

**User Story**: It actually sounds good. As a user I want to register for your service.   
**Frontend**: Offers the sign-up form, starts the account creation.   
**Backend**:  Processes user's data and saves it for further authentication.   

**User Story**: I want to browse and create my personal watch list.  
**Frontend**: Displays a list of available movies with an option to store them in your personal tracker.   
**Backend**:  Makes sure to keep track if you've already seen the movie, or if you want to watch it, as well as list of all the movies user has added to the  profile.  

**User Story**: I watched a lot of movies that are getting outdated now and I am no longer interested in seeing on my profile.  
**Frontend**: Provides neat features where user can move things around and edit the watchlist.  
**Backend**:  Updates, clears and saves the changes.  

**User Story**:I want to start from the beginning. I am no longer interested in sci-fi  
**Frontend**:Clear button!?   
**Backend**:  Provides the fresh watchlist, from scratch.  

UserStories prepared by Bojan

#### Wireframes 

These wireframes are built using [Google Draw](https://docs.google.com/drawings/)

- Mobile View - [Mobile-01](./img/wireframes/mobile/01.cineprime-mobile.png) and [Mobile-02](./img/wireframes/mobile/02.cineprime-mobile.png)
- Tablet View - [Browse](./img/wireframes/tablet/01.browse-tablet.jpg), [Movie Details](./img/wireframes/tablet/02.details-tablet.jpg), [Sign Up / Sign In](./img/wireframes/tablet/03.signin-tablet.jpg), [Watchlist](./img/wireframes/tablet/04.watchlist-tablet.jpg) and [Team](./img/wireframes/tablet/05.team-tablet.jpg)
- Desktop View - [Browse](./img/wireframes/desktop/01.browse-desktop.png), [Movie Details](./img/wireframes/desktop/02.details-desktop.png), [Sign Up / Sign In](./img/wireframes/desktop/03.signin-desktop.png), [Watchlist](./img/wireframes/desktop/04.watchlist-desktop.png) and [Team](./img/wireframes/desktop/05.team-desktop.png)

The wireframes are built with initial design concept by Sampreet, and sketch drawings by Gourav Auluck, Google draw drawings by both Shayan Gagan and Gourav Auluck


#### React Architecture Diagram

[cineprime - React Architecture Diagram](./img/cineprime-react-architecture.png)
The React Architecture Diagram was built by Sampreet and formatted by Sampreet and Bojan Josilo.

#### Routing Table

| Route                  |                                   Purpose                                    |
| ---------------------- | :--------------------------------------------------------------------------: |
| Always                 |                      Navigation Bar and Footer                               |
| /                      |                      Sign up or sign in page                                 |
| /                      |                     Banner and Movies listing                                |
| /                      |                    Detailed movie information for the selected movie         |
| /                      |             Add movie to the watchlist for loggedin user                     |
| /watchlist             |              Current user's watchlist content (For Logged-in USer Only)      |
| /watchlist             |                         List of movies user has seen from his watchlist      |
| /watchlist             |             Movie list in the watchlist which the logged-in is yet to watch  |
| /watchlist             |                       Edit the movies in the watchlist                       |
| /watchlist             |                        Delete movies from watchlist                          |
| /team                  |                       Project team information                               |
| /                      |                       Logout of the site                                     |



## Time-Priority Matrix, MVPs and Post MVPs

#### MVPs 

A team collaborative effort on time estimation, created using [https://stackedit.io/](https://stackedit.io/)
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Repos setup with initial Boilerplate code | H | 2hrs | 2hrs | 2hrs |
| Preparation and Planning | H | 8hrs | 16hrs | 12hrs |
| Documentation | H | 12hrs | 16hrs | 12hrs |
| Server and Connections | H | 2hrs | 2hrs | 2hrs |
| Schemas | H | 1hr | 2hrs | 1.5hrs |
| Controllers | H | 3hr | 4hrs | 4hrs |
| Backend deployment | H | 1hrs | 0.5hrs | 0.5hrs |
| React components setup | H | 1hrs | 1hrs | 1hrs |
| Navbar and Footer | H | 2hrs | 5hrs | 5hrs |
| Banner| M | 1hrs | 2hrs | 2hrs |
| Movie Carosel - Each Genre| M | 6hrs | 12hrs | 10hrs |
| Team page| M | 3hrs | 4hrs | 3hrs |
| Switch, Routes and Links | H | 3hrs | 2hrs | 2hrs |
| Watchlist config (addition)| H | 4hrs | 4hrs |4hrs |
| Watchlist filter| H | 4hrs | 4hrs | 4hrs |
| Watchlist updates| H | 12hrs | 15hrs | 10hrs |
| Movie Details| H | 3hrs | 5hrs | 3hrs |
| Signup/Sign in | H | 12hrs | 12hrs | 11hrs |
| Responsiveness | H | 12hrs | 10hrs | 10hrs |
| Extra Styling | L | 2hrs | 3hrs | 3hrs |
| Gihthum Merging | L | 6hrs | 10hrs | 10hrs |
| **Total** | H | **100hrs**| 117.5hrs | 111hrs |

#### Post MVPs

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| ~~Sorting the watchlist by different fields~~ | M |  8hrs | hrs | hrs |   
| ~~D3 Banne~~ | M |  5hrs | hrs | hrs |  
| ~~Add your rating to the movie~~ | M |  8hrs | hrs | hrs |  
| ~~Dark and Light Themes~~ | M |  8hrs | hrs | hrs |  
| Clear the complete Watchlist | H |  3hrs | 3hrs | 3hrs |  
| **Total** | H | **32hrs**| 3hrs | 3hrs |


### Additional Libraries
- React
- Reactstrap Card, React Bootstrap Modal and React-Icons, 
- Axios, Fetch
- Node
- Express
- Mongoose
- MongoDB
- JSONWebToken (JWT) and BCRYPT 


### Frontend Code Snippets

[Smart way of truncating long strings](https://stackoverflow.com/questions/1199352/smart-way-to-truncate-long-strings)

```
function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	}
```

### Challenges

### Limitations

1. A signed-in user will have to close the movie details section using 'X' button to exit the movie details section. After viewing or adding the movie to the watchlist, if the movie details is not closed with the 'X' button, and if the user clicks on another movie in the row, he will automatically see the movie details for the movie with previous movie details status - maybe as Added to the Watchlist. 

### Issues and Resolution

### Unresolved Issues

1. DatePicker is unable to reflect the change in state within the MovieCard. When a MovieCard is removed, its Movie Card dates get passed on to the subsequent movie card. For now, we can update the plan date for any movie cards in the watch list, and would suggest to update the watched Date of the last movie card only. 

