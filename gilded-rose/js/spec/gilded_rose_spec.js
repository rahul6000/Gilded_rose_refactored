let { Item, update_quality } = require ('../src/gilded_rose');


//Test 1
describe("Gilded Rose", function() {

  it("Should be foo", function() {
    intitems = update_quality(); // calling the input
    expect(intitems[0]).toEqual({name:'Aged Brie',sell_in: 4, quality :43}); //expected values
    expect(intitems[1]).toEqual({name:'Sulfuras, Hand of Ragnaros',sell_in: 2, quality :80});
    expect(intitems[2]).toEqual({name:'Backstage passes to a TAFKAL80ETC concert',sell_in: 4, quality :43});
    console.log(intitems[0]);// printing the processed values
    console.log(intitems[1]);
    console.log(intitems[2]);
  });
});

