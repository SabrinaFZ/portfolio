export function buildImageUrl(src: string) {
  return process.env.NODE_ENV === 'production' ? `${process.env.NEXT_PUBLIC_ASSET_PREFIX}${src}` : `${src}`;
};
