import { HTMLAttributes } from "react";

// Extending HTMLAttributes<HTMLDivElement> to allow callers to pass standard HTML attributes.
// Note: requires explicit {...props} spread in JSX to actually reach the DOM —
// React has no automatic attribute fallthrough equivalent to Vue's $attrs.
export interface _componentNameCapital_Props extends HTMLAttributes<HTMLDivElement> {}
