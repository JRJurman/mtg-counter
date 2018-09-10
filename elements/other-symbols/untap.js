const Tram = require('Tram-One')
const svg = Tram.svg()

module.exports = (attrs) => {
  return svg`
    <svg height=${attrs.height} width=${attrs.width} viewBox="0 0 600 600" version="1.1">
      <circle cx="300" cy="300" r="300" fill="#231f20"/>
      <path d="m473.7 145.7-75.9 44.5c37 57.4 55.4 110.4 55.4 159.1 0 39.9-11.8 71.9-35.4 95.9-23.6 24.1-55.3 36.1-95.2 36.1-66.7 0-142.3-34.8-226.9-104.3l60.6-59.9c57.9 52.6 112.4 78.8 163.5 78.8 18.5 0 31.2-3.4 38.3-10.2 7.1-6.8 10.6-19.5 10.6-37.9 0-37-11.2-69.6-33.6-97.8l-54 75.9 0-207.2 192.6 27" fill="#fff"/>
    </svg>
  `
}
