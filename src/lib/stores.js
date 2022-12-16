import { writable } from "svelte/store";

export const itemStatus = writable(["To-Do", "danger"]);