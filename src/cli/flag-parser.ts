/** command flag parsing. */
export interface jul223082FlagParserConfig {
  namespace: string;
  variant: string;
  revision: number;
}

export const defaultjul223082FlagParser: jul223082FlagParserConfig = {
  "namespace": "jul-22-3082",
  "profile": "cli_devtools",
  "boundary": "flag-parser",
  "variant": "flag-parser-types-v5-7",
  "revision": 5292
};
