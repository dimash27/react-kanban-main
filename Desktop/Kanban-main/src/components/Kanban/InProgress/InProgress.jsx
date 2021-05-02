import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addInputField, moveTaskForward, updateStatus} from '../../../store/action';
import InProgressItem from './InProgressItem/InProgressItem';

const InProgress = () => {
	const [disable, setDisable] = useState(false);
	const readyTasks = useSelector(state => state.readyTasks);
	const inProgressTasks = useSelector(state => state.inProgressTasks);
	const dispatch = useDispatch();

	useEffect(() => {
		if (readyTasks.length > 0) setDisable(false);
		else setDisable(true);
	}, [readyTasks]);

	const addNewInProgressHandler = () => {
		setDisable(true);
		dispatch(addInputField('in progress'));
	};

	const checkClickedItem = id => {
		const currTarget = readyTasks.findIndex(elem => elem.id === id);
		const copyItem = {...readyTasks[currTarget]};
		const lastUpdate = new Date().toISOString();
		dispatch(moveTaskForward(copyItem, 'in progress'));
		dispatch(updateStatus(id, 'in progress', lastUpdate));
		setDisable(false);
	};

	return (
		<div className='Kanban-item'>
			<h2 className='Kanban-item__title'>In Progress</h2>
			{inProgressTasks.map((elem) => (
				<InProgressItem key={elem.id} elem={elem} checkClickedItem={checkClickedItem}/>
			))}
			<button
				onClick={addNewInProgressHandler}
				disabled={disable}
				className='Kanban-item__add-btn'>
				Add card
			</button>
		</div>
	);
};

export default InProgress;