import './Layout.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Layout = props => (
	<div className="Layout">
		<header className="Layout-header">
			<NavBar/>
		</header>
		<main className="Layout-main">
			{props.children}
		</main>
		<footer className="Layout-footer">
			<Footer/>
		</footer>
	</div>
);

export default Layout;