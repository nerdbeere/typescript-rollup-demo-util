export default class Math {
  sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  }
}
