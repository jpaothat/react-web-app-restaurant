import React from "react";
import { HStack, VStack, Heading, Text, Avatar } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ username, numStars, name, comment, imageSrc }) => {
    return (
        <VStack
            color="black"
            backgroundColor="#FFFFFF"
            borderRadius="xl"
            padding="1em"
        >
            <VStack spacing={4} w={[35, 50]} h={[260, 235]}>
                <HStack>
                    {[...Array(numStars)].map((star, index) => {
                        index += 1;
                        return (
                            <FontAwesomeIcon key={index} icon={faStar} size="1x" color="#F4CE14" />
                        );
                    })}
                </HStack>
                <HStack>
                    <Avatar
                        src={imageSrc}
                        size="lg"
                        name="Photo"
                    />
                    <VStack>
                        <Heading as="h3" size="md">
                            {name}
                        </Heading>
                        <Text fontSize="md">
                            {username}
                        </Text>
                    </VStack>
                </HStack>
                <Text fontSize="lg" w={[250, 320]}>
                    {comment}
                </Text>
            </VStack>
        </VStack>
    );
  }

  export default Card;