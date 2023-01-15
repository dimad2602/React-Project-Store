import { NavLink } from 'react-router-dom';
import './style.css';

const Configs = ({ title, img, index }) => {
	return (
		<NavLink to={`/configs/${index}`}>
			<li className="configs">
				<img src={img} alt={title} className="configs__img" />
				<h3 className="configs__title">{title}</h3>
			</li>
		</NavLink>
	);
};

export default Configs;