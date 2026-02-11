export const escapeXmlString = (unsafe: string): string => {
  return unsafe.replace(/[<>&'"]/gu, function (match) {
    switch (match) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case "'": return '&apos;';
    }
    throw Error('Unmatched symbol');
  });
};

export const escapeXmlObject = <T extends object>(v: T) => {
  for (const k in v) {
    if (Object.hasOwn(v, k)) {
      const key = k as keyof T;
      if (typeof v[key] === 'string') {
        (v[key] as string) = escapeXmlString(v[key]);
      }
    }
  }
  return v;
};
