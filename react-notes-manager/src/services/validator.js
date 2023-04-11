export class ValidatorService {
  static min(inputValue, limit) {
    if (inputValue.length < limit) {
      return `The value must be greater than ${limit}`
    }
  }

  static max(inputValue, limit) {
    if (inputValue.length > limit) {
      return `The value must be less than ${limit}`
    }
  }
}
