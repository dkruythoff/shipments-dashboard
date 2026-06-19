import type { Meta, StoryObj } from "@storybook/react-vite";
import { rLayout } from "./rLayout";
import * as mocks from "./mocks";

const meta = {
  component: rLayout,
  title: "r/Layout",
} satisfies Meta<typeof rLayout>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults };
