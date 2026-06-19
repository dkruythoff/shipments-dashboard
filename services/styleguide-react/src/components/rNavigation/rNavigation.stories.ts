import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { RNavigation } from "./rNavigation";
import * as mocks from "./mocks";

const meta = {
  component: RNavigation,
  title: "r/Navigation",
} satisfies Meta<typeof RNavigation>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults(fn()) };
