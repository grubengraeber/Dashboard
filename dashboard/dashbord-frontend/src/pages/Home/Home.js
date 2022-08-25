import {Badge, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";


export const Home = props => {

    const [shoppingListEntryCount, setShoppingListEntryCount] = useState(0)
    const [budgetTrackerCount, setBudgetTrackerCount] = useState(0)

    const badgeContentShoppingList = <h3>{shoppingListEntryCount}</h3>;
    const badgeContentBudgetTracker = <h3>{budgetTrackerCount}</h3>;

    axios.get("http://127.0.0.1:8080/api/shopping-list/" + 121 + "/count")
    .then((response) => {
        setShoppingListEntryCount(response.data)
    })

    axios.get("http://127.0.0.1:8080/api/v1/budget/expenses/sum")
    .then((response) => {
        setBudgetTrackerCount(response.data.toFixed(2))
    })
    
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                <Badge color="success" badgeContent={badgeContentShoppingList}>
                    <Card sx={{maxWidth: 200, maxHeight: 200, margin: "20px"}}
                          variant={"outlined"}>
                        <CardActionArea href={"/ShoppingList"}>
                            <CardMedia
                                component={"img"}
                                height={100}
                                image={"data:image/png;base64,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"}
                                alt={"woods"}
                            />
                            <CardContent>
                                <Typography>
                                    Shoppinglist
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Badge>
                </Grid>
                <Grid item xs={2}>

                    <Badge color="success" badgeContent={badgeContentBudgetTracker} >
                    <Card sx={{maxWidth: 200, maxHeight: 200, margin: "20px"}}
                          variant={"outlined"}>
                        <CardActionArea href={"/BudgetTracker"} >
                            <CardMedia
                                component={"img"}
                                height={100}
                                image={"data:image/png;base64,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"}
                                alt={"woods"}
                            />
                            <CardContent>
                                <Typography>
                                    BudgetTracker
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Badge>
                </Grid>
            </Grid>
        </>
    );
};