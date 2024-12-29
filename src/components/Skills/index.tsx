import { FC } from "react";
import {
  Card,
  Container,
  Grid,
  GridItem,
  HStack,
  ProgressRoot,
  VStack,
} from "@chakra-ui/react";
import {
  ProgressLabel,
  ProgressValueText,
  ProgressBar,
} from "@/components/ui/progress";

import SectionHeading from "../SectionHeading";
import {
  dataBases,
  programmingLanguages,
  tools,
  webTechnologies,
} from "./dataSource";

const Skills: FC = () => {
  return (
    <Container
      id="skills-section"
      className="page-section"
      md={{
        maxWidth: "2/3",
      }}
    >
      <SectionHeading>Skills</SectionHeading>
      <Grid gap={3} lg={{ gridTemplateColumns: "1fr 1fr" }}>
        <GridItem>
          <Card.Root>
            <Card.Header fontSize="large">Programming Languages</Card.Header>
            <Card.Body>
              <VStack gap={3} alignItems="stretch">
                {programmingLanguages.map((item) => (
                  <ProgressRoot
                    key={item.label}
                    value={item.value}
                    colorPalette="primary"
                  >
                    <HStack mb={1} justifyContent="space-between">
                      <ProgressLabel>{item.label}</ProgressLabel>
                      <ProgressValueText>{item.value}%</ProgressValueText>
                    </HStack>
                    <ProgressBar />
                  </ProgressRoot>
                ))}
              </VStack>
            </Card.Body>
          </Card.Root>
        </GridItem>
        <GridItem>
          <Card.Root>
            <Card.Header fontSize="large">Web Technologies</Card.Header>
            <Card.Body>
              <VStack gap={3} alignItems="stretch">
                {webTechnologies.map((item) => (
                  <ProgressRoot
                    key={item.label}
                    value={item.value}
                    colorPalette="primary"
                  >
                    <HStack mb={1} justifyContent="space-between">
                      <ProgressLabel>{item.label}</ProgressLabel>
                      <ProgressValueText>{item.value}%</ProgressValueText>
                    </HStack>
                    <ProgressBar />
                  </ProgressRoot>
                ))}
              </VStack>
            </Card.Body>
          </Card.Root>
        </GridItem>
        <GridItem lg={{ gridColumnStart: "2", gridRowStart: "1" }}>
          <Card.Root>
            <Card.Header fontSize="large">Tools</Card.Header>
            <Card.Body>
              <VStack gap={3} alignItems="stretch">
                {tools.map((item) => (
                  <ProgressRoot
                    key={item.label}
                    value={item.value}
                    colorPalette="primary"
                  >
                    <HStack mb={1} justifyContent="space-between">
                      <ProgressLabel>{item.label}</ProgressLabel>
                      <ProgressValueText>{item.value}%</ProgressValueText>
                    </HStack>
                    <ProgressBar />
                  </ProgressRoot>
                ))}
              </VStack>
            </Card.Body>
          </Card.Root>
        </GridItem>
        <GridItem>
          <Card.Root>
            <Card.Header fontSize="large">DataBases</Card.Header>
            <Card.Body>
              <VStack gap={3} alignItems="stretch">
                {dataBases.map((item) => (
                  <ProgressRoot
                    key={item.label}
                    value={item.value}
                    colorPalette="primary"
                  >
                    <HStack mb={1} justifyContent="space-between">
                      <ProgressLabel>{item.label}</ProgressLabel>
                      <ProgressValueText>{item.value}%</ProgressValueText>
                    </HStack>
                    <ProgressBar />
                  </ProgressRoot>
                ))}
              </VStack>
            </Card.Body>
          </Card.Root>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Skills;
