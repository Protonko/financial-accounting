export const getQueryParam = (param?: string | string[]) => param && Array.isArray(param) ? param[0] : param
