import React from 'react';
import { LinksButtonContainer } from "./style";
import ebookicon from "../../images/ebookicon.jpg"

interface LinksButtonProps {
    text?: string,
    icon: string,
    link: string,
}

export function LinksButton({ text, icon, link}: LinksButtonProps) {
    return (
        <LinksButtonContainer>
            <a href={link} target='_blank'>
                <img src={icon} alt="icone do ebook"></img>
                { text && <p>  {text} </p> }
            </a>
        </LinksButtonContainer>
    )
}