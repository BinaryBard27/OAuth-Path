import fs from 'node:fs/promises';
import path from 'node:path';
import { Guide, GuideSchema } from './schema';
const root = path.join(process.cwd(), 'data', 'guides');
export async function allGuides(): Promise<Guide[]> {
  try { const files = await fs.readdir(root); const rows = await Promise.all(files.filter(f => f.endsWith('.json')).map(async f => GuideSchema.parse(JSON.parse(await fs.readFile(path.join(root, f), 'utf8'))))); return rows.sort((a,b) => a.app_name.localeCompare(b.app_name)); } catch { return []; }
}
export async function getGuide(slug: string) { try { return GuideSchema.parse(JSON.parse(await fs.readFile(path.join(root, `${slug}.json`), 'utf8'))); } catch { return null; } }
export async function saveGuide(guide: Guide) { await fs.mkdir(root, { recursive: true }); await fs.writeFile(path.join(root, `${guide.slug}.json`), JSON.stringify(GuideSchema.parse(guide), null, 2), 'utf8'); }
