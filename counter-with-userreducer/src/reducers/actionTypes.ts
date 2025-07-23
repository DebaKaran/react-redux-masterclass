// src/reducers/actionTypes.ts

export const INCREMENT = "increment" as const;
export const DECREMENT = "decrement" as const;
export const SET_VALUE_TO_ADD = "change-value-to-add" as const;
export const ADD_VALUE_TO_COUNT = "add_value_to_count" as const;

export type ActionType =
  | typeof INCREMENT
  | typeof DECREMENT
  | typeof SET_VALUE_TO_ADD
  | typeof ADD_VALUE_TO_COUNT;
