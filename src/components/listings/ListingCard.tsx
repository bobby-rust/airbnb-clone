import React from "react";
import ListingRightArrow from "./ListingRightArrow";
import "./listings.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import RatingStar from "./RatingStar";

type ListingCardProps = {};

const ListingCard = (props: any) => {
    const images = props.images;
    const imgIdx = 0;
    const [image, setImage] = React.useState(images[0].picture);

    return (
        <div className='card-container'>
            <Card
                sx={{
                    minWidth: 270,
                    maxWidth: 270,
                    borderRadius: "15px",
                    boxShadow: "none",
                }}>
                <CardMedia
                    image={image}
                    sx={{
                        height: "256px",
                        width: "270px",
                        aspectRatio: 20 / 19,
                    }}
                />
                {/* <Typography
                    sx={{ fontSize: 14 }}
                    color='text.secondary'
                    gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant='h5' component='div'>
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    adjective
                </Typography>
                <Typography variant='body2'>
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography> */}
            </Card>
            <div className='card-content-container'>
                <div className='card-location'>Springfield, Missouri</div>
                <div className='card-rating'>
                    <RatingStar />
                    4.89
                </div>

                <div className='card-distance'>12 miles away</div>
                <div className='card-date'>Jan 9 - 14</div>
                <div className='card-price'>
                    $182 <span style={{ fontWeight: "normal" }}>night</span>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
