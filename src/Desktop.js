import Icon from "./Icon"

export default class Desktop {
  static icons = []

  static start() {
    const icon1 = new Icon(10, 10, 50, 50, "Calculator")
    const icon2 = new Icon(70, 10, 50, 50, "Editor")
    this.icons.push(icon1)
    this.icons.push(icon2)
  }
}
