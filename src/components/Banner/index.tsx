import { FC } from "react";
import {
  Button,
  Container,
  Heading,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

const Banner: FC = () => {
  return (
    <HStack height="100vh" id="banner-section" className="page-section">
      <Container
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
        <Text
          my="6"
          fontSize="1xl"
          sm={{ fontSize: "2xl" }}
          md={{ fontSize: "3xl" }}
        >
          I'm MERN Stack Developer
        </Text>
        <HStack>
          <Link href="Santhoshkumar-resume.pdf" target="_blank">
            <Button colorPalette="primary">
              Resume <FiExternalLink />
            </Button>
          </Link>
        </HStack>
      </Container>
    </HStack>
  );
};

export default Banner;
