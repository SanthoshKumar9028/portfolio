import {
  Bolt,
  Book,
  ContactPhone,
  Home,
  Info,
  Source,
  Work,
} from "@mui/icons-material";

export default {
  nav: {
    items: [
      { text: "Home", href: "#", Icon: Home },
      { text: "About", href: "#", Icon: Info },
      { text: "Education", href: "#", Icon: Book },
      { text: "Experience", href: "#", Icon: Work },
      { text: "Skills", href: "#", Icon: Bolt },
      { text: "Projects", href: "#", Icon: Source },
      { text: "Contact", href: "#", Icon: ContactPhone },
    ],
  },
};
