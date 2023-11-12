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

export const EnMain = defineDocumentType(() => ({
  name: 'EnMain',
  filePathPattern: 'main/en/home.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    }
  },
  computedFields
}));

export const EsMain = defineDocumentType(() => ({
  name: 'EsMain',
  filePathPattern: 'main/es/home.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    }
  },
  computedFields
}));

export const EnBlogMain = defineDocumentType(() => ({
  name: 'EnBlogMain',
  filePathPattern: 'main/en/blog.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    }
  },
  computedFields
}));

export const EsBlogMain = defineDocumentType(() => ({
  name: 'EsBlogMain',
  filePathPattern: 'main/es/blog.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    }
  },
  computedFields
}));

export const EnBlog = defineDocumentType(() => ({
  name: 'EnPost',
  filePathPattern: 'blog/en/**/*.mdx',
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

export const EsBlog = defineDocumentType(() => ({
  name: 'EsPost',
  filePathPattern: 'blog/es/**/*.mdx',
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

export const EnProjectsMain = defineDocumentType(() => ({
  name: 'EnProjectsMain',
  filePathPattern: 'main/en/projects.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    }
  },
  computedFields
}));

export const EsProjectsMain = defineDocumentType(() => ({
  name: 'EsProjectsMain',
  filePathPattern: 'main/es/projects.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    }
  },
  computedFields
}));

export const EnProject = defineDocumentType(() => ({
  name: 'EnProject',
  filePathPattern: 'projects/en/**/*.mdx',
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

export const EsProject = defineDocumentType(() => ({
  name: 'EsProject',
  filePathPattern: 'projects/es/**/*.mdx',
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

export const EnResources = defineDocumentType(() => ({
  name: 'EnResources',
  filePathPattern: 'resources/en/content.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}));

export const EsResources = defineDocumentType(() => ({
  name: 'EsResources',
  filePathPattern: 'resources/es/content.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}));

export const EnMilpa = defineDocumentType(() => ({
  name: 'EnMilpa',
  filePathPattern: 'milpa/en/content.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}));

export const EsMilpa = defineDocumentType(() => ({
  name: 'EsMilpa',
  filePathPattern: 'milpa/es/content.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [
    EnMain,
    EsMain,
    EnBlogMain,
    EsBlogMain,
    EnBlog,
    EsBlog,
    EnProjectsMain,
    EsProjectsMain,
    EnProject,
    EsProject,
    EnResources,
    EsResources,
    EnMilpa,
    EsMilpa,
  ],
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
