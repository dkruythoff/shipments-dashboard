import type { Meta, StoryObj } from "@storybook/react-vite";
import { _componentNameCapital_ } from "./_componentName_";
import * as mocks from "./mocks";

const meta = {
  component: _componentNameCapital_,
  title: "_componentNamePrefix_/_componentNameNoPrefix_",
} satisfies Meta<typeof _componentNameCapital_>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults };
