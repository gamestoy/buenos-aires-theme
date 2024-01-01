const java = (scopes) => {
  return [
    {
      name: '[Java] Javadoc keywords',
      scope: ['keyword.other.documentation.javadoc.java'],
      settings: { foreground: scopes.documentation },
    },
    {
      name: '[Java] Namespace usage',
      scope: ['variable.language.wildcard.java'],
      settings: {
        foreground: scopes.documentation,
      },
    },
    {
      name: '[Java] Operators',
      scope: ['keyword.control.ternary.java'],
      settings: {
        foreground: scopes.operator,
      },
    },
    {
      name: '[Java] Keywords',
      scope: ['storage.type.local.java'],
      settings: {
        foreground: scopes.keyword,
      },
    },
  ];
};
const js = (scopes) => {
  return [
    {
      name: '[JS] Variables',
      scope: [
        'variable.other.constant.js',
        'variable.other.object.js',
        'variable.other.constant.jsx',
        'variable.other.object.jsx',
        'variable.other.constant.ts',
        'variable.other.object.ts',
        'variable.other.constant.tsx',
        'variable.other.object.tsx',
      ],
      settings: {
        foreground: scopes.variable,
      },
    },
    {
      name: '[JS] Modules',
      scope: ['support.type.object.module.js', 'support.type.object.module.ts'],
      settings: {
        foreground: scopes.namespace,
      },
    },
    {
      name: '[JS] Attributes',
      scope: [
        'variable.other.object.property.js',
        'meta.object-literal.key.js',
        'meta.object-literal.key.js string.quoted.double.js',
      ],
      settings: {
        foreground: scopes.attribute,
      },
    },
    {
      scope: 'variable.other.readwrite.alias.js',
      settings: {
        foreground: scopes.text,
      },
    },
    {
      scope: 'variable.other.readwrite.js',
      settings: {
        foreground: scopes.variable,
      },
    },
    {
      scope: 'support.variable.property.js',
      settings: {
        foreground: scopes.property,
      },
    },
    {
      scope: 'variable.language.arguments.js',
      settings: {
        foreground: scopes.languageVariable,
      },
    },
  ];
};

const python = (scopes) => {
  return [
    {
      name: '[Python] Function call',
      scope: ['variable.parameter.function-call.python'],
      settings: {
        foreground: scopes.parameter,
      },
    },
    {
      name: '[Python] Variables',
      scope: ['constant.character.format.placeholder.other.python'],
      settings: {
        foreground: scopes.variable,
      },
    },
    {
      name: '[Python] Attributes',
      scope: ['meta.attribute.python'],
      settings: {
        foreground: scopes.attribute,
      },
    },
    {
      name: '[Python] Comments',
      scope: ['comment', 'string.quoted.docstring.single.python', 'string.quoted.docstring.multi.python'],
      settings: {
        foreground: scopes.documentation,
      },
    },
    {
      name: '[Python] Class',
      scope: ['meta.function.parameters.python'],
      settings: {
        foreground: scopes.entity,
      },
    },
    {
      name: '[Python] Decorator',
      scope: ['entity.name.function.decorator.python'],
      settings: {
        foreground: scopes.decorator,
      },
    },
    {
      name: '[Python] Keywords',
      scope: [
        'support.function.builtin.python',
        'constant.character.format.placeholder.other.python storage.type.format.python',
      ],
      settings: {
        foreground: scopes.keyword,
      },
    },
  ];
};

const html = (scopes) => {
  return [
    {
      name: '[HTML] - Entity Other',
      scope: 'text.html.basic entity.other',
      settings: {
        fontStyle: 'italic',
        foreground: scopes.entity,
      },
    },
  ];
};
const json = (scopes) => {
  return [
    {
      name: '[JSON] - Support',
      scope: 'source.json support',
      settings: {
        foreground: scopes.attribute,
      },
    },
    {
      name: '[JSON] Strings',
      scope: ['string.quoted.double.json', 'string.quoted.double.json.comments'],
      settings: {
        foreground: scopes.text,
      },
    },
  ];
};
const yaml = (scopes) => {
  return [
    {
      name: '[YALM] - Properties',
      scope: ['entity.name.tag.yaml'],
      settings: {
        foreground: scopes.attribute,
      },
    },
  ];
};

const css = (palette, scopes) => {
  return [
    {
      name: '[CSS] - important',
      scope: ['keyword.other.important'],
      settings: {
        foreground: palette.secondary.yellow,
      },
    },
    {
      name: '[CSS] - Support',
      scope: ['source.css support', 'source.stylus support', 'meta.property-name.css'],
      settings: {
        foreground: scopes.parameter,
      },
    },
    {
      name: '[CSS] - Constant',
      scope: [
        'source.css constant',
        'source.css support.constant',
        'source.stylus constant',
        'source.stylus support.constant',
        'support.constant.font-name.css',
        'constant.other.caps.python',
      ],
      settings: {
        foreground: scopes.constant,
      },
    },
    {
      name: '[CSS] - String',
      scope: [
        'source.css string',
        'source.css punctuation.definition.string',
        'source.stylus string',
        'source.stylus punctuation.definition.string',
      ],
      settings: {
        foreground: palette.secondary.yellow,
      },
    },
    {
      name: '[CSS] - Function call',
      scope: ['support.function.misc.css', 'meta.property-value.css', 'entity.name.function.scss'],
      settings: {
        foreground: scopes.functionCall,
      },
    },
    {
      name: '[CSS] - Other attributes',
      scope: ['entity.other.attribute-name.pseudo-element.css', 'meta.at-rule.media.header.css'],
      settings: {
        foreground: palette.secondary.blue,
      },
    },
    {
      name: '[CSS] - Urls',
      scope: ['variable.parameter.url.css'],
      settings: {
        foreground: scopes.quoted,
      },
    },
    {
      name: '[CSS] Variables',
      scope: ['variable.other.less', 'source.css variable', 'source.stylus variable'],
      settings: {
        foreground: scopes.variable,
      },
    },
  ];
};

const markdown = (palette, scopes) => {
  return [
    {
      name: '[MARKDOWN] - Heading Punctuation',
      scope: 'punctuation.definition.heading.markdown',
      settings: {
        foreground: palette.primary.blue,
      },
    },
    {
      name: '[MARKDOWN] - Heading Name Section',
      scope: ['entity.name.section.markdown', 'markup.heading.setext.1.markdown', 'markup.heading.setext.2.markdown'],
      settings: {
        foreground: scopes.entity,
        fontStyle: 'bold',
      },
    },
    {
      name: '[MARKDOWN] - Paragraph',
      scope: 'meta.paragraph.markdown',
      settings: {
        foreground: scopes.text,
      },
    },
    {
      name: '[MARKDOWN] - Quote Punctuation',
      scope: 'beginning.punctuation.definition.quote.markdown',
      settings: {
        foreground: palette.primary.orange,
      },
    },
    {
      name: '[MARKDOWN] - Quote',
      scope: [
        'markup.quote.markdown meta.paragraph.markdown',
        'markup.inline.raw.string.markdown',
        'fenced_code.block.language',
        'markup.inline.raw.markdown',
      ],
      settings: {
        fontStyle: 'italic',
        foreground: palette.primary.cream,
      },
    },
    {
      name: '[MARKDOWN] - Table',
      scope: ['markup.table.markdown'],
      settings: {
        foreground: palette.primary.cream,
      },
    },
    {
      name: '[MARKDOWN] - Separator',
      scope: 'meta.separator.markdown',
      settings: {
        foreground: palette.primary.orange,
      },
    },
    {
      name: '[MARKDOWN] - List',
      scope: ['markup.list.unnumbered.markdown', 'markup.list.numbered.markdown'],
      settings: {
        foreground: palette.primary.red,
      },
    },
    {
      name: '[MARKDOWN] - Emphasis Bold',
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold',
        foreground: palette.primary.cream,
      },
    },
    {
      name: '[MARKDOWN] - Emphasis Bold',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: '[MARKDOWN] - Link/Image Title',
      scope: [
        'string.other.link.title.markdown',
        'string.other.link.description.markdown',
        'string.other.link.description.title.markdown',
      ],
      settings: {
        foreground: palette.primary.green,
      },
    },
    {
      name: '[MARKDOWN] - Link Address',
      scope: ['markup.underline.link.markdown', 'markup.underline.link.image.markdown'],
      settings: {
        foreground: scopes.quoted,
      },
    },
    {
      name: '[MARKDOWN] - References',
      scope: ['constant.other.reference.link.markdown'],
      settings: {
        foreground: scopes.constant,
      },
    },
  ];
};

export const getTokenColors = (themeContext) => {
  const scopes = themeContext.scopes;
  const palette = themeContext.palette;
  return [
    { name: 'Emphasis', scope: 'emphasis', settings: { fontStyle: 'italic' } },
    { name: 'Strong', scope: 'strong', settings: { fontStyle: 'bold' } },
    { name: 'Regex', scope: 'constant.regexp', settings: { foreground: scopes.regexp } },
    { name: 'Invalid', scope: 'invalid', settings: { foreground: scopes.invalid } },
    { name: 'Underline', scope: 'markup.underline', settings: { fontStyle: 'underline' } },
    {
      name: 'Quoted string',
      scope: ['string.quoted', 'string.template'],
      settings: {
        foreground: scopes.quoted,
      },
    },
    {
      name: 'Keywords',
      scope: [
        'storage',
        'storage.modifier',
        'keyword.control',
        'keyword.operator.new',
        'keyword.operator.expression',
        'keyword.operator.cast',
        'keyword.operator.sizeof',
        'keyword.operator.alignof',
        'keyword.operator.typeid',
        'keyword.operator.alignas',
        'keyword.operator.instanceof',
        'keyword.operator.logical.python',
        'keyword.operator.wordlike',
        'keyword.operator.noexcept',
        'keyword.operator.type.asserts',
        'keyword.other',
        'constant.language',
        'variable.language.this',
        'keyword.class',
        'keyword.struct',
        'keyword.interface',
        'keyword.function',
        'keyword.method',
        'keyword.const',
        'keyword.var',
        'keyword.other.fn',
        'keyword.operator.shape',
        'support.constant.font-name',
        'support.constant.media-type',
        'support.constant.media',
        'support.type.primitive',
        'support.type.builtin',
      ],
      settings: {
        foreground: scopes.keyword,
      },
    },
    {
      name: 'Operators',
      scope: ['keyword.operator', 'storage.type.function.arrow', 'keyword.other.unit'],
      settings: {
        foreground: scopes.operator,
      },
    },
    {
      name: 'Function/Method declaration',
      scope: ['meta.method.identifier entity.name.function'],
      settings: {
        foreground: scopes.function,
      },
    },
    {
      name: 'Function/Method call',
      scope: [
        'meta.function-call entity.name.function',
        'meta.method-call entity.name.function',
        'meta.function-call',
        'meta.method-call',
      ],
      settings: {
        foreground: scopes.functionCall,
      },
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        foreground: scopes.number,
      },
    },
    {
      name: 'Annotation',
      scope: ['storage.type.annotation'],
      settings: {
        foreground: scopes.decorator,
      },
    },
    {
      name: 'Class',
      scope: ['entity.name.type', 'storage.identifier', 'entity.other.inherited-class'],
      settings: {
        foreground: scopes.entity,
      },
    },
    {
      name: 'Namespace usage',
      scope: [
        'entity.name.type.namespace',
        'entity.name.namespace',
        'entity.name.type.module',
        'entity.name.module',
        'entity.name.type.package',
        'entity.name.package',
        'storage.modifier.import',
        'storage.modifier.package',
        'entity.name.scope-resolution',
      ],
      settings: {
        foreground: scopes.documentation,
      },
    },
    {
      name: 'Tags',
      scope: ['entity.name.tag'],
      settings: {
        foreground: scopes.entity,
      },
    },
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name', 'variable.other.property'],
      settings: {
        foreground: scopes.attribute,
      },
    },
    {
      name: 'Variables',
      scope: ['variable.other.readwrite.alias'],
      settings: {
        foreground: scopes.variable,
      },
    },
    ...java(scopes),
    ...python(scopes),
    ...js(scopes),
    ...html(scopes),
    ...json(scopes),
    ...yaml(scopes),
    ...css(palette, scopes),
    ...markdown(palette, scopes),
  ];
};
