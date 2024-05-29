import * as fs from "fs";
import * as path from "path";
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

function pathBaseNameWithoutExtension(filePath: string): string {
  return path.parse(filePath).name;
}

function readFrontmatter(markdownFilePath: string): SidebarItem {
  const frontMatter = matter(fs.readFileSync(markdownFilePath, "utf-8")).data;
  const pathBaseNameValue = pathBaseNameWithoutExtension(markdownFilePath);
  return {
    text: frontMatter.title ?? pathBaseNameValue,
    ...(undefined !== frontMatter.order ? { order: frontMatter.order } : {}),
    ...(undefined !== pathBaseNameValue ? { link: pathBaseNameValue } : {}),
  };
}

function findIndexFileInDirectory(directoryPath: string): string | undefined {
  const indexFileIndexMd = directoryPath + "/index.md";
  const indexFileDirnameMd = directoryPath + "/" + path.basename(directoryPath) + ".md";
  if (fs.existsSync(indexFileIndexMd)) {
    return indexFileIndexMd;
  } else if (fs.existsSync(indexFileDirnameMd)) {
    return indexFileDirnameMd;
  }
}

function readSidebarItemsFromSubdirectory(
  directoryPath: string,
  publicUrlPath: string,
  indexFile?: string
): SidebarItem[] {
  let items = fs
    .readdirSync(directoryPath)
    .filter(
      (fileName) => !indexFile || fileName !== path.basename(indexFile)
    )
    .map((fileName) => buildSidebar(directoryPath + "/" + fileName, publicUrlPath + "/" + fileName))
    .filter(
      (item) => item !== null && (item.link || item.items)
    ) as SidebarItem[];
  items.sort(
    (a, b) =>
      (a.order ?? Number.MAX_SAFE_INTEGER) -
      (b.order ?? Number.MAX_SAFE_INTEGER)
  );
  return items;
}

export function buildSidebar(fileOrDirectoryPath: string, publicUrlPath: string): SidebarItem | null {
  if (fs.statSync(fileOrDirectoryPath).isDirectory()) {
    let indexFile = findIndexFileInDirectory(fileOrDirectoryPath);
    console.log(`buildSidebar(DIR)(${fileOrDirectoryPath}, ${publicUrlPath}) indexFile=${indexFile}`);

    const items = readSidebarItemsFromSubdirectory(fileOrDirectoryPath, publicUrlPath, indexFile).map(
      (item) => ({
        ...item,
        ...(item.link ? { link: publicUrlPath + "/" + item.link } : {}),
      })
    );

    let frontmatter;
    if (indexFile) {
      frontmatter = readFrontmatter(indexFile);
      frontmatter.link = frontmatter.link + "/" + frontmatter.link;
    } else {
      frontmatter = { text: pathBaseNameWithoutExtension(fileOrDirectoryPath) };
    }
    return { ...frontmatter, ...(items.length !== 0 ? { items } : {}) };
  } else if (fileOrDirectoryPath.endsWith(".md")) {
    return readFrontmatter(fileOrDirectoryPath);
  } else {
    return null;
  }
}
