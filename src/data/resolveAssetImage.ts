const assetModules = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export function resolveAssetImage(filename: string): string | undefined {
  const needle = filename.replaceAll('\\', '/')
  const match = Object.entries(assetModules).find(([path]) => {
    const normalized = path.replaceAll('\\', '/')
    return normalized.endsWith(`/${needle}`)
  })

  return match?.[1]
}
