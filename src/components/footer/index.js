import NavMenu from "services/nav-menu.json";
import { Container } from "assets/styles/global";
import {
  FooterContent,
  FooterRow,
  FooterCol,
  LogoSVG,
  ColTitle,
  Paragraph,
  ColLink,
  FooterAnimation,
  FooterMain,
  CopyMain,
  CopyContent,
  CopyText,
  RS,
  RSLink,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  LogoPicinguabaIMG,
} from "assets/styles/footer";

const Footer = () => {
  
  return (
    <FooterContent>
      <FooterAnimation />
      <FooterMain>
        <Container>
          <FooterRow>
            <FooterCol lg={6} md={6} sm={12}>
              <LogoPicinguabaIMG src={LogoSVG} alt="Logo Picinguaba" />
              <Paragraph>
                Uma vila de pescadores preservada entre o mar e a floresta.
              </Paragraph>
              <RS>
                <RSLink href="https://www.facebook.com/micheldslive" target="_blank">
                  <Facebook />
                </RSLink>
                <RSLink href="https://www.instagram.com/micheldslive" target="_blank">
                  <Instagram />
                </RSLink>
                <RSLink href="https://www.linkedin.com/in/micheldslive" target="_blank">
                  <Linkedin />
                </RSLink>
                <RSLink href="https://www.youtube.com/vila" target="_blank">
                  <Youtube />
                </RSLink>
              </RS>
            </FooterCol>
            <FooterCol lg={6} md={6} sm={12}>
              <ColTitle>Menu</ColTitle>
              {NavMenu.map(({title, go}) => (
                <ColLink key={title} to={go}>
                  {title}
                </ColLink>
              ))}
            </FooterCol>
          </FooterRow>
        </Container>
      </FooterMain>
      <CopyMain>
        <Container>
          <FooterRow>
            <CopyContent>
              <CopyText>
                Feito com ❤️ por: Equipe 02 - Desafio Chefão
              </CopyText>
            </CopyContent>
          </FooterRow>
        </Container>
      </CopyMain>
    </FooterContent>
  );
};

export default Footer;