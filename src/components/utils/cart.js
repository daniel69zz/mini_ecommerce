import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  getters: {
    itemCount: (state) => state.items.reduce((acc, it) => acc + it.qty, 0),
    subtotal: (state) =>
      state.items.reduce((acc, it) => acc + it.precio * it.qty, 0),
  },
  actions: {
    addItem(product, qty = 1) {
      const found = this.items.find((it) => it.id === product.id);
      if (found) found.qty += qty;
      else this.items.push({ ...product, qty });
    },
    removeItem(id) {
      this.items = this.items.filter((it) => it.id !== id);
    },
    setQty(id, qty) {
      const it = this.items.find((x) => x.id === id);
      if (!it) return;
      it.qty = Math.max(1, qty);
    },
    clear() {
      this.items = [];
    },
  },
  persist: false,
});
