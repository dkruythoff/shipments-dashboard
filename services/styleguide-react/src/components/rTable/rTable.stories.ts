import type { Meta, StoryObj } from "@storybook/react-vite";
import { rTable } from "./rTable";
import * as mocks from "./mocks";

const meta = {
  component: rTable,
  title: "r/Table",
} satisfies Meta<typeof rTable>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults };
