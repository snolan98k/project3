import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        width: '30%',
        height: '300px',
        padding: '20px'
    },
    chatbox: {
        width: '85%'
    },
    button: {
        width: '15%'
    }

}));

export default function Dashboard() {

    const classes = useStyles();

    const [textValue, changedTextValue] = React.useState('');

    return (
        < div >
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Chat App
                </Typography>
                <Typography component="p">
                    Topic Placeholder
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicWindow}>
                        <List>
                            {
                                ['topic'].map(topic => (
                                    <ListItem key={topic} button>

                                        <ListItemText primary={topic} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            [{ from: 'user', msg: 'hello' }].map((chat, i) => (
                                <div className={classes.flex} key={i}>
                                    <Chip label={chat.from} className={classes.chip} />
                                    <Typography varient='p'>{chat.msg}</Typography>
                                </div>

                            ))
                        }
                    </div>

                </div>
                <div className={classes.flex}>
                    <TextField
                        label="Send a Chat"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={e => changedTextValue(e.target.value)}
                        margin="normal"
                    />
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Send
                     </Button>



                </div>
            </Paper>
        </div >
    )
}