import type { Meta, StoryObj } from "@storybook/react-vite";
import { RHeader } from "./rHeader";
import * as mocks from "./mocks";

const meta = {
  component: RHeader,
  title: "r/Header",
} satisfies Meta<typeof RHeader>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults };
