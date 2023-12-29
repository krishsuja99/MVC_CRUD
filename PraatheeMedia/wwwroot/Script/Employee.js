var app = angular.module('jobFairApp', []);

app.controller('JobFairController', function ($scope, $http) {

    $scope.applicants = [];
    $scope.submitForm = function () {
        var req = {};
        req = $scope.formData;

        $.ajax({
            url: "Employee/AddEmployee",
            type: "POST",
            data: req,
            success: function (response) {
                $scope.getDataFromAPI();
                $scope.clearForm();
            },
            error: function (request, status, error) {
                alert(request.responseText);
            }
        });
    };

    $scope.clearForm = function () {
        $scope.formData = {};
    };


    $scope.deleteApplicant = function (applicantId) {

        var req = {};
        req.id = applicantId;
        $.ajax({
            url: "Employee/DeleteConfirmed",
            type: "POST",
            data: req,
            success: function (response) {
                console.log('Applicant deleted successfully.');
                $scope.getDataFromAPI();
                $scope.applicants = $scope.applicants.filter(function (applicant) {
                    return applicant.id !== applicantId;
                });
            },
            error: function (request, status, error) {
                alert(request.responseText);
            }
        });

    };

    $scope.searchEmployee = function (obj) {

        var req = {};
        req.searchString = obj;
        $.ajax({
            url: "Employee/SearchEmployee",
            type: "POST",
            data: req,
            success: function (result) {
                $scope.applicants = result;
                $scope.$apply();
                $scope.searchName = obj;
            },
            error: function (request, status, error) {
                alert(request.responseText);
            }
        });

    };


    $scope.getDataFromAPI = function () {

        $.ajax({
            url: "Employee/Index",
            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (result) {
                $scope.applicants = result;
                $scope.$apply();
            },
            dataType: "json"
        });
    };

    $scope.getDataFromAPI();


});