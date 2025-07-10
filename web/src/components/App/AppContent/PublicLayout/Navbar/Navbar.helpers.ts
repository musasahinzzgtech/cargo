import { PUBLIC_ROUTES } from "constants/routes/publicRoutes";
import { NavbarLink, NavbarLinkType, NavbarSections } from "./Navbar.types";

//TODO: Change routes
const navbarLinks: NavbarLink[] = [
  {
    id: "1",
    path: PUBLIC_ROUTES.home,
    name: "Anasayfa",
    type: NavbarLinkType.Link,
    section: NavbarSections.Main,
  },
  {
    id: "2",
    path: PUBLIC_ROUTES.home,
    name: "Biz kimiz",
    type: NavbarLinkType.Link,
    section: NavbarSections.Main,
  },
  {
    id: "3",
    path: PUBLIC_ROUTES.home,
    name: "Misyonumuz",
    type: NavbarLinkType.Link,
    section: NavbarSections.Main,
  },
  {
    id: "4",
    path: PUBLIC_ROUTES.home,
    name: "Güvenlik",
    type: NavbarLinkType.Link,
    section: NavbarSections.Main,
  },
  {
    id: "5",
    path: PUBLIC_ROUTES.register,
    name: "Kayıt ol",
    type: NavbarLinkType.Link,
    section: NavbarSections.UserActions,
  },
  {
    id: "6",
    path: PUBLIC_ROUTES.login,
    name: "Giriş yap",
    type: NavbarLinkType.Link,
    section: NavbarSections.UserActions,
  },
];

export const createNavbarLinks = (section: NavbarSections) => {
  return navbarLinks.filter((link) => link.section === section);
};
