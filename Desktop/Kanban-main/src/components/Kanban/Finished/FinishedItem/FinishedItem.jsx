import './FinishedItem.scss';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

const FinishedItem = ({checkClickedItem, elem}) => {
	const inProgressTasks = useSelector((state) => state.inProgressTasks);

	return (
		<NavLink className='Kanban-item__navlink' to={elem.title === '' ? `/` : `/${elem.id}`}>
			<div className='FinishedItem'>
				<Autocomplete
					defaultValue={elem.title !== '' ? elem : null}
					id='combo-box-demo'
					freeSolo={elem.title !== ''}
					disabled={elem.title !== ''}
					className='FinishedItem__autocomplete'
					options={inProgressTasks}
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

export default FinishedItem;
