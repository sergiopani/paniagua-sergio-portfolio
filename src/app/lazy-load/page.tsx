
import { Main } from "../../../components/ui";
import { LazyLoadImages } from "../../../components/imagesComp/LazyLoadImages";
import { FC } from "react";
import React from "react";


const LazyLoad: FC = () => {
    return (
        <>
            <Main>
                <LazyLoadImages />
            </Main>
        </>
    );
};


export default LazyLoad;
