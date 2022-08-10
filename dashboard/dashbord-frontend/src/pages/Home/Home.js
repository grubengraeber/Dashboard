import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from "react";


export const Home = props => {
    let dataFetched = false;
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Card sx={{maxWidth: 200, maxHeight: 200, margin: "20px"}}
                          variant={"outlined"}>
                        <CardActionArea href={"/ShoppingList"}>
                            <CardMedia
                                component={"img"}
                                height={100}
                                image={"https://thumbs.dreamstime.com/z/woods-14670422.jpg"}
                                alt={"woods"}
                            />
                            <CardContent>
                                <Typography>
                                Shopping List: {dataFetched ? dataFetched : 0} open
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};