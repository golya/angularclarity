clarifyControllers.factory('gamestate', function() {

    var level = 1;
    var numberOfEnemies = 2;
    var maxTime = 10;



    var GameState = {
        levelUp: function () {
            level++;
            numberOfEnemies++;
            maxTime++;
        },
        getLevel: function () {
            return level;
        },
        getNumberOfEnemies: function () {
            return numberOfEnemies;
        },
        getMaxTime: function () {
            return maxTime;
        }
    };

    return GameState;
});