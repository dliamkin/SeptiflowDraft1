septiflowAppRouter.controller("jobsController", ['$scope', '$timeout', '$location', 'modelsrv', '$routeParams', function ($scope, $timeout, $location, modelsrv, $routeParams) {

    (function () {
        modelsrv.db.changes({
            since: 'now',
            live: true
        }).on('change', showJobs);
    })();

    function showJobs() {
        modelsrv.getJobs(function (err, response) {

            if (response) {    
                $scope.jobs = response.rows;
            };

        });
    };

    $scope.addJob = function () {
        var job = {
            _id: new Date().toISOString(),
            name: null,
            docType: "job",
        };

        job.name = $scope.jobName;

        modelsrv.put(job, function (err, updated) {
            if (!err) {
                //if (updated)
                    //alert("Updated Job!");
                //else
                    //alert("Saved a new job!");
            }
        });

        $scope.jobName = '';
    }

    $scope.deleteJob = function (jobId) {

        modelsrv.delete(jobId, function (error) {
            if (error)
                alert("error, failed to delete job ID");
        });

    }

}]);