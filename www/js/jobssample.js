septiflowAppRouter.controller("jobsController", ['$scope', '$timeout', '$location', 'modelsrv', '$routeParams', function ($scope, $timeout, $location, modelsrv, $routeParams) {

    $scope.jobs = [
        {
            _id: new Date().toISOString(),
            name: 'Adam Smith',
            time: '12:25 PM',
            address: '1424 Hill Avenue',
            city: 'Melbourne',
            state: 'FL',
            zip: '32940',
            blank: ' ',
            workitems: [
                { _id: new Date().toISOString(), name: 'Pump Tank', size: '1000', cost: 900.00, iscomplete: false, docType: "workitem" },
                { _id: new Date().toISOString(), name: 'Septic Cover', size: null, cost: 450.00, iscomplete: false, docType: "workitem" },
                { _id: new Date().toISOString(), name: 'Storage', size: null, cost: 150.00, iscomplete: false, docType: "workitem" },
            ],
            docType: "job",
        },
        {
            _id: new Date().toISOString(),
            name: 'Joanna Films',
            time: '4:30 PM',
            address: '9363 Nelson Park Circle',
            city: 'Orlando',
            state: 'FL',
            zip: '32765',
            workitems: [
                { _id: new Date().toISOString(), name: 'Pump Tank', size: '1000', cost: 900.00, iscomplete: false, docType: "workitem" },
                { _id: new Date().toISOString(), name: 'Septic Cover', size: null, cost: 450.00, iscomplete: false, docType: "workitem" },
                { _id: new Date().toISOString(), name: 'Storage', size: null, cost: 150.00, iscomplete: false, docType: "workitem" },
            ],
            docType: "job",
        },
        {
            _id: new Date().toISOString(),
            name: 'Vandolph C. Reyes',
            time: '1:30 PM',
            address: 'Guizo St.',
            city: 'Cebu',
            state: 'PH',
            zip: '6000',
            workitems: [
                { _id: new Date().toISOString(), name: 'Pump Tank', size: '1000', cost: 900.00, iscomplete: false, docType: "workitem" },
                { _id: new Date().toISOString(), name: 'Septic Cover', size: null, cost: 450.00, iscomplete: false, docType: "workitem" },
                { _id: new Date().toISOString(), name: 'Storage', size: null, cost: 150.00, iscomplete: false, docType: "workitem" },
            ],
            docType: "job",
        },
    ];

    //$scope.complete1 = function () {
    //    $scope.workitems.iscomplete = false;
    //    $scope.workitems.iscomplete = false;
    //}

    //$scope.notcomplete1 = function () {
    //    $scope.workitems.iscomplete = true;
    //    $scope.workitems.iscomplete = true;
    //}

    $scope.complete1 = function () {
        $scope.completed1 = false;
        $scope.uncompleted1 = false;
    }

    $scope.notcomplete1 = function () {
        $scope.completed1 = true;
        $scope.uncompleted1 = true;
    }

    $scope.complete2 = function () {
        $scope.completed2 = false;
        $scope.uncompleted2 = false;
    }

    $scope.notcomplete2 = function () {
        $scope.completed2 = true;
        $scope.uncompleted2 = true;
    }

    $scope.complete3 = function () {
        $scope.completed3 = false;
        $scope.uncompleted3 = false;
    }

    $scope.notcomplete3 = function () {
        $scope.completed3 = true;
        $scope.uncompleted3 = true;
    }

    //(function () {
    //    modelsrv.db.changes({
    //        since: 'now',
    //        live: true
    //    }).on('change', showJobs);
    //})();

    //showJobs();

    //function showJobs() {
    //    modelsrv.getJobs(function (err, response) {

    //        if (response) {    
    //            $scope.$apply(function () { $scope.jobs = response.rows; });
    //        };

    //    });
    //};

}]);