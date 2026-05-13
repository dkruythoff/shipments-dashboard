import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "storybook/test";
import VNavigation from "./vNavigation.vue";
import * as mocks from "./mocks";

const meta: Meta<typeof VNavigation> = {
  title: "v/Navigation",
  component: VNavigation,
};

export default meta;

export const defaults: StoryObj<typeof meta> = { args: mocks.defaults(fn()) };
