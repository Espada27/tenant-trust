const cropAddress = (address) =>
  `${address.slice(0, 4)}...${address.slice(-4)}`;

export { cropAddress };
