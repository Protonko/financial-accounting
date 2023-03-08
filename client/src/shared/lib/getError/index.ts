import type {AxiosResponse} from 'axios';

export const isAxiosError = (error: unknown): error is AxiosResponse<Error> => {
  return error instanceof Object && 'status' in error
}

export const getError = (error: unknown): AxiosResponse<Error> | Error => {
  if (isAxiosError(error)) {
    return error
  }

  if (error instanceof Error) {
    return error
  }

  return new Error('Unknown Error!')
}