import type { Meta, StoryObj } from "@storybook/vue3-vite";
import vPage from "./vPage.vue";
import * as mocks from "./mocks";

const meta: Meta<typeof vPage> = {
  title: "v/Page",
  component: vPage,
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { vPage },
    template: `<vPage v-bind="args">
    <template v-if="${"default" in args}">${args["default"]}</template>
    <template v-if="${"header" in args}" #header>${args["header"]}</template>
    </vPage>`,
  }),
};

export default meta;

export const defaultStory: StoryObj<typeof meta> = { args: mocks.defaults };
