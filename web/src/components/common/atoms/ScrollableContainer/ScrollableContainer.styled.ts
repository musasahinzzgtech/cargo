/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styled from "styled-components";
import { createElement } from "react";

const ScrollableContainerComponent = ({
  tag,
  innerRef,
  children,
  ...props
}: {
  tag?: string;
  innerRef?: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
  props?: any;
}) => {
  const Tag = tag || "div";
  return createElement(Tag, { ref: innerRef, ...props }, children);
};

export const ScrollableContainer = styled(ScrollableContainerComponent)`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #ecf0f1;
  }

  /**
    * @see https://chakra-ui.com/docs/styled-system/theme#colors
   */
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #4299e1;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.15);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #3182ce;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: #3182ce;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export default {
  ScrollableContainer,
};
