import React from 'react';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import {Button} from "@material-ui/core";

function GenericCard(newCard){
    return(
        <div>
            <Card sx={{border: '2px solid #738276', backgroundColor: '#5E5E5E', elevation:'1'}}>
                <CardMedia
                    component="img"
                    alt={newCard.alt}
                    height="130"
                    Width="130"
                    image={newCard.image}
                />
                <CardActions>
                    <Button size="small" color="primary" variant="contained" 
                    align="center">{newCard.desc}</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default GenericCard;