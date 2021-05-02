import './NavBar.scss';
import avatar from './image/avatar.svg';
import {useState} from 'react';

const NavBar = () => {
	const [clicked, setClicked] = useState(false);

	const getMenuHandler = () => {
		if (clicked) setClicked(false);
		else setClicked(true);
	};

	return (
		<nav className="NavBar">
			<h1 className="NavBar__title">Awesome Kanban Board</h1>
			<div className="NavBar__controls-panel">
				<img onClick={getMenuHandler} className="NavBar__controls-panel__avatar" src={avatar} alt="Not found"/>
				<button onClick={getMenuHandler}
						className={`NavBar__controls-panel__arrow ${clicked ? 'up' : 'down'}`}/>
			</div>
			<div className="NavBar__drop-menu" style={{display: clicked ? 'block' : 'none'}}>
				<ul className="NavBar__drop-menu__list">
					<li>Profile</li>
					<li>Log out</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;