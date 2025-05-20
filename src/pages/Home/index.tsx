import { Author, AvatarContainer, Header, HomeContainer, LinkInstagram, LinksContainer } from "./styles"
import profileimg from "@images/profileimg.jpg"
import ebookicon from "@images/ebookicon.png"
import iconwhatsapp from "@images/iconwhatsapp.png"
import iconyoutube from "@images/iconyoutube.png"
import icontiktok from "@images/icontiktok.png"
import iconacha from "@images/iconacha.png"
import iconinsta from "@images/iconinsta.webp"
import { Heart } from "phosphor-react"
import { LinkButton, navegation } from "../../components/LinkButton"
import { AnimatedWaveText } from "@components/AnimatedWaveText"


export function Home() {
  return (
    <HomeContainer>
      <Header>
        <AvatarContainer>
          <img src={profileimg} alt="Imagem de perfil"/>
        </AvatarContainer>
        <div>
          <h1>
            <AnimatedWaveText>LoLa Links</AnimatedWaveText>
          </h1>
        </div>
      </Header>
      <LinksContainer> 
        <LinkButton
          text="Ebook Introdução Alimentar de forma leve"
          icon={ebookicon}
          link="https://hotmart.com/pt-br/marketplace/produtos/introducao-alimentar-de-forma-leve/U88019896P?fbclid=PAZXh0bgNhZW0CMTEAAabiI7tvFHjh7ICoN2M93mzpKSusq8kqTPpDiF8VS5oRIHxNOO145SOQqP0_aem_IDCSbH753lIAzsSqw0QlGw"
        />

        <LinkButton 
          text="Grupo no whatsApp de promoções"
          icon={iconwhatsapp}
          link="https://chat.whatsapp.com/L6jzf9WgMOUG6ZzyQF6gaW?fbclid=PAZXh0bgNhZW0CMTEAAaaUdY_lzS1D3o4vEPzlUBEI6zprFxnTvQllax_UlTjC_VRloVKBX-jt7Qc_aem_JEx4SmiUCFz_6ZI3cPosgQ"
        />

        <LinkButton 
          text="Canal no Youtube"
          icon={iconyoutube}
          link="https://www.youtube.com/@lorenafarias188"
        />

        <LinkButton 
          text="Meu Tiktok"
          icon={icontiktok}
          link="https://www.tiktok.com/@lorenaafarias_"
        />

        <LinkButton 
          text="Achadinhos"
          icon={iconacha}
          nav="/achadinhos" 
        />

        <LinkInstagram>  
          <a href="https://www.instagram.com/lorenaafarias_/"   target='_blank'>
            <img id="icon-insta" src={iconinsta} alt="icone insta"></img>
          </a>
        </LinkInstagram>
      </LinksContainer>


      <Author onClick={()=> window.open('https://www.instagram.com/m.wallas_/')}>
        <p>
          Made with 
          <Heart size={18} color="#FF0000" weight="fill" />
          by Mateus Wallas
        </p>
      </Author>
    </HomeContainer>
  )
}
