interface VariantProps {
  variants: any
  selections: any
}

export const findVariant = ({ variants, selections }: VariantProps) => {
  return variants.find(({ attributes }: any) => {
    const customAttributes = (attributes || []).reduce(
      (map: any, { code, uid }: any) => new Map(map).set(code, uid),
      new Map()
    )

    for (const [id, value] of Object.entries(selections)) {
      const matchesCustomAttribute = customAttributes.get(id) === value
      if (!matchesCustomAttribute) {
        return false
      }
    }

    return true
  })
}
