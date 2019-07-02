function testTs(str:string):string {
	return `这是测试====${str}`
}

// console.log(testTs('这是一个字符串'))

function addFun(m:number, n:number):string {
	return `这是一道算术题：m + n = ${m+n}`
}

export default {
	testTs,
	addFun
}