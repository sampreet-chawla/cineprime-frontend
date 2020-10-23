# cineprime-frontend
cineprime-frontend is a "cineprime" web applications's  frontend repo - A mern-group-lab project as Unit3 lab assignment. It will be built in React, SASS and HTML. 
The frontend app will communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources (using either fetch or axios). The frontend will also be responsive and work on mobile phones, tablets, and desktops

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

* [Movie Flex App](https://movieflex-28ba7.web.app/) - for baneer and carousel 
* [Good Reads Website](https://www.goodreads.com/) - For Wishlist CRUD Functionality
* [Sampreet's bibiophile website](https://bibliophile.netlify.app/) - For initial wishlist inspiration



### User Story:

**User Story**: *As a user, I would love to take a look at movies library, browse the movies and if I find what I like, I can easily 		add it to my watchlist track what I've seen.*
**Frontend**:  *Welcomes the user with the animated banner, displayed row of the movies and offers account creation to keep track of his profile.*
**Backend**: *Stores the user's created profile & keeps track of his progress.*

**User Story**: *It actually sounds good. As a user I want to register for your service.*
 **Frontend**: *Offers the sign-up form, starts the account creation.*
**Backend**:  *Processes user's data and saves it for further authentication.* 

**User Story**: *I want to browse and create my personal watch list.* 
**Frontend**: *Displays a list of available movies with an option to store them in your personal tracker.*  
**Backend**:  *Makes sure to keep track if you've already seen the movie, or if you want to watch it, as well as list of all the movies user has added to the profile.*

**User Story**: *I watched a lot of movies that are getting outdated now and I am no longer interested in seeing on my profile.*
**Frontend**: *Provides neat features where user can move things around and edit the watchlist.*
**Backend**:  *Updates, clears and saves the changes.* 

**User Story**: *I want to start from the beginning. I am no longer interested in sci-fi* 
**Frontend**: *Clear button!?*  
**Backend**:  *Provides the fresh watchlist, from scratch.* 



#### Wireframes 

These wireframes are built using [Google Draw](https://docs.google.com/drawings/)

- Mobile View - [Mobile-01](./img/wireframes/mobile/01.cineprime-mobile.png) and [Mobile-02](./img/wireframes/mobile/02.cineprime-mobile.png)
- Tablet View - []()
- Desktop View - [Browse](./img/wireframes/desktop/01.browse-desktop.png), [Movie Details](./img/wireframes/desktop/02.details-desktop.png), [Sign Up / Sign In](./img/wireframes/desktop/03.signin-desktop.png), [Watchlist](./img/wireframes/desktop/04.watchlist-desktop.png) and [Team](./img/wireframes/desktop/05.team-desktop.png)

The wireframes are built with initial design concept by Sampreet, and sketch drawings by Gourav Auluck, Google draw drawings by both Shayan Gagan and Gourav Auluck


#### React Architecture Diagram

[cineprime - React Architecture Diagram](./img/cineprime-react-architecture.png)
The React Architecture Diagram was built by Sampreet and formatted by Sampreet and Bojan Josilo.

#### Routing Table

| Route                  |                                   Purpose                                    |
| ---------------------- | :--------------------------------------------------------------------------: |
| Always                 |                      Navigation Bar and Footer                               |
| /signin                |                      Sign up or sign in page                                 |
| /                      |                     Banner and Movies listing                                |
| /list/:id              |                    Detailed movie information for the selected movie         |
| /watchlist             |              Current user's watchlist content (For Logged-in USer Only)      |
| /watchlist/add         |             Add movie to the watchlist for loggedin user                     |
| /watchlist/watched     |                         List of movies user has seen from his watchlist      |
| /watchlist/wantToWatch |             Movie list in the watchlist which the logged-in is yet to watch  |
| /watchlist/edit        |                       Edit the movies in the watchlist                       |
| /watchlist/editOrder   | Order/Chnage Priority of the movies in the watchlist for not yet watched movies  |
| /watchlist/delete      |                        Delete movies from watchlist                          |
| /team                  |                       Project team information                               |


#### Components



#### Time-Priority Matrix, MVPs and Post MVPs

##### Time-Priority Matrix

##### MVPs

- Backend and Frontend repos
- Signup/SignIn/Logout
- Banner - Simple Image / Video
- Row-wise Carousel Implementation image with title tooltip
- NavBar and Footer
- Movie Detail
- WatchList Display
- Watchlist filter
- Watchlist updates
- Team page

##### Post MVPs

- Sorting the watchlist by different fields
- D3 Banner
- Add your rating to the movie
- Dark and Light Themes






