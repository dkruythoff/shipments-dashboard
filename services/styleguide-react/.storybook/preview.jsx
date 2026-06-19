/// <reference path="../env.d.ts" />
import "@shipments/css";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
};

export default preview;
