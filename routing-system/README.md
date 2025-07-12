# React + TypeScript + Vite

# Reusable Button Component (Tailwind + TypeScript)

This component is a flexible, type-safe `<Button />` built with **React + TypeScript + Tailwind CSS**. It enforces **exclusive variant selection** at the type level using a custom `ExclusiveBooleanUnion` type.

## Features

- Type-safe button variants (`primary`, `secondary`, `success`, `warning`, `danger`)
- Only one variant can be used at a time (compile-time safety)
- Supports `outlined` and `rounded` props
- Tailwind styled and JIT-safe (no purge issues)
- Uses `classnames` for clean conditional class logic

## Files Included

src/
├── components/
│ ├── Button.tsx # Reusable Button component
│ └── button-types.ts # ExclusiveBooleanUnion & type utilities

## Usage

import Button from './components/Button';

<Button buttonVariantProps={{ primary: true }} rounded>
Click Me
</Button>

You must provide exactly one variant prop as true, like:

{ primary: true }
// or
{ success: true }

Other props:

outlined?: boolean

rounded?: boolean

Type Safety
The type system enforces mutually exclusive boolean props:

type ButtonVariantProps = ExclusiveBooleanUnion<'primary' | 'success' | 'warning'>;

So this is invalid:

<Button buttonVariantProps={{ primary: true, success: true }} />
// Error: Only one key can be true

# React Accordion App

A simple React Accordion component built using TypeScript and functional components.

## Features

- Expand/collapse sections
- Type-safe with TypeScript
- Component-based structure

## Getting Started
