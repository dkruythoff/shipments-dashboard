import type { Meta, StoryObj } from "@storybook/react-vite";
import { RPageShipmentsList } from "./rPageShipmentsList";
import * as mocks from "./mocks";

const meta = {
  component: RPageShipmentsList,
  title: "r/PageShipmentsList",
} satisfies Meta<typeof RPageShipmentsList>;

export default meta;

export const Defaults: StoryObj<typeof meta> = { args: mocks.defaults };
