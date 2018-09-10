const Tram = require('Tram-One')
const svg = Tram.svg()

module.exports = (attrs) => {
  return svg`
    <svg height=${attrs.height} width=${attrs.width} viewBox="0 0 600 600" version="1.1">
      <circle cx="300" cy="300" r="300" fill="#cbc2bf"/>
      <path d="m512 353.5-216 0 79.1-56.3c-29.4-23.3-63.4-35-101.9-35-19.3 0-32.5 3.7-39.5 11-7.1 7.4-10.7 20.7-10.7 39.9 0 53.2 27.4 110 82.2 170.4l-62.3 63.1c-72.5-88.2-108.8-167.1-108.8-236.5 0-41.6 12.5-74.7 37.6-99.3 25.1-24.6 58.5-36.9 100-36.9 50.7 0 106 19.3 165.9 57.8l46.4-79.1 28.2 200.8" fill="#130c0e"/>
    </svg>
  `
}
