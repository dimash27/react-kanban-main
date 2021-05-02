import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addInputField, moveTaskForward, updateStatus} from '../../../store/action';
import FinishedItem from './FinishedItem/FinishedItem';

const Finished = () => {
	const [disable, setDisable] = useState(true);
	const inProgressTasks = useSelector((state) => state.inProgressTasks);
	const finishedTasks = useSelector((state) => state.finishedTasks);
	const dispatch = useDispatch();

	useEffect(() => {
		if (inProgressTasks.length > 0) setDisable(false);
		else setDisable(true);
	}, [inProgressTasks]);

	const addNewFinishedHandler = () => {
		setDisable(true);
		dispatch(addInputField('finished'));
	};

	const checkClickedItem = id => {
		const currTarget = inProgressTasks.findIndex((elem) => elem.id === id);
		const copyItem = {...inProgressTasks[currTarget]};
		const lastUpdate = new Date().toISOString();
		dispatch(moveTaskForward(copyItem, 'finished'));
		dispatch(updateStatus(id, 'finished', lastUpdate));
		setDisable(false);
	};

	return (
		<div className='Kanban-item'>
			<h2 className='Kanban-item__title'>Finished</h2>
			{finishedTasks.map((elem) => (
				<FinishedItem
					key={elem.id}
					elem={elem}
					checkClickedItem={checkClickedItem}
				/>
			))}
			<button
				onClick={addNewFinishedHandler}
				disabled={disable}
				className='Kanban-item__add-btn'>
				Add card
			</button>
		</div>
	);
};

export default Finished;
