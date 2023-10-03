
const products = [
    {
        id: 1,
        nombre: 'KRYDEX Tactical MED1 Medical Pouch',
        precio: 60,
        category: 'pouch',
        img:'media/med-pouch-uno.PNG',
        cantidad : 30,
    },
    {
        id: 2,
        nombre: 'Krydex Tactical 9MM Pistol Magazine Pouch Double Stack',
        precio: 40,
        category: 'pouch',
        img:'media/pouch-pistola-uno.PNG',
        cantidad : 30,
    },
    {
        id: 4,
        nombre: 'KRYDEX MK3 MK4 Micro Fight Chassis Modular Chest Rig',
        precio: 160,
        category: 'chest',
        img:'media/chest-rig-uno.PNG',
        cantidad : 30,
    },
    {
        id: 5,
        nombre: 'KRYDEX FCPC V5 Carrier',
        precio: 480,
        category: 'carrier',
        img:'media/chaleco-home.PNG',
        cantidad : 30,
    },
    {
        id: 8,
        nombre: 'KRYDEX Zipper Insert Pocket',
        precio: 25,
        category: 'pouch',
        img:'media/pouch-verde.PNG',
        cantidad : 30,
    },
    {
        id: 9,
        nombre: 'KRYDEX 7.62 Double Magazine Insert Pouch',
        precio: 25,
        category: 'pouch',
        img:'media/doble-mag-dos.PNG',
        cantidad : 30,
    },
    {
        id: 10,
        nombre: 'KRYDEX Tactical Mini Dangler Drop Dump Pouch',
        precio: 35,
        category: 'pouch',
        img:"media/dangler-uno.PNG",
        cantidad : 30,
    },
    {
        id: 11,
        nombre: "KRYDEX Tactical D3CR Chest Rig",
        precio: 110,
        category: "chest",
        img:"media/chest-home.PNG",
        cantidad : 30,
    },
    {
        id: 12,
        nombre: "KRYDEX Slim Plate Carrier",
        precio: 125,
        category: "carrier",
        img:"media/plate-carrier.PNG",
        cantidad : 30,
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory));
        }, 500);
    });
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

