import React from 'react'
import { makeStyles, createTheme } from '@material-ui/core/styles';
import { Avatar, Container, Grid, Typography, Card, CardActionArea, CardContent, } from '@mui/material';


const useStyles = makeStyles({

    // root: {
    //     maxWidth: 645,
    //     background: "rgba(0,0,0,0.5)",
    //     margin: "20px"
    // },
    // media: {
    //     height: 440,
    // },
    // title: {
    //     fontFamily: 'Nunito',
    //     fontWeight: "bold",
    //     fontSize: "2rem",
    //     color: "#fff",

    // },
    // description: {
    //     fontFamily: 'Nunito',

    //     fontSize: "1.1rem",
    //     color: "#ddd",
    // }
    card: {
        height: '60vh',
        display: 'block',
        width: '90vw',
        padding:"1em"
    }

});


const Profile = () => {

    const classes = useStyles();
    return (
        <>
            <Container>
                <div className="d-flex justify-content-center py-5">
                    <Card className={classes.card} sx={{ maxWidth: 500, width: 1 / 2, height: 1 / 2 }}  >
                        <CardActionArea>
                            <div className='d-flex justify-content-center'>
                                <Avatar className="m-3"
                                    alt="Remy Sharp"
                                    src={"https://source.unsplash.com/random"}
                                    align="center"
                                    sx={{ width: 200, height: 200, justifyContent: "center", display: "flex" }}
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align="center">
                                    Name
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
            </Container>

        </>
    )
}

export default Profile