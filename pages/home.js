const Tram = require('tram-one')
const html = Tram.html({
  'add-menu': require('../elements/add-menu'),
  'mana-counter': require('../elements/counter'),
  'tracker': require('../elements/tracker')
})

module.exports = (store, actions) => {

  const revealMenu = () =>
    actions.revealMenu()

  const hideMenu = () =>
    actions.hideMenu()

  const commit = () =>
    actions.commitCounters()

  const undo = () =>
    actions.undoCounters()

  const addCounter = (element) => (event) =>
    actions.addCounter(element)

  const onincrement = (element) => () =>
    actions.incrementCounter(element)

  const ondecrement = (element) => () =>
    actions.decrementCounter(element)

  const onreset = (element) => () =>
    actions.resetCounter(element)

  const onremove = (element) => () =>
    actions.removeCounter(element)

  const menu = store.menu ?
    html`<add-menu revealed=${true} addCounter=${addCounter} hideMenu=${hideMenu} />` :
    html`<add-menu revealMenu=${revealMenu} />`

  const counters = store.counters.map(counter =>
    html`<mana-counter
      element=${counter.element} count=${counter.count} diff=${counter.diff}
      onincrement=${onincrement(counter.element)} ondecrement=${ondecrement(counter.element)}
      onreset=${onreset(counter.element)} onremove=${onremove(counter.element)}
    />`
  )

  return html`
    <div style="height: 100%; width: 100%;">
      <tracker onundo=${undo} oncommit=${commit} />
      ${counters}
      ${menu}
    </div>
  `
}
