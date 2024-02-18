import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

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

export const Content = defineDocumentType(() => ({
  name: 'Content',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: {
        type: 'string',
      },
    },
    image: {
      type: 'string',
    },
    imageCaption: {
      type: 'string',
    },
    date: {
      type: 'date',
    },
    author: {
      type: 'string',
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './content/',
  documentTypes: [Content],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;
            if (codeEl.tagName !== 'code') {
              return;
            }

            if (codeEl.data?.meta) {
              // Extract event from meta and pass it down the tree.
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, '');
              }
            }

            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
            node.__style__ = node.properties?.__style__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
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
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== 'pre') {
              return;
            }

            preElement.properties['__rawString__'] = node.__rawString__;
          }
        });
      },
    ],
  },
});
