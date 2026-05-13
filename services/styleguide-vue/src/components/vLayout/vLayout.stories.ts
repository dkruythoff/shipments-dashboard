import type { Meta, StoryObj } from "@storybook/vue3-vite";
import VLayout from "./vLayout.vue";
import * as mocks from "./mocks";

const meta: Meta<typeof VLayout> = {
  title: "v/Layout",
  component: VLayout,
};

export default meta;

export const defaults: StoryObj<typeof meta> = { args: mocks.defaults };
