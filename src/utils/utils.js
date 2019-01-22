const capitalize = text => {
  if (text && text.trim().length > 0) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\b\w/g, l => l.toUpperCase());
  }
};


const formatCurrency = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const paramsBuilder = (values) => {
  if (values.length > 0) {
    let queryParams = '?'

    values.forEach(value => {
      queryParams += `values=${value}&`
    })

    return queryParams.replace(/&\s*$/, '')
  }

  return null
}

const findIndexInArray = (originalArray, objectToFInd, key) => {
  return originalArray.findIndex((item) => {
    return item[key] === objectToFInd[key]
  })

}
const InsertBeginning = (originalArray, objectToInsert) => {
  return [objectToInsert, ...originalArray]

}

const asyncLocalStorage = {
  setItem: function (key, value) {
      return Promise.resolve().then(function () {
          localStorage.setItem(key, value);
      });
  },
  getItem: function (key) {
      return Promise.resolve().then(function () {
          return localStorage.getItem(key);
      });
  }
};

export default paramsBuilder

export { capitalize, formatCurrency, paramsBuilder, findIndexInArray, InsertBeginning, asyncLocalStorage };
