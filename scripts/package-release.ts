import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { zipSync } from "fflate";
import packageJson from "../package.json";

const releaseFiles = [
  "bun.lock",
  "CHANGELOG.md",
  "LICENSE",
  "README.md",
  "docs/images/agent-crew-overview.png",
  "docs/images/agent-crew-action.png",
  "index.ts",
  "main.client.tsx",
  "src/lib/crew.shared.ts",
  "package.json",
  "paseo-plugin.json",
  "tsconfig.json",
] as const;

const output = Bun.argv[2] ?? `dist/agent-crew-v${packageJson.version}.zip`;
const root = "agent-crew";
const files: Record<string, Uint8Array> = {};

for (const path of releaseFiles) {
  files[join(root, path)] = await Bun.file(path).bytes();
}

await mkdir("dist", { recursive: true });
await rm(output, { force: true });
await Bun.write(output, zipSync(files, { level: 9 }));
console.log(output);
