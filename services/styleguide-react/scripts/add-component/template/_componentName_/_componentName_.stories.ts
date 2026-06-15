import type { Meta, StoryObj } from "@storybook/react-vite";
import { _componentName_ } from "./_componentName_";
import * as mocks from "./mocks";

const meta = {
  component: _componentName_,
  title: "_componentNamePrefix_/_componentNameNoPrefix_",
} satisfies Meta<typeof _componentName_>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults };
