export const generateRandomRGBColor = () => {
  const R = Math.floor(Math.random() * 256)
  const G = Math.floor(Math.random() * 256)
  const B = Math.floor(Math.random() * 256)

  return `rgb(${R}, ${G}, ${B})` as const;
}
