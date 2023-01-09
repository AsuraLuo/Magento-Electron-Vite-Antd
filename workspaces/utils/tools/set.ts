const isSet: any = (obj: any) => obj instanceof Set

const optionalSet = (props: any, propName: any, componentName: any) => {
  const prop = props[propName]
  const type = typeof prop

  if (prop != null && !isSet(prop)) {
    return new Error(
      `Invalid prop \`${propName}\` of type \`${type}\` supplied to \`${componentName}\`, expected \`Set\`.`
    )
  }
}

const requiredSet = (props: any, propName: any, componentName: any) => {
  const prop = props[propName]
  const type = typeof prop

  if (prop == null || !isSet(prop)) {
    return new Error(
      `Invalid prop \`${propName}\` of type \`${type}\` supplied to \`${componentName}\`, expected \`Set\`.`
    )
  }
}

optionalSet.isRequired = requiredSet

export default optionalSet
