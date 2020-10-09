

export function getAssetImage(imagePath: string) {
  return require(`../assets/images/${imagePath}`);
}

export function getAssetIcon(imagePath: string) {
  return require(`../assets/icons//${imagePath}`);
}
