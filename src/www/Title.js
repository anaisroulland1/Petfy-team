import React from "react";

const Title = ({ noPadding }) => {
    if (noPadding) return <h1 className="font-spicy text-5xl mx-auto w-fit text-white">Petfy</h1>;
    return <h1 className="font-spicy text-5xl mx-auto w-fit pt-16 text-white">Petfy</h1>;
};

export default Title;
