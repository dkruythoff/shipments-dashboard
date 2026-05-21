import type { Meta, StoryObj } from "@storybook/vue3-vite";
import vPage from "./vPage.vue";
import * as mocks from "./mocks";

const meta: Meta<typeof vPage> = {
  title: "v/Page",
  component: vPage,
};

export default meta;

export const defaultStory: StoryObj<typeof meta> = { args: mocks.defaults };
