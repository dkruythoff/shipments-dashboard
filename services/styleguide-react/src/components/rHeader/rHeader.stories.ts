import type { Meta, StoryObj } from "@storybook/react-vite";
import { rHeader } from "./rHeader";
import * as mocks from "./mocks";

const meta = {
  component: rHeader,
  title: "r/Header",
} satisfies Meta<typeof rHeader>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults };
