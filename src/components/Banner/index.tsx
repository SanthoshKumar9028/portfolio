import { FC } from "react";
import { Button, Container, Heading, HStack, Text } from "@chakra-ui/react";
import { FaFileDownload } from "react-icons/fa";

const Banner: FC = () => {
  return (
    <HStack height="100vh">
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
          <Button colorPalette="primary">
            <FaFileDownload /> Resume
          </Button>
        </HStack>
      </Container>
    </HStack>
  );
};

export default Banner;
