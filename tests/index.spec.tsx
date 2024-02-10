import { test, expect } from "@playwright/test";

test.describe("test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("preserve text state", async ({ page }) => {
    const input = page.getByPlaceholder("textarea");
    await input.fill("add test state");
    await page.getByRole("link", { name: "to second page" }).click();

    await page.getByRole("link", { name: "TOP" }).click();

    const inputted = await page.getByPlaceholder("textarea").inputValue();
    expect(inputted).toBe("add test state");
  });

  test("preserve obj state", async ({ page }) => {
    const button = page.getByRole("button", { name: "obj button" });
    await button.click();
    await page.getByRole("link", { name: "to second page" }).click();

    await page.getByRole("link", { name: "TOP" }).click();

    await expect(page.getByText("name:test, check:true")).toBeVisible();
  });

  test("preserve two states", async ({ page }) => {
    const input = page.getByPlaceholder("textarea");
    await input.fill("add test state");

    const button = page.getByRole("button", { name: "obj button" });
    await button.click();

    await page.getByRole("link", { name: "to second page" }).click();
    await page.getByRole("link", { name: "TOP" }).click();

    const inputted = await page.getByPlaceholder("textarea").inputValue();
    expect(inputted).toBe("add test state");

    await expect(page.getByText("name:test, check:true")).toBeVisible();
  });
});
