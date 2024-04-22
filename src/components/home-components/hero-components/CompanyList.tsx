import React from "react";

import Company from "./Company";

import zapier from "./../../../assets/zapier.svg";
import spotify from "./../../../assets/spotify.svg";
import zoom from "./../../..//assets/zoom.svg";
import slack from "./../../../assets/slack.svg";
import amazon from "./../../../assets/amazon.svg";
import adobe from "./../../../assets/adobe.svg";

import "./hero.css"

const CompanyList = () => {
    return (
        <ul className="carousel flex items-center justify-between gap-5 overflow-hidden">
            <Company src="zapier.com" imgSrc={zapier}></Company>
            <Company src="spotify.com" imgSrc={spotify}></Company>
            <Company src="zoom.com" imgSrc={zoom}></Company>
            <Company src="slack.com" imgSrc={slack}></Company>
            <Company src="amazon.com" imgSrc={amazon}></Company>
            <Company src="adobe.com" imgSrc={adobe}></Company>
        </ul>
    )
}

export default CompanyList;