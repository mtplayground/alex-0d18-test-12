import "@testing-library/jest-dom/vitest";
import React, { type ComponentProps } from "react";
import { vi } from "vitest";

type MockNextImageProps = ComponentProps<"img"> & {
  fill?: boolean;
  priority?: boolean;
};

vi.mock("next/image", () => ({
  default: ({
    fill: _fill,
    priority: _priority,
    ...props
  }: MockNextImageProps) => React.createElement("img", props),
}));
