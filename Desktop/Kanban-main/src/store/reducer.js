import {ADD_INPUT_FIELD, FETCH_STATUS_SUCCESS, MOVE_TASK_FORWARD} from './actionTypes';

const initialState = {
	tasks: [],
	backlogTasks: [],
	readyTasks: [],
	inProgressTasks: [],
	finishedTasks: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_STATUS_SUCCESS:
			return {
				...state,
				tasks: action.payload,
				backlogTasks: action.payload.filter(elem => elem.status === 'backlog').sort((a, b) => new Date(a.dateCreation).getTime() > new Date(b.dateCreation).getTime() ? 1 : -1),
				readyTasks: action.payload.filter(elem => elem.status === 'ready').sort((a, b) => new Date(a.lastUpdate).getTime() > new Date(b.lastUpdate).getTime() ? 1 : -1),
				inProgressTasks: action.payload.filter(elem => elem.status === 'in progress').sort((a, b) => new Date(a.lastUpdate).getTime() > new Date(b.lastUpdate).getTime() ? 1 : -1),
				finishedTasks: action.payload.filter(elem => elem.status === 'finished').sort((a, b) => new Date(a.lastUpdate).getTime() > new Date(b.lastUpdate).getTime() ? 1 : -1)
			};
		case ADD_INPUT_FIELD:
			if (action.payload === 'ready') {
				const copyReady = [...state.readyTasks];
				copyReady.push({title: '', description: '', id: '', status: '', counter: 0});
				return {...state, readyTasks: copyReady};
			} else if (action.payload === 'in progress') {
				const copyInProgress = [...state.inProgressTasks];
				copyInProgress.push({title: '', description: '', id: '', status: '', counter: 0});
				return {...state, inProgressTasks: copyInProgress};
			} else {
				const copyFinished = [...state.finishedTasks];
				copyFinished.push({title: '', description: '', id: '', status: '', counter: 0});
				return {...state, finishedTasks: copyFinished};
			}
		case MOVE_TASK_FORWARD:
			if (action.status === 'ready') {
				const copyReadyArr = [...state.readyTasks];
				copyReadyArr[copyReadyArr.length - 1] = action.payload;
				const copyBack = [...state.backlogTasks];
				const sameTask = copyBack.findIndex(elem => elem.id === action.payload.id);
				copyBack.splice(sameTask, 1);
				return {...state, readyTasks: copyReadyArr, backlogTasks: copyBack};
			} else if (action.status === 'in progress') {
				const copyInProgressArr = [...state.inProgressTasks];
				copyInProgressArr[copyInProgressArr.length - 1] = action.payload;
				const copyReady = [...state.readyTasks];
				const sameTask = copyReady.findIndex(elem => elem.id === action.payload.id);
				copyReady.splice(sameTask, 1);
				return {...state, inProgressTasks: copyInProgressArr, readyTasks: copyReady};
			} else {
				const copyFinishedArr = [...state.finishedTasks];
				copyFinishedArr[copyFinishedArr.length - 1] = action.payload;
				const copyInProgress = [...state.inProgressTasks];
				const sameTask = copyInProgress.findIndex(elem => elem.id === action.payload.id);
				copyInProgress.splice(sameTask, 1);
				return {...state, inProgressTasks: copyInProgress, finishedTasks: copyFinishedArr};
			}
		default:
			return state;
	}
};

export default reducer;
