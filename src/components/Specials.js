import React from "react";
import { Box, HStack, VStack, Button, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./SpecialCard";

const specials = [
    {
        title: "Greek Salad",
        description:
            "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$12.99",
        getImageSrc: () => require("../images/greeksalad.jpg"),
    },
    {
        title: "Bruchetta",
        description:
            "Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "$5.99",
        getImageSrc: () => require("../images/bruchetta.jpg"),
    },
    {
        title: "Lemon Dessert",
        description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "$5.99",
        getImageSrc: () => require("../images/lemondessert.jpg"),
    },
];

const Specials = () => {
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

    return (
        <section className="specials_wrapper">
            <VStack margin="auto">
                <HStack>
                    <h1 className="section_title">This Weeks Specials</h1>
                    {isLargerThan1280 ?
                        <Button
                            width="115px"
                            borderRadius="2xl"
                            color="#495E57"
                            backgroundColor="#F4CE14"
                        >
                            <Link to="/menu">Full Menu</Link>
                        </Button>
                        : null
                    }
                </HStack>
                {isLargerThan1280 ?
                    null :
                        <Button
                            width="115px"
                            borderRadius="2xl"
                            color="#495E57"
                            backgroundColor="#F4CE14"
                        >
                            <Link to="/menu">Full Menu</Link>
                        </Button>
                }
                {isLargerThan1280 ?
                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(3, 1fr)"
                        gridGap={8}
                    >
                        {specials.map((special) => (
                            <Card
                                key={special.title}
                                title={special.title}
                                description={special.description}
                                price={special.price}
                                imageSrc={special.getImageSrc()}
                            />
                        ))}
                    </Box>
                : null}
                {isLargerThan1280 ? null :
                    <Carousel showThumbs={false} className="special_carousel">
                        {specials.map((special) => (
                            <Card
                                key={special.title}
                                title={special.title}
                                description={special.description}
                                price={special.price}
                                imageSrc={special.getImageSrc()}
                            />
                        ))}
                    </Carousel>
                }
            </VStack>
        </section>
    );
}

export default Specials;