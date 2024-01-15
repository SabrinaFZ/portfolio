export function buildImageUrl(src: string) {
  console.log('env: ', process.env.NODE_ENV === 'production')
  console.log('prefiix', process.env.NEXT_PUBLIC_ASSET_PREFIX)
  return process.env.NODE_ENV === 'production' ? `${process.env.NEXT_PUBLIC_ASSET_PREFIX}${src}` : `${src}`;
};
