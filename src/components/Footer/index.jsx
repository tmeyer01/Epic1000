import React from "react";
import { FooterContainer, 
        FooterWrap, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkItems, 
        FooterLinkTitle, 
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink

} from "./FooterElements";

import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Epic 1000</FooterLinkTitle>
              <FooterLink to="/signin">Route</FooterLink>
              <FooterLink to="/signin">Rules</FooterLink>
              <FooterLink to="/signin">Register</FooterLink>
             
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>The Buckshot</FooterLinkTitle>
              <FooterLink to="/signin">Route</FooterLink>
              <FooterLink to="/signin">Rules</FooterLink>
              <FooterLink to="/signin">Register</FooterLink>
             
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">General Classification</FooterLink>
              <FooterLink to="/signin">Links</FooterLink>
              <FooterLink to="/signin">Gallery</FooterLink>
              <FooterLink to="/signin">Video</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">BC Epic 1000</SocialLogo>
            <WebsiteRights>
              {" "}
              BC Epic 1000 © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" traget="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" traget="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" traget="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" traget="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
