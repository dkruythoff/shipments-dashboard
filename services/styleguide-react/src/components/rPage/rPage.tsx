import { RPageProps } from "./rPage.types";
import { RLayout } from "../rLayout";
import { RNavigation } from "../rNavigation";
import { RHeader } from "../rHeader";

export const RPage = ({
  children,
  header,
  navigation,
  "data-testid": dataTestid = "r-page"
}: RPageProps) => {
  return (
    <RLayout
      data-testid={dataTestid}
      aside={navigation ? <RNavigation {...navigation} /> : null}
      header={header ? <RHeader>{header}</RHeader> : null}
    >
      <div className="c-page__main">{children}</div>
    </RLayout>
  );
};
