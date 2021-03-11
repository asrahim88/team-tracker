import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './TeamTrackerDetails.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import icon from '../../img/Icon/found 1.png';
import icon0 from '../../img/Icon/flag (1) 1.png';
import icon1 from '../../img/Icon/football (1) 1.png';
import icon2 from '../../img/Icon/male-gender-sign 1.png';
import male from '../../Photo/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';


const TeamTrackerDetails = () => {
    const { idTeam } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(response => response.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [idTeam])
    const { strTeam, strTeamBanner, intFormedYear, strCountry, strGender, strTeamBadge, strFacebook, strTwitter, strYoutube, strLeague2 } = teamDetails;
    return (
        <div>


            <div className="body-details">
                <div style={{ backgroundImage: `url(${strTeamBanner})` }} className="detailsBanner">
                    <div className="bannerLogoParent">
                        <div className="bannerLogo">
                            <img src={strTeamBadge} alt="" />
                        </div>
                    </div>

                </div>
                <Container fixed>
                    <div className="description">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <h1 className="teamName">{strTeam}</h1>
                                <div className='icon-description'>
                                    <div className='icon-image'>
                                        <img className='iconImg' src={icon} alt="" />
                                        <img className='iconImg' src={icon0} alt="" />
                                        <img className='iconImg' src={icon1} alt="" />
                                        <img className='iconImg' src={icon2} alt="" />
                                    </div>
                                    <div className='icon-des'>
                                        <p>Founded: {intFormedYear}</p>
                                        <p>Country: {strCountry}</p>
                                        <p>Sports type: {strLeague2}</p>
                                        <p>Gender: {strGender}</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className='photo'>
                                    <img src={male} alt="" />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt error officiis commodi inventore. Inventore sequi cupiditate, blanditiis nihil illum expedita debitis ad laborum natus, excepturi molestiae repellat, quae optio!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt error officiis commodi inventore. Inventore sequi cupiditate, blanditiis nihil illum expedita debitis ad laborum natus, excepturi molestiae repellat, quae optio!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt error officiis commodi inventore. Inventore sequi cupiditate, blanditiis nihil illum expedita debitis ad laborum natus, excepturi molestiae repellat, quae optio!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt error officiis commodi inventore. Inventore sequi cupiditate, blanditiis nihil illum expedita debitis ad laborum natus, excepturi molestiae repellat, quae optio!
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt error officiis commodi inventore. Inventore sequi cupiditate, blanditiis nihil illum expedita debitis ad laborum natus, excepturi molestiae repellat, quae optio!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt error officiis commodi inventore. Inventore sequi cupiditate, blanditiis nihil illum expedita debitis ad laborum natus, excepturi molestiae repellat, quae optio!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt error officiis commodi inventore. Inventore sequi cupiditate, blanditiis nihil illum expedita debitis ad laborum natus, excepturi molestiae repellat, quae optio!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt error officiis commodi inventore. Inventore sequi cupiditate, blanditiis nihil illum expedita debitis ad laborum natus, excepturi molestiae repellat, quae optio!
                        </p>
                    </div>
                </Container>

                <div className="social">
                    <div className="socialBox">
                        <a href={strFacebook} target="blank">
                            <FontAwesomeIcon className="socialImage" icon={faFacebookSquare} />
                        </a>
                        <a href={strTwitter}>
                            <FontAwesomeIcon className="socialImage" icon={faTwitterSquare} />
                        </a>
                        <a href={strYoutube}>
                            <FontAwesomeIcon className="socialImage" icon={faYoutubeSquare} />
                        </a>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default TeamTrackerDetails;