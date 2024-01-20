const itemsData = [
  // { id: 'kawaiidishes:milk_chocolate_bar', saturation: 3 },
  // { id: 'kawaiidishes:expresso_coffee', saturation: 3 },
  // { id: 'kawaiidishes:american_coffee', saturation: 3 },
  // { id: 'kawaiidishes:latte_coffee', saturation: 3 },
  // { id: 'kawaiidishes:mocha_coffee', saturation: 3 },
  // { id: 'kawaiidishes:macchiato_coffee', saturation: 3 },
  // { id: 'kawaiidishes:doppio_coffee', saturation: 3 },
  // { id: 'kawaiidishes:cappuccino_coffee', saturation: 3 },
  // { id: 'kawaiidishes:sweet_berry_ice_cream', saturation: 3 },
  // { id: 'kawaiidishes:napolitano_ice_cream', saturation: 3 },
  // { id: 'kawaiidishes:cream_ice_cream', saturation: 3 },
  // { id: 'kawaiidishes:chocolate_ice_cream', saturation: 3 },
  // { id: 'kawaiidishes:coffee_ice_cream', saturation: 3 },
  // { id: 'kawaiidishes:mocha_ice_cream', saturation: 3 },
  // { id: 'kawaiidishes:glow_berry_ice_cream', saturation: 3 },
  // { id: 'kawaiidishes:sweet_berry_milkshake', saturation: 3 },
  // { id: 'kawaiidishes:chocolate_milkshake', saturation: 3 },
  // { id: 'kawaiidishes:cream_milkshake', saturation: 3 },
  // { id: 'kawaiidishes:napolitano_milkshake', saturation: 3 },
  // { id: 'kawaiidishes:coffee_milkshake', saturation: 3 },
  // { id: 'kawaiidishes:glow_berry_milkshake', saturation: 3 },

  { id: 'kawaiidishes:coffee_fruit', saturation: 0.4, hunger: 1 }
];

ItemEvents.modification(event => {
  itemsData.forEach(itemData => {
    event.modify(itemData.id, item => {
      item.foodProperties = food => {
        if (itemData.saturation !== undefined) {
          food.saturation(itemData.saturation);
        }
        if (itemData.hunger !== undefined) {
          food.hunger(itemData.hunger);
        }
      };
    });
  });
});
