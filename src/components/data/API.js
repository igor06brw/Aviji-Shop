const OutfitAPI = {
    outfits: [
        {id: 0, type: 't-shirt', name: 'T-shirt with number', favourite: false},
        {id: 1, type: 't-shirt', name: 'T-shirt with red shadow', favourite: false},
        {id: 2, type: 't-shirt', name: 'T-shirt Avengers', favourite: true},
        {id: 3, type: 't-shirt', name: 'T-shirt Reserved', favourite: false},
        {id: 4, type: 't-shirt', name: 'T-shirt House', favourite: false},
        {id: 5, type: 't-shirt', name: 'T-shirt Diverse', favourite: true},
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