function heroicInventory(input) {
    let result = [];

    input.forEach(el => {
        result.push(buildHero(el));
    });

    function buildHero(heroData) {
        const hero = {};
        let data = heroData.split(' / ');
        let name = data[0];
        let level = Number(data[1]);
        let items = data[2].split(', ');

        hero.name = name;
        hero.level = level;
        hero.items = items;

        return hero;
    }

    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);