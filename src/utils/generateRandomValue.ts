import randomstring from 'randomstring'

export const generateRandomValue = () => {
  const length = (Math.floor(Math.random() * 100) % 10) + 1
  const type = Math.floor(Math.random() * 100) % 2

  if (type === 0) {
    return randomstring.generate(length)
  }

  return Math.floor(Math.random() * 100)
}
