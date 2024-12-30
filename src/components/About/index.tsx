import { FC } from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  TimelineConnectorProps,
} from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import ProfilePhoto from "@/assets/passport-size-photo.jpg";
import SectionHeading from "../SectionHeading";
import "./About.css";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import dataSource from "@/dataSource";
import useInViewport from "@/hooks/useInView";

const CustomTimelineConnector: FC<TimelineConnectorProps> = (props) => (
  <TimelineConnector _light={{ bg: "lightgray" }} {...props} />
);

const About: FC = () => {
  const [aboutContainerRef, aboutContainerIsinView] =
    useInViewport<HTMLDivElement>({
      once: true,
      threshold: 0.1,
    });
  const [educationContainerRef, educationContainerIsinView] = useInViewport({
    once: true,
  });
  const [experienceContainerRef, experienceContainerIsinView] = useInViewport({
    once: true,
  });

  return (
    <Container
      id="about-section"
      className="page-section"
      ref={aboutContainerRef}
      md={{
        maxWidth: "2/3",
      }}
    >
      <SectionHeading>About</SectionHeading>
      <Box
        className={`move-transition ${
          aboutContainerIsinView ? "" : "move-outofview-bottom"
        }`}
      >
        <Text mb="3">
          Enthusiastic web developer with three years of hands-on expertise in
          React and Redux for web application development, testing and
          debugging. Having good knowledge of MERN stack development.
        </Text>
        <Stack
          gap="7"
          sm={{ alignItems: "center" }}
          lg={{ flexDirection: "row", alignItems: "flex-start" }}
        >
          <Image
            rounded="md"
            src={ProfilePhoto}
            alt="Santhoshkumar profile photo"
            sm={{ width: "351px", height: "509px" }}
          />
          <Box>
            <Heading size="2xl" md={{ fontSize: "3xl" }} mb="4">
              Software Developer
            </Heading>
            <Stack xl={{ flexDirection: "row", gap: "6", flexWrap: "wrap" }}>
              <ul className="About__MetaDetailsList">
                <li>
                  <Text>
                    <span className="bold About__MetaDetailsLabel">
                      Fullname:{" "}
                    </span>
                    <span className="About__MetaDetailsValue">
                      {dataSource.profile.fullName}
                    </span>
                  </Text>
                </li>
                <li>
                  <Text>
                    <span className="bold About__MetaDetailsLabel">
                      Birthday:{" "}
                    </span>
                    <span
                      className="About__MetaDetailsValue"
                      title="DD/MM/YYYY"
                    >
                      {dataSource.profile.dob}
                    </span>
                  </Text>
                </li>
                <li>
                  <Text>
                    <span className="bold About__MetaDetailsLabel">
                      Email:{" "}
                    </span>
                    <Link
                      variant="underline"
                      target="_blank"
                      href={`mailto:${dataSource.profile.email.value}`}
                    >
                      {dataSource.profile.email.text}
                    </Link>
                  </Text>
                </li>
                <li>
                  <Text>
                    <span className="bold About__MetaDetailsLabel">
                      Phone:{" "}
                    </span>
                    <Link
                      variant="underline"
                      href={`tel:${dataSource.profile.mobile.value}`}
                    >
                      {dataSource.profile.mobile.text}
                    </Link>
                  </Text>
                </li>
              </ul>
              <ul className="About__MetaDetailsList">
                <li>
                  <Text>
                    <span className="bold About__MetaDetailsLabel">
                      Degree:{" "}
                    </span>
                    <span className="About__MetaDetailsValue">
                      {dataSource.profile.education.highestDegree}
                    </span>
                  </Text>
                </li>
                <li>
                  <Text>
                    <span className="bold About__MetaDetailsLabel">Role: </span>
                    <span className="About__MetaDetailsValue">
                      {dataSource.profile.role}
                    </span>
                  </Text>
                </li>
                <li>
                  <Text>
                    <span className="bold About__MetaDetailsLabel">City: </span>
                    <span className="About__MetaDetailsValue">
                      {dataSource.profile.city}
                    </span>
                  </Text>
                </li>
              </ul>
            </Stack>
            <Text mt="5">
              Hi I am a MCA graduate, I have a strong knowledge about React and
              it's related technology. Having good knowledge of MERN Stack
              Development.
            </Text>
            <Text mt="5">
              I was one of the member in my college Front-End develpers team. We
              build our college new website. It is launched on 2022. Based on my
              performance, my previous company (FOCUSCRAFT TECH PRIVATE LIMITED)
              gave me a Star performance award. Eager to take on a dynamic UI
              Developer or Full Stack Developer role to apply my expertise and
              drive innovation in digital projects.
            </Text>
          </Box>
        </Stack>
      </Box>

      <Stack
        mt="7"
        lg={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box ref={educationContainerRef} lg={{ maxW: "49%" }}>
          <Box
            className={`move-transition ${
              educationContainerIsinView ? "" : "move-outofview-left"
            }`}
          >
            <Heading size="2xl" md={{ fontSize: "3xl" }} mb="4">
              Education
            </Heading>
            <TimelineRoot>
              <TimelineItem>
                <CustomTimelineConnector>
                  <FaCheckCircle color="green" />
                </CustomTimelineConnector>
                <TimelineContent>
                  <TimelineTitle>
                    Master of Computer Application (MCA)
                  </TimelineTitle>
                  <TimelineDescription>
                    July 2019 - May 2022
                  </TimelineDescription>
                  <Text>
                    I have completed my Masters degree in PUDUCHERRY
                    TECHNOLOGICAL UNIVERSITY. Formerly known as PONDICHERRY
                    ENGINEERING COLLEGE.
                  </Text>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <CustomTimelineConnector>
                  <FaCheckCircle color="green" />
                </CustomTimelineConnector>
                <TimelineContent>
                  <TimelineTitle>
                    Bachelor of Computer Application (BCA)
                  </TimelineTitle>
                  <TimelineDescription>
                    October 2016 - May 2019
                  </TimelineDescription>
                  <Text>
                    I have completed my BCA degree in PRIST UNIVERSITY college.
                  </Text>
                </TimelineContent>
              </TimelineItem>
            </TimelineRoot>
          </Box>
        </Box>
        <Box ref={experienceContainerRef} lg={{ maxW: "49%" }}>
          <Box
            className={`move-transition ${
              experienceContainerIsinView ? "" : "move-outofview-left"
            }`}
          >
            <Heading size="2xl" md={{ fontSize: "3xl" }} mb="4">
              Professional Experience
            </Heading>
            <TimelineRoot>
              <TimelineItem>
                <CustomTimelineConnector>
                  <FaCircle className="color-blink-animation" color="gray" />
                </CustomTimelineConnector>
                <TimelineContent>
                  <TimelineTitle>
                    CONVERGEPOINT TECH PRIVATE LIMITED
                  </TimelineTitle>
                  <TimelineDescription>
                    June 2024 - Present | Chennai, Tamil Nadu, India
                  </TimelineDescription>
                  <Text>
                    <span className="bold">SharePoint: </span>Created reusable
                    React components that manages the data available in
                    SharePoint List and Library using PnPjs library and CAML
                    query.
                  </Text>
                  <Text>
                    <span className="bold">
                      Code Review and Merge Responsibility:{" "}
                    </span>
                    Took the responsibility for reviewing and merging the PRs
                    created by other developers.
                  </Text>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <CustomTimelineConnector>
                  <FaCheckCircle color="green" />
                </CustomTimelineConnector>
                <TimelineContent>
                  <TimelineTitle>FOCUSCRAFT TECH PRIVATE LIMITED</TimelineTitle>
                  <TimelineDescription>
                    July 2022 - March 2024 | Chennai, Tamil Nadu, India
                  </TimelineDescription>
                  <Text>
                    <span className="bold">Front-end Development: </span>
                    Translated UI designs (Figma/Zeplin) into responsive
                    HTML/React components, adhering to a mobile-first approach
                    for web applications.
                  </Text>
                  <Text>
                    <span className="bold">Component Reusability: </span>Created
                    reusable React components in Storybook for efficient
                    development
                  </Text>
                  <Text>
                    <span className="bold">Integration Expertise: </span>
                    Integrated backend microservices APIs into UI components,
                    ensuring seamless end-to-end functionality
                  </Text>
                  <Text>
                    <span className="bold">Agile Collaboration: </span>Actively
                    participated in Agile/Scrum practices, including daily
                    stand-up meetings and sprint planning.
                  </Text>
                  <Text>
                    <span className="bold">Cross-functional Teamwork: </span>
                    Collaborated with cross-functional teams, including
                    designers and backend developers, to deliver responsive and
                    user-friendly web applications
                  </Text>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <CustomTimelineConnector>
                  <FaCheckCircle color="green" />
                </CustomTimelineConnector>
                <TimelineContent>
                  <TimelineTitle>FOCUSCRAFT TECH PRIVATE LIMITED</TimelineTitle>
                  <TimelineDescription>
                    July 2021 - June 2022 | Chennai, Tamil Nadu, India
                  </TimelineDescription>
                  <Text>
                    Developed proficiency in TypeScript with React and Redux by
                    building a fully functional shopping cart application.
                    Acquired expertise in writing comprehensive unit tests for
                    React components and Redux slices using Jest
                  </Text>
                </TimelineContent>
              </TimelineItem>
            </TimelineRoot>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default About;
