function carFactory(input) {
    let storage = {
        engine: {
            small: { power: 90, volume: 1800 },
            normal: { power: 120, volume: 2400 },
            monster: { power: 200, volume: 3500 }
        },
        carriage: {
            hatchback: { type: 'hatchback', color: null },
            coupe: { type: 'coupe', color: null }
        }
    };
    let car = {};
    car.model = input.model;

    if (input.power <= storage.engine.small.power) {
        car.engine = storage.engine.small;
    } else if (input.power <= storage.engine.normal.power) {
        car.engine = storage.engine.normal;
    } else if (input.power <= storage.engine.monster.power) {
        car.engine = storage.engine.monster;
    }

    if (input.carriage === storage.carriage.hatchback.type) {
        car.carriage = storage.carriage.hatchback;
        car.carriage.color = input.color;
    }
    if (input.carriage === storage.carriage.coupe.type) {
        car.carriage = storage.carriage.coupe;
        car.carriage.color = input.color;
    }

    if (input.wheelsize % 2 === 0) {
        car.wheels = [];

        for (let i = 0; i < 4; i++) {
            car.wheels.push(Math.floor(input.wheelsize - 1));
        }
    } else {
        car.wheels = [];

        for (let i = 0; i < 4; i++) {
            car.wheels.push(Math.floor(input.wheelsize));
        }
    }

    return car;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});