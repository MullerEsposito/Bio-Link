import React from 'react';
import { ContactButtonContainer, ContentButton } from "./style";
import ebookicon from "../../images/ebookicon.jpg"

interface ContactButtonProps {
    text?: string,
    icon: string,
    link: string,
}

export function ContactButton({ text, icon, link}: ContactButtonProps) {
    return (
        <ContactButtonContainer>
            <a href={link} target='_blank'>
                <img src={icon} alt="icone do ebook"></img>
                { text && <p>  {text} </p> }
            </a>
        </ContactButtonContainer>
    )
}