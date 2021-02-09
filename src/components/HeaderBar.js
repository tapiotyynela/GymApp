import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import GoalList from './GoalList';
import SessionList from './SessionList';
import MoveList from './MoveList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    position: "absolute",
    right: "0px",
    marginRight: "2rem"
  },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={ 'span' }>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function ButtonAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  

  return (
    <div className={classes.root}>
      <AppBar position="static">
          <ToolBar>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Goals" {...a11yProps(0)} />
          <Tab label="Moves" {...a11yProps(1)} />
          <Tab label="Sessions" {...a11yProps(2)} />
        </Tabs>
        <div className={classes.title}>
        <Typography component={ 'span' }>Gym App</Typography>
        </div>
        </ToolBar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GoalList/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MoveList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SessionList/>
      </TabPanel>
    </div>
  );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };