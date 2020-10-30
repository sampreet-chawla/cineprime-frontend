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
							Sampreet contributed heavily in project design with wireframes,
							backend schemas, routing pages, frontend url paths. She set up the
							core React and Express components, and coded user Sign Up / In,
							Logout, and the add/edit watchlist functionalities. She oversaw
							the project structure and helped the team in troubleshooting the
							links, buttons component relationships. She also managed the
							Trello board and performed responsibilities of Git Master. In her
							free time, she loves volunteering in schools and libraries.
							Connect at{' '}
							<a href='https://www.linkedin.com/in/sampreet-chawla'>LinkedIn</a>
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
							Shayan is a recent college graduate with a background in economics
							and finance, looking to transition into the role of a software
							engineer. He enjoys working primarily in the front end, and is
							always open to learning and working with new technologies. In this
							project he contributed by digitizing wireframes, implementing
							features of the browse page, designing parts of the CSS,
							creating/routing react components, as well as grasping a better
							understanding of the git terminal alongside his group members.
							Connect with him on{' '}
							<a href='https://www.linkedin.com/in/shayangagan'>LinkedIn</a> or
							check out some of his other works on{' '}
							<a href='https://github.com/gaganshayan'>GitHub</a>.
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
							and maintaining its functionality. Connect at{' '}
							<a href='https://www.linkedin.com/in/josilo/'>LinkedIn</a>
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
							Gore is a Chef turned Designer. He is a father, foodie and wino
							who's always looking to make lasting memories. His son is his
							motivation and the reason he does what he does. He's a self
							motivated creative mind who is looking to make the world a
							prettier place one design at a time. In this project, Gore
							contributed to the wireframing, frontend framework design and
							responsiveness and helped with implementing sign in/out
							capabilities alongside his team. Connect at{' '}
							<a href='https://www.linkedin.com/in/gore-sometimes/'>LinkedIn</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
