import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Select from '@material-ui/core/Select';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { rgba } from 'Utils/css-utils';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        // '& > *': {
        //     margin: theme.spacing(1)
        // },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    app: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 30px',
        backgroundColor: theme.palette.secondary.main,
    },
    mainSection: {
        backgroundColor: theme.palette.secondary.main,
        height: '80vh'
    },
}));

const StyledAppBar = withStyles((theme) => ({
    colorPrimary: {
        backgroundColor: theme.palette.primary.main
    }
}))(AppBar);

const StyledButton = withStyles((theme) => ({
    root: {
        //background: `linear-gradient(45deg, ${theme.palette.secondary.light} 30%, ${theme.palette.secondary.main} 90%)`,
        backgroundColor: `${rgba(theme.palette.secondary.main, 1.0)}`,
        borderRadius: 3,
        border: `1px solid ${rgba(theme.palette.primary.main, 1.0)}`,
        height: 48,
        padding: '0 30px',
        boxShadow: `0 3px 5px 2px ${rgba(theme.palette.primary.main, 0.8)}`,
        color: theme.palette.type === 'light'? rgba(theme.palette.common.white, 1.0) : rgba(theme.palette.common.black, 1.0),
    },
    disabled: {
        backgroundColor:  rgba(theme.palette.common.white, 0.3),
        color: rgba(theme.palette.common.white, 0.3),
    },
    endIcon: {
        margin: 0,
        color: theme.palette.type === 'light'? rgba(theme.palette.common.black, 1.0) : rgba(theme.palette.common.white, 1.0),
    }
}))(Button);

const StyledToggleButton = withStyles((theme) => ({
    root: {
        //background: `linear-gradient(45deg, ${theme.palette.secondary.light} 30%, ${theme.palette.secondary.main} 90%)`,
        background: `${rgba(theme.palette.secondary.main, 1.0)}`,
        borderRadius: 3,
        border: `1px solid ${rgba(theme.palette.common.white, 1.0)}`,
        color: theme.palette.type === 'light'? rgba(theme.palette.common.white, 1.0) : rgba(theme.palette.common.black, 1.0),
        height: 48,
        padding: '0 30px',
        boxShadow: `0 3px 5px 2px ${rgba(theme.palette.primary.main, 0.8)}`,
    },
    label: {
        color: theme.palette.type === 'light'? rgba(theme.palette.common.white, 1.0) : rgba(theme.palette.common.black, 1.0),
    },
    disabled: {
        color: rgba(theme.palette.common.white, 0.4),
    },
    selected: {
        color: theme.palette.type === 'light'? rgba(theme.palette.common.black, 1.0) : rgba(theme.palette.common.white, 1.0),
    },
    // endIcon: {
    //     margin: 0,
    //     color: theme.palette.type === 'light'? rgba(theme.palette.common.black, 1.0) : rgba(theme.palette.common.white, 1.0),
    // },
}))(ToggleButton);

const StyledSelector = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.common.white,
        "&:focus": {
            backgroundColor: theme.palette.common.white
        }
    },
    select: {
        backgroundColor: theme.palette.common.black
    },
    selectMenu: {
        backgroundColor: theme.palette.common.white
    },
    filled: {
        backgroundColor: theme.palette.common.white
    },
    outlined: {
        backgroundColor: theme.palette.common.white
    },
    // inputProps: {
    //     classes: {
    //         root: {
    //             backgroundColor: theme.palette.common.white
    //         },
    //         //icon: classes.icon,
    //     },
    // }
}))(Select)

const StyledTextField = withStyles((theme) => ({
    root: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        background: theme.palette.secondary.main,
        color: theme.palette.common.white
    },
}))(TextField)

export {
    useStyles, 
    StyledButton, 
    StyledToggleButton, 
    StyledSelector, 
    StyledTextField,
    StyledAppBar
}