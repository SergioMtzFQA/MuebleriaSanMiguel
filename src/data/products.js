export const PRODUCTS = [
    {
        id: 1,
        name: 'Sofá Imperial',
        category: 'Sala',
        price: 15000,
        images: ['https://via.placeholder.com/600x400?text=Sofa+Imperial+1', 'https://via.placeholder.com/600x400?text=Sofa+Imperial+2'],
        description: 'Un sofá de terciopelo de alta gama, perfecto para espacios elegantes.',
        materials: ['Terciopelo', 'Madera de pino', 'Espuma de alta densidad'],
        variants: [
            { name: 'Color', options: ['Azul Real', 'Gris', 'Verde Esmeralda'] },
            { name: 'Tamaño', options: ['2 Plazas', '3 Plazas'] }
        ]
    },
    {
        id: 2,
        name: 'Comedor Real',
        category: 'Comedor',
        price: 25000,
        images: ['https://via.placeholder.com/600x400?text=Comedor+Real'],
        description: 'Mesa de comedor para 8 personas con acabados en hoja de oro.',
        materials: ['Madera de Roble', 'Vidrio Templado'],
        variants: [
            { name: 'Color', options: ['Nogal', 'Negro Mate'] }
        ]
    },
    {
        id: 3,
        name: 'Sillón Lounge',
        category: 'Sala',
        price: 8000,
        images: ['https://via.placeholder.com/600x400?text=Sillon+Lounge'],
        description: 'Comodidad individual con diseño moderno.',
        materials: ['Tela Linen', 'Metal'],
        variants: [
            { name: 'Color', options: ['Beige', 'Gris Oxford'] }
        ]
    },
    {
        id: 4,
        name: 'Cama King Size',
        category: 'Recámara',
        price: 18000,
        images: ['https://via.placeholder.com/600x400?text=Cama+King'],
        description: 'Cabecera capitonada y base resistente.',
        materials: ['Tela', 'Madera'],
        variants: [
            { name: 'Color', options: ['Gris', 'Arena'] }
        ]
    },
];
