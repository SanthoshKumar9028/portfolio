import { FC } from "react";
import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";

const Banner: FC = () => {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  );
};

export default Banner;
