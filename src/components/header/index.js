import { Component } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Menu from "services/nav-menu.json";
import {
  Bullets,
  Burger,
  Container,
  HeaderContent,
  List,
  ListContainer,
  Logo,
  LogoLink,
  MenuLink,
  Navigation,
} from "assets/styles/header";

class Hamburger extends Component {
  render() {
    return (
      <Burger open={this.props.open} onClick={() => this.props.openClick()}>
        <Bullets />
        <Bullets />
      </Burger>
    );
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, sticky: false };
    this.openClick = this.openClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount = () => {
    onscroll = () => {
      this.setState({ sticky: window.scrollY > 250 });
    };
  };

  openClick = () => {
    this.setState({ open: !this.state.open });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  render() {
    const open = this.state.open;
    open ? disableBodyScroll(document) : enableBodyScroll(document);
    
    return (
      <HeaderContent open={open} sticky={this.state.sticky}>
        <Container sticky={this.state.sticky}>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          <Navigation open={open}>
            <ListContainer>
              {Menu.map(({title, go}) => (
                <List key={title}>
                  <MenuLink to={go} onClick={this.closeMenu}>{title}</MenuLink>
                </List>
              ))}
            </ListContainer>
          </Navigation>
          <Hamburger open={open} openClick={this.openClick} />
        </Container>
      </HeaderContent>
    );
  }
}
