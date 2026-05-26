import { VNode } from "vue";

export interface vHeaderSlots {
  default?: (() => VNode[]) | string;
}
