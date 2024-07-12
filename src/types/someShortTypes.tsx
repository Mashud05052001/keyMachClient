import { ReactNode } from "react";

export type TChildren = {
  children: ReactNode;
};

export type TRouteNavbarItems = {
  name?: string;
  path: string;
  element: ReactNode;
};

export type TRouteItems = {
  path: string;
  element: ReactNode;
};

export type TNavbarItems = {
  to: string;
  name: string;
};
