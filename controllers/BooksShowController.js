angular.module('bookApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var id;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
  }).then(renderBook, onError);

  function renderBook(json){
    vm.book = json.data
  }

  vm.deleteBook = function(book){
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(deleteBook, onError);
  }

  function deleteBook(book){
    var index = vm.books.indexOf(book);
    vm.books.splice(index, 1);
  }

  vm.editBook = function(book){
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
      data: book
    }).then(editBook, onError);
  }

  function editBook(book){
    console.log(book);
  }

  function onError(res){
    console.log(res);
  }
};
