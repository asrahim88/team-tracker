import React, { useState } from 'react';
import { useEffect } from 'react';
import TeamTracker from '../TeamTracker/TeamTracker';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './Home.css';





const Home = () => {
    const [teamsTracker, setTeamsTracker] = useState([]);
    
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
            .then(response => response.json())
            .then(data => setTeamsTracker(data.teams))
    }, [])
    return (
        <div>
            <div className = 'banner'>
                <h1 className = 'image-center'>Team Tacker</h1>
            </div>

            <div className="body">
                <Container fixed>
                    <Grid container spacing={3}>
                        {
                            teamsTracker.map((teams) => <TeamTracker teams={teams} key = {teams.idTeam}></TeamTracker>)
                        }
                    </Grid>
                </Container>
            </div>

        </div>
    );
};

export default Home;