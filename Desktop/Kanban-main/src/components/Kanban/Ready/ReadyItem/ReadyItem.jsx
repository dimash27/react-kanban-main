import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './ReadyItem.scss';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

const ReadyItem = ({checkClickedItem, elem}) => {
	const backlogTasks = useSelector((state) => state.backlogTasks);

	return (
		<NavLink className='Kanban-item__navlink' to={elem.title === '' ? `/` : `/${elem.id}`}>
			<div className='ReadyItem'>
				<Autocomplete
					defaultValue={elem.title !== '' ? elem : null}
					id='combo-box-demo'
					freeSolo={elem.title !== ''}
					disabled={elem.title !== ''}
					className='ReadyItem__autocomplete'
					options={backlogTasks}
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

export default ReadyItem;
