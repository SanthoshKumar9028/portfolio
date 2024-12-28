import { FC, useState } from "react";
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

const NavBar: FC = () => {
  const [showMenus, setShowMenus] = useState(false);

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
          <Link href="#" variant="plain">
            <Button rounded="full" className="NavBar__MenuItem">
              <Icon size="lg">
                <FaHome />
              </Icon>
              <span className="NavBar__MenuItemText">Home</span>
            </Button>
          </Link>
          <Button
            rounded="full"
            className="NavBar__MenuItem NavBar__MenuItem--active"
          >
            <Icon size="lg">
              <FaUser />
            </Icon>
            <span className="NavBar__MenuItemText">About</span>
          </Button>
          <Button rounded="full" className="NavBar__MenuItem">
            <Icon size="lg">
              <FaLayerGroup />
            </Icon>
            <span className="NavBar__MenuItemText">Skills</span>
          </Button>
          <Button rounded="full" className="NavBar__MenuItem">
            <Icon size="lg">
              <FaImages />
            </Icon>
            <span className="NavBar__MenuItemText">Projects</span>
          </Button>
          <Button rounded="full" className="NavBar__MenuItem">
            <Icon size="lg">
              <FaPhoneAlt />
            </Icon>
            <span className="NavBar__MenuItemText">Contact</span>
          </Button>
        </HStack>
      </HStack>

      <Box className="NavBar__ScroolToTop">
        <Button className="NavBar_IconBtn" borderRadius="full">
          <Icon size="lg">
            <FaChevronUp />
          </Icon>
        </Button>
      </Box>
    </>
  );
};

export default NavBar;
