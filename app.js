(function(){
  //Loading store module
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controler('PanelController', function(){
    
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: '. . .',
      canPurchase: true,
      soldOut: true
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '. . .',
      canPurchase: true,
      soldOut: false
    }
  ];
}
)();
