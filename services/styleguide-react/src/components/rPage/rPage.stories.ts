import type { Meta, StoryObj } from "@storybook/react-vite";
import { RPage } from "./rPage";
import * as mocks from "./mocks";

const meta = {
  component: RPage,
  title: "r/Page",
} satisfies Meta<typeof RPage>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults };
