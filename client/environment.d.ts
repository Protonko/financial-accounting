declare namespace NodeJS {
  export interface ProcessEnv {
    readonly API_ENDPOINT: string
    readonly CORS: string
  }
}