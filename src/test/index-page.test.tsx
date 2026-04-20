import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

// Mock InquiryForm so the lazy-loaded async component resolves synchronously
// in the jsdom test environment. Without this, React.lazy never resolves
// because vitest's jsdom doesn't execute dynamic import() the same way
// a real browser bundler does, leaving the Suspense fallback in the DOM forever.
vi.mock("@/components/InquiryForm", () => ({
  default: ({ title }: { title?: string }) => (
    <h2 data-testid="inquiry-form-heading">{title ?? "Request guidance"}</h2>
  ),
}));

import Index from "@/pages/Index";

describe("Index page", () => {
  it("renders the updated hero messaging and inquiry form", async () => {
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

    // Hero heading is eagerly rendered — synchronous check
    expect(
      screen.getByRole("heading", {
        name: /tuition that's clear/i,
      }),
    ).toBeInTheDocument();

    // InquiryForm heading is rendered by our mock — check it appears
    await waitFor(() =>
      expect(
        screen.getByRole("heading", {
          name: /request a callback/i,
        }),
      ).toBeInTheDocument(),
    );
  });
});
