import {
  Main,
  Heading,
  Box,
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

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const App = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  const size = useWindowSize();


  const renderCards = () =>
    projects.map((project) => {
      return (
        <Box>
          <Project mobile={size.width < 620} textColor={textColor} {...project} />
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
  const textColor = darkMode ? "white" : "black";
  return (
    <Grommet
      background={
        darkMode
          ? "linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)"
          : "white"
      }
      themeMode={darkMode ? "dark" : "light"}
      theme={customTheme}
    >
      <Main pad="10px" align="center" direction="column">
        <Box
          pad={{ top: "20px" }}
          direction="row"
          width="large"
          justify="between"
        >
          <Box
            animation={{
              type: "pulse",
              duration: 1000,
              size: "medium",
            }}
          >
            <Toggle
              checked={darkMode}
              icons={{
                unchecked: <Star color={"yellow"} size={"small"} />,
                checked: <BiSun size="14px" />,
              }}
              onChange={onToggle}
            />
          </Box>
          <Box gap="small" direction="row">
            <Button
              primary
              label="Github"
              href={"https://github.com/hietalajulius"}
            />
            <Button
              primary
              label="LinkedIn"
              href={"https://www.linkedin.com/in/julius-hietala-8967b8a2/"}
            />
          </Box>
        </Box>
        <Box align="center">
          <Box>
            <Heading size={"small"} color={textColor} level={1}>
              <Box gap="small" direction="column">
                <Box align="center">
                  <Avatar size="xlarge">
                    <Image
                      fit="contain"
                      src="https://avatars3.githubusercontent.com/u/4254623?s=460&u=2929eada3a32281e89b5438075f3faefe53aaa13&v=4"
                    />
                  </Avatar>
                </Box>
                <Box>{"Julius Hietala"}</Box>
              </Box>
            </Heading>
          </Box>
          <Box width="large">
            <Text color={textColor}>
              Hello! I'm currently working as a software engineer for{" "}
              {<Anchor href="smartly.io ">Smartly.io</Anchor>} and doing
              robotics research at the{" "}
              {
                <Anchor href="https://irobotics.aalto.fi/research/">
                  Intelligent Robotics Group
                </Anchor>
              }{" "}
              at{" "}
              <Anchor href="https://www.aalto.fi/en">Aalto University</Anchor>.
              My main interests are in practical applications of Machine
              Learning, currently focusing on robotics and reinforcement
              learning.
            </Text>
          </Box>
          <Heading size={"small"} color={textColor} level={2}>
            {"Things I've been working on lately"}
          </Heading>
        </Box>
        {renderCards()}
      </Main>
      <Footer pad={{ horizontal: "small", vertical: "small" }}>
        <Box align="start" direction="row" gap="xsmall">
          <Text size="small">Made with</Text>
          <Anchor size="small" href="https://www.typescriptlang.org/">
            TypeScript
          </Anchor>
          <Text size="small">and</Text>
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
