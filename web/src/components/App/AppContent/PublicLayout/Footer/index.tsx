import { Layout } from "antd";
import * as Styled from "./Footer.styled";
import StandardLink from "../../../common/molecules/StandardLink";
const Footer = () => {
  return (
    <Styled.FooterWrapper>
      {"Benim Param \u00A92023 Created by "}
      <StandardLink variant="link" to="">
        Musa Şahin Kundakcı
      </StandardLink>
    </Styled.FooterWrapper>
  );
};
export default Footer;
