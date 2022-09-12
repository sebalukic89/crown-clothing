import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.components';

const Home = () => {
	return (
		<div>
			{/* Outlet is the nested component that is found in App component */}
			<Outlet />
			<Directory />
		</div>
	);
};

export default Home;
