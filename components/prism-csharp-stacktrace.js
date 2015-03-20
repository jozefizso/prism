Prism.languages.csharpst = {
    'keyword': [
        { pattern: /^at /m },
        { pattern: /\bin\b/ }
    ],
    'function': {
        pattern: /[a-z0-9_]+\(/i,
        inside: {
            punctuation: /\(/
        }
    },
    'linenumber': {
        pattern: /:line\s+\d+/,
        alias: 'symbol',
        inside: {
            punctuation: /:/,
            number: /\d+/
        }
    },
    'filepath': {
        pattern: /((\\\\[a-zA-Z0-9-]+\\[a-zA-Z0-9`~!@#$%^&(){}'._-]+([ ]+[a-zA-Z0-9`~!@#$%^&(){}'._-]+)*)|([a-zA-Z]:))(\\[^ \\/:*?""<>|]+([ ]+[^ \\/:*?""<>|]+)*)*\\?/,
        alias: 'string'
    },
    'punctuation': /[{}[\];(),.:]/,
};