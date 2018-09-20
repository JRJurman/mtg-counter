const Tram = require('tram-one')
const elements = {
  black: require('./mana-symbols/black'),
  blue: require('./mana-symbols/blue'),
  colorless: require('./mana-symbols/colorless'),
  generic: require('./mana-symbols/generic'),
  green: require('./mana-symbols/green'),
  red: require('./mana-symbols/red'),
  white: require('./mana-symbols/white')
}
const html = Tram.html({
  'counter-button': require('./counter-button')
})

module.exports = (attrs) => {
  const style = `
    border: solid var(--text-color);
    border-radius: 0.5em;
    margin-top: 0.1em;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `

  const visualCount = attrs.count === 0 ? '' : attrs.count
  const visualDiff = (() => {
    if (attrs.diff === 0) return ''
    if (attrs.diff < 0) return `${attrs.diff}`
    if (attrs.diff > 0) return `+${attrs.diff}`
  })()

  return html`
    <div style=${style}>
      <div style="width:100%">${elements[attrs.element]({height: '2em', width: '2em'})}</div>
      <div style="width:100%">${visualCount} ${visualDiff}</div>
      <div style="width:100%"><counter-button element=${attrs.element} onclick=${attrs.onincrement}>+</counter-button></div>
      <div style="width:100%"><counter-button element=${attrs.element} onclick=${attrs.ondecrement}>-</counter-button></div>
      <div style="width:100%"><counter-button element=${attrs.element} onclick=${attrs.onreset}>o</counter-button></div>
      <div style="width:100%"><counter-button element=${attrs.element} onclick=${attrs.onremove} style="border-radius: 0 .4em .4em 0;">x</counter-button></div>
    </div>
  `
}
