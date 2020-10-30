import React from 'react';
import './Team.css';

function Team() {
	return (
		<div className='team'>
			<h1 id='about-title'>Team that worked on this project:</h1>
			<div className='container'>
				<div className='teamcard'>
					<div className='box'>
						<div id='img-div'>
							<img
								className='profile'
								id='sampreet'
								src='sampreet3.jpg'
								alt='profile-pic'
							/>
						</div>
						<h4 className='member-names'>Sampreet Chawla</h4>
						<p>
							Sampreet is a strong back end developer that contributed heavily
							in project design with wireframing, backend schemas, routing
							tables, frontend url paths. She set up the core React and Express
							components including the User Sign Up / In, Logout, and coded the
							Watchlist editing and reordering. She oversaw the project
							structure and helped the team in troubleshooting the links,
							buttons component relationships. She also managed the Trello board
							and performed responsibilities of Git Master.
						</p>
					</div>
				</div>
				<div className='teamcard'>
					<div className='box'>
						<div id='img-div'>
							<img className='profile' src='shayan.jpg' alt='img' />
						</div>
						<h4 className='member-names'>Shayan Gagan</h4>
						<p>
							Shayan is a fullstack web developer with a background in economics
							and finance. He is a systematic thinker who comes up with unique
							and effective solutions. Shayan contributed in working with group
							members to digitize the responsive wireframes and react
							components. Implementing features of the browse page, movie rows,
							watchlist and parts of the CSS he contributed heavily on the front
							end of the project. Connect with him on{' '}
							<a href='https://www.linkedin.com/in/shayangagan'>LinkedIn</a> or
							check out his other work on{' '}
							<a href='https://github.com/gaganshayan'>GitHub</a>,
						</p>
					</div>
				</div>
				<div className='teamcard'>
					<div className='box'>
						<div id='img-div'>
							<img
								className='profile'
								src='bojan2.jpeg'
								alt='profile-pic'
								id='bojan'
							/>
						</div>
						<h4 className='member-names'>Bojan Josilo</h4>
						<p>
							Bojan is an emerging full-stack developer with a special interest
							in frontend frameworks like React and its integration with the
							backend code. While not coding, he enjoys a nice documentary,
							history books or browsing the vast YouTube content. In this
							project he started with planning the backend structure, creating
							routes and react architecture. Alongside his team, later on he
							also worked on designing React components, merging code together
							and maintaining its functionality.
						</p>
					</div>
				</div>
				<div className='teamcard'>
					<div className='box'>
						<div id='img-div'>
							<img className='profile' id='gore' src='gore.jpg' alt='img' />
						</div>
						<h4 className='member-names'>Gourav Auluck</h4>
						<p>
							Gore is a former Chef turned front-end Designer. He is a father,
							avid gamer, foodie and wino who's always looking to make lasting
							memories. His son is his motivation and the reason he does what he
							does. He's a self motivated creative mind who is looking to make
							the world a prettier place one design at a time. In this project,
							Gore contributed to the wireframing, frontend framework design and
							responsiveness and helped with implementing sign in/out
							capabilities alongside his team.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
