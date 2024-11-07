// ********************************
// Screen Dimensions Indicator Script
// ********************************
let mySpan = document.createElement('span')
mySpan.setAttribute('id', 'screenDimensions')   
mySpan.innerText = 'width x height'
document.body.append(mySpan)
let dimensionsCounter = document.getElementById('screenDimensions')
window.addEventListener('resize', () => {
    dimensionsCounter.textContent = `${window.innerWidth}x${window.innerHeight}`
})

//CSS
let css = '#screenDimensions {position: absolute; right: 10px; bottom: 10px;}'
let style = document.createElement('style')
style.appendChild(document.createTextNode(css))
document.head.appendChild(style)