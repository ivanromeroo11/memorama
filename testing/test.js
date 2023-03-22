describe('Testing Memorama', () => {
    
    describe('class Memorama', () => {
    
        it('should exist a variable named "Memorama"', () => {
    
        expect(Memorama).not.toBe(undefined)
     })

    it('shoul be a function', () => {
    
        expect(typeof Memorama).toEqual('function')
    })

    it('should exist a variable named "card"', () => {

        expect(card).not.toBe(undefined)
    })
    
    it('should exist array named "availableImages"', () => {
    
        expect(typeof availableImages).toEqual('array')
    })
    
    it('should exist a function named "startGame"', () => {
    
        expect( typeof startGame).toEqual('function')
    })

    it('should exist a function named "setImagesInCards"', () => {

        expect(typeof setImagesInCards).toEqual('function')
    })
     
    })





})