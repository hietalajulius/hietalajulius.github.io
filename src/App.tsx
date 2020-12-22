import {
  Main,
  Heading,
  Grid,
  Box,
  Header,
  Button,
  Footer,
  Text,
  Avatar,
  Image,
  Anchor,
  Grommet,
} from "grommet";
import React from "react";
import Toggle from "react-toggle";
import { Star } from "grommet-icons";
import "./App.css";
import { Project } from "./Card";
import { projects } from "./projects";
import { customTheme } from "./theme";
import { BiSun } from "react-icons/bi";

document.title = "Julius Hietala";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  const [textColor, setTextColor] = React.useState("white");

  React.useEffect(() => {
    setTextColor(darkMode ? "white" : "black");
  }, [darkMode]);

  const renderCards = () =>
    projects.map((project) => {
      return (
        <Box gridArea={project.gridArea}>
          <Project textColor={textColor} {...project} />
        </Box>
      );
    });

  const onToggle = () => {
    setDarkMode(!darkMode);
    const href = (document.getElementById("favicon") as any).href;
    if (darkMode) {
      (document.getElementById("favicon") as any).href = href.replace(
        "moon",
        "sun"
      );
    } else {
      (document.getElementById("favicon") as any).href = href.replace(
        "sun",
        "moon"
      );
    }
  };
  return (
    <Grommet theme={customTheme}>
      <Main
        background={
          darkMode
            ? "linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)"
            : "white"
        }
        align="center"
      >
        <Grid
          rows={["xxxsmall", "small", "small", "small", "small", "small", "small"]}
          columns={["large"]}
          gap="xxsmall"
          areas={[
            { name: "header", start: [0, 0], end: [0, 0] },
            { name: "title", start: [0, 1], end: [0, 1] },
            { name: "proj1", start: [0, 2], end: [0, 2] },
            { name: "proj2", start: [0, 3], end: [0, 3] },
            { name: "proj3", start: [0, 4], end: [0, 4] },
            { name: "proj4", start: [0, 5], end: [0, 5] },
            { name: "proj5", start: [0, 6], end: [0, 6] },
          ]}
        >
          <Box gridArea="header">
            <Header>
              <Box animation={darkMode ? "pulse" : {}}>
                <Toggle
                  checked={darkMode}
                  icons={{
                    unchecked: <Star color={"yellow"} size={"small"} />,
                    checked: <BiSun size="14px" />,
                  }}
                  onChange={onToggle}
                />
              </Box>
              <Button
                primary
                label="Github"
                href={"https://github.com/hietalajulius"}
              />
            </Header>
          </Box>
          <Box gridArea="title">
            <Box>
              <Heading color={textColor} level={1}>
                <Box gap="small" direction="column">
                  <Box align="center">
                    <Avatar size="xlarge">
                      <Image
                        fit="contain"
                        src="https://avatars3.githubusercontent.com/u/4254623?s=460&u=2929eada3a32281e89b5438075f3faefe53aaa13&v=4"
                      />
                    </Avatar>
                  </Box>
                  <Box align="center">{"Julius Hietala"}</Box>
                </Box>
              </Heading>
            </Box>
            <Heading color={textColor} alignSelf={"center"} level={2}>
              {"Things i've been working on lately"}
            </Heading>
          </Box>
          {renderCards()}
        </Grid>
      </Main>
      <Footer
        background="dark-2"
        pad={{ horizontal: "small", vertical: "small" }}
      >
        <Box align="start" direction="row" gap="xsmall">
          <Text size="small" alignSelf="center">
            Made with
          </Text>
          <Anchor size="small" href="https://www.typescriptlang.org/">
            TypeScript
          </Anchor>
          <Text size="small" alignSelf="center">
            and
          </Text>
          <Anchor size="small" href="https://v2.grommet.io/">
            grommet
          </Anchor>
        </Box>

        <Text textAlign="center" size="small">
          © 2020 Copyright
        </Text>
      </Footer>
    </Grommet>
  );
};

export default App;
