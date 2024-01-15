export function buildImageUrl(src: string) {
  return process.env.NODE_ENV === 'production' ? `${process.env.ASSET_PREFIX}${src}` : `${src}`;
};
