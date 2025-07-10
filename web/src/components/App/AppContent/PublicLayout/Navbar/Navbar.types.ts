import StandardLink from "components/common/molecules/StandardLink";
import React, { ReactNode } from "react";

export enum NavbarSections {
  Main = "main",
  Secondary = "secondary",
  UserActions = "user-actions",
}

export enum NavbarLinkType {
  Link = "link",
}

export interface NavbarLink {
  id: string;
  path?: string;
  name?: string;
  type: NavbarLinkType;
  src?: string;
  section: NavbarSections;
}

export const NavbarLinkComponents: {
  [key: NavbarLinkType]: ReactNode;
} = {
  [NavbarLinkType.Link]: StandardLink,
};
