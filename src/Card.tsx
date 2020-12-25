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

export type DecoratedProps = Props & { textColor: string; mobile: boolean };

export const Project = (props: DecoratedProps) => {
  return (
    <Card elevation="large" width="large">
      <CardBody height="large">
        <Box pad={{ top: "medium", horizontal: "medium" }} responsive={true}>
          <Grid
            rows={["xxsmall", "small"]}
            columns={["small", "large"]}
            gap="small"
            areas={
              !props.mobile
                ? [
                    { name: "image", start: [0, 0], end: [0, 1] },
                    { name: "title", start: [1, 0], end: [1, 0] },
                    { name: "description", start: [1, 1], end: [1, 1] },
                  ]
                : [
                    { name: "title", start: [0, 0], end: [1, 0] },
                    { name: "description", start: [0, 1], end: [1, 1] },
                  ]
            }
          >
            {" "}
            {!props.mobile && (
              <Box responsive={true} gridArea="image">
                <Image fit={props.imageFit} src={props.mediaLink} />
              </Box>
            )}
            <Box responsive={true} gridArea="title">
              <Heading color={props.textColor} level="3">
                {props.title}
              </Heading>
            </Box>
            <Box responsive={true} width="medium" gridArea="description">
              <Paragraph color={props.textColor} margin={{ top: "none" }}>
                {props.message}
              </Paragraph>
            </Box>
          </Grid>
        </Box>
      </CardBody>
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
