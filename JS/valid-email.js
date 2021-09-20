const validEmail = (email) => {
  return (email.match(/.*@\w*.\w*/) == email)
}

console.log(validEmail("johny.bravo@cartoons.com")); // Should return true
console.log(validEmail("johnybravocartoonscom"));    // Should return false
console.log(validEmail("boris.lewagon.org"));        // Should return false
console.log(validEmail("boris@lewagon.org"));        // Should return true
