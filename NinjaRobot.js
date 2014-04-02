
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot) {};


var direction = 10;
var found = false;
var lastShot = 1000;

/*var direction = 10;
var found = false;*/

Robot.prototype.onIdle = function(ev) {
  var robot = ev.robot;
  if(!found){
  	robot.turn(-5);
  } else {
    robot.ahead(direction);
    robot.rotateCannon(-10);
    robot.rotateCannon(10);
  }
  
  lastShot += 1;
  
  if(lastShot == 5){
  	found = false;
  } 
};

Robot.prototype.onScannedRobot = function(ev) {
  var robot = ev.robot;
  var enemy = ev.scannedRobot;
  robot.fire();
  lastShot = 0;
  
  found = true;
};

Robot.prototype.onWallCollision = function(ev){
	direction = -direction; 
};

Robot.prototype.onRobotCollision = function(ev){
	direction = -direction; 
};

