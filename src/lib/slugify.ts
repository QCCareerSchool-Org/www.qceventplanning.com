export const slugify = (value: string): string => value
  .normalize('NFKD')
  .replaceAll(/\p{M}/gu, '')
  .toLowerCase()
  .replaceAll(/[^a-z0-9]+/gu, '-')
  .replaceAll(/^-|-$/gu, '');
