angular.module('bookApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(renderBooks, onError);

  function renderBooks(res){
    vm.books = res.data.books;
  }

  function onError(res){
    console.log(res);
  }
};
