const isMap = (obj: any) => obj instanceof Map

const optionalMap = (props: any, propName: any, componentName: any) => {
  const prop = props[propName]
  const type = typeof prop

  if (prop != null && !isMap(prop)) {
    return new Error(
      `Invalid prop \`${propName}\` of type \`${type}\` supplied to \`${componentName}\`, expected \`Map\`.`
    )
  }
}

const requiredMap = (props: any, propName: any, componentName: any) => {
  const prop = props[propName]
  const type = typeof prop

  if (prop == null || !isMap(prop)) {
    return new Error(
      `Invalid prop \`${propName}\` of type \`${type}\` supplied to \`${componentName}\`, expected \`Map\`.`
    )
  }
}

optionalMap.isRequired = requiredMap

export default optionalMap
