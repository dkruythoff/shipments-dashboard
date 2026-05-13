import type { Slot } from "vue";

export interface vLayoutSlots {
  header?: Slot | string;
  aside?: Slot | string;
  main?: Slot | string;
}
