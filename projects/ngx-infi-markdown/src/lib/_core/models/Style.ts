import { Tag } from './Tag';

type HTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'li' | 'ol' | 'ul' | 'p';

type StyleData = {
  htmlTag: Exclude<HTMLTag, 'ul' | 'ol'>;
  parentHtmlTag?: Extract<HTMLTag, 'ul' | 'ol'>;
  styles: {
    [key: string]: string;
  };
};

export type SanitizedStyle = {
  [key: string]: string;
};

export type Style = {
  [key: string]: number | string | string[];
};

export type DefaultStyles = Record<Tag, StyleData>;

export type UserStyles = Record<Tag, Style>;
