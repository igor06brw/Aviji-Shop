const OutfitAPI = {
    outfits: [
        {id: 0, type: 't-shirt', name: 'T-shirt with number', favourite: false, price: 1.10, image: '/images/img_1.jpg'},
        {id: 1, type: 't-shirt', name: 'T-shirt with red shadow', favourite: false, price: 33.11, image: '/images/img_2.jpg'},
        {id: 2, type: 't-shirt', name: 'T-shirt Avengers', favourite: true, price: 67, image: '/images/img_3.jpg'},
        {id: 3, type: 't-shirt', name: 'T-shirt Reserved', favourite: false, price: 3.13, image: '/images/img_4.jpg'},
        {id: 4, type: 't-shirt', name: 'T-shirt House', favourite: false, price: 8.10, image: '/images/img_5.jpg'},
        {id: 5, type: 't-shirt', name: 'T-shirt Diverse', favourite: true, price: 7.10, image: '/images/img_6.jpg'},
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