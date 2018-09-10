const Tram = require('tram-one')
const html = Tram.html({
})

module.exports = (attrs, children) => {
  const style = `
    background: hsl(var(--${attrs.element}), 50%, 10%);
    color: hsl(var(--${attrs.element}), 50%, 80%);
    padding: 0.5em 1em;
    cursor: pointer;
    ${attrs.style}
  `

  return html`
    <div style=${style} onclick=${attrs.onclick}>
      ${children}
    </div>
  `
}
