const bblsort = document.querySelector('.bubbleSort')
const insrsort = document.querySelector('.insertionSort')
const mrgsort = document.querySelector('.mergeSort')
const qcksort = document.querySelector('.quickSort')
const slctsort = document.querySelector('.selectionSort')
const szslide = document.querySelector('#arr_sz')
const btnarr = document.querySelector('.newArray')
const delayElement = document.querySelector('#speed_input')
const bars = document.querySelector('#bars')

function swap(el1, el2) {
  let temp = el1.style.height
  el1.style.height = el2.style.height
  el2.style.height = temp
}

function disableSortingBtn() {
  bblsort.disabled = true
  insrsort.disabled = true
  mrgsort.disabled = true
  qcksort.disabled = true
  slctsort.disabled = true
}

function enableSortingBtn() {
  bblsort.disabled = false
  insrsort.disabled = false
  mrgsort.disabled = false
  qcksort.disabled = false
  slctsort.disabled = false
}

function disableSizeSlider() {
  szslide.disabled = true
}

function enableSizeSlider() {
  szslide.disabled = false
}

function disableNewArrayBtn() {
  btnarr.disabled = true
}

function enableNewArrayBtn() {
  btnarr.disabled = false
}

function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, milisec)
  })
}

szslide.addEventListener('input', function () {
  createNewArray(parseInt(szslide.value))
})

let delay = 260

delayElement.addEventListener('input', function () {
  delay = 320 - parseInt(delayElement.value)
})

let array = []

createNewArray()

function createNewArray(noOfBars = 60) {
  deleteChild()
  array = []
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1)
  }
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement('div')
    bar.style.height = `${array[i] * 2}px`
    bar.classList.add('bar')
    bar.classList.add('flex-item')
    bar.classList.add(`barNo${i}`)
    bars.appendChild(bar)
  }
}

function deleteChild() {
  const bar = document.querySelector('#bars')
  bar.innerHTML = ''
}

btnarr.addEventListener('click', function () {
  enableSortingBtn()
  enableSizeSlider()
  createNewArray(szslide.value)
})
