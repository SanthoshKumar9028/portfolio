import { FC, useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import {
  FaBars,
  FaChevronUp,
  FaHome,
  FaImages,
  FaLayerGroup,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { Box, Link, HStack, Button, Icon } from "@chakra-ui/react";
import "./NavBar.css";

const menus = [
  {
    id: "banner-section",
    href: "#banner-section",
    text: "Home",
    icon: <FaHome />,
  },
  {
    id: "about-section",
    href: "#about-section",
    text: "About",
    icon: <FaUser />,
  },
  {
    id: "skills-section",
    href: "#skills-section",
    text: "Skills",
    icon: <FaLayerGroup />,
  },
  {
    id: "projects-section",
    href: "#projects-section",
    text: "Projects",
    icon: <FaImages />,
  },
  {
    id: "contact-section",
    href: "#contact-section",
    text: "Contact",
    icon: <FaPhoneAlt />,
  },
];

const NavBar: FC = () => {
  const [showMenus, setShowMenus] = useState(false);
  const [showScroolToTop, setShowScroolToTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;

        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 0.3,
      }
    );

    const sections = document.querySelectorAll(".page-section");

    sections?.forEach((section) => observer.current?.observe(section));

    return () => {
      sections?.forEach((section) => observer.current?.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const bannerSection = document.getElementById("banner-section");
    let timmer: number | undefined;

    const handleOnScroll = () => {
      if (!bannerSection) return;

      const rect = bannerSection.getBoundingClientRect();

      clearTimeout(timmer);

      timmer = setTimeout(() => {
        if (rect.top < -700) {
          setShowScroolToTop(true);
        } else {
          setShowScroolToTop(false);
        }
      }, 250);
    };

    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
      clearTimeout(timmer);
    };
  }, []);

  return (
    <>
      <HStack
        className="NavBar__root NavBar__NavItems"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Box className="NavBar__OpenItem">
          <Button
            className="NavBar_IconBtn"
            borderRadius="full"
            colorPalette="primary"
            onClick={() => setShowMenus((prv) => !prv)}
          >
            <Icon size="lg">{showMenus ? <MdClose /> : <FaBars />}</Icon>
          </Button>
        </Box>
        <HStack
          className={showMenus ? "NavBar__MenuList--show" : ""}
          flexDirection="column"
          alignItems="flex-start"
        >
          {menus.map((menu) => (
            <Link key={menu.id} href={menu.href} variant="plain">
              <Button
                colorPalette="primary"
                rounded="full"
                className={`NavBar__MenuItem ${
                  activeSection === menu.id ? "NavBar__MenuItem--active" : ""
                }`}
              >
                <Icon size="lg">{menu.icon}</Icon>
                <span className="NavBar__MenuItemText">{menu.text}</span>
              </Button>
            </Link>
          ))}
        </HStack>
      </HStack>

      <Box
        className={`NavBar__ScroolToTop ${
          showScroolToTop ? "NavBar__ScroolToTop--active" : ""
        }`}
      >
        <Button
          colorPalette="primary"
          className="NavBar_IconBtn"
          borderRadius="full"
          onClick={() => {
            if (document.scrollingElement) {
              document.scrollingElement?.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          <Icon size="lg">
            <FaChevronUp />
          </Icon>
        </Button>
      </Box>
    </>
  );
};

export default NavBar;
