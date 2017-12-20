/**
 * this file does nothing, it's simply a copy of the main Action script inside animate
*/
var c, w, h, s, d, isImmune, isBoost, isPlaying, increaseDifficulty, startTime, currentTime, titleScreen;
var backGround, starField1, starField2, spaceCorridor1, spaceCorridor2;
var hud, shieldBar, pointsDisplay, timeDisplayString;
var game, ship, shields, obstacles, nextObstacle, pickups, nextPickup, currentPoints;
var laser, isFiring;
var hammertime;

function init() {
	c = createjs;
	w = stage.canvas.clientWidth; //change for retina display
	h = stage.canvas.clientHeight; //change for retina display

	console.dir(stage);

	buildBackground();
	game = new c.Container();
	stage.addChild(game);
	buildShip();
	buildPickups();
	buildObstacles();
	buildHUD();
	buildTitleScreen();

	c.Ticker.on("tick", gameLoop);
	stage.on("stagemousedown", handleMouseClick);
	window.addEventListener("keydown", handleKeyPress);
	hammertime = new Hammer(window);
	hammertime.on('press', function (ev) {
		handleMouseClick();
		if (isPlaying) {
			fire();
		}
	});
	hammertime.on('swipeleft', function (ev) {
		handleMouseClick();
		if (isPlaying) {
			boostLeft();
		}
	});
	hammertime.on('swiperight', function (ev) {
		handleMouseClick();
		if (isPlaying) {
			boostRight();
		}
	});
}

function gameLoop(e) {
	if (isPlaying) {

		if (shields == 0) {
			setTimeout(endGame, 1000);
			ship.gotoAndPlay("explode");
			c.Sound.play("Death");
		}

		currentTime = (new Date()).getTime();
		var time = Math.floor((currentTime - startTime) / 1000);
		timeDisplayString = convertTime(time);

		var seconds = time % 60 + "";
		if (seconds == "20" || seconds == "40" || seconds == "60") {
			if (increaseDifficulty) {
				increaseDifficulty = false;
				d += 0.35;
				ship.gotoAndPlay("speed");
				c.Sound.play("Booster");
			}
		} else {
			increaseDifficulty = true;
		}

		pointsDisplay.text = currentPoints;

		var actualSpeed = s * (d + 1);

		performShipMovements();
		performPickupMovements(actualSpeed);
		performObstacleMovements(actualSpeed);
		performBackgroundMovements(actualSpeed);
	}
}

function performPickupMovements(a) {
	if ((nextPickup -= a) < 0) {
		addPickup();
	}
	for (var i = pickups.numChildren - 1; i >= 0; i--) {
		var shield = pickups.getChildAt(i);
		shield.y += a / 2;
		if (shield.y > h + 100) {
			pickups.removeChild(shield);
		}
		var shieldGTL = shield.globalToLocal(0, 0);
		var shipGTL = ship.globalToLocal(0, 0);
		if (shieldGTL.x < shipGTL.x + ship.nominalBounds.width &&
			shieldGTL.x + shield.nominalBounds.width > shipGTL.x &&
			shieldGTL.y < shipGTL.y + ship.nominalBounds.height &&
			shield.nominalBounds.height + shieldGTL.y > shipGTL.y) {
			currentPoints += 5;
			shieldsPickup();
			pickups.removeChild(shield);
		}
	}
}

function shieldsPickup() {
	if (shields < 4) {
		shields++;
		shieldBar.gotoAndStop(shields);
		c.Sound.play("Pickup");
	}
}

function performObstacleMovements(a) {
	if ((nextObstacle -= a) < 0) {
		addObstacle();
	}
	for (var i = obstacles.numChildren - 1; i >= 0; i--) {
		var obstacle = obstacles.getChildAt(i);
		obstacle.y += a;
		if (obstacle.y > h + 300) {
			obstacles.removeChild(obstacle);
		}
		if (isFiring) {
			var obstacleGTL = obstacle.globalToLocal(0, 0);
			var laserGTL = laser.globalToLocal(0, 0);
			if (obstacleGTL.x < laserGTL.x + laser.nominalBounds.width &&
				obstacleGTL.x + obstacle.nominalBounds.width > laserGTL.x &&
				obstacleGTL.y < laserGTL.y + laser.nominalBounds.height &&
				obstacle.nominalBounds.height + obstacleGTL.y > laserGTL.y) {
				obstacles.removeChild(obstacle);
				currentPoints += 5;
				var explosion = new lib.Obstacle_explosion();
				explosion.x = obstacle.x;
				explosion.y = obstacle.y;
				stage.addChild(explosion);
				c.Tween.get(explosion, {
					override: true
				}).to({
					y: explosion.y + random(10, 30),
					x: explosion.x + random(0, 15)
				}, 1000, c.Ease.linear).call(function () {
					stage.removeChild(explosion);
				});
			}
		}
	}
	var obstacleTarget = obstacles.getObjectUnderPoint(ship.x, ship.y, 1);
	if (obstacleTarget) {
		damage();
	}
}

function damage() {
	if (shields > 0 && !isImmune) {
		isImmune = true;
		shields--;
		shieldBar.gotoAndStop(shields);
		ship.gotoAndPlay("damage");
		c.Sound.play("Damage");
		setTimeout(removeImmunity, 400);
	}
}

function removeImmunity() {
	isImmune = false;
}

function performShipMovements() {
	if (ship.x < w / 2) {
		ship.x = Math.floor(ship.x + 1);
	} else if (ship.x > w / 2) {
		ship.x = Math.floor(ship.x - 1);
	} else {
		ship.x = w / 2;
	}
}


function handleMouseClick(e) {
	if (!isPlaying) {
		startGame();
	}
}

function handleKeyPress(e) {
	if (isPlaying) {
		if (isBoost) {
			ship.gotoAndPlay("charging");
			c.Sound.play("Click");
		} else {
			if (e.keyCode == 37) {
				boostLeft();
			} else if (e.keyCode == 39) {
				boostRight();
			} else if (e.keyCode == 32) {
				fire();
			}
		}
	}
	e.preventDefault();
}

function boostLeft() {
	var newPosition = ship.x - 120;

	if (newPosition <= 0) {
		newPosition = 0;
	} else {
		c.Tween.get(backGround, {
			override: true
		}).to({
			x: backGround.x + 20
		}, 1000, c.Ease.linear);
	}

	c.Tween.get(ship, {
		override: true
	}).to({
		x: newPosition
	}, 1200, c.Ease.quintOut).call(boostComplete);
	ship.gotoAndPlay("boostleft");
	c.Sound.play("Charging", 0, 0, 200);
	isBoost = true;
}

function boostRight() {
	var newPosition = ship.x + 120;

	if (newPosition >= w) {
		newPosition = w;
	} else {
		c.Tween.get(backGround, {
			override: true
		}).to({
			x: backGround.x - 20
		}, 1000, c.Ease.linear);
	}

	c.Tween.get(ship, {
		override: true
	}).to({
		x: newPosition
	}, 1200, c.Ease.quintOut).call(boostComplete);
	ship.gotoAndPlay("boostright");
	c.Sound.play("Charging", 0, 0, 200);
	isBoost = true;
}

function fire() {
	if (!isFiring) {
		isFiring = true;
		laser = new lib.Laser();
		laser.x = ship.x;
		laser.y = ship.y - 10;
		stage.addChild(laser);
		c.Sound.play("LaserFX", 0, 0, 200);
		c.Tween.get(laser, {
			override: true
		}).to({
			y: -10
		}, 1200, c.Ease.quintOut).call(function () {
			isFiring = false;
			stage.removeChild(laser);
		});
	}
}

function boostComplete() {
	isBoost = false;
}


function startGame() {
	s = 10;
	d = 0;
	shields = 3;
	currentPoints = 0
	increaseDifficulty = true;
	isBoost = false;
	isFiring = false;
	titleScreen.visible = false;
	c.Sound.stop("Title");
	c.Sound.play("BGM", c.Sound.INTERRUPT_EARLY, 0, 0, -1, 0.8);
	isPlaying = true;
	isImmune = false;
	startTime = (new Date()).getTime();
}

function endGame() {
	isPlaying = false;
	isFiring = false;
	titleScreen.timeDisplay.text = timeDisplayString;
	titleScreen.scoreDisplay.text = currentPoints;
	titleScreen.timeDisplay.visible = true;
	titleScreen.scoreDisplay.visible = true;
	titleScreen.visible = true;

	s = 0;
	d = 0;
	increaseDifficulty = true;
	obstacles.removeAllChildren();
	nextobstacle = -1;
	pickups.removeAllChildren();
	nextPickup = -1;
	shields = 3;
	shieldBar.gotoAndStop(shields);
	ship.x = w / 2;
	ship.y = h - ship.nominalBounds.height - 50;

	c.Sound.stop("BGM");
	c.Sound.play("Title", c.Sound.INTERRUPT_EARLY, 0, 0, -1, 0.4);
}

function buildPickups() {
	pickups = new c.Container();
	nextPickup = -1;
	game.addChild(pickups);
}

function addPickup() {
	nextPickup = random(1000 - d * 200, 3000 - d * 200);
	var shield = new lib.Shield();
	shield.x = random(0, w);
	shield.y = random(-300, 0);
	var shieldRect = shield.frameBounds[0];
	shield.setBounds(shieldRect.x, shieldRect.y, shieldRect.width, shieldRect.height);
	pickups.addChild(shield);
}


function buildObstacles() {
	obstacles = new c.Container();
	nextObstacle = -1;
	game.addChild(obstacles);
}

function addObstacle() {
	nextObstacle = random(300 - d * 200, 800 - d * 200);
	var side = random(0, 1);
	var coinFlip = random(0, 1);
	//renders normal or alternative obstacle depending on coin flip
	var obstacle = coinFlip === 0 ? new lib.Obstacle() : new lib.ObstacleAlt();
	if (side == 1) {
		obstacle.x = w - random(-200, 300);
	} else {
		obstacle.x = 0 + random(-100, 200);
	}
	obstacle.y = (0 - h) - random(100, 400);
	obstacles.addChild(obstacle);
}


function buildShip() {
	ship = new lib.Ship();
	ship.x = w / 2;
	ship.y = h - ship.nominalBounds.height - 50;
	var shipRect = ship.frameBounds[0];
	ship.setBounds(shipRect.x, shipRect.y, shipRect.width, shipRect.height);
	game.addChild(ship);
}

function buildHUD() {
	hud = new c.Container();

	shieldBar = new lib.ShieldBar();
	shieldBar.x = 10;
	shieldBar.y = 10;
	shieldBar.gotoAndStop(3);
	hud.addChild(shieldBar);

	pointsDisplay = new c.Text("0", "28px Arial", "#FFFFFF");
	pointsDisplay.width = 100;
	pointsDisplay.x = w - 10;
	pointsDisplay.y = 5;
	pointsDisplay.textAlign = "right";
	hud.addChild(pointsDisplay);

	stage.addChild(hud);
}


function performBackgroundMovements(a) {
	starField1.y += Math.floor(a * 0.1);
	starField2.y += Math.floor(a * 0.1);

	if (starField1.y >= h) {
		starField1.y = starField2.y - h;
	}

	if (starField2.y >= h) {
		starField2.y = starField1.y - h;
	}

	spaceCorridor1.y += Math.floor(a * 0.4);
	spaceCorridor2.y += Math.floor(a * 0.4);

	if (spaceCorridor1.y >= h) {
		spaceCorridor1.y = spaceCorridor2.y - h;
	}

	if (spaceCorridor2.y >= h) {
		spaceCorridor2.y = spaceCorridor1.y - h;
	}

	if (backGround.x < 0) {
		backGround.x = Math.floor(backGround.x + 1);
	} else if (backGround.x > 0) {
		backGround.x = Math.floor(backGround.x - 1);
	} else {
		backGround.x = 0;
	}

}


function buildBackground() {
	backGround = new c.Container();
	var staticBG = new lib.StaticBG();
	staticBG.cache(-400, -400, 800, 800);
	backGround.addChild(staticBG);
	stage.addChild(backGround);

	starField1 = new lib.StarField();
	starField1.x = 0;
	starField1.cache(-400, -400, 800, 800);
	backGround.addChild(starField1);

	starField2 = new lib.StarField();
	starField2.x = 0;
	starField2.y = -h;
	starField2.cache(-400, -400, 800, 800);
	backGround.addChild(starField2);

	spaceCorridor1 = new lib.SpaceCorridor();
	spaceCorridor1.x = w / 2;
	spaceCorridor1.cache(-540, -400, 1080, 800);
	backGround.addChild(spaceCorridor1);

	spaceCorridor2 = new lib.SpaceCorridor();
	spaceCorridor2.x = w / 2;
	spaceCorridor2.y = -h;
	spaceCorridor2.cache(-540, -400, 1080, 800);
	backGround.addChild(spaceCorridor2);



}

function buildTitleScreen() {
	titleScreen = new lib.TitleScreen();
	titleScreen.x = 0;
	titleScreen.y = 0;
	titleScreen.timeDisplay.visible = false;
	titleScreen.scoreDisplay.visible = false;
	c.Sound.play("Title", c.Sound.INTERRUPT_EARLY, 0, 0, -1, 0.4);
	stage.addChild(titleScreen);
}


function convertTime(s) {
	var seconds = 0;
	var minutes = 0;
	var secondsString = s % 60 + "";
	if (secondsString.length < 2) {
		seconds = "0" + secondsString;
	} else {
		seconds = secondsString;
	}

	var minutesString = parseInt(s / 60) + "";
	if (minutesString.length < 2) {
		minutes = "0" + minutesString;
	} else {
		minutes = minutesString;
	}
	return minutes + ":" + seconds;
}

random = function (min, max) {
	return Math.round(Math.random() * max) + min;
};


init();