function isValid(s: string): boolean {
  const arr: any[] = [];
  const parentheses = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (Object.keys(parentheses).includes(s[i])) {
      arr.push(s[i]);
    } else {
      if (parentheses[arr.pop()] !== s[i]) return false;
    }
  }

  return arr.length === 0;
}

console.log(isValid("{{{{}}}}(){()}"));
