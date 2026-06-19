import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { rNavigation } from "./rNavigation";
import * as mocks from "./mocks";

const meta = {
  component: rNavigation,
  title: "r/Navigation",
} satisfies Meta<typeof rNavigation>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults(fn()) };
