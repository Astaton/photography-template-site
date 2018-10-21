//React Component imports
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import Test from './Test';


const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/index.html',
		exact: true,
		component: Home
	},
	{
		path: '/about',
		exact: false,
		component: About
	},
	{
		path: '/contact',
		exact: true,
		component: Contact
	},
	{
		path: '/contact/:status',
		exact: false,
		component: Contact
	},
	{
		path: '/gallery',
		exact: false,
		component: Gallery
	},
	{
		path: '/test',
		exact: false,
		component: Test
	}
]

export default routes;