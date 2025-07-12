import type { ExclusiveBooleanUnion } from "../../types/exclusive-boolean-union";

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type ButtonVariantProps = ExclusiveBooleanUnion<Variant>;
