/** command flag parsing. */
export interface jul229980FlagParserConfig {
  namespace: string;
  variant: string;
  revision: number;
}

export const defaultjul229980FlagParser: jul229980FlagParserConfig = {
  "namespace": "jul-22-9980",
  "profile": "cli_devtools",
  "boundary": "flag-parser",
  "variant": "flag-parser-types-v2-4",
  "revision": 2179
};
