import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import './todoItem.css';

export default function TodoItem({ item, remove, toggle }) {
    const labelId = `checkbox-list-label-${item.id}`;

    const removeTodo = () => {
        remove(item.id);
    };

    return (
        <ListItem
            onClick={toggle}
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                    <ClearIcon />
                </IconButton>
            }
            disablePadding
            className='listItem'
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={item.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText
                    id={labelId}
                    primary={item.text}
                />
            </ListItemButton>
        </ListItem>
    )
}