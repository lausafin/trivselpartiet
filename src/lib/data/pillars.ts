export type PillarCategory = 'Fundament' | 'Livet' | 'Vækst' | 'Fremtiden';

export interface Pillar {
    id: string;
    title: string;
    category: PillarCategory;
    description?: string;
    position: [number, number, number]; // [x, y, z]
}

export const pillars: Pillar[] = [
    // Fundament (The Structure)
    { id: 'skat', title: 'Skattepolitik', category: 'Fundament', position: [-2, 2, 0] },
    { id: 'ret', title: 'Retspolitik', category: 'Fundament', position: [-3, 1, -1] },
    { id: 'forsvar', title: 'Forsvarspolitik', category: 'Fundament', position: [-4, 0, 0] },
    { id: 'udenrigs', title: 'Udenrigspolitik', category: 'Fundament', position: [-3, -1, 1] },
    { id: 'eu', title: 'EU-politik', category: 'Fundament', position: [-2, -2, 0] },
    { id: 'offentlig', title: 'Den offentlige sektor', category: 'Fundament', position: [-1, 0, -2] },

    // Livet (The Human)
    { id: 'velfaerd', title: 'Værdig velfærd', category: 'Livet', position: [0, 3, 0] },
    { id: 'sundhed', title: 'Sundhedspolitik', category: 'Livet', position: [1, 2, 1] },
    { id: 'aeldre', title: 'Ældrepolitik', category: 'Livet', position: [2, 1, 0] },
    { id: 'social', title: 'Socialpolitik', category: 'Livet', position: [1, 0, -1] },
    { id: 'bolig', title: 'Boligpolitik', category: 'Livet', position: [0, -1, 2] },
    { id: 'kultur', title: 'Kulturpolitik', category: 'Livet', position: [1, -2, 1] },
    { id: 'ligestilling', title: 'Ligestilling', category: 'Livet', position: [2, -1, -2] },

    // Vækst (The Pulse)
    { id: 'arbejde', title: 'Arbejdsmarked', category: 'Vækst', position: [3, 2, -1] },
    { id: 'erhverv', title: 'Erhvervspolitik', category: 'Vækst', position: [4, 1, 0] },
    { id: 'ivaerksaetter', title: 'Iværksætteri', category: 'Vækst', position: [3, 0, 1] },
    { id: 'udenlandsk', title: 'Udenlandsk arbejdskraft', category: 'Vækst', position: [4, -1, 0] },
    { id: 'afgifter', title: 'Afgifter', category: 'Vækst', position: [3, -2, -1] },

    // Fremtiden (The Horizon)
    { id: 'klima', title: 'Klimapolitik', category: 'Fremtiden', position: [0, 4, -2] },
    { id: 'energi', title: 'Energipolitik', category: 'Fremtiden', position: [-1, 3, 2] },
    { id: 'miljo', title: 'Miljø og natur', category: 'Fremtiden', position: [1, 3, -1] },
    { id: 'uddannelse', title: 'Uddannelsespolitik', category: 'Fremtiden', position: [0, 2, 3] },
    { id: 'transport', title: 'Transportpolitik', category: 'Fremtiden', position: [0, 1, 4] },
    { id: 'it', title: 'IT-politik', category: 'Fremtiden', position: [0, -3, 3] },
];
