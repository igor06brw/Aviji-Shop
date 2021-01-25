const OutfitAPI = {
    outfits: [
        {id: 0, type: 't-shirt', name: 'T-shirt with Batman', favourite: false, price: 1.10, image: '/images/tshirt_1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 1, type: 'denim', name: 'White Denim', favourite: false, price: 33.11, image: '/images/denim_1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 2, type: 't-shirt', name: 'T-shirt with NASA', favourite: true, price: 67, image: '/images/tshirt_2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 3, type: 'hoodie', name: 'Hoodie with Tom & Jerry', favourite: false, price: 3.13, image: '/images/hoodie_1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 4, type: 'denim', name: 'Denim Casual', favourite: false, price: 8.10, image: '/images/denim_2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 5, type: 'shirt', name: 'Shirt with dots', favourite: true, price: 53, image: '/images/shirt_1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 6, type: 'shirt', name: 'Shirt with pled', favourite: true, price: 22, image: '/images/shirt_2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 7, type: 't-shirt', name: 'T-shirt with design', favourite: true, price: 19.78, image: '/images/tshirt_3.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 8, type: 't-shirt', name: 'T-shirt Atari', favourite: true, price: 32.45, image: '/images/tshirt_4.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 9, type: 'denim', name: 'Denim Slim', favourite: true, price: 23.12, image: '/images/denim_3.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 10, type: 'hoodie', name: 'Hoodie Marvel', favourite: true, price: 90.07, image: '/images/hoodie_2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 11, type: 'shirt', name: 'Shirt with pled', favourite: true, price: 3.09, image: '/images/shirt_3.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 12, type: 't-shirt', name: 'T-shirt with Sylvester', favourite: true, price: 76.63, image: '/images/tshirt_5.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 13, type: 't-shirt', name: 'T-shirt with design', favourite: true, price: 54.61, image: '/images/tshirt_6.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 14, type: 'jacket', name: 'Quilted Jacket', favourite: true, price: 19.20, image: '/images/jacket_1.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
        {id: 15, type: 'hoodie', name: 'Hoodie Casual', favourite: true, price: 3.98, image: '/images/hoodie_3.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
    ],

    allOutfits: function() {
        return this.outfits
    },
    getOutfit: function(id) {
        const isOutfit = p => p.id === id
        return this.outfits.find(isOutfit)
    }
    
}

export default OutfitAPI