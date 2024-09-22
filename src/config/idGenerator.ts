function generateKey(size: number = 20) {
  let ID = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < size; i++) {
    if (i === 6 || i === 13) {
      ID += "-";
    } else {
      ID += `${chars[Math.round(Math.random() * chars.length)]}`;
    }
  }
  return ID;
}
export default generateKey