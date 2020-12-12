import { RangeInput, Stack, Main, Heading } from "grommet";
import React from "react";

document.title = "Julius Hietala";
//document.getElementById("favicon").href = "https://www.google.com/favicon.ico";
console.log("Favvi", (document.getElementById("favicon") as any).href);

function App() {
  const [value, setValue] = React.useState(100);
  const [color, setColor] = React.useState("rgba(27, 33, 56, 1)");
  const [icon, setIcon] = React.useState("moon");

  const onChange = (event: any) => {
    setValue(event);
    if (event > 50) {
      setColor("rgba(27, 33, 56, 1)");

      setIcon("moon");
      const href = (document.getElementById("favicon") as any).href;
      (document.getElementById("favicon") as any).href = href.replace(
        "portfolio",
        "moon"
      );
      console.log("ico", icon);
    } else {
      setColor("rgba(1, 1, 1, 0)");

      setIcon("portfolio");
      const href = (document.getElementById("favicon") as any).href;
      (document.getElementById("favicon") as any).href = href.replace(
        "moon",
        "portfolio"
      );
      console.log("ico", icon);
    }
  };
  return (
    <Main
      background={color}
      fill="vertical"
      align="center"
      height={{ min: "1000px", max: "1500px" }}
      pad="large"
    >
      <Stack anchor="top-right">
        <RangeInput
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </Stack>
      <Heading>Julius Hietala</Heading>
      <a
        className="App-link"
        href="https://github.com/hietalajulius"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </Main>
  );
}

export default App;
