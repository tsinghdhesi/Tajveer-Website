// QA helper: exercises modals, clipboard buttons, nav rail, reduced motion.
// Usage: node scripts/qa-interactions.mjs
import { chromium } from 'playwright-core'

const URL = 'http://localhost:4173/Tajveer-Website/'
const OUT = '/tmp/site-qa'
const results = []
const check = (name, ok, extra = '') =>
  results.push(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? ` (${extra})` : ''}`)

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
})
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  permissions: ['clipboard-read', 'clipboard-write'],
})
const page = await context.newPage()
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1000)

// --- Modal: open via card, check dialog, Esc, focus return ---
const firstCard = page.locator('#research button', { hasText: 'Read more' }).first()
await firstCard.scrollIntoViewIfNeeded()
await page.waitForTimeout(600)
await firstCard.click()
await page.waitForTimeout(700)
check('modal opens', await page.locator('[role="dialog"]').isVisible())
await page.screenshot({ path: `${OUT}/modal-open.png` })
check(
  'body scroll locked',
  await page.evaluate(() => document.body.style.overflow === 'hidden')
)
await page.keyboard.press('Escape')
await page.waitForTimeout(600)
check('Esc closes modal', (await page.locator('[role="dialog"]').count()) === 0)
check(
  'scroll lock released',
  await page.evaluate(() => document.body.style.overflow !== 'hidden')
)
check(
  'focus returned to card',
  await page.evaluate(() => document.activeElement?.closest('#research') != null)
)

// --- Modal: click outside closes ---
await firstCard.click()
await page.waitForTimeout(700)
await page.mouse.click(30, 450)
await page.waitForTimeout(600)
check('click outside closes modal', (await page.locator('[role="dialog"]').count()) === 0)

// --- Modal: close button ---
await firstCard.click()
await page.waitForTimeout(700)
await page.locator('[role="dialog"] [aria-label="Close"]').click()
await page.waitForTimeout(600)
check('close button closes modal', (await page.locator('[role="dialog"]').count()) === 0)

// --- Copy BibTeX + toast ---
await page.locator('#publications').scrollIntoViewIfNeeded()
await page.waitForTimeout(600)
await page.locator('#publications button', { hasText: 'Copy BibTeX' }).first().click()
await page.waitForTimeout(300)
check('BibTeX toast shows', await page.locator('[role="status"]', { hasText: 'Copied' }).isVisible())
const bib = await page.evaluate(() => navigator.clipboard.readText())
check('BibTeX on clipboard', bib.startsWith('@inproceedings{dhesi2025agegates'))

// --- Copy email + toast ---
await page.locator('#contact').scrollIntoViewIfNeeded()
await page.waitForTimeout(900)
await page.locator('#contact button', { hasText: 'tajveersd7@gmail.com' }).click()
await page.waitForTimeout(300)
const email = await page.evaluate(() => navigator.clipboard.readText())
check('email on clipboard', email === 'tajveersd7@gmail.com', email)

// --- Nav rail: click dot scrolls, active tracks ---
await page.locator('nav[aria-label="Sections"] [aria-label="Teaching"]').click()
await page.waitForTimeout(1500)
const teachingActive = await page
  .locator('nav[aria-label="Sections"] [aria-label="Teaching"]')
  .getAttribute('aria-current')
check('rail click scrolls + active tracks', teachingActive === 'true')

// --- Wordmark appears past hero and returns to top ---
check('wordmark visible mid-page', await page.locator('[aria-label="Back to top"]').isVisible())
await page.locator('[aria-label="Back to top"]').click()
await page.waitForTimeout(1500)
check('wordmark scrolls to top', await page.evaluate(() => window.scrollY < 50))

// --- Hover label on rail dot ---
await page.locator('nav[aria-label="Sections"] li').nth(2).hover()
await page.waitForTimeout(400)
await page.screenshot({ path: `${OUT}/rail-hover.png`, clip: { x: 1200, y: 250, width: 240, height: 400 } })

// --- Reduced motion ---
const rmPage = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  reducedMotion: 'reduce',
})
await rmPage.goto(URL, { waitUntil: 'networkidle' })
await rmPage.waitForTimeout(800)
await rmPage.evaluate(() => document.getElementById('interests')?.scrollIntoView())
await rmPage.waitForTimeout(800)
await rmPage.screenshot({ path: `${OUT}/reduced-motion-night.png` })
check('reduced motion page renders', await rmPage.locator('#interests h2').isVisible())

console.log(results.join('\n'))
await browser.close()
