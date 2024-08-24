// SetItem in LocalStorage
export const setLocalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
      window.localStorage?.setItem(key, value)
    }
  }
  
  // GetItem from LocalStorage
  export const getLocalStorage = (key) => {
    if (window !== 'undefined') {
      return window.localStorage?.getItem(key)
    }
  }
  
  // Scroll Smooth Function for Nav Items
  export const scrollNavItemSmooth = (e, id) => {
    e.preventDefault()
    document?.querySelector(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }
  
  export const convertFrom18Decimal = (value, fixedPoint = 2) => {
    if (value) {
      let valueString = value.toString();
      let valueNumber = Number(valueString);
      return (valueNumber / 1e18).toFixed(fixedPoint);
    }
    return 0;
  }
  
  export const convertFrom8Decimal = (value, fixedPoint = 2) => {
    if (value) {
      let valueString = value.toString();
      let valueNumber = Number(valueString);
      return (valueNumber / 1e8).toFixed(2);
    }
    return 0;
  }