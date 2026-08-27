const assetModules = import.meta.glob('../assets/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export function resolveAssetImage(filename: string): string | undefined {
  const match = Object.entries(assetModules).find(([path]) =>
    path.endsWith(`/${filename}`),
  )

  return match?.[1]
}
