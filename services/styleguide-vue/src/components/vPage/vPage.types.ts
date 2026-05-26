import { VNode } from "vue";
import { vNavigationProps } from "../vNavigation";

export interface vPageSlots {
  default?: (() => VNode[]) | string;
  header?: (() => VNode[]) | string;
}

export interface vPageProps {
  navigation?: vNavigationProps;
}

export type vPageParams = vPageProps & vPageSlots;
