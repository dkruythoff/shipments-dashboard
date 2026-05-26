import type { Meta, StoryObj } from "@storybook/vue3-vite";
import vHeader from "./vHeader.vue";
import * as mocks from "./mocks";

const meta: Meta<typeof vHeader> = {
  title: "v/Header",
  component: vHeader,
};

export default meta;

export const defaultStory: StoryObj<typeof meta> = { args: mocks.defaults };
