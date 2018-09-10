const Tram = require('tram-one')
const html = Tram.html({
  'counter-button': require('./counter-button'),
  tap: require('./other-symbols/tap'),
  untap: require('./other-symbols/untap'),
})

const style = `
  border: solid var(--text-color);
  border-radius: 0.5em;
  margin-top: 0.1em;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const buttonStyle = `
  cursor: pointer;
  margin-top: 0.2em;
`

module.exports = (attrs) => {

  return html`
    <div style=${style}>
      <div style=${buttonStyle} onclick=${attrs.onundo}>
        <div style="width:100%"><untap width="2em" height="2em"/></div>
        <div style="width:100%">undo</div>
      </div>
      <div style=${buttonStyle} onclick=${attrs.oncommit}>
        <div style="width:100%"><tap width="2em" height="2em"/></div>
        <div style="width:100%">commit</div>
      </div>
    </div>
  `
}
