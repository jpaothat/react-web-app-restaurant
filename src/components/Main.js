import React from "react";
import { VStack } from "@chakra-ui/react";

const Main = ({ children }) => {
    return (
        <main className="main_wrapper">
            <VStack margin="auto">
                {children}
            </VStack>
        </main>
    );
}

export default Main;