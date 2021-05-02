import './InProgressItem.scss';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

const InProgressItem = ({elem, checkClickedItem}) => {
	const readyTasks = useSelector(state => state.readyTasks);

	return (
		<NavLink className='Kanban-item__navlink' to={elem.title === '' ? `/` : `/${elem.id}`}>
			<div className='InProgressItem'>
				<Autocomplete
					defaultValue={elem.title !== '' ? elem : null}
					id='combo-box-demo'
					freeSolo={elem.title !== ''}
					disabled={elem.title !== ''}
					className='InProgressItem__autocomplete'
					options={readyTasks}
					getOptionLabel={(option) => option.title}
					renderInput={(params) => (
						<TextField {...params} variant='outlined' multiline/>
					)}
					onChange={(event, value) => {
						try {
							checkClickedItem(value.id);
						} catch (e) {
							console.log('Null');
						}
					}}
				/>
			</div>
		</NavLink>
	);
};

export default InProgressItem;