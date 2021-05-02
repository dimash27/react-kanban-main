import './Kanban.scss';
import Backlog from './Backlog/Backlog';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchTasks} from '../../store/action';
import Ready from './Ready/Ready';
import InProgress from './InProgress/InProgress';
import Finished from './Finished/Finished';

const Kanban = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);

	return (
		<div className="Kanban">
			<Backlog/>
			<Ready/>
			<InProgress/>
			<Finished/>
		</div>
	);
};

export default Kanban;
