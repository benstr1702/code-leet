# 20. Valid Parenthesis

Given a string `s` containing just the characters `'(', ')', '{', '}', '[' and ']' `, determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

## Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

## Examples:

### Example 1:

Input: s = "()[]{}"

Output: **true**

### Example 2:

Input: s = "(]"

Output: **false**

## Possible Solution

Creating a hash map and setting

## Code

```javascript
var isValid = function (s) {
	const brackets = new Map([
		["{", "}"],
		["[", "]"],
		["(", ")"],
	]);

	const brackets = new Map();
	brackets.set("{", "}");
	class Stack {
		constructor() {
			this.items = [];
		}

		push(parenthesis) {
			this.items.push(parenthesis);
		}

		pop() {
			if (this.isEmpty()) {
				throw new Error(
					"Stack underflow error. Cannot pop if there's nothing to pop."
				);
			}
			return this.items.pop();
		}

		isEmpty() {
			return this.items.length === 0;
		}

		peep() {
			return this.items[this.items.length - 1];
		}
	}

	const stack = new Stack();
	for (let i = 0; i < s.length; i++) {
		if (brackets.has(s[i])) {
			stack.push(s[i]);
		} else {
			if (stack.isEmpty()) {
				console.log("stack is empty");
				return false;
			} else {
				const top = stack.peep();
				if (brackets.get(top) === s[i]) {
					console.log("match found!");
					stack.pop();
				} else {
					console.log("mismatch found!");

					return false;
				}
			}
		}
	}
	return stack.isEmpty();
};
```
