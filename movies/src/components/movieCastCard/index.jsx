import React from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MovieCastCard({ credits }) {
    
    return ( 
        <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
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
        </Card>
    );
}

