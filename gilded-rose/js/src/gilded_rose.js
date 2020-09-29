function Item(name, sell_in, quality) { // Function Item is getting defined & paramertized. 
  this.name = name;  
  this.sell_in = sell_in;
  this.quality = quality;

  // Returning the item
  item = {
    name: this.name,
    sell_in: this.sell_in,
    quality: this.quality
  }

  return item;
}


var items = [] // Empty array created to store the values.

items.push(Item('Aged Brie', 5, 40));
items.push(Item('Sulfuras, Hand of Ragnaros', 2, 80));
items.push(Item('Backstage passes to a TAFKAL80ETC concert', 5, 40));
items.push(Item('Conjured', 4, 30));
items.push(Item('ABC', 20, 30));

var intitems = [] // empty array created to store the processed values.
intitems = items

function update_quality() {

  for (var i = 0; i < items.length; i++) {

    if (items[i].name !== 'Aged Brie' && items[i].name !== 'Backstage passes to a TAFKAL80ETC concert' && items[i].name !== 'Sulfuras, Hand of Ragnaros' && items[i].name !== 'Conjured' && items[i].quality > 0) {
      items[i].quality -= 1; // All items apart from above mentioned should degrade by one in quality.
      
      if (items[i].sell_in < 0) { //General condition to degrade quality twice if sell in date has passed
        items[i].quality -= 1;
      }

    } else {
      //Quality is increasing by 2 and by 3 if days are less than 10 or 5, also fixing the quality at 50 
      if (items[i].name === 'Backstage passes to a TAFKAL80ETC concert', 'Aged Brie' && items[i].sell_in < 11 && items[i].quality < 50 && (items[i].quality += 1) < 50) {
        items[i].quality += 1;

        if (items[i].sell_in < 6 && items[i].quality < 50) { // fixing the quality at 50
          items[i].quality++;
        } else {

          if (items[i].name === 'Conjured' && items[i].sell_in < 6) { 
            items[i].quality -= 4;
          }
        }
          if (items[i].name === 'Conjured' && items[i].sell_in > 11) { // reduce quality by 2 if sell in 10 days or more.
            items[i].quality -= 2;
      
          
        }
      }
    }

    if (items[i].name !== 'Sulfuras, Hand of Ragnaros') { // Condition to reduce sell in value by 1 for all items other than above mentioned.
      items[i].sell_in -= 1;
    }
}
return items;

}
console.log(intitems); // prints input values in console




exports.Item = Item;
exports.update_quality = update_quality;
