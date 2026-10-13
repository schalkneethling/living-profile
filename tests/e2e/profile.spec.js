import { test, expect } from "@playwright/test";

test.describe("profile card", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has a main landmark", async ({ page }) => {
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("presents the profile as an article inside main", async ({ page }) => {
    await expect(page.getByRole("main").getByRole("article")).toBeVisible();
  });

  test("has exactly one level-one heading, and it is not empty", async ({ page }) => {
    const headings = page.getByRole("heading", { level: 1 });
    await expect(headings).toHaveCount(1);
    await expect(headings).not.toBeEmpty();
  });

  test("has a photo with a text alternative", async ({ page }) => {
    const photo = page.getByRole("article").getByRole("img");
    await expect(photo).toBeVisible();
    await expect(photo).toHaveAccessibleName(/.+/);
  });

  test("lists at least three links", async ({ page }) => {
    const links = page.getByRole("article").getByRole("list").getByRole("link");
    expect(await links.count()).toBeGreaterThanOrEqual(3);
  });

  test("exposes the expected accessibility tree", async ({ page }) => {
    await expect(page.getByRole("article")).toMatchAriaSnapshot(`
      - article:
        - heading /.+/ [level=1]
        - img /.+/
        - paragraph: /.+/
        - list:
          - listitem:
            - link /.+/
    `);
  });
});
