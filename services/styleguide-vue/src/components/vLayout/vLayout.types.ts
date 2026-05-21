import type { VNode } from "vue";

export interface vLayoutSlots {
  header?: (() => VNode[]) | string;
  aside?: (() => VNode[]) | string;
  main?: (() => VNode[]) | string;
}
