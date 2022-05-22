import { expect, test } from "@playwright/test";
import { BASE_URL, expectLinkVisible, expectVisible } from "../utils";

test("root page", async ({ page }) => {
  const find = page.locator.bind(page);
  await page.goto(BASE_URL);

  await expectVisible(find, "Stonks Climate!");
  await expectLinkVisible(find, "Cryptos");
  await expectLinkVisible(find, "Stonks");
  await expectVisible(find, "Main!");
});

test("cryptos page", async ({ page }) => {
  const find = page.locator.bind(page);
  await page.goto(`${BASE_URL}/cryptos`);

  await expectVisible(find, "Stonks Climate!");
  await expectLinkVisible(find, "Cryptos");
  await expectLinkVisible(find, "Stonks");
  await expectVisible(find, "meme coins!");
  await expectLinkVisible(find, "2021");
  await expectLinkVisible(find, "2022");
  expect(await find("select").inputValue()).toEqual("linear");
});

test("stocks page", async ({ page }) => {
  const find = page.locator.bind(page);
  await page.goto(`${BASE_URL}/stocks`);

  await expectVisible(find, "Stonks Climate!");
  await expectLinkVisible(find, "Cryptos");
  await expectLinkVisible(find, "Stonks");
  await expectLinkVisible(find, "Amazon");
  await expectLinkVisible(find, "Alphabet");
  await expectLinkVisible(find, "Apple");
  await expectLinkVisible(find, "Microsoft");
  await expectLinkVisible(find, "Meta");
  await expectVisible(find, "Select stonk!");
  await expectLinkVisible(find, "2021");
  await expectLinkVisible(find, "2022");
  expect(await find("select").inputValue()).toEqual("linear");
});