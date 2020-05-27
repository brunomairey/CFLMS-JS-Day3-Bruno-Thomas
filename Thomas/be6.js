var arr = [1, 2, 3, 100, 0.23, 2.74, 0.1, 7]

function product(){
	var i = 0
	var prod = 1
	for (arr[i]; i<arr.length; i++){
		var prod = prod*arr[i]
	}
	return prod

}
document.write(product())