import * as fs from "fs";
import * as pathlib from "path";
import matter from "gray-matter";

/*
 * Type from: `vitepress/types/default-theme.d.ts`
 */
export type SidebarItem = {
  text?: string;
  link?: string;
  items?: SidebarItem[];
  collapsed?: boolean;
  order?: number; // new
};

function pathBaseName(filePath: string): string {
  return pathlib.parse(filePath).name;
}

function readFrontmatter(path: string): SidebarItem {
  const frontMatter = matter(fs.readFileSync(path, "utf-8")).data;
  const pathBaseNameValue = pathBaseName(path);
  return {
    text: frontMatter.title ?? pathBaseNameValue,
    // order: frontMatter.order,
    ...(undefined !== frontMatter.order ? { order: frontMatter.order } : {}),
    ...(undefined !== pathBaseNameValue ? { link: pathBaseNameValue } : {}),
  };
}

function buildSidebar(path: string): SidebarItem | null {
  if (fs.statSync(path).isDirectory()) {
    let indexFile: string | undefined;
    const indexFileIndexMd = path + "/index.md";
    const indexFileDirnameMd = path + "/" + pathlib.basename(path) + ".md";
    if (fs.existsSync(indexFileIndexMd)) {
      indexFile = indexFileIndexMd;
    } else if (fs.existsSync(indexFileDirnameMd)) {
      indexFile = indexFileDirnameMd;
    }

    let items = (
      fs
        .readdirSync(path)
        .map((fileName) => buildSidebar(path + "/" + fileName))
        .filter(
          (item) => item !== null && (item.link || item.items)
        ) as SidebarItem[]
    ).map((item) => ({ ...item, link: path + "/" + item.link }));
    items.sort((a, b) => (a.order ?? 9999) - (b.order ?? Number.MAX_SAFE_INTEGER));
    let frontmatter;
    if (indexFile) {
      frontmatter = readFrontmatter(indexFile);
    } else {
      frontmatter = { text: pathBaseName(path) };
    }
    return { ...frontmatter, items: items.length === 0 ? undefined : items };
  } else if (path.endsWith(".md")) {
    return readFrontmatter(path);
  } else {
    return null;
  }
}

// console.log(JSON.stringify(buildSidebar("arc42"), null, 2));

// console.log(JSON.stringify(buildSidebar("./arc42/solution-strategy-removed/solution-strategy/regional-coverage/figures"), null, 2));
// console.log(JSON.stringify(buildSidebar("./arc42/solution-strategy-removed/solution-strategy/regional-coverage"), null, 2));
console.log(
  JSON.stringify(
    buildSidebar("./arc42/solution-strategy-removed/solution-strategy"),
    null,
    2
  )
);
