import { writable } from "svelte/store";

export const itemStatus = writable(["None", "light"]);