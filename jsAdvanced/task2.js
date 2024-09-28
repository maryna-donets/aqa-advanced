function numbNum(num) {
	console.log(num);
	if (num > 0) {
		return numbNum(num - 1);
	}
}

numbNum(5);
