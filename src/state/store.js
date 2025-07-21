import {create} from 'zustand';

const store = create((set) => ({
    curr : 'usd',
    setCurr: (newCurr) => set((state) => {
        return {
            ...state,
            curr : newCurr
        }
    })
}));

export default store;