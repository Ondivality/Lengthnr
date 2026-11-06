characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '>', '<', '[', ']', '`', '~', ',']
max = 50;

function lengthen(url) {
	let desired = url.length * 2;
	let final = "";
	if (desired > max) {
		desired = max;
	}
	for (let i = 0; i <= desired; i++) {
		final = final.concat(characters[Math.floor(Math.random() * characters.length)]);
	}
	console.log(final);
}
