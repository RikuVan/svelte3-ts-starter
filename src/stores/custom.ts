import { writable } from 'svelte/store'

const initialState = { count: 0, delay: 1000 }

function createCount() {
  const { subscribe, set, update } = writable(initialState)

  return {
    subscribe,
    increment: () => update(s => ({ ...s, count: s.count + 1 })),
    decrement: () => update(s => ({ ...s, count: s.count - 1 })),
    reset: () => set(initialState)
  }
}

export const countStore = createCount()
