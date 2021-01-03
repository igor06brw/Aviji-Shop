const OutfitAPI = {
    outfits: [
        {id: 0, type: 't-shirt', name: 'T-shirt with number', favourite: false, price: 1.10},
        {id: 1, type: 't-shirt', name: 'T-shirt with red shadow', favourite: false, price: 33.11},
        {id: 2, type: 't-shirt', name: 'T-shirt Avengers', favourite: true, price: 67},
        {id: 3, type: 't-shirt', name: 'T-shirt Reserved', favourite: false, price: 3.13},
        {id: 4, type: 't-shirt', name: 'T-shirt House', favourite: false, price: 8.10},
        {id: 5, type: 't-shirt', name: 'T-shirt Diverse', favourite: true, price: 7.10},
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