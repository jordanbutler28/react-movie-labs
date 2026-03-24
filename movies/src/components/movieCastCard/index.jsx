import React from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

export default function MovieCastCard({ credits }) {
    
    return ( 
        /*<Card sx={{ maxWidth: 345, textAlign: 'center' }}>
            <CardHeader title={credits.name} />
            <CardMedia
                component="img"
                height="300"
                image={`https://image.tmdb.org/t/p/w500${credits.profile_path}`}
                alt={credits.name}
            />
            <CardContent>
                <Typography>
                    {credits.character}
                </Typography>
            </CardContent>
        </Card>*/
    <Grid container spacing={2}>
        <Paper variant="elevation" square= "false">
            <Avatar src={`https://image.tmdb.org/t/p/w500${credits.profile_path}`} sx={{ width: 80, height: 80 }}></Avatar>
            <Typography variant="h5">{credits.name}</Typography>
            <Typography>{credits.character}</Typography>
        </Paper>
    </Grid>

    );
}

