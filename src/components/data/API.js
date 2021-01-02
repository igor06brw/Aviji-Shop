const outfitAPI = {
    outfits: [
        {id: 0, type: 't-shirt', name: 'T-shirt with number', favourite: false},
        {id: 1, type: 't-shirt', name: 'T-shirt with red shadow', favourite: false},
        {id: 2, type: 't-shirt', name: 'T-shirt Avengers', favourite: true}
    ],

    allOutfits: function() {
        return this.outfits
    },
    getOutfit: function(id) {
        const isOutfit = p => p.id === id
        return this.outfits.find(isOutfit)
    }
    
}

export default outfitAPI