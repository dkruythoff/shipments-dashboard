import type { Meta, StoryObj } from "@storybook/vue3-vite";
import VTable from "./vTable.vue";
import * as mocks from "./mocks";

const meta: Meta<typeof VTable> = {
  title: "v/Table",
  component: VTable,
};

export default meta;

export const defaults: StoryObj<typeof meta> = { args: mocks.defaults };
