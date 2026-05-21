import type { Meta, StoryObj } from "@storybook/vue3-vite";
import _componentName_ from "./_componentName_.vue";
import * as mocks from "./mocks";

const meta: Meta<typeof _componentName_> = {
  title: "_componentNamePrefix_/_componentNameNoPrefix_",
  component: _componentName_,
};

export default meta;

export const defaultStory: StoryObj<typeof meta> = { args: mocks.defaults };
