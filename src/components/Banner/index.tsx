import { FC, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import "./Banner.css";
import abstractDigitalBackground from "@/assets/abstract-digital-grid-black-background.jpg";
import dataSource from "@/dataSource";

const Banner: FC = () => {
  const timmer = useRef<number>();
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    function scheduleAnimate() {
      clearTimeout(timmer.current);
      timmer.current = setTimeout(() => {
        setActiveRole((prv) => (prv + 1) % dataSource.profile.roles.length);
        scheduleAnimate();
      }, 5000);
    }

    scheduleAnimate();

    return () => {
      clearTimeout(timmer.current);
    };
  }, []);

  return (
    <HStack
      height="100vh"
      id="banner-section"
      className="page-section Banner_RootContainer"
    >
      <Container
        className="zoom-in Banner_ContentContainer"
        color="white"
        md={{
          maxWidth: "2/3",
        }}
      >
        <Heading
          size="4xl"
          sm={{ fontSize: "5xl" }}
          md={{ fontSize: "6xl" }}
          lg={{ fontSize: "7xl" }}
        >
          Santhoshkumar
        </Heading>
        <HStack
          my="6"
          fontSize="1xl"
          className="Banner_RolesContainer"
          alignItems="stretch"
          sm={{ fontSize: "2xl" }}
          md={{ fontSize: "3xl" }}
          overflowY="hidden"
        >
          <Text>I'm &nbsp;</Text>
          <Box className="Banner_Roles">
            {dataSource.profile.roles.map((role, index) => (
              <Text
                key={role.title}
                className={`Banner_Role ${
                  index === activeRole ? "Banner_Role--active" : ""
                }`}
              >
                {role.title}
              </Text>
            ))}
          </Box>
        </HStack>
        <HStack>
          <Link
            href="https://github.com/SanthoshKumar9028/portfolio/blob/main/public/Santhoshkumar.pdf"
            target="_blank"
          >
            <Button colorPalette="primary">
              Resume <FiExternalLink />
            </Button>
          </Link>
        </HStack>
      </Container>
      <Image
        className="Banner_AbstractBackground"
        src={abstractDigitalBackground}
        alt="abstract digital background"
      />
      <Box
        className="Banner_SkewedBox"
        bg="white"
        _dark={{
          bgColor: "bg.darkBg",
        }}
      />
    </HStack>
  );
};

export default Banner;
