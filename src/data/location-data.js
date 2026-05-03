const data = [
    {
        id: crypto.randomUUID(),
        location: 'London',
        longitude: '-0.127758',
        latitude: '51.507351'
    },
    {
        id: crypto.randomUUID(),
        location: 'New York',
        longitude: '-74.006000',
        latitude: '40.712776'
    },
    {
        id: crypto.randomUUID(),
        location: 'Tokyo',
        longitude: '139.691711',
        latitude: '35.689487'
    },
    {
        id: crypto.randomUUID(),
        location: 'Paris',
        longitude: '2.352222',
        latitude: '48.856613'
    },
    {
        id: crypto.randomUUID(),
        location: 'Sydney',
        longitude: '151.209900',
        latitude: '-33.865143'
    },
    {
        id: crypto.randomUUID(),
        location: 'Dubai',
        longitude: '55.270782',
        latitude: '25.204849'
    },
    {
        id: crypto.randomUUID(),
        location: 'Singapore',
        longitude: '103.819839',
        latitude: '1.352083'
    },
    {
        id: crypto.randomUUID(),
        location: 'Toronto',
        longitude: '-79.383186',
        latitude: '43.653225'
    },
    {
        id: crypto.randomUUID(),
        location: 'Berlin',
        longitude: '13.404954',
        latitude: '52.520008'
    },
    {
        id: crypto.randomUUID(),
        location: 'Dhaka',
        longitude: '90.412521',
        latitude: '23.810331'
    },
    {
        id: crypto.randomUUID(),
        location: 'Kolkata',
        longitude: '88.363989',
        latitude: '22.572646'
    },
]

export function getLocationData() {
    return data;
}

export function getLocationByName(name) {
    const location = data.filter((item) => item.location.toLocaleLowerCase() === name.toLocaleLowerCase());

    if (!location) return null;
    if (location.length > 0) {
        return location[0];
    } else {
        const defaultLoaction = {
            id: crypto.randomUUID(),
            location: '',
            longitude: 0,
            latitude: 0
        }
        return defaultLoaction;
    }
}