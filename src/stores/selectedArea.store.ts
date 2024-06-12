import { writable } from "svelte/store";
import { Areas } from "../types/types";

const selectedArea = writable(Areas.Shopping);

export function goToShopping() {
    selectedArea.update(() => Areas.Shopping);
}

export function goToCheckout() {
    selectedArea.update(() => Areas.Checkout);
}

export function goToExterior() {
    selectedArea.update(() => Areas.Exterior);
}

export default selectedArea;