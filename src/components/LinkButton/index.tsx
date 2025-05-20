import { LinkButtonContainer } from "./style";
import { NavLink } from 'react-router-dom'


interface LinkButtonProps {
  text?: string,
  icon: string,
  link?: string,
  nav?: string,
}

export function LinkButton({ text, icon, link, nav }: LinkButtonProps) {
  return (
    <LinkButtonContainer>
      { nav ?
        <NavLink to={nav} title="">
          <img src={icon} alt=""></img>
          { text && <p>  {text} </p> }
        </NavLink>
      :
        <a href={link} target='_blank'>
          <img src={icon} alt=""></img>
          { text && <p>  {text} </p> }
        </a>
      }
    </LinkButtonContainer>
  )
}