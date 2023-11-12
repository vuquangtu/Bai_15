function isPrime(number) {
  if (number < 2) return false;
  for (i = 2; i < number ** 0.5 + 1; i++) {
    if (number % i == 0) return false;
  }

  return true;
}
