import { FC } from "react";
import {
  Box,
  Container,
  Grid,
  Heading,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import SectionHeading from "../SectionHeading";

const Contact: FC = () => {
  return (
    <Container
      md={{
        maxWidth: "2/3",
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <Grid pb="9" xl={{ gridTemplateColumns: "1fr 1fr" }}>
        <Box mb="4">
          <Heading mb="1">Let's chat</Heading>
          <Text>
            By chatting we can able to understand the other person. If you want
            to learn more about me please reach out to me with the contact
            details.
          </Text>
        </Box>
        <Grid gap="4" md={{ gridTemplateColumns: "1fr 1fr" }}>
          <VStack>
            <Icon size="md">
              <FaPhoneAlt />
            </Icon>
            <Text>Call me at</Text>
            <Link variant="underline" href="tel:9080024160">
              +91 90800 24160
            </Link>
          </VStack>
          <VStack>
            <Icon size="md">
              <MdMail />
            </Icon>
            <Text>Mail me at</Text>
            <Link variant="underline" href="mailto:santhoshkumar9028@gmail.com">
              santhoshkumar9028@gmail.com
            </Link>
          </VStack>
          <VStack>
            <Icon size="md">
              <FaLinkedin />
            </Icon>
            <Text>Reach me in LinkedIn</Text>
            <Link
              variant="underline"
              href="http://www.linkedin.com/in/santhoshkumar9028"
            >
              santhoshkumar9028
            </Link>
          </VStack>
          <VStack>
            <Icon size="md">
              <FaGithub />
            </Icon>
            <Text>Reach me in Github</Text>
            <Link
              variant="underline"
              href="https://github.com/SanthoshKumar9028"
            >
              SanthoshKumar9028
            </Link>
          </VStack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
