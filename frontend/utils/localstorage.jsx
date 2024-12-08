class LocalStorage {
  
    setItem(key, value) {
        if (value !== null && value !== undefined) {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            console.warn(`Attempted to store invalid value (null or undefined) for key: ${key}`);
        }
    }
    
  }
  
  export default new LocalStorage();
  