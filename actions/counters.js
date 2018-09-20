module.exports = {
  init: () => [],
  addCounter: (counters, element, actions) => {
    if (counters.filter(counter => element === counter.element).length === 0) {
      return counters.concat({element, count: 0, diff: 0})
    }
    actions.incrementCounter(element)
    return counters
  },
  removeCounter: (counters, element) =>
    counters.filter(counter => counter.element !== element),
  resetCounter: (counters, element) => counters.map(counter => counter.element === element ?
    Object.assign({}, counter, {diff : -counter.count}) :
    counter),
  incrementCounter: (counters, element) =>
    counters.map(counter => counter.element === element ?
      Object.assign({}, counter, {diff : counter.diff + 1}) :
      counter),
  decrementCounter: (counters, element) =>
    counters.map(counter => counter.element === element ?
      Object.assign({}, counter, {diff : counter.diff - 1}) :
      counter),
  commitCounters: (counters) =>
    counters.map(counter => Object.assign({}, counter, {count: counter.count+counter.diff, diff: 0})),
  undoCounters: (counters) =>
    counters.map(counter => Object.assign({}, counter, {diff: 0}))
}
