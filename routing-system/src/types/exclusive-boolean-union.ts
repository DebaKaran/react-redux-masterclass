// exclusive-boolean-union.ts
export type ExclusiveBooleanUnion<K extends string> = {
  [Key in K]: { [P in Key]: true } & Partial<Record<Exclude<K, P>, false>>;
}[K];
