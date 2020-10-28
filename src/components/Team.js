import React from 'react';
import './Team.css';

function Team() {
	return (
		<div className='team'>
			<div className='container'>
				<h1 id='about-title'>Team that worked on this project:</h1>
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							pellentesque at urna et vestibulum. Donec egestas nulla non dolor
							imperdiet maximus. Sed eget egestas orci. In id justo auctor,
							euismod justo ac, cursus enim. Nam in viverra massa, a vulputate
							nisi. Etiam finibus enim sit amet fringilla consectetur. Nullam
							purus augue, molestie vitae eleifend viverra, pellentesque a
							sapien. Aliquam a augue dignissim mauris sodales ultricies quis
							sit amet felis. Suspendisse et sodales nibh.
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							pellentesque at urna et vestibulum. Donec egestas nulla non dolor
							imperdiet maximus. Sed eget egestas orci. In id justo auctor,
							euismod justo ac, cursus enim. Nam in viverra massa, a vulputate
							nisi. Etiam finibus enim sit amet fringilla consectetur. Nullam
							purus augue, molestie vitae eleifend viverra, pellentesque a
							sapien. Aliquam a augue dignissim mauris sodales ultricies quis
							sit amet felis. Suspendisse et sodales nibh.
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							pellentesque at urna et vestibulum. Donec egestas nulla non dolor
							imperdiet maximus. Sed eget egestas orci. In id justo auctor,
							euismod justo ac, cursus enim. Nam in viverra massa, a vulputate
							nisi. Etiam finibus enim sit amet fringilla consectetur. Nullam
							purus augue, molestie vitae eleifend viverra, pellentesque a
							sapien. Aliquam a augue dignissim mauris sodales ultricies quis
							sit amet felis. Suspendisse et sodales nibh.
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							pellentesque at urna et vestibulum. Donec egestas nulla non dolor
							imperdiet maximus. Sed eget egestas orci. In id justo auctor,
							euismod justo ac, cursus enim. Nam in viverra massa, a vulputate
							nisi. Etiam finibus enim sit amet fringilla consectetur. Nullam
							purus augue, molestie vitae eleifend viverra, pellentesque a
							sapien. Aliquam a augue dignissim mauris sodales ultricies quis
							sit amet felis. Suspendisse et sodales nibh.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
