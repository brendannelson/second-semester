var catalog = angular.module('game', []);

catalog.controller('catCtrl', catCtrl);

function catCtrl() {
    var videoGame = this;
    videoGame.games = [];

    videoGame.addGame = function () {
        videoGame.games.push({
            title: videoGame.title,
            image: videoGame.image,
            complete: false
        });

        videoGame.title = '';
        videoGame.image = '';
    };

    videoGame.removeAllGames = function () {
        videoGame.games.splice(0);
    };
}
