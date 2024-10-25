/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const brackets = new Map([
		["{", "}"],
		["[", "]"],
		["(", ")"],
	]);

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
