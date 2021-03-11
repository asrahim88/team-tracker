import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './TeamTracker.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 425,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

const TeamTracker = (props) => {
    const { strTeam, strTeamBadge,idTeam, strLeague2} = props.teams;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={3}>
            <Card className={classes.root}>
                <div className='img'>
                    <img className ='teamLogo' src={strTeamBadge} alt="" />
                </div>
                <div className='information'>
                    <h2>{strTeam}</h2>
                    <p>Sports type: {strLeague2}</p>
                    <Link to={`teamDetails/${idTeam}`} className="exploreLink">
                        <Button variant="contained" color="primary">
                            Explore   <FontAwesomeIcon icon={faArrowRight} className="icon" />
                        </Button>
                    </Link>
                </div>
            </Card>
        </Grid>
    );
};

export default TeamTracker;