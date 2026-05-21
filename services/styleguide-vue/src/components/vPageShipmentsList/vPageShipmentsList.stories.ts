import type { Meta, StoryObj } from "@storybook/vue3-vite";
import vPageShipmentsList from "./vPageShipmentsList.vue";
import * as mocks from "./mocks";

const meta: Meta<typeof vPageShipmentsList> = {
  title: "v/PageShipmentsList",
  component: vPageShipmentsList,
};

export default meta;

export const defaultStory: StoryObj<typeof meta> = { args: mocks.defaults };
