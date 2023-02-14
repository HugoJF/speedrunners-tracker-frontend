const _maps = {
    airport: 'Airport',
    festival: 'Festival',
    cassino: 'Cassino',
    resort: 'Report',
    metro: 'Metro',
    mansion: 'Mansion',
    silo: 'Silo',
    factory: 'Factory',
    library: 'Library',
    laboratory: 'Laboratory',
    nightclub: 'Nightclub',
    plaza: 'Plaza',
    powerplant: 'Powerplant',
    'swift-peaks': 'Swift Peaks',
    'ss-royale': 'SS Royale',
    'theme-park': 'Theme Park',
    zoo: 'Zoo',
};

export const maps = Object.fromEntries(
    Object.entries(_maps).sort((a, b) => a[0].localeCompare(b[0]))
);
