function fun1(x, y, ...z) {
    console.log({ x, y, z })
}
fun1(10, 20, 30, 40, 50, 60)

function fun2(x, y, ...z) {
    console.log({ x, y, z })
}
fun2(10, 20, "hello", 30, 40, 50)
