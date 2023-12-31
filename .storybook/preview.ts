import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "urapolku dark",
      values: [
        {
          name: "urapolku dark",
          value: "#0b0121",
        },
        {
          name: "urapolku light",
          value: "#ffffff",
        },
      ]
    }
  },
};

export default preview;
