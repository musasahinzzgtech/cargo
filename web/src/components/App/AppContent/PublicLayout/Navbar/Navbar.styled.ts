import { Layout } from "antd";
import { styled } from "styled-components";

const { Header } = Layout;
const Logo = styled.img`
  width: 2rem;
  border-radius: .5rem;
`;
const SHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 1rem;
  box-shadow: 0 2px 8px #f0f1f2;
  z-index: 1;
  height: 5dvh;
`;

export { Logo, SHeader };
