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
import useInViewport from "@/hooks/useInView";

const Skills: FC = () => {
  const [plRef, plRefIsinView] = useInViewport<HTMLDivElement>({
    once: true,
  });
  const [wtRef, wtRefIsinView] = useInViewport<HTMLDivElement>({
    once: true,
  });
  const [toolsRef, toolsRefIsinView] = useInViewport<HTMLDivElement>({
    once: true,
  });
  const [dataBasesRef, dataBasesRefIsinView] = useInViewport<HTMLDivElement>({
    once: true,
  });

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
        <GridItem ref={plRef}>
          <Card.Root className={`scale-0 ${plRefIsinView ? "scale-1" : ""}`}>
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
        <GridItem ref={wtRef}>
          <Card.Root className={`scale-0 ${wtRefIsinView ? "scale-1" : ""}`}>
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
        <GridItem
          ref={toolsRef}
          lg={{ gridColumnStart: "2", gridRowStart: "1" }}
        >
          <Card.Root className={`scale-0 ${toolsRefIsinView ? "scale-1" : ""}`}>
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
        <GridItem ref={dataBasesRef}>
          <Card.Root
            className={`scale-0 ${dataBasesRefIsinView ? "scale-1" : ""}`}
          >
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
