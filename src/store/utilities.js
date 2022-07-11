
//Logger 

export const logger = store => next => action => {
     console.log('Before');
     console.log(store.getState())
     console.log(action)
     const result = next(action)
     console.log('after');
     console.log(store.getState())
     console.log(action)
     return result
}



