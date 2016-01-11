/**
 * Created by Katerina Trpenoska on 06.01.2016.
 */
app.controller('WeekdayCtrl', function ($scope, $ionicPopup, $ionicModal, $timeout, $ionicLoading) {

    $scope.data = {};

    $scope.destinations = [];

    var dest = ['Skopje','Struga','Resen','Bitola'];
    var time = ['11:00','12:00','13:00','20:30'];
    var transporter = ['Galeb','Classic'];
    var day = ['Mon-Fri'];


    var i=0;

    for(i=0;i<1;i++){
        var temp = {
            id: i+1,
            dest: dest[Math.floor(Math.random() * dest.length)],
            time: time[Math.floor(Math.random() * time.length)],
            transporter: transporter[Math.floor(Math.random() * transporter.length)],
            day: day[Math.floor(Math.random() * day.length)]
        };

        $scope.destinations.push(temp);

    }


    $ionicLoading.show({
        template: '<img src="img/ionic.png">'
    });



    $scope.buttonClicked = false;

    var j=0;

    $scope.loadData = function () {

        $ionicLoading.show({
            template: '<img src="img/ionic.png">'
        });

        $scope.buttonClicked = true;

        $timeout(function () {

            var k = i;

            // load more data
            for(;j<k+9;j++, i++){
                var temp = {
                    id: i+1,
                    dest: dest[Math.floor(Math.random() * dest.length)],
                    time: time[Math.floor(Math.random() * time.length)],
                    transporter: transporter[Math.floor(Math.random() * transporter.length)],
                    day: day[Math.floor(Math.random() * day.length)]
                };

                $scope.destinations.push(temp);

            }

            console.log('data loaded');
            $scope.buttonClicked = false;
            $ionicLoading.hide();

            $scope.$broadcast('scroll.refreshComplete');
            $scope.$broadcast('scroll.infiniteScrollComplete');

        },100);

    }


});