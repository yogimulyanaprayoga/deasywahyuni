import { ReadTimeResults } from "reading-time";

export type BlogFrontmatter = {
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
  englishOnly?: boolean;
  title: string;
  description: string;
  banner: string;
  publishedAt: string;
  lastUpdated?: string;
  tags: string;
  repost?: string;
};

export type ContentType = "blog" | "library" | "projects" | "materi";

export type PickFrontmatter<T extends ContentType> = T extends "blog"
  ? BlogFrontmatter
  : T extends "library"
  ? LibraryFrontmatter
  : T extends "materi"
  ? MateriFrontmatter
  : ProjectFrontmatter;

export type BlogType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export type LibraryFrontmatter = {
  slug: string;
  title: string;
  readingTime: ReadTimeResults;
  description: string;
  tags: string;
};

export type LibraryType = {
  code: string;
  frontmatter: LibraryFrontmatter;
};

export type ProjectFrontmatter = {
  slug: string;
  title: string;
  publishedAt: string;
  lastUpdated?: string;
  description: string;
  category?: string;
  techs: string;
  banner: string;
  link?: string;
  github?: string;
  youtube?: string;
};

export type ProjectType = {
  code: string;
  frontmatter: ProjectFrontmatter;
};

export type MateriFrontmatter = {
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
  englishOnly?: boolean;
  title: string;
  description: string;
  banner: string;
  publishedAt: string;
  lastUpdated?: string;
  tags: string;
  repost?: string;
};

export type MateriType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export type FrontmatterWithTags =
  | BlogFrontmatter
  | LibraryFrontmatter
  | MateriFrontmatter;
export type FrontmatterWithDate =
  | BlogFrontmatter
  | ProjectFrontmatter
  | MateriFrontmatter;
export type Frontmatter =
  | ProjectFrontmatter
  | BlogFrontmatter
  | LibraryFrontmatter
  | MateriFrontmatter;
