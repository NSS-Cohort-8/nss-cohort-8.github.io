app
.controller('StudentsCtrl', function ($scope, StudentsFactory, $sce){

  $scope.students = StudentsFactory

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src)
  }




})
