function isPalindrome(x) {
	let xArr = String(x).split("").reverse(); // Convert number to string , then to array and reverse
	console.log("xArr: ", xArr);
	console.log(xArr.join("") == x);

	return xArr.join("") == x;
}

// isPalindrome(141);
