const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.height = document.documentElement.clientHeight
canvas.width = document.documentElement.clientWidth

ctx.fillStyle = "green"
ctx.fillRect(10, 10, 150, 100)
