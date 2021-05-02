import './EditForm.scss';
import {useHistory, useParams} from 'react-router';
import {useEffect, useState} from 'react';
import db from '../../firebase';
import {useDispatch} from 'react-redux';
import {updateEditableData} from '../../store/action';

const EditForm = () => {
	const history = useHistory();
	const param = useParams();
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState('');

	useEffect(() => {
		db.ref(`kanban/tasks/${param.id}`).once('value', snapshot => {
			setTitle(snapshot.val().title);
			setDescription(snapshot.val().description);
			setStatus(snapshot.val().status);
		});
	}, [param]);

	const monitorsChanges = (e, type) => {
		if (type === 'title') setTitle(e.target.value);
		else if (type === 'status') setStatus(e.target.value);
		else if (type === 'description') setDescription(e.target.value);
	};

	const closeHandler = e => {
		e.preventDefault();
		history.push('/');
	};

	const submitHandler = e => {
		e.preventDefault();
		const lastUpdate = new Date().toISOString();
		dispatch(updateEditableData(param.id, status, lastUpdate, title, description));
		history.push('/');
	};

	return <form className="EditForm" onSubmit={submitHandler}>
		<div className="EditForm-item">
			<input className="EditForm__input-title" type="text" value={title}
				   onChange={(e) => monitorsChanges(e, 'title')}/>
			<select className="EditForm__select" value={status} name="status"
					onChange={(e) => monitorsChanges(e, 'status')}>
				<option value="backlog">Backlog</option>
				<option value="ready">Ready</option>
				<option value="in progress">In Progress</option>
				<option value="finished">Finished</option>
			</select>
		</div>
		<div className="EditForm-item">
			<textarea className="EditForm__description" placeholder="Add description" value={description}
					  onChange={(e) => monitorsChanges(e, 'description')}/>
		</div>
		<button className="EditForm__close" onClick={(e) => closeHandler(e)}/>
		<div className="EditForm-item">
			<button className="Kanban-item__submit-btn EditForm__btn">Submit</button>
		</div>
	</form>;
};

export default EditForm;
