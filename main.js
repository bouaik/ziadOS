import Os from "./src/Os"

export const canvas = document.getElementById("canvas")
export const ctx = canvas.getContext("2d")

canvas.height = window.innerHeight
canvas.width = window.innerWidth

Os.start()
