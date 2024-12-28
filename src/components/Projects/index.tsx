import { FC } from "react";
import {
  Card,
  Container,
  Grid,
  GridItem,
  IconButton,
  Link,
  Tabs,
  Image,
} from "@chakra-ui/react";
import SectionHeading from "../SectionHeading";
import { projects } from "./dataSource";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Projects: FC = () => {
  return (
    <Container
      md={{
        maxWidth: "2/3",
      }}
    >
      <SectionHeading>Projects</SectionHeading>
      <Tabs.Root defaultValue="all">
        <Tabs.List>
          <Tabs.Trigger value="all">All</Tabs.Trigger>
          <Tabs.Trigger value="company">Company</Tabs.Trigger>
          <Tabs.Trigger value="personal">Personal</Tabs.Trigger>
        </Tabs.List>
        {["all", "company", "personal"].map((value) => (
          <Tabs.Content key={value} value={value}>
            <Grid
              gap={3}
              sm={{ gridTemplateColumns: "1fr" }}
              md={{ gridTemplateColumns: "1fr 1fr" }}
              xl={{ gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              {projects
                .filter(
                  (project) => value === "all" || project.category === value
                )
                .map((project) => (
                  <GridItem key={project.title}>
                    <Card.Root height="100%">
                      <Image src={project.src} />
                      <Card.Body gap={2}>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Description>{project.content}</Card.Description>
                      </Card.Body>
                      <Card.Footer justifyContent="flex-end">
                        {project.link?.website && (
                          <Link href={project.link?.website} target="_blank">
                            <IconButton>
                              <FaGlobe />
                            </IconButton>
                          </Link>
                        )}
                        {project.link?.github && (
                          <Link href={project.link?.github} target="_blank">
                            <IconButton>
                              <FaGithub />
                            </IconButton>
                          </Link>
                        )}
                      </Card.Footer>
                    </Card.Root>
                  </GridItem>
                ))}
            </Grid>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Container>
  );
};

export default Projects;
