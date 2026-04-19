import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Index from "@/pages/Index";

describe("Index page", () => {
  it("renders the updated hero messaging and inquiry form", () => {
    render(
      <HelmetProvider>
        <QueryClientProvider client={new QueryClient()}>
          <MemoryRouter
            future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
          >
            <Index />
          </MemoryRouter>
        </QueryClientProvider>
      </HelmetProvider>,
    );

    expect(
      screen.getByRole("heading", {
        name: /tuition that's clear/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /request a callback/i,
      }),
    ).toBeInTheDocument();
  });
});
