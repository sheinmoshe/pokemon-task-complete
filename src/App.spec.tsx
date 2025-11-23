// App.test.tsx
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, waitFor } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App fetch behavior", () => {
    beforeEach(() => {
        globalThis.fetch = vi.fn().mockResolvedValue({
            json: vi.fn().mockResolvedValue({ foo: "bar" }),
        }) as unknown as typeof fetch;
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("calls fetch only once on mount, even in StrictMode", async () => {
        render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );

        await waitFor(() => {
            expect(globalThis.fetch).toHaveBeenCalledTimes(1);
        });
    });
});
