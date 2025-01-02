import { LinksButtonContainer } from "./style";
import { NavLink } from 'react-router-dom'


interface LinksButtonProps {
    text?: string,
    icon: string,
    link?: string,
    nav?: string | JSX.Element 
}

export function LinksButton({ text, icon, link, nav }: LinksButtonProps) {
    return (
        <LinksButtonContainer>
            { nav ?
                <NavLink to="/pageacha" title="">
                    <img src={icon} alt=""></img>
                    { text && <p>  {text} </p> }
                </NavLink>
            :
                <a href={link} target='_blank'>
                    <img src={icon} alt=""></img>
                    { text && <p>  {text} </p> }
                </a>
            }
        </LinksButtonContainer>
    )
}

export const navegation = () => {
   
    return (
      <NavLink to="/PageAcha" title="" />
 
    );
   }