export const getPaginationParams = (param: string | string[] | undefined) => {
  if (Array.isArray(param)) {
    return parseInt(param[0])
  } else if (param !== undefined) {
    return parseInt(param)
  } else {
    return param
  }
}