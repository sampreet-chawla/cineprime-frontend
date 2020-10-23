# cineprime-frontend
cineprime-frontend is a "cineprime" web applications's  frontend repo - A mern-group-lab project as Unit3 lab assignment. It will be built in React, SASS and HTML. 
The frontend app will communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources (using either fetch or axios). The frontend will also be responsive and work on mobile phones, tablets, and desktops

Squad-Lead: Alex Merced

Team Members: Bojan Josilo, Gourav Auluck, Sampreet Chawla, and Shayan Gagan. Sampreet Chawla is the Tech Lead and Git Master.

#### Wireframes 

These wireframes are built using [Google Draw](https://docs.google.com/drawings/)

- Mobile View - [Mobile-01](./img/wireframes/mobile/01.cineprime-mobile.png) and [Mobile-02](./img/wireframes/mobile/02.cineprime-mobile.png)
- Tablet View - []()
- Desktop View - [Browse](./img/wireframes/mobile/01.browse-desktop.png), [Movir Details](./img/wireframes/mobile/02.details-desktop.png), [Sign Up / Sign In](./img/wireframes/mobile/03.signin-desktop.png), [Watchlist](./img/wireframes/mobile/04.watchlist-desktop.png) and [Team](./img/wireframes/mobile/05.team-desktop.png)


#### React Architecture Diagram

[cineprime - React Architecture Diagram](./img/cineprime-react-architecture.png)

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






