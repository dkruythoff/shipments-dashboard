import type { Meta, StoryObj } from "@storybook/react-vite";
import { RLayout } from "./rLayout";
import * as mocks from "./mocks";

const meta = {
  component: RLayout,
  title: "r/Layout",
} satisfies Meta<typeof RLayout>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults };
