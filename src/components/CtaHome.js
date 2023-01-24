import React from "react";
import { HStack, VStack, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import restaurantfood from "../images/restaurantfood.jpg";

const CTA_Home = () => {
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

    return (
        <section>
            <HStack margin="auto">
                <VStack alignItems="left">
                    <h1 className="title_restaurant">Little Lemon</h1>
                    <h1 className="subtitle_location">Chicago</h1>
                    <Text
                        className="description_restaurant"
                        maxWidth="65ch"
                    >
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                    </Text>
                    <HStack spacing="40px"  justifyContent="center">
                        <Button
                            width="150px"
                            borderRadius="2xl"
                            color="#495E57"
                            backgroundColor="#F4CE14"
                        >
                            <Link to="/reservations">Reserve a table</Link>
                        </Button>
                        {isLargerThan1280 ? null : <img className="restaurantfoodimage" src={restaurantfood} alt="Restaurant food" />}
                    </HStack>
                </VStack>
                {isLargerThan1280 ? <img className="restaurantfoodimage" src={restaurantfood} alt="Restaurant food" /> : null}
            </HStack>
        </section>
    );
}

export default CTA_Home;