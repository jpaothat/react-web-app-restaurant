import React from "react";
import { HStack, VStack, Heading, Text, Image, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, price, imageSrc }) => {
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

    return (
        <VStack
            color="black"
            backgroundColor="#EDEFEE"
            borderRadius="xl"
        >
            {isLargerThan1280 ?
                <VStack spacing={4} w={300} h={485}>
                    <Image src={imageSrc} borderTopRadius="xl" alt={title} />
                    <HStack>
                        <Heading as="h3" size="md">
                            {title}
                        </Heading>
                        <Heading as="h3" size="md" color="#EE9972">
                            {price}
                        </Heading>
                    </HStack>
                    <Text color="#000000" fontSize="lg" w={[300, 250]}>
                        {description}
                    </Text>
                    <Link to="/order" className="nav-item">
                        <HStack spacing={2} cursor="pointer">
                            <p>Order a delivery</p>
                            <FontAwesomeIcon icon={faArrowRight} size="1x" />
                        </HStack>
                    </Link>
                </VStack>
                :
                <VStack spacing={4} w={[110, 100]} h={[550, 535]}>
                    <Image src={imageSrc} borderTopRadius="xl" alt={title} />
                    <HStack width={185}>
                        <Heading as="h3" size="md">
                            {title}
                        </Heading>
                        <Heading as="h3" size="md" color="#EE9972">
                            {price}
                        </Heading>
                    </HStack>
                    <Text color="#000000" fontSize="lg" w={250}>
                        {description}
                    </Text>
                    <Link to="/order" className="nav-item">
                        <HStack spacing={2} cursor="pointer" w={155}>
                            <p>Order a delivery</p>
                            <FontAwesomeIcon icon={faArrowRight} size="1x" />
                        </HStack>
                    </Link>
                </VStack>
            }
        </VStack>
    );
  }

  export default Card;