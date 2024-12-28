import { FC } from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";
import "./SectionHeading.css";

const SectionHeading: FC<HeadingProps> = ({ className, ...rest }) => {
  return (
    <Heading
      my="4"
      pb="4"
      fontSize="3xl"
      textAlign="center"
      md={{ fontSize: "4xl" }}
      className={`SectionHeading ${className || ""}`}
      _light={{
        "&::after": {
          backgroundColor: "black",
        },
      }}
      _dark={{
        "&::after": {
          backgroundColor: "white",
        },
      }}
      {...rest}
    />
  );
};

export default SectionHeading;
