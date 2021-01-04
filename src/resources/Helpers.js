export const getImageSymbol = (name) => {
  if (name) {
    const symbol = name.toLowerCase().replace(' ', '-');
    return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
  }
};
