import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import vTable from "./vTable.vue";
import { defaults } from "./mocks";

test("renders head, body and foot rows", () => {
  const wrapper = mount(vTable, { props: defaults });

  expect(wrapper.findAll("thead tr")).toHaveLength(defaults.head!.length);
  expect(wrapper.findAll("tbody tr")).toHaveLength(defaults.body.length);
  expect(wrapper.findAll("tfoot tr")).toHaveLength(defaults.foot!.length);
});

test("omits thead when no head prop", () => {
  const wrapper = mount(vTable, { props: { body: defaults.body } });
  expect(wrapper.find("thead").exists()).toBe(false);
});
