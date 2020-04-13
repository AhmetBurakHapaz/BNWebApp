export const loadState = stateName => {
    try {
      const serializedState = localStorage.getItem(stateName);
      if (serializedState === null) {
        return undefined;
      }
      return serializedState;
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (state, stateName) => {
    try {
      const serializedState = state;
      localStorage.setItem(stateName, serializedState);
      console.log(localStorage.getItem(stateName));
    } catch (err) {
      throw new Error(err);
    }
  };