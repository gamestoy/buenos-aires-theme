export const getSemanticTokenColors = (themeContext) => {
  const scopes = themeContext.scopes;
  return {
    'property.static:java': {
      foreground: scopes.constant,
    },
    class: scopes.entity,
    'class.decorator': scopes.decorator,
    variable: scopes.variable,
    'variable.language': scopes.language,
    'variable.other.constant': scopes.constant,
    interface: scopes.entity,
    enumMember: scopes.constant,
    property: scopes.property,
    parameter: scopes.parameter,
    keyword: scopes.keyword,
    operator: scopes.language,
    'function.declaration': scopes.function,
    'function.decorator': scopes.decorator,
    'method.declaration': scopes.function,
    'method.importDeclaration': scopes.functionCall,
    module: scopes.namespace,
    '*.static': {
      italic: true,
    },
    'namespace.declaration': scopes.namespace,
    '*.deprecated': {
      strikethrough: true,
    },
    'keyword.documentation': scopes.documentationKeyword,
    annotationMember: scopes.property,
    'variable.defaultLibrary': scopes.languageVariable,
    selfParameter: scopes.keyword,
  };
};
