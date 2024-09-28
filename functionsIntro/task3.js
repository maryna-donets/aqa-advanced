function checkOrder(available, ordered) {
	if (ordered === 0) {
		console.log("Your order is empty");
		return;
	} else if (available < ordered && ordered > 0) {
		console.log("Your order is too large, we don't have enough goods");
		return;
	} else if (available > ordered && ordered > 0) {
		console.log("Your order is accepted");
		return;
	} else {
		console.log("Error, value is not valid!");
	}
}

checkOrder(3, 15);
