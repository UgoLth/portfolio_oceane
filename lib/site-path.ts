/** Prefix public files, srcsets and native links when hosted in a subdirectory. */
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!basePath) return path;

  return path.replace(/(^|,\s*)\/(?!\/)/g, `$1${basePath}/`);
}
