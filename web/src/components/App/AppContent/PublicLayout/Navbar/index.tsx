import { createNavbarLinks } from "./Navbar.helpers";
import * as Styled from "./Navbar.styled";
import { NavbarLinkComponents, NavbarSections } from "./Navbar.types";
import { Flex, Typography } from "antd";

const RenderSection = ({ section }: { section: NavbarSections }) => {
  // TODO: It maybe extendable not for now
  return createNavbarLinks(section).map((link) => {
    //TODO: resolve this ts error kurwa !!!!
    const Component = NavbarLinkComponents[link.type];
    return <Component to={link.path}>{link.name}</Component>;
  });
};

const Navbar = () => {
  return (
    <Styled.SHeader>
      {/**Main */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          // height: "20dvh",
        }}
      >
        <Flex align="center" gap=".6rem" style={{ marginRight: "1.4rem" }}>
          <Styled.Logo src="logo.svg" alt="logo" />
          <Typography.Text>Benim Param</Typography.Text>
        </Flex>
        <RenderSection section={NavbarSections.Main} />
      </div>
      {/* <div style={{ flex: 1 }}>
        <RenderSection section={NavbarSections.Secondary} />
      </div> */}
      <div style={{ display: "flex", gap: "16px" }}>
        <RenderSection section={NavbarSections.UserActions} />
      </div>
    </Styled.SHeader>
  );
};
export default Navbar;
