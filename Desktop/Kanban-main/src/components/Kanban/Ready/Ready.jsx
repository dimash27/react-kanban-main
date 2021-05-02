import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReadyItem from './ReadyItem/ReadyItem';
import {addInputField, moveTaskForward, updateStatus} from '../../../store/action';

const Ready = () => {
	const [disable, setDisable] = useState(true);
	const backlogTasks = useSelector((state) => state.backlogTasks);
	const readyTasks = useSelector((state) => state.readyTasks);
	const dispatch = useDispatch();

	useEffect(() => {
		if (backlogTasks.length > 0) setDisable(false);
		else setDisable(true);
	}, [backlogTasks]);

	const addNewReadyHandler = () => {
		setDisable(true);
		dispatch(addInputField('ready'));
	};

	const checkClickedItem = id => {
		const currTarget = backlogTasks.findIndex((elem) => elem.id === id);
		const copyItem = {...backlogTasks[currTarget]};
		const lastUpdate = new Date().toISOString();
		dispatch(moveTaskForward(copyItem, 'ready'));
		dispatch(updateStatus(id, 'ready', lastUpdate));
		setDisable(false);
	};

	return (
		<div className='Kanban-item'>
			<h2 className='Kanban-item__title'>Ready</h2>
			{readyTasks.map((elem) => (
				<ReadyItem
					key={elem.id}
					elem={elem}
					checkClickedItem={checkClickedItem}
				/>
			))}
			<button
				onClick={addNewReadyHandler}
				disabled={disable}
				className='Kanban-item__add-btn'>
				Add card
			</button>
		</div>
	);
};

export default Ready;
