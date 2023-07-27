export const generateNumberArray = (length = 6) => {
  return Array.from({ length }).reduce<number[]>(
    (acc) => [...acc, Math.floor(Math.random() * 100)],
    [],
  )
}
