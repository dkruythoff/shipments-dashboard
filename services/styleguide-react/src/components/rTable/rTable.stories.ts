import type { Meta, StoryObj } from "@storybook/react-vite";
import { RTable } from "./rTable";
import * as mocks from "./mocks";

const meta = {
  component: RTable,
  title: "r/Table",
} satisfies Meta<typeof RTable>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults };
