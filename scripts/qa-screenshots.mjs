// QA helper: screenshots each section of the running preview build.
// Usage: node scripts/qa-screenshots.mjs [outDir]
import { chromium } from 'playwright-core'

const OUT = process.argv[2] ?? '/tmp/site-qa'
const URL = 'http://localhost:4173/Tajveer-Website/'
const SECTIONS = ['about', 'research', 'publications', 'teaching', 'projects', 'interests', 'contact']

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)

for (const id of SECTIONS) {
  await page.evaluate((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, id)
  await page.waitForTimeout(900)
  await page.screenshot({ path: `${OUT}/${id}.png` })
  const height = await page.evaluate(
    (sectionId) => document.getElementById(sectionId)?.offsetHeight,
    id
  )
  console.log(`${id}: section height ${height}px`)
}

await browser.close()
