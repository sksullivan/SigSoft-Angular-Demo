var app = angular.module('demo',[]);

app.controller("mainpage", function ($scope) {
    $scope.results = [
        "CS 125",
        "CS 173",
        "CS 225",
        "CS 233",
        "CS 241",
        "CS 357",
        "CS 374",
    ];
    $scope.show = function (level) {
        if (level == -1) {
            $scope.search = "";
            return;
        }
        $scope.search = "CS "+level;
    };
});