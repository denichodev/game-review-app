import * as React from "react";
import { Heading, Box } from "@chakra-ui/core";

interface Props {
  title: string;
}

const PageHeader = (props: Props) => (
  <Box pb={4}>
    <Heading as="h2" size="xl">
      {props.title}
    </Heading>
  </Box>
);

export default PageHeader;
