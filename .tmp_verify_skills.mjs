import { chromium } from "playwright";

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1900, height: 1100 } });

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto("http://localhost:5173", { waitUntil: "networkidle" });

const heading = page.getByText("My Skills", { exact: true });
await heading.scrollIntoViewIfNeeded();
await page.waitForTimeout(2500); // let spring-in bubble animation settle

await page.screenshot({ path: ".tmp_skills_screenshot.png" });

console.log("CONSOLE_ERRORS:", JSON.stringify(errors));

await browser.close();
