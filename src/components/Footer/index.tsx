import { FC } from "react";
import {
  Container,
  Heading,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdLocalPhone, MdMailOutline } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import dataSource from "@/dataSource";
import { CiLinkedin } from "react-icons/ci";

const socialLinks = [
  {
    href: `tel:${dataSource.profile.mobile.value}`,
    icon: <MdLocalPhone />,
  },
  {
    href: `mailto:${dataSource.profile.email.value}`,
    icon: <MdMailOutline />,
  },
  {
    href: dataSource.profile.linkedIn.value,
    icon: <CiLinkedin />,
  },
  {
    href: dataSource.profile.github.value,
    icon: <FaGithubSquare />,
  },
];

const Footer: FC = () => {
  return (
    <HStack bg="primary.100" height="50vh" py="7">
      <Container
        textAlign="center"
        color="white"
        md={{
          maxWidth: "1/2",
        }}
      >
        <Heading size="4xl" sm={{ fontSize: "4xl" }}>
          That't it
        </Heading>
        <Text my="6" fontSize="1xl">
          You have reached the end of my portfolio, all the above details are
          belongs to me. It's not copied from others. If you wanna learn more
          about me please reach out to me.
        </Text>
        <Heading my="6" sm={{ fontSize: "2xl" }}>
          Have a nice day!!
        </Heading>
        <Stack flexDirection="row" justifyContent="center" md={{ gap: "3" }}>
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.href}
              href={socialLink.href}
              target="_blank"
              color="white"
            >
              <IconButton rounded="full">{socialLink.icon}</IconButton>
            </Link>
          ))}
        </Stack>
      </Container>
    </HStack>
  );
};

export default Footer;
