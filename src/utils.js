export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }   else {
        return str;
    }

}

export function formatPrice(price) {
  return "$" + price.toFixed(2)
}
