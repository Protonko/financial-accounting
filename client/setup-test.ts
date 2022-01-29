import 'jsdom-global/register'

// Fail tests on any warning
console.error = (message: string) => {
  throw new Error(message)
}
