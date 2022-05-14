let arrayList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  arrayValues = document.getElementById('numbers-table');

arrayList.forEach((element) => {
  arrayValues.innerHTML += '<li data-value=' + element + '>' + element + '</li>'
})

/**
 * Shuffel numbers of the list
 */
shuffleNumbers = () => {
  let index = 0;
  arrayValues.innerHTML = ''
  for (let i = arrayList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayList[i], arrayList[j]] = [arrayList[j], arrayList[i]];
  }
  while (index < arrayList.length) {
    let listValue = document.createElement("li");
    listValue.innerHTML = arrayList[index]
    listValue.setAttribute('data-value', arrayList[index])
    arrayValues.appendChild(listValue)
    ++index;
  }
}

/**
 * Sort numbers of the list
 */
sortNumbers = () => {
  let index = 0
  arrayList = arrayList.sort((a, b) => { return a - b });
  arrayValues.innerHTML = ''
  while (index < arrayList.length) {
    let listValue = document.createElement("li");
    listValue.innerHTML = arrayList[index]
    listValue.setAttribute('data-value', arrayList[index])
    arrayValues.appendChild(listValue)
    ++index;
  }
}
