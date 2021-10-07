/*class Employee {
	@int happy;
	@Array nexts;
}*/
class Info {
  constructor(comeMax, leaveMax) {
    this.comeMax = comeMax
    this.leaveMax = leaveMax
  }
}

function process(head) {
  if (head.nexts.length === 0) {
    return new Info(head.happy, 0)
  }
  // 可能性分析 1.head来和2.head不来
  // 1.head来 员工必不来  2.head不来  员工可来可不来
  let come = this.happy
  let leave = 0
  for (let i of head.nexts) {
    let ihappy = process(i)
    come = come + ihappy.leaveMax
    leave = leave + Math.max(ihappy.comeMax, ihappy.leaveMax)
  }
  return new Info(come, leave)
}
function main(boss) {
  let headInfo = process(boss)
  return Math.max(headInfo.comeMax, headInfo.leaveMax)
}
