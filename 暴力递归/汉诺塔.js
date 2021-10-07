function move(n, from, to, other) {
  if (n === 1) {
    console.log(`move 1 from ${from} to ${to}`)
  } else {
    move(n - 1, from, other, to)
    console.log(`move ${n} from ${from} to ${to}`)
    move(n - 1, other, to, from)
  }
}
const main = (n) => {
  move(n, "左", "中", "右")
}
main(5)
