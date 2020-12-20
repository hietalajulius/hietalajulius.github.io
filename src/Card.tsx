import React from "react";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Grid,
  Image,
  Paragraph,
  CardHeader,
  Text,
} from "grommet";

import { Github } from "grommet-icons";

export type Props = {
  title: string;
  message: string;
  time: string;
  mediaLink: string;
  mediaType: "image" | "video";
  projectLink: string;
  imageFit: "cover" | "contain";
};

export type DecoratedProps = Props & { textColor: string };

export const Project = (props: DecoratedProps) => {
  return (
    <Card elevation="large" width="large">
      <CardHeader height="xxsmall" />
      <CardBody height="medium"></CardBody>
      <Box pad={{ horizontal: "medium" }} responsive={false}>
        <Grid
          rows={["xxsmall", "small"]}
          columns={["small", "large"]}
          gap="medium"
          areas={[
            { name: "image", start: [0, 0], end: [0, 1] },
            { name: "title", start: [1, 0], end: [1, 0] },
            { name: "description", start: [1, 1], end: [1, 1] },
          ]}
        >
          <Box gridArea="image">
            <Image fit={props.imageFit} src={props.mediaLink} />
          </Box>
          <Box gridArea="title">
            <Heading
              color={props.textColor}
              level="3"
              margin={{ vertical: "medium" }}
            >
              {props.title}
            </Heading>
          </Box>
          <Box gridArea="description">
            <Paragraph color={props.textColor} margin={{ top: "none" }}>
              {props.message}
            </Paragraph>
          </Box>
        </Grid>
      </Box>
      <CardFooter pad={{ horizontal: "medium" }}>
        <Text color={props.textColor}>{props.time}</Text>
        <Button
          href={props.projectLink}
          icon={<Github color={props.textColor} />}
          hoverIndicator
        />
      </CardFooter>
    </Card>
  );
};
