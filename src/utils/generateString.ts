import randomstring from 'randomstring'

export const generateString = (nullable = true, length = 6) => {
  if (!nullable) {
    return randomstring.generate(length)
  }

  return Math.floor(Math.random() * 100) % 2 === 0 ? null : randomstring.generate(length)
}
