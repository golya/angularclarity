clarifyControllers.factory('gamestate', function() {

    var level = 1;
    var numberOfEnemies = 2;
    var maxTime = 10;
    var playerSize = 5;

    var GameState = {
        levelUp: function () {
            level++;
            numberOfEnemies++;
            maxTime++;
            playerSize++;
        },
        getLevel: function () {
            return level;
        },
        getNumberOfEnemies: function () {
            return numberOfEnemies;
        },
        getMaxTime: function () {
            return maxTime;
        },
        getPlayerSize: function () {
            return playerSize;
        },
        resetState: function() {
            level = 1;
            numberOfEnemies = 2;
            maxTime = 10;
            playerSize = 5;
        }
    };

    return GameState;
});