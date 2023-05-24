function lowestPircesinCities(input) {
    let catalog = [];
    const result = {};

    input.forEach(el => {
        catalog.push(buildCatalog(el.split(' | ')));
    });

    function buildCatalog(entry) {
        const obj = {};
        
        obj.city = entry[0];
        obj.product = entry[1];
        obj.price = Number(entry[2]);

        return obj;
    }

    catalog.forEach(el => {
        if (!result.hasOwnProperty(el.product)) {
            result[el.product] = el;
        } else {
            if (el.price < result[el.product]['price']) {
                result[el.product] = el;
            }
        }
    });

    for (const prop in result) {
        console.log(`${prop} -> ${result[prop]['price']} (${result[prop]['city']})`);
    }
}

lowestPircesinCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);