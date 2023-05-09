class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  toString() {
    return this.stack.join("");
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

function removeOuterParentheses(str) {
  const stack = new Stack();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (stack.isEmpty()) {
      stack.push(c);
      continue;
    }

    if (c === ")" && stack.size() === 1) {
      stack.pop();
      continue;
    }

    result += c;
    if (c === "(") {
      stack.push(c);
    } else {
      stack.pop();
    }
  }

  return result;
}