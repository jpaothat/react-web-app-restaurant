import React from "react";
import Main from "./Main";
import CtaHome from "./CtaHome";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Main>
                <CtaHome />
            </Main>
            <Specials />
            <Testimonials />
        </div>
    );
}

export default Home;