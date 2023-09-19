import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('contentlayer/source-files').ComputedFields} */

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => {
      const parts = doc._raw.sourceFileName.split('/');
      const fileName = parts[parts.length - 1];

      return `${fileName.replace('.mdx', '')}`;
    },
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => {
      const parts = doc._raw.sourceFileName.split('/');
      const fileName = parts[parts.length - 1];

      return `${fileName.replace('.mdx', '')}`;
    },
  },
};

export const EnBlog = defineDocumentType(() => ({
  name: 'EnPost',
  filePathPattern: 'blog/en/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    subtitle: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'string',
      required: true,
    },
    featuredImage: {
      type: 'string',
      required: true,
    },
    featuredImageCaption: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}));

export const EsBlog = defineDocumentType(() => ({
  name: 'EsPost',
  filePathPattern: 'blog/es/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    subtitle: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'string',
      required: true,
    },
    featuredImage: {
      type: 'string',
      required: true,
    },
    featuredImageCaption: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}));

export const EnProject = defineDocumentType(() => ({
  name: 'EnProject',
  filePathPattern: 'projects/en/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    subtitle: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'string',
      required: true,
    },
    featuredImage: {
      type: 'string',
      required: true,
    },
    featuredImageCaption: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    url: {
      type: 'string',
      required: false,
    },
    repo: {
      type: 'string',
      required: false,
    },
  },
  computedFields,
}));

export const EsProject = defineDocumentType(() => ({
  name: 'EsProject',
  filePathPattern: 'projects/es/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    subtitle: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'string',
      required: true,
    },
    featuredImage: {
      type: 'string',
      required: true,
    },
    featuredImageCaption: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    url: {
      type: 'string',
      required: false,
    },
    repo: {
      type: 'string',
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [EnBlog, EsBlog, EnProject, EsProject],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
    ],
  },
});
