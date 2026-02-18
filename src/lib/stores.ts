import { writable } from 'svelte/store';
import type { Pillar } from '$lib/data/pillars';

export const activePillar = writable<Pillar | null>(null);
