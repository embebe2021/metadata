function localStorageCleaner(arrayOfKey) {
  for(let i of arrayOfKey) {
    localStorage.removeItem(i)
  }
}

export default localStorageCleaner