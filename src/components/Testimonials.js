import React from "react";
import { VStack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./TestimonialCard";

const testimonials = [
    {
        username: "karatraveler",
        numStars: 5,
        name: "Kara Bailey",
        comment:
            "Cozy restaurant, delicious dishes, and beautiful presentation. I recommend to everyone!",
        imageSrc:
            "https://i.pravatar.cc/150?img=1",
    },
    {
        username: "carefreejudy",
        numStars: 4,
        name: "Judy Hall",
        comment:
            "Service is unmatched. Long wait to get a table without a reservation.",
        imageSrc:
            "https://i.pravatar.cc/150?img=5",
    },
    {
        username: "naturejoseph",
        numStars: 5,
        name: "Joseph Thornton",
        comment:
            "Ambiance is very welcoming and charming. Amazing food and staff.",
        imageSrc:
            "https://i.pravatar.cc/150?img=12",
    },
    {
        username: "rebeccafitness",
        numStars: 5,
        name: "Rebecca Rhodes",
        comment:
            "Visit this lovely restaurant! I enjoyed every single bite.",
        imageSrc:
            "https://i.pravatar.cc/150?img=23",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials_wrapper">
            <VStack margin="auto">
                <h1 className="section_title">Customer Reviews</h1>
                <Carousel showThumbs={false}>
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.username}
                            username={testimonial.username}
                            numStars={testimonial.numStars}
                            name={testimonial.name}
                            comment={testimonial.comment}
                            imageSrc={testimonial.imageSrc}
                        />
                    ))}
                </Carousel>
            </VStack>
        </section>
    );
}

export default Testimonials;