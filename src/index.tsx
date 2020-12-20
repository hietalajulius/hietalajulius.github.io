import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Grommet } from "grommet";
import { deepFreeze } from "grommet/utils";

import { hpe } from "grommet-theme-hpe";

export const customTheme = deepFreeze({
  global: {
    colors: {
      brand: "#FFCA58",
      "accent-1": "#FFFFFF",
    },
    font: {
      size: "18px",
      height: "24px",
      maxWidth: "432px",
      family: "Poppins",
      face:
        '\n        @font-face {\n          font-family: "Metric";\n          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format(\'woff\');\n        }\n\n        @font-face {\n          font-family: "Metric";\n          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff") format(\'woff\');\n          font-weight: 700;\n        }\n\n        @font-face {\n          font-family: "Metric";\n          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff") format(\'woff\');\n          font-weight: 600;\n        }\n\n        @font-face {\n          font-family: "Metric";\n          src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff") format(\'woff\');\n          font-weight: 100;\n        }\n      ',
    },
  },
});

ReactDOM.render(
  <Grommet theme={customTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Grommet>,
  document.getElementById("root")
);
