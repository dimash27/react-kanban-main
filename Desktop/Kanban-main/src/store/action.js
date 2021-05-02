import db from '../firebase';
import {ADD_INPUT_FIELD, FETCH_STATUS_SUCCESS, MOVE_TASK_FORWARD} from './actionTypes';

const fetchStatusSuccess = (tasks) => {
	return {type: FETCH_STATUS_SUCCESS, payload: tasks};
};

export const addNewTask = (title, description, status, dateCreation, lastUpdate) => {
	return dispatch => {
		db.ref('kanban').child('tasks').push({
			title,
			description,
			status,
			dateCreation,
			lastUpdate
		});
	};
};

export const addInputField = status => {
	return {type: ADD_INPUT_FIELD, payload: status};
};

export const updateStatus = (id, status, lastUpdate) => {
	return dispatch => db.ref(`kanban/tasks/${id}`).update({status, lastUpdate});
};

export const updateEditableData = (id, status, lastUpdate, title, description) => {
	return dispatch => db.ref(`kanban/tasks/${id}`).update({status, lastUpdate, title, description});
};

export const moveTaskForward = (item, type) => {
	return {type: MOVE_TASK_FORWARD, payload: item, status: type};
};

export const updateBacklogTask = (id, title) => {
	return dispatch => db.ref(`kanban/tasks/${id}`).update({title});
};


export const fetchTasks = () => {
	return dispatch => {
		db.ref('kanban/tasks').on('value', (snapshot) => {
			if (snapshot.exists()) {
				const data = snapshot.val();
				dispatch(
					fetchStatusSuccess(
						Object.keys(data).map((id) => {
							return {...data[id], id};
						})
					)
				);
			} else {
				dispatch(fetchStatusSuccess([]));
			}
		});
	};
};
