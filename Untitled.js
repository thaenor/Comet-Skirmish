(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.StaticBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AgCAWQgKgCgGgLQgCgEAAgDIACgJIADgFQAKgIAFACIAAgDQANAGAEAFQACADABAEQACAKgHAIQgGAHgJAAIgCAAg");
	this.shape.setTransform(149.5,123.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9933CC").s().p("AgLAQQgGgFgCgGQgBgFABgDIADgHQAHgMAKADIAAgCQAHABAGAFQAFAFACAHQABAGgEAHQgDAHgHADIgGABIgCABQgFAAgGgGg");
	this.shape_1.setTransform(294,277.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003366").s().p("AgSAJQgCgEAAgDIABgEIABgGQABgCADgDQAIgIAGACIAAgBQALACAFAHQAGAHgCAJQgCAJgIAFQgFACgEAAQgNAAgGgMg");
	this.shape_2.setTransform(270.7,60.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336666").s().p("AgCAVQgHgCgFgFIgFgJQgBgFABgDIADgHQAFgIAKgBIACgCIAOAHQAEADABAGIABAIQgDAMgIAEQgEADgEAAIgEgBg");
	this.shape_3.setTransform(70.7,134.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99CCFF").s().p("AgCAVQgIgCgEgGQgEgFgBgDQgBgGACgGIADgGQAFgGAKAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAKADADADQAEADACAGQABAFgBAEQgBALgJAEQgEACgEAAIgEAAg");
	this.shape_4.setTransform(199.1,218.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AAAASQgFgBgGgEQgDgCAAgCIgBgFIgBgEIABgFQACgGAEgCQAGgEAEACIAAgCQAGACAEADQAGAFAAAFIAAAHQgEAIgCACQgEADgFAAIgCAAg");
	this.shape_5.setTransform(256.8,285.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgHAQQgFgCgCgDIgBgFIgBgJQABgFAFgEQAFgEAFABIAAgCQAIADADADQAGAEAAAHIgBAGQgBAFgDACQgDAFgHAAQgFAAgEgCg");
	this.shape_6.setTransform(366.3,212.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgDARIgHgDQgDgCgCgEIAAgEIgBgEIABgFQADgGADgCQAGgEAEADIAAgDQAKAFADADQAFAGgDAKQgCAFgCACIgFADIgGABg");
	this.shape_7.setTransform(388.9,76.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgMANIgDgEIAAgFIgBgEIAAgFQADgFAEgDQAGgEADACIAAgCQAHACAEAEQAGAGAAAFIgBAHIgEAHQgDADgGABIgCAAQgGAAgHgFg");
	this.shape_8.setTransform(254.6,26.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgIAQQgFgDgBgDIgCgEIAAgJQABgGAGgDQAFgDAEAAIAAgCQALAEADAFQAFAGgDAKIgDAFQgEAFgGAAQgGAAgFgCg");
	this.shape_9.setTransform(337.1,115.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgIAPQgEgBgCgEQgCgDAAgEQgBgDABgDIADgGQAGgIAHACIAAgCQAMAEADAGQAEAGgDAIQgCAGgEACQgCADgFAAQgGAAgFgDg");
	this.shape_10.setTransform(39.3,104.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgCARQgHgBgEgEIgCgDIgBgKQAAgEADgEQAFgIAIACIAAgCQAIADADACQAFAEABAGIgCAKIgCAFIgFADQgDACgEAAIgDgBg");
	this.shape_11.setTransform(172.9,29);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AgCASQgHgCgEgEIgCgCIgBgKQAAgEADgEQAFgJAIADIAAgDQAIACADAEQAFAEABAGQAAADgCAGIgCAFIgEADQgEACgEAAIgDAAg");
	this.shape_12.setTransform(207.2,130.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgHAPQgEAAgDgEIgCgHIAAgHQABgEACgCQAFgIAIACIAAgCQAMAEADAFQADAEgBAFQgBAJgFAFQgEADgFAAQgEAAgFgDg");
	this.shape_13.setTransform(188.9,310.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgJAOQgEgDgBgDIAAgEIgCgEIABgFQACgGAEgCQAGgEAEACIAAgCQALAEADAFQACADAAAGQgBAJgFAFQgEADgFAAQgFAAgGgEg");
	this.shape_14.setTransform(22.5,173.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgHAPQgFgDgBgCIgCgHIgBgDQAAgEACgEQADgFAEgCQAEgCAEABIAAgBQAKADAEAGQAEAGgDAHQgEAMgJABQgDAAgHgDg");
	this.shape_15.setTransform(117.4,102);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AgIAPIgGgFQgCgCAAgEIAAgHIADgHQAGgHAHABIAAgBQALADAEAGQAEAHgDAHIgEAIQgFAEgFAAQgDAAgHgDg");
	this.shape_16.setTransform(294,166.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAPQgGgDgBgEIAAgFIgBgDIAAgFQADgGAEgCQAFgEAEACIAAgCQANAEADAHQACAGgCAFQgDALgJACIgCAAQgDAAgHgDg");
	this.shape_17.setTransform(48.8,288.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAASQgEAAgHgFIgDgEIgBgFIgBgEQgBgBACgEQACgGAEgCQAFgEAEACIAAgCQALAEAEAFQADAGgCAHQgBAGgDADQgEAEgFAAIgDAAg");
	this.shape_18.setTransform(132.7,261.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLANIgDgEIgBgFIgBgEQgBgCADgFQAEgGACgBQAFgDAEABIAAgBQAKADAEAGQAEAGgCAHQgDAKgJADIgDAAQgFAAgIgFg");
	this.shape_19.setTransform(186,273.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIAAIgBgBIADgEIABgBIABgBIAGgBIACAAIACABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAIABABIAAADQAAAEgCADIgMACQgDgEgBgFg");
	this.shape_20.setTransform(284.5,229);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIAAIgBAAIABgCIABgCQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAIACgBIAFgBIADAAIABABIAEADIABACIAAACQAAAEgCAEIgMABQgDgEgBgFg");
	this.shape_21.setTransform(135.7,174.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJAAIAAgBIABgCIABgCIABgBIACAAIAGgCIACABIABABIAEACIABABIAAACQAAAEgCAEIgMACQgEgFgBgEg");
	this.shape_22.setTransform(168.5,15.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAAIgBgBIACgEIABgBIAHgCIADAAIAGAFIAAACIgCAIIgMACg");
	this.shape_23.setTransform(216.6,89.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJgBIAEgFIADgBIAFgBIACAAIABABIADADIABACIAAACQAAADgCAFIgMABQgEgEgBgGg");
	this.shape_24.setTransform(172.8,226.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJAAIAAgBIABgBIACgEIACgBIAGgBIACAAIACABIACADIACABIAAACQAAAFgCADIgMACQgEgEgBgFg");
	this.shape_25.setTransform(334.9,175.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAAIAAgBIAAgBIACgCIABgCIACgBIAFgBIADAAIAFAFIABACQAAADgCAFIgMACQgDgDgCgGg");
	this.shape_26.setTransform(379.4,18.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAAIAAgBIACgEIACgBIABAAIAGgCIACAAIABABIADADIABABIABADQAAACgCAFIgMACg");
	this.shape_27.setTransform(308.6,91);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJAAIAAgBIAAgBIACgDIABgBIACgBIAGgBIACAAIACABIADADIABABIAAADQAAADgCAEIgMACIgFgJg");
	this.shape_28.setTransform(71.4,31.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgJAAIAAgBIABgBIACgEIACgBIAGgBIACAAIAFAEIAAABIABACQAAAEgCAEIgLACQgDgDgDgGg");
	this.shape_29.setTransform(132,83);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAAIAAgBIABgBIABgDIABgBIACgBIAGgBIACAAIACABIACADIACACIAAABQAAAFgCADIgMACIgFgJg");
	this.shape_30.setTransform(117.4,321.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAAIAAgBIABgBIACgEIACgBIAGgBIACAAIAEAEIABABIABADQAAAEgCADIgLACQgDgDgDgGg");
	this.shape_31.setTransform(61.2,200.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIAAIgBgBIABgBIABgDIABgBIADgBIAFgBIACAAIACABIADADIAAABIABADQAAAEgCADIgLACQgEgDgBgGg");
	this.shape_32.setTransform(45.9,355.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgIAAIgBgBIACgDIADgDIAFgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAIAEAFIAAACQAAAEgCADIgMACQgDgEgBgFg");
	this.shape_33.setTransform(146.6,302.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AABAKIgGAAIgCgBIgCgCIgDgGIgBgCIABgBQAEgGAGAAIAAgCIAIACQADAAACACQAEAFgDAGQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgCACIgFACg");
	this.shape_34.setTransform(341.1,278.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJAAIAAgBIABgBIACgEIACgBIAFgBIADAAIACABIAEAEIAAACQAAAFgCADIgMACIgFgJg");
	this.shape_35.setTransform(291.1,352.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("A+2e3MAAAg9tMA9tAAAMAAAA9tg");
	this.shape_36.setTransform(200,200,1.013,1.013);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.StaticBG, rect = new cjs.Rectangle(0,0,400,400), [rect]);


(lib.StarField = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Stars
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAAASQgHgBgFgFIgCgCIgBgGIgBgEIABgFQACgGAEgCQAGgEAEACIAAgCQAMAFADAGQADAFgDAIQgBAEgDADQgEAEgGAAIgCAAg");
	this.shape.setTransform(307.1,91.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgLAMIgDgDIgBgGIgBgDIABgFQADgGADgDQAFgDAEABIAAgBQALADADAFQAEAEgBAGQgBAOgLADIgDAAQgFAAgIgGg");
	this.shape_1.setTransform(318.8,192.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgHAQQgFgDgCgEIgCgGQgBgDABgDIADgGQAGgJAHACIAAgBQALADAEAFQADAFgBAHQgCALgHACQgDACgDAAQgDAAgGgCg");
	this.shape_2.setTransform(116.7,333.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AAAASQgGgBgGgFIgCgDIgBgEIgBgFIABgFQACgFAEgDQAGgEAEACIAAgCQALADAEAHQADAGgDAHIgEAHQgEAFgGAAIgCAAg");
	this.shape_3.setTransform(21.8,199);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgCARQgLgCgBgHIgCgIQAAgDACgEQADgGADgBQAFgCADABIAAgCQAMAFADADQADAFgBAHQgDANgJABIgDABIgEgBg");
	this.shape_4.setTransform(143.7,33.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AAAASQgGgBgGgFIgCgDIgBgEIgBgFQgBgBACgEQACgGAEgCQAGgEAEACIAAgCQAKADADAFQAEAFgCAIQgBAGgDAEQgEAEgGAAIgCAAg");
	this.shape_5.setTransform(213.7,128.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgIAAIgBgBIABgCIACgCIABgBIACgBIAFgBIADAAIAFAFIAAACQAAAEgCAEIgMACQgDgEgBgFg");
	this.shape_6.setTransform(161.9,175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgJAAIAAgBIABgBIABgCIABgCIACgBIAGgBIACAAIABABIAFAEIAAACQAAAEgCAEIgMACQgEgEgBgFg");
	this.shape_7.setTransform(201.4,348.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgIAAIgBgBIACgEIACgBIABgBIAFgBIADAAIACABIADAEIABABIAAACQAAADgCAEIgMACg");
	this.shape_8.setTransform(363.3,247.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgIAAIgBgBIABgBIACgDIABgBIACAAIAGgCIACAAIABACIADACIABACIAAACQAAAEgCAEIgMABg");
	this.shape_9.setTransform(302.7,24.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgJAAIAAgBIABgBIABgDIABgBIACgBIAGgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACABIAEAFIAAACQAAAEgCADIgMACIgFgJg");
	this.shape_10.setTransform(388.1,53.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgJAAIAAgBIAAgBIAEgEIACgBIAGgBIACAAIABABIAEAFIAAACQAAAEgCADIgMACQgDgDgCgGg");
	this.shape_11.setTransform(48.1,80.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgIAAIgBgBIADgEIABgCIACAAIAFgBIACAAIAFAFIAAABIABABIgBAJIgMABQgEgFgBgEg");
	this.shape_12.setTransform(115.2,127.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgJAAIAAgBIABgBIACgEIADgBIAFgBIACAAIACABIAEAEIAAACQAAAFgCADIgMACQgDgDgCgGg");
	this.shape_13.setTransform(140,54.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgJAAIAAgBIABgBIACgEIACgBIAFgBIADAAIACABIACADIACABIAAACQAAAEgCAEIgMACIgFgJg");
	this.shape_14.setTransform(231.2,99.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgCAKIgEAAIgBgBIgDgDIgCgFIgBgBIABgCQADgGAHAAIAAgBQAEAAAEABQADAAACACQAEAEgCAEQAAAFgFADIgEABIgGgBg");
	this.shape_15.setTransform(77.6,225.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgJAAIAAgBIAAgBIACgDIADgCIAFgBIADAAIACACIACACIABACIABABQAAAFgCADIgMACQgEgEgBgFg");
	this.shape_16.setTransform(130.6,310);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgJAAIAAgBIAAgBIACgCIABgCIADgBIAFgBIADAAIABABIACADIACACIAAABQAAAFgCADIgMACQgDgDgCgGg");
	this.shape_17.setTransform(253.9,348.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgJAAIAAgBIABgBIADgEIAGgCIADAAIACABIACADIACABIAAADQAAAFgCACIgMACIgFgJg");
	this.shape_18.setTransform(328.3,227.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AgIATQgFgDgFgIQgBgCgBgEIACgJIAEgFQAIgKAGAEIAAgDQAKADAEAEQAFAEABAGQABAEgBAEQgCAOgMADIgEABQgFAAgFgDg");
	this.shape_19.setTransform(247.3,91.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AgOAPQgEgFgBgGIgBgIQACgHAIgFQAEgEAEABIACAAIAAgBIAAgBIAOAHQAJAJgDAKQgCAMgMAEIgFABQgIAAgHgHg");
	this.shape_20.setTransform(360.4,354.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AgCAVQgJgCgHgLIgCgGIACgFIAAgEIAEgGQAJgIAGACIAAgCQAMAEAEAGQACADABAFQADAKgIAHQgFAIgJAAIgDgBg");
	this.shape_21.setTransform(369.9,131.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AgNAPQgFgEgBgGQgCgFACgEQABgGAIgGQADgEAFABIACAAIAAgCQALAFADACQAJAIgCALQgDAMgMADIgGACQgHAAgGgHg");
	this.shape_22.setTransform(71.4,150.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AgIATQgEgCgCgEQgEgDgBgEQgCgGADgGIACgFQAGgJAKABIAAgCQAJADAEADQAHAGABAJQABAHgGAHQgEAGgIABIgEABQgEAAgEgDg");
	this.shape_23.setTransform(147.3,254.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AgCAVQgHgCgFgFIgFgJQgBgFABgDIADgHQAFgIAKgBIACgCIAOAHQAEADABAGIABAIQgDAMgIAEQgEADgEAAIgEgBg");
	this.shape_24.setTransform(211.5,188.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AgLAQQgGgEgCgHQgBgEABgFQAAgDADgDQAFgIAKgCIACgBQAJAEAEACQAFAFABAFIABAIQgBAFgEAFQgGAIgJAAQgGgBgGgEg");
	this.shape_25.setTransform(227.6,29);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AgIATIgHgHQgEgEgBgFIABgFQAAgDACgCQAAgDADgDQAIgIAHACIAAgBQAMACAFAJQAGAJgGALQgDAHgJADIgGAAQgEAAgEgCg");
	this.shape_26.setTransform(351.7,37.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AgHATQgDgBgGgHQgDgEAAgDQgBgCABgEIABgGIAFgGQAHgGAFABQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQANABAFANQADAGgCAFQgBAHgFAEQgEAEgHABIgDAAQgDAAgEgCg");
	this.shape_27.setTransform(69.2,358.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AgIASIgIgGQgDgFgBgEIADgLIADgFQAIgIAHACIAAgCQAHABAGAGQAHAHAAAHQAAAMgKAGQgFAEgFAAQgEAAgFgEg");
	this.shape_28.setTransform(77.3,73.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AgBAWQgIgBgHgFQgGgFgCgIQAAgGACgEIADgFQAHgIAJABIAAgCQANgBAIAJQACACADAGQADAHgDAGQgDAHgHAEQgGADgGAAIgCAAg");
	this.shape_29.setTransform(301.7,269.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.StarField, rect = new cjs.Rectangle(-1,-1,402,402), [rect]);


(lib.SpaceCorridor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// walls
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003333").s().p("ATifQIAAimQAFAEADAGIgGgaIAXgrIAFgkQgCgbgLgRQgHgKgKgIIAAgcIAFgPIAFg3IgBgEIgJggIAAhaIAFgJIAPgKQAyhTgRhhQgHgjgVgKQgsh7AuhnQAMgZAGgXQgXgggWgjIAAgKIAPgJQADgHAFgFQAOgMgCgVQAAgMgDgNQgKgogRgZIgFgBIAAi3IAKgfIgKgOIAFhWIAAgHQgEhfAehUQAEgKAAgNIgPgQIgUgdIAAnxQAKgTAHgWIADAAQAKhJgegzIAAkyQASgOASgPQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABhcgphRIAAjSIAPgSIAAgUQAWhKglg9IAAiRIAejRQgKAPgUALIAAkGISIAAMAAAA+fgEglpAfQMAAAg+fIUUAAIAADtIgKAcQgbAmgNAgQgNAegCApIBBBoIAABOIgOA5IgjAZIgGAeIABAGQACAEAEAFQADAGAHADIADABIAGAQIAJAEIAUAKIAAFTQgjAkgTApIgBAEIA3AfIAAB8QgGAMgEANIAKArIAAAzIgJgGIgBgEIhKgYIBUBDIAACFIgdAdIgGAfIAKAYQALAEALALQgCALABAKIAEAEIAAAbIgLAHIgSgEIAMAIIgJAHIgDABIAaAJQgNASgJASQgPADgKALQgKALABAOQAOAWAZANQAKAGAKADIAAAxIgBgBQgMgIgEAFQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgCAAQACAbARATQgcALgQAVQgJAMABATIABAFQAFAJAOABIAjAaIAABjQglAegzAVQgQAGgLAIQAIADAFAJQAHANAVAAIAZAeIAEAVIAtAYIAAEpIgEAIIgQAzQAFAaAPAUIAACkQg3AxgxAoQANAjAhAYQAUANANAOIgUAUIgUAjQAHAGACANQACAPAOAHQAAABAAAAQAAAAAAAAQAAABAAAAQABABAAABIAnhzIAADTQgaAXgXAaIgGAEIgjA3IAKA4IAVAUQAnAIAUAfIAABkIgUAOQgPAJAAAMQgIADALAKQAKAIACAOIAAAGIAUAJIAAEZg");
	this.shape.setTransform(0,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpaceCorridor, rect = new cjs.Rectangle(-241,-1,482,402), [rect]);


(lib.ShipGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#B8860B","#FFFFFF"],[0,1],-17.6,-9.8,25.6,-9.8).ss(0.5,1,1).p("AhLiGIgeAAIAABaIAeAAgAAGCHIgdAAIAdhaABMAtIAABaIAeAAg");
	this.shape.setTransform(-4,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#FFFFFF","#B8860B"],[0,1],-34.6,-0.8,8.5,-0.8).ss(0.5,1,1).p("AgOgsIAdAAIAABZIgdAAg");
	this.shape_1.setTransform(13.1,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#B8860B","#FFFFFF"],[0,1],-21.9,0.2,21.2,0.2).ss(1,1,1).p("AAUgLIAqgsIACAXIgmAhgAAUhJIAqgtIACAYIgmAigAgThJIgqgtIgCAYIAmAigAgTgLIgqgsIgCAXIAmAhgAgTAyIgqgsIgCAYIAmAhgAgTBqIgqgtIgCAYIAmAigAAUBqIAqgtIACAYIgmAigAAUAyIAqgsIACAYIgmAhg");
	this.shape_2.setTransform(0.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(0.5,1,1).p("Agvj3QAvgmAsAmQAJAkgJAeQgyg5gpA5QgJgfAJgjgAgjBiIAABaAhODiICdAAIAAAEIAAAlIidAAIAAglg");
	this.shape_3.setTransform(0.2,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#22313F").ss(1,1,1).p("AhRh5IANhRQBKiwBBCmIANBbQBnBXAYCDIh/AeIAACmIgEAAIidAAIgEAAIAAimIAAghIAAjXQhZBMgeBsQgEARgDARIB+AeAjSBgIADABABUh5IAAD4");
	this.shape_4.setTransform(0,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6D31").s().p("AhOATIAAglICdAAIAAAlg");
	this.shape_5.setTransform(0.2,29.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF860B","#6F6D30"],[0,1],-6.3,0,6.4,0).s().p("Ag+BeQADgRAEgQQAehtBYhLIAADXIAAAggAAABFIAdAAIAAhZIgdAAg");
	this.shape_6.setTransform(-14.5,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B8860B").s().p("AB0AtIAAhZIAeAAIAABZgAiRAtIAAhZIAeAAIAABZg");
	this.shape_7.setTransform(0,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#454545","#FF860B"],[0,1],-6.3,0,6.4,0).s().p("Ag+h7QBmBXAXCCIh9AegAgfBFIAeAAIAAhZIgeAAg");
	this.shape_8.setTransform(14.8,-1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC40C").s().p("AAiCxIAAhaIAeBagAhBCxIAehaIAABagAAWAvIArgsIABAXIglAigAg8AaIABgXIArAsIgHANgAAWgIIArgsIABAYIglAhgAg8gcIABgYIArAsIgHANgAAWhGIArgsIABAYIglAigAg8haIABgYIArAsIgHAOgAAWiDIArgtIABAYIglAhgAg8iYIABgYIArAtIgHAMg");
	this.shape_9.setTransform(0.2,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#0047D9","#FFFFFF"],[0,1],-5,0,5.1,0).s().p("AgtArQgJggAJgiQAvgmAsAmQAJAkgJAeQgyg5gpA5g");
	this.shape_10.setTransform(0,-17.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B8860B","#6F6D30"],[0,1],-8.3,0,8.3,0).s().p("ABPElIAAgEIidAAIAAAEIgEAAIAAimIAAghIAAjXIAMhRQBLiwBBCmIANBbIAAD4IAACmgAAiD8IAeAAIgehagAhAD8IAdAAIAAhagAAXB6IAGANIAmgiIgCgYgAg8BlIAmAiIAGgNIgqgtgAAXBCIAGANIAmghIgCgYgAg8AuIAmAhIAGgNIgqgsgAAXAEIAGANIAmggIgCgYgAg8gPIAmAgIAGgNIgqgrgAAXg5IAGANIAmghIgCgYgAg8hNIAmAhIAGgNIgqgsgAAsh1QAJgegJglQgsgmguAmQgKAjAKAgQAUgdAXAAQAWAAAZAdg");
	this.shape_11.setTransform(0.2,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-32.2,44.2,64.5);
p.frameBounds = [rect];


(lib.ShieldBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9933").ss(1,1,1).p("AE7hsQB2gxB6AxQgdCFhbBqQgggbguhXQguhVAEgogAkIhpQB2gyB6AyQgdCEhbBrQgggcguhWQguhWAEgngAAZhpQB2gyB6AyQgdCEhbBrQgggcguhWQguhWAEgngAoqhpQB2gyB6AyQgdCEhbBrQgggcguhWQguhWAEgng");
	this.shape.setTransform(55.5,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(65,65,65,0.6)").s().p("ABDAUQguhWAEgnQB2gyB6AyQgdCEhbBrQgggcguhWgAjeAUQguhWAEgnQB2gyB6AyQgdCEhbBrQgggcguhWgAoAAUQguhWAEgnQB2gyB6AyQgdCEhbBrQgggcguhWgAFlARQguhVAEgoQB2gxB6AxQgdCFhbBqQgggbguhXg");
	this.shape_1.setTransform(55.5,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.6)").s().p("AhNAUQguhWAEgnQB2gyB5AyQgdCEhbBrQgfgcguhWgAlvAUQguhWAEgnQB2gyB6AyQgdCEhbBrQgggcguhWgADUARQguhVAEgoQB2gxB6AxQgdCFhbBqQgggbguhXg");
	this.shape_2.setTransform(70,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-12,1.2,12,1.2).s().p("AhNASQguhVAEgoQB2gxB5AxQgdCFhbBqQgfgbguhXg");
	this.shape_3.setTransform(12,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9933").ss(1,1,1).p("AE7hsQB2gxB6AxQgdCFhbBqQgggbguhXQguhVAEgogAAZhpQB2gyB6AyQgdCEhbBrQgggcguhWQguhWAEgngAkIhpQB2gyB6AyQgdCEhbBrQgggcguhWQguhWAEgngAoqhpQB2gyB6AyQgdCEhbBrQgggcguhWQguhWAEgng");
	this.shape_4.setTransform(55.5,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,102,102,0.6)").s().p("AjeAUQguhWAEgnQB2gyB6AyQgdCEhbBrQgggcguhWgABDARQguhVAEgoQB2gxB6AxQgdCFhbBqQgggbguhXg");
	this.shape_5.setTransform(84.5,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-12,1.2,12,1.2).s().p("AhNASQguhVAEgoQB2gxB5AxQgdCFhbBqQgfgbguhXg");
	this.shape_6.setTransform(41,13.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,102,102,0.6)").s().p("AhNASQguhVAEgoQB2gxB5AxQgdCFhbBqQgfgbguhXg");
	this.shape_7.setTransform(99,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-12,1.2,12,1.2).s().p("AhNASQguhVAEgoQB2gxB5AxQgdCFhbBqQgfgbguhXg");
	this.shape_8.setTransform(41,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-12,1.2,12,1.2).s().p("AhNASQguhVAEgoQB2gxB5AxQgdCFhbBqQgfgbguhXg");
	this.shape_9.setTransform(99,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{x:41}},{t:this.shape_3},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape_6,p:{x:70}},{t:this.shape_3},{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_6,p:{x:70}},{t:this.shape_3},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1.2,113.1,28.8);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.Shield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shield
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9933").ss(1,1,1).p("Ah3hrQB2gxB5AxQgdCFhbBqQgfgbguhXQguhVAEgog");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-12,1.2,12,1.2).s().p("AhNASQguhVAEgoQB2gxB5AxQgdCFhbBqQgfgbguhXg");
	this.shape_1.setTransform(0,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9933").ss(1,1,1).p("AhyhnQBxgvB1AvQgcCAhYBmQgegagshTQgshTAEgmg");
	this.shape_2.setTransform(0,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-11.5,1.2,11.6,1.2).s().p("AhKASQgshTAEgmQBxgvB1AvQgcCAhYBmQgegagshTg");
	this.shape_3.setTransform(0,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF9933").ss(1,1,1).p("AhuhjQBtguBwAuQgbB7hUBjQgdgagqhQQgrhPAEglg");
	this.shape_4.setTransform(0,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-11.1,1.2,11.1,1.2).s().p("AhHARQgrhPAEgkQBtgvBwAvQgbB6hUBiQgdgZgqhQg");
	this.shape_5.setTransform(0,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9933").ss(1,1,1).p("AhqhfQBpgsBsAsQgaB2hRBfQgbgZgphNQgphMADgjg");
	this.shape_6.setTransform(0,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-10.6,1.1,10.7,1.1).s().p("AhEARQgphNADgjQBpgsBsAsQgaB2hRBeQgbgYgphMg");
	this.shape_7.setTransform(0,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF9933").ss(1,1,1).p("AhlhbQBkgqBnAqQgZBxhNBbQgagYgnhJQgohJAEgig");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-10.2,1.1,10.2,1.1).s().p("AhBAPQgohIAEgiQBkgqBnAqQgZBxhNBbQgagYgnhKg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF9933").ss(1,1,1).p("AhhhXQBggoBjAoQgYBshKBXQgZgXgmhGQglhGADggg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-9.7,1,9.8,1).s().p("Ag/APQglhGADggQBggoBjAoQgYBshKBXQgZgXgmhGg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF9933").ss(1,1,1).p("AhchTQBbgmBeAmQgWBnhHBTQgYgWgkhDQgkhCAEgfg");
	this.shape_12.setTransform(0,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-9.3,1,9.4,1).s().p("Ag8AOQgkhCAEgfQBbgmBeAmQgWBnhHBTQgYgWgkhDg");
	this.shape_13.setTransform(0,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF9933").ss(1,1,1).p("AhYhPQBYgkBZAkQgVBihEBPQgWgVgihAQgjg/ADgdg");
	this.shape_14.setTransform(0,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-8.8,0.9,8.9,0.9).s().p("Ag4ANQgjg/ADgdQBYgkBZAkQgVBihEBPQgWgVgihAg");
	this.shape_15.setTransform(0,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF9933").ss(1,1,1).p("AhThLQBTgjBVAjQgVBdhABLQgVgTghg9Qggg8ADgcg");
	this.shape_16.setTransform(0,-0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-8.4,0.9,8.5,0.9).s().p("Ag2ANQggg8ADgbQBTgkBVAkQgVBchABLQgVgTghg9g");
	this.shape_17.setTransform(0,-0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF9933").ss(1,1,1).p("AhPhHQBPghBQAhQgTBYg9BHQgUgSgfg6Qgfg5ADgag");
	this.shape_18.setTransform(0,-0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-8,0.9,8,0.9).s().p("AgzAMQgfg5ADgZQBPgiBQAiQgTBXg9BHQgUgSgfg6g");
	this.shape_19.setTransform(0,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF9933").ss(1,1,1).p("AhThKQBTgjBUAjQgUBchABLQgVgUggg9Qghg7ADgbg");
	this.shape_20.setTransform(0,-0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-8.4,0.9,8.4,0.9).s().p("Ag1ANQghg8ADgbQBTgjBUAjQgUBchABLQgVgUggg8g");
	this.shape_21.setTransform(0,-0.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF9933").ss(1,1,1).p("AhXhOQBXgkBYAkQgVBhhDBOQgWgUgihAQgig+ADgdg");
	this.shape_22.setTransform(0,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-8.8,0.9,8.8,0.9).s().p("Ag4ANQgig+ADgdQBXgkBYAkQgVBghDBPQgWgVgig/g");
	this.shape_23.setTransform(0,-0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF9933").ss(1,1,1).p("AhbhRQBbgmBcAmQgWBlhGBRQgXgVgjhCQgkhBADgeg");
	this.shape_24.setTransform(0,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-9.2,1,9.2,1).s().p("Ag6AOQgkhBADgeQBbgmBcAmQgWBlhGBRQgXgVgjhCg");
	this.shape_25.setTransform(0,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF9933").ss(1,1,1).p("AhfhVQBfgnBgAnQgXBqhJBVQgYgWglhFQglhEADggg");
	this.shape_26.setTransform(0,-0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-9.6,1,9.6,1).s().p("Ag9APQglhEADggQBfgnBgAnQgXBqhJBVQgYgWglhFg");
	this.shape_27.setTransform(0,-0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF9933").ss(1,1,1).p("AhjhYQBigqBlAqQgYBuhMBYQgagXgmhIQgmhHADggg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-10,1.1,10,1.1).s().p("AhAAPQgmhHADggQBigqBlAqQgYBuhMBYQgagXgmhIg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF9933").ss(1,1,1).p("AhnhcQBmgrBpArQgZByhPBdQgbgYgohLQgohKAEgig");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-10.4,1.1,10.4,1.1).s().p("AhDAQQgohKAEgiQBmgrBpArQgZByhPBdQgbgYgohLg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF9933").ss(1,1,1).p("AhrhgQBqgsBtAsQgaB3hSBgQgcgZgphOQgqhMAEgkg");
	this.shape_32.setTransform(0,0.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-10.8,1.1,10.8,1.1).s().p("AhFAQQgqhMAEgkQBqgsBtAsQgaB3hSBgQgcgZgphOg");
	this.shape_33.setTransform(0,0.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF9933").ss(1,1,1).p("AhvhjQBugvBxAvQgbB7hVBjQgdgZgrhRQgrhQAEgkg");
	this.shape_34.setTransform(0,0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-11.2,1.2,11.2,1.2).s().p("AhIARQgrhQAEgkQBugvBxAvQgbB7hVBjQgdgZgrhRg");
	this.shape_35.setTransform(0,0.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF9933").ss(1,1,1).p("AhzhnQBygwB1AwQgcCAhYBnQgegbgshTQgthTAEgmg");
	this.shape_36.setTransform(0,0.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FFE2A1","#FF7900","#FFEF76"],[0,1,1],-11.6,1.2,11.6,1.2).s().p("AhKASQgthTAEgmQBygwB1AwQgcCAhYBnQgegbgshTg");
	this.shape_37.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13,-14,26.1,28.5);
p.frameBounds = [rect, new cjs.Rectangle(-12,-13.1,24.2,26.5), new cjs.Rectangle(-11.6,-12.6,23.3,25.5), new cjs.Rectangle(-11.2,-12.2,22.4,24.5), new cjs.Rectangle(-10.7,-11.7,21.5,23.5), new cjs.Rectangle(-10.3,-11.3,20.6,22.6), new cjs.Rectangle(-9.8,-10.9,19.7,21.6), new cjs.Rectangle(-9.4,-10.4,18.8,20.6), new cjs.Rectangle(-9,-10,18,19.6), new cjs.Rectangle(-9,-10,18.1,19.6), new cjs.Rectangle(-8.9,-9.9,17.9,19.5), new cjs.Rectangle(-9.3,-10.3,18.6,20.4), new cjs.Rectangle(-9.7,-10.7,19.4,21.3), new cjs.Rectangle(-10.1,-11.1,20.2,22.2), new cjs.Rectangle(-10.5,-11.5,21.1,23.1), new cjs.Rectangle(-10.9,-11.9,21.9,24), new cjs.Rectangle(-11.3,-12.3,22.7,24.9), new cjs.Rectangle(-11.7,-12.7,23.5,25.7), new cjs.Rectangle(-12.1,-13.1,24.3,26.6), new cjs.Rectangle(-13,-14,26.1,28.5)];


(lib.ObstacleAlt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Obstacle
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#050F05","#051904","#000000"],[0,0.027,1],-17.8,0,17.9,0).s().p("AhiAqQhGgQgJgmQgIgmBSAEQBSAEBCgJQBDgKAnANQAoANgSAXQgRAWgiAVQgiAWg6ADIgQAAQg0AAg8gOg");
	this.shape.setTransform(-59.9,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#050F05","#051904","#000000"],[0,0.027,1],-13.9,0,14,0).s().p("AhOAhQg9ghAAgeQAAgfAbADQAaACAoAeQApAcBIgfQBJggAAAfQAAAeggAbQghAaguAGIgPABQgoAAg0gbg");
	this.shape_1.setTransform(-16,-7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#050F05","#051904","#000000"],[0,0.027,1],-12.5,0,12.6,0).s().p("Ah9AkQABgeATgTQAUgUAdgSQAdgSBIAJQBJAJAFAMQAEANgCAXQgBAWhHAWQhGAWg2ABIgDAAQgzAAAAgcg");
	this.shape_2.setTransform(-53.3,-30.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#050F05","#051904","#000000"],[0,0.027,1],-12.3,0,12.4,0).s().p("AhWBIQgkgVAAgeQAAgcAzghQAzghA4gFQA6gFAPAmQAPAmgBAbQgBAcg/gMQg+gMgXAjQgPAVgTAAQgMAAgOgIg");
	this.shape_3.setTransform(-103,-22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#050F05","#051904","#000000"],[0,0.027,1],-15.6,0,15.7,0).s().p("ACJBgIhggYQgygNghgYIhUhAQgzgoAmgSQAmgTBMAVQBMAWAEAdQAFAdA+A3QA0AvgZAAIgMgBg");
	this.shape_4.setTransform(31.3,-19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#050F05","#051904","#000000"],[0,0.027,1],-111.5,0,111.5,0).s().p("AgZGIIgKgSIgggEIgSgLQgugLghAYQgFAEgKAFIgVAAIgLgPIgPgHQhIgMgnAbQg3gFg0gJIAAgEQgEgHgHgDIgWgMIg5AAQgDADgFACIgFADIg8gMIgJgLIAAgDIgWgLIgZAAQgVgMgagNQgNgHgFgHQgSABgPgHQgGgDgIgGIguAAIgDgHIgLgFIgBgCIgVgLIgDgLIgSgOIgPAAQgTgMgZABIgCgHQgdgVgrAEIgCAAIgJgIIgCAAIgUgRQADgQgCgSIgBgDIgHgHIAAgPQgHgJgIgJIgPgVQAJgVgDgYIgBgEIgOgOIgYAAIAEgTIADgKIAygnIACgBQATgzAqgfIAdgWQCAgsB5guQAmgPAegUIAcgHIA0gMQA3gMA6gJIAzgHQAzgHA0gFIASgCQA9AAA9ADIASgMIADAAIAbgBIAiAAIAVAAIAOgBIAjAAIAJAAIAuAAIAyABIAAAAQBEAuBbgTQAkgJAogDQAsAEArAHIALANQANARAZAPIAJADQBEAPBFgPQAPgDAQgBQA8APA6ATIAbAJIAPAFIADACQAPAJANAJIAbADQAzAWApAXIAGADIABAAIAAAVIAHAPQAYAYAhADIAXAAQARARANAQQAIAKAGALIgJAMIAAAZIASgFIgHAxQAKAJALAFIgCAVIgBAAQgiALgIAnQgCAHAAAHQACAHAFAFIgDADQgRAVgZAUIgMABIgEAAQgLAGgIAKQgFAHgBAGQgSAMgUAMIgTgDIgWAIIAAAPIgNAHQgOgHgPADIgEAAQgMAGgJAJIgEAGIAAAHIgdALIgLAAQgUAHgNAJIgfAJIgvAAIgHARIg/AQIgpAAIgaAOIgJACQgNgHgRgCQgMgBgJAFIgKARIg0AIIgygHIgSAHQhhgPhdAMQgFACgFABIgygkIgzAAQgbAkgjAdIgXAAgAmDDPQAJAnBGAQQBGARA7gDQA7gDAhgWQAigVARgXQASgXgngNQgogMhDAJQhDAJhSgEIgPAAQhCAAAHAigABZgUQAAAdA9AhQA+AgAugGQAvgFAggbQAggbAAgdQAAgghJAgQhJAfgogcQgpgegagCIgEAAQgXAAAAAdgAIyi+QgmATAzAoIBUBBQAhAYAzANIBhAYQAuAIg+g2Qg+g4gFgdQgEgdhNgWQgogLgeAAQgaAAgSAIgApcjXQg6AGgzAhQgzAhAAAdQABAeAjAUQAlAWAXgiQAYgjA/AMQA/AMABgdQABgbgPgnQgNghgvAAIgNAAgAjIkOQgdASgTAUQgUAVgBAdQAAAdA2gBQA2gBBHgWQBHgWABgWQADgYgFgMQgFgNhJgJQgYgDgUAAQgnAAgTAMg");
	this.shape_5.setTransform(-38.9,-8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ObstacleAlt, rect = new cjs.Rectangle(-150.4,-47.9,223,78.3), [rect]);


(lib.Obstacle_explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Fragments2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkqEJQhGgQgJgmQgIgnBSAEQBSAFBDgKQBDgJAnANQAoANgSAWQgRAXgiAWQgiAVg6ADIgQABQg1AAg8gPgACgAtQg9ggAAgeQAAggAbADQAaADAoAdQApAdBJgfQBJghAAAgQAAAeggAbQghAaguAFIgPABQgpAAg0gbgAkDizQABgdATgUQAUgVAdgSQAdgSBJAJQBJAJAFANQAEAMgCAYQgBAXhHAVQhHAWg2ABIgDAAQgzAAAAgcg");
	this.shape.setTransform(-39.9,-9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhDGIIgKgSIghgEIgSgLQgtgLghAYQgFAEgKAFIgWAAIgKgPIgPgHQhJgMgnAbQg3gFg0gJIAAgEQgDgHgIgDIgVgMIg5AAQgEADgEACIgFADIg8gMIgJgLIgBgDIgVgLIgZAAQgVgMgagNQgNgHgFgHIgIAAIArghIAUADIADAAQAhgUANghQACgEAGABIAAgGIBHg4IAfAAIAXgPQAHgMgBgTIAkgcIAOAAIALgIQAEgHACgJIAmgdIAJADIADgVQgNgWgCgaQgBgIgCgCQgEgFgGgDIgUg9QAEgQgGgNQgCgFgEgFIAAgDIgFAAIgUg7IAEgUQACgMgEgLIgGgFIgCgHQgGABgBgEQgCgGgEgCIgCghIgBgBIAQgDIAzgHQAygHA0gFIATgCQA8AAA+ADIASgMIADAAIAbgBIAiAAIAVAAIAOgBIAjAAIAJAAIAuAAIAxABIABAAQAZARAbAIQAxAOA6gMQAkgJAogDQAsAEArAHIALANQAMARAaAPIAJADQAnAIAogBIgRAUIgfAIIgDAAIgKAQQACALAIAGIghAoIgIgHIgCgCQgRAKABAYIAAACIACACIgSAWIAoArIgBACQADADADAAIAcAeIAAAFIAHAFIAAATIAQAHIANAKQABADAEACIAAAAIAMAjQALAEAKAFIAAABQACAEAGgBQATANALAXQASAKAKAXIAAADQASAJAPAMIAFALIAEAFIACAEIAPAGIALAOIAEAEIATAdIAeASIALAcIALAIIAEAGIAIAEIAFABIAMAIIAFAFIgLAEIgLAAQgVAHgMAJIgfAJIgvAAIgIARIg/AQIgoAAIgaAOIgJACQgNgHgRgCQgMgBgJAFIgKARIg0AIIgygHIgSAHQhigPhcAMQgFACgFABIgygkIgzAAQgbAkgkAdIgWAAgAmtDPQAJAnBGAQQBGARA7gDQA6gDAigWQAigVARgXQASgXgogNQgngMhDAJQhDAJhSgEIgPAAQhDAAAIAigAAvgUQAAAdA9AhQA9AgAvgGQAugFAhgbQAggbAAgdQAAgghJAgQhJAfgpgcQgogegagCIgFAAQgWAAAAAdgAjykOQgdASgUAUQgTAVgBAdQAAAdA2gBQA2gBBHgWQBHgWABgWQACgYgEgMQgFgNhJgJQgZgDgTAAQgnAAgTAMg");
	this.shape_1.setTransform(-34.7,-8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AktEEQhFgQgIgmQgHgnBRAFQBSAGBCgJQBDgIAnANQAnAOgSAWQgSAWgjAVQgiAVg6ACIgJAAQg3AAg/gQgACgAxQg7ghABgdQABggAaAEQAaADAnAdQAnAdBKgeQBJgfgBAfQgBAeggAaQghAZgvAFIgNABQgqAAgzgcgAj4iyQABgdAUgTQAUgUAegSQAdgRBIAKQBIAKAEAMQAEAMgDAYQgBAWhHAVQhHAUg1ABQg2AAABgdg");
	this.shape_2.setTransform(-39.7,-9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AhQFyIgBAAIgegEIgRgKIgBgBIgQgEQgjgEgaASQgFAFgLAEIgCAAIgSAAIgBAAIgLgNIgDgBIgLgHIgBAAIgPgCQg8gHgiAVIgWgBQgrgGgqgHIAAgEQgDgGgIgEIgEgCIgLgHIgFgDIgHgBIgyAAQgDADgDABIgCABIgEADIgCAAIgGgBIg1gNIgEgFIgFgFIAAgDIgEgCIgBAAIgPgJIgaAAIgBgBQgRgLgXgLIgEgDQgIgEgEgEIgGgGIgBAAIgHAAIAsggIAIABIAMACIACAAIADgCIACgBQAegSANgeQACgEAFABIABgHIAGgEIAGgFIA7gsIAfAAIAXgOQAIgMgBgRIAbgWIAJgHIAOAAIAKgHQAFgHADgJIAVgQIAOgKIADgCIAIADIAEgUQgFgKgCgKIgDgHQgCgJAAgKIAAgCIgBgJIgJgIIgJgbIgCgKIgDgJIgEgOQACgQgEgNQgCgFgFgFIAAgCIgBgBIgDAAIgHgaIgEgLIgBgEIgBgEIgEgNIADgUQACgMgDgLIgGgFIgCgIQgDACgCgCIgBgCQgCgGgCgCIgBgMIAAgOIgCgHIgBgBIAHgBIAIgCIAagFIAQgDIAIgBIAugFQAbgDAdgCIASgBIAfgBIASAAIBIAEIASgKIADAAIAagBIABAAIAXgBIABAAIAKAAIASAAIADAAIANAAIARAAIASAAIACAAIAHAAIAHAAIAhABIAFAAIADAAIAuACIABAAIABAAQASAMAVAIIABAAIAMAFQATAGAUACQAfADAigHIAogHIAkgEIArAFIArAHIANAMQAGAJAJAIIAKAHIALAIQAEACAFABIAVAFIAKABQAXAEAXgBIgNAUIgEABQgOACgNAEIgDAAIgBABIgJAOQABAKAGAFIABACIgOAQIgLAPIgHAIIgIgGIgDgCQgQAKAAAWIAAACIACACIgCACIgDADIgOAQIAOAQIAAABIABABIAUAYIgBACQADADADABIAaAeIAAACIAAADIAGAEIACAAIAAATIANAIIABAAIAEADIAGAEIAEADQAAADADACIABAAIALAhIABACIAFACIABAAIANAHIAAACQACADAFAAIAFAEIAMAMIACACIAFAHIAGAKQALAHAJANQADAGAEAIIAAADQAKAFAIAGIACACIALAJIAFAKIAEAFIABABIABADIAGADIAFACIADABIABABIAKAOIAEAEIADAFIACADIANAVIAeATIAIAaIABACIAHAFIAEACIAAACIAEAEIAHAFIAGABIADACIAGAEIADACIAEAFIgFACIgHACIgEgBIgHAAQgQAGgNAHIgDACIgdAIIgDABIgvAAIgHAOIAAABIg/AQIgEAAIgkgBIgaAOIgIACIgBAAIgHgDQgLgFgLgBIgFgBQgKABgHADIgEAHIgGAJIgLACIgoAGIgQgCIghgGIgSAHIgPgCQhZgNhVAKQgFACgFAAIgCgBIgJgGIgngcIgEgBIgtAAIgEADQgaAhgiAaIgWAAIgLgRgAmnDJQAHAmBFAQQBFASA6gCQA7gCAigVQAigVASgWQASgWgngOQgngNhDAIQhCAJhSgGIgRAAQg/AAAHAigAA4gSQgBAdA8AhQA7AhAugGQAvgFAhgZQAggaABgeQABgfhJAfQhJAegogdQgngdgagDIgFgBQgVAAgBAdgAjfkNQgeASgTAUQgVATgBAdQgBAdA2AAQA1gBBHgUQBHgVACgWQADgYgEgMQgEgMhJgKQgagEgUAAQgkAAgTALg");
	this.shape_3.setTransform(-35.1,-9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AkxD/QhDgRgGgmQgGgmBQAGQBRAHBCgIQBDgHAmANQAmAOgTAWQgTAWgiAUQgjAUg5ABIgHABQg3AAhBgSgAChA0Qg6ghACgdQACgfAaAEQAZADAmAeQAmAdBKgdQBKgegCAfQgCAegiAZQghAZguAEIgMABQgpAAgzgegAi6iVQg2AAADgcQACgdAVgTQAUgUAegQQAdgRBIAKQBGALAEANQAEAMgEAXQgDAWhGATQhGATgzAAIgDAAg");
	this.shape_4.setTransform(-39.6,-10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AhSFvIgCAAIgRgEIgLgBIgRgKIgBgBIgQgEQghgFgbARQgGAEgKAEIgCAAIgSABIgBAAIgLgMIgDgCIgLgGIgBgBIgOgCQg7gJgkAVIgUgBQgrgGgpgIIgBgEQgEgGgHgDIAAAAIgEgCIgKgHIgFgEIgHgBIgygCIgGAEIgCABIgFADIgCAAIgFgBIg0gMIgEgFIgEgGIgBgDIgEgCIgBAAIgPgJIgDAAIgWgBIgBgBQgSgLgVgMIgFgCIgLgIIgGgHIgBAAIgGABIAsgeIAHAAIAMABIADABIADgBIABgBQAegSAOgdQACgEAGAAIABgFIAGgFIAFgFIA8gqIAegBIAYgNQAIgLABgQIAagWIAJgHIANgBIALgHQAFgFACgJIAWgOIAOgKIADgCIAIABIAFgSQgEgKgBgKIgCgGIgBgSIABgCQgBgHgCgCIgIgIIgGgbIgCgKIgEgJIgEgOQADgPgEgOQgCgFgEgFIABgCIgCAAIgCgBIgHgaIgDgLIgBgEIgBgDIgEgOIADgTQACgNgDgLIgEgEIgBgIQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBgDQgBgFgDgCIAAgNIgBgGIAAgHIgCgHIAAgBIAGgBIAHgDIAZgGIAPgCIAJgBIAugFIA3gEIASgCIAgAAIARABIBHAEIATgJIACAAIAaAAIABAAIAXgBIABAAIAKAAIARAAIADAAIAOAAIARABIASAAIACAAIAHAAIAFAAIAiABIAGAAIACAAIAtACIABAAIABABQATALAVAIIABAAIAMAFQASAHAUACQAeAEAjgGIAngGQARgDATAAIAqADIArAIQAHAGAFAGQAHAIAKAIIAJAIIAKAIIAJADIAUAGIAKABQAWAEAXABIgKASIgDABQgOADgNAEIgCAAIgBABIgKAMQAAAJAFAGIABABIgOAPIgKAQIgHAHIgIgFIgDgCQgRAKAAAWIgBACIACABIgCACIgCADIgOAOIALAQIABABIABABIAQAYIgBACQACACADABIAaAgIAAACIgBACIAHAEIAAABIABASIANAJIABAAIADACIAGAFIADACQABAEACADIABAAIABAEIAKAbIABACIAGADIABAAIALAIIAAABQACAEAEgBIAEAFQAIAFAGAHIABACIAFAGIAGAKQALAIAHANQAEAFADAJIABACQAJAGAHAGIACACIAMAJIAEAKIAFAFIAAABIABADIAGADIAEACIADACIABABIAKANIAEAEIADAFIACAEIAMAVIAdATIAHAaIABACIAHAFIAEADIABABIAFAHIAFACIAGACIADACIAGAEIACACIADAEIgFACIgHABIgDAAIgHAAQgRAFgMAHIgEACIgcAJIgDAAIgvgBIgIAOIAAABQgfAJgfAGIgFAAIgjgBIgEACIgWALIgIACIgBAAIgHgDQgKgFgMgCIgFAAQgJAAgHADIgFAGIgFAJIgMADIgnAEIgQgBIghgGIgSAGIgPgCQhYgOhVAJQgEABgFAAIgCgBIgJgFIgmgdIgEgBIgtgBIgDAEQgbAfgiAaIgWABIgLgRgAmiDCQAGAlBEASQBEASA6gBQA6gCAigTQAjgUATgWQASgWgmgOQgmgOhCAIQhDAHhQgGIgVgBQg7AAAFAhgABBgRQgCAeA6AhQA6AhAugEQAugFAigYQAhgaACgdQACgfhJAeQhLAcgmgdQgmgdgZgEIgFAAQgVAAgCAbgAjMkLQgdAQgVAUQgUATgDAdQgCAcA2AAQA0ABBIgUQBHgTADgXQADgWgDgNQgFgMhHgLQgbgEgVAAQgjAAgSALg");
	this.shape_5.setTransform(-35.6,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ak0D6QhCgSgFglQgFgmBQAHQBQAIBCgHQBCgGAlAOQAmAOgUAVQgTAWgjATQgjATg5ABQg6AAhDgTgAChA4Qg5ghADgdQADgfAaAEQAZAEAlAdQAkAeBLgcQBKgcgDAeQgDAegiAYQgiAYguAEIgKAAQgqAAgygegAiwiTQg2gBADgcQAEgdAVgSQAVgTAegQQAegRBGAMQBFAMAEAMQADAMgEAXQgEAWhGASQhDARgzAAIgFAAg");
	this.shape_6.setTransform(-39.4,-11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AhUFtIgCAAIgPgFIgMgCIgRgJIgBgBIgPgFQghgGgcAQQgFAEgKAEIgCAAIgSABIgBAAIgMgLIgDgCIgJgHIgBAAIgOgDQg7gKgjAUIgVgBQgqgGgpgIIgBgEQgEgGgHgDIgDgDIgKgHIgGgEIgGgBIgygCIgGADIgCABIgEADIgCAAIgGgBIgzgNIgEgFIgEgFIgBgDIgEgCIAAgBIgPgJIgDAAIgWgBIgBgBQgRgLgWgMIgEgDQgHgEgEgFIgGgFIgBAAIgFAAIArgdIAIAAIAMACIACAAIADgBIACgBQAegRAPgcQACgEAFABIABgGIAHgEIAFgFIA8gpIAcgCIACAAIAYgLQAIgKACgQIAagWIAJgGIANgBIALgHQAFgGADgHIAWgNIAOgLIACgCIAJABIAFgRQgCgJgBgKIAAgFQgBgJABgJIAAgCIgCgJQgDgEgFgEIgFgbIgCgKIgDgJIgEgOQADgPgEgNQgBgFgDgFIAAgDIgCAAIgCgBIgFgaIgDgKIgBgEIgBgDIgEgNIAEgUQACgMgDgLIgEgFIAAgIQgBAAgBABQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgDQgBgFgCgCIAAgMIgBgGIAAgHIgCgHIAAgBIAFgCIAHgDIAXgIIAQgCIAIAAIAtgEIA4gEIASgBIAfAAIARABIBHAFIATgIIACAAIAZABIABAAIAXgDIABABIAKAAIARAAIADAAIAOABIARAAIAQABIACAAIAHAAIAGAAIAiACIAGAAIACAAIAtADIABAAIABAAQATALAVAIIABAAIALAFQASAHAUADQAdAFAjgFIAmgGIAkgDIArAEIArAIIAMAMQAGAHAKAIIAJAIIAKAIQADADAFABIAUAHIAJABQAWAFAXAAIgIARIgCABQgOADgMAFIgDAAIgBABIgKALQAAAJADAEIABACIgOAPIgJAPIgHAIIgJgFIgCgBQgQAKgCAUIgBABIACACIgCABIgDACIgOAOIAJAQIABACIABABIAMAXIAAACIAFADIAYAfIAAADIAAACIAGAEIABABIABASIAMAIIABABIADADIAGAEIACADQABADACADIABAAIABAFIAKAaIABACIAFACIABAAIAKAJIAAACQACADAEABIADAEQAIAFAGAHIABACIAFAGQAEAFACAFQAKAIAHANQAEAGADAIIABACQAIAGAHAHIABACQAHAEAFAFIAFAKIAEAFIABAAIAAADIAGAEIAEACIACACIABABIAKAMIAAABIAEAEIADAFIACADIALAWIADADIAZARIAHAaIABACIAHAFIADACIABACIADAEIADACIAFADIAFACIADACIAFAEIACACIACAEIgEACIgHABIgDAAIgHAAQgRAFgMAGIgEACIgdAIIgCAAIgsgBIgCAAIgJAOIAAABIg+ANIgEAAIgkgBIgEABIgWALIgHACIgBAAIgIgDQgJgFgMgCIgFAAQgJAAgHACIgFAHIgGAIIgLADIgnAEIgQgCIgggGIgSAFIgPgBQhXgPhUAHIgKACIgCgBIgJgFIgkgeIgFgBIgtgCIgDADQgbAfgiAYIgWACIgLgPgAmcC7QAFAmBCASQBDATA6AAQA5gBAjgTQAjgUATgVQAUgVgmgPQglgNhCAGQhCAGhQgHIgXgBQg4AAAEAfgABKgOQgDAdA5AiQA4AhAugEQAugDAigYQAigZADgdQADgehKAcQhLAbgkgdQglgegZgDIgGgBQgUAAgDAbgAi4kKQgeAQgVATQgVATgEAcQgDAcA2ABQA0ABBHgSQBHgSAEgWQAEgXgDgMQgEgMhGgMQgdgEgWAAQggAAgRAJg");
	this.shape_7.setTransform(-36.1,-10.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ai8EJQg5AAhCgUQhCgTgDglQgDglBPAIQBPAJBCgGQBCgFAkAOQAlAPgUAUQgUAVgkATQgiASg3AAIgDAAgAChA8Qg3giAEgdQAEgeAZAEQAZAEAkAdQAjAeBLgaQBLgagFAdQgDAdgjAYQgjAXgtADIgIABQgrAAgygfgAiniSQg1gCAEgcQAEgcAWgSQAVgSAfgQQAegQBGANQBEAMADAMQADANgFAWQgEAWhHAQQhAAQgwAAIgLAAg");
	this.shape_8.setTransform(-39.3,-12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AhXFqIgCAAIgOgHIgLgCIgRgIIgBgBIgPgFQghgHgbAPIgPAHIgCAAIgSACIgBAAIgNgLIgDgBIgJgIIAAAAIgOgEQg5gKgkASIgUAAIhSgPIgBgEQgFgFgHgDIgDgEIgJgHIgGgEIgHgCIgxgCIgGADIgCAAIgEADIgDAAIgEAAIgzgOIgEgFIgEgEIgBgEIgDgCIgBgBIgPgJIgCAAIgWgCIgCAAQgQgMgWgNIgDgCQgIgFgDgEIgGgFIgBAAIgFAAIAsgcIAIAAIALACIADAAIADgBIABgBQAfgQAPgbQADgEAFABIABgHIAHgDIAFgFIA8gnIAbgCIACAAIAYgKQAJgKADgOQANgLAMgMIAJgGIAOgBIALgGQAEgHAEgHIALgEIALgHIAOgLIACgCIAJABIAHgQQgCgJABgJIAAgFQgBgIACgKIAAgCIgCgJIgHgIIgEgbQAAgFgCgEIgDgJIgDgOQADgPgEgNQgBgGgCgEIAAgDIgBgBIgCAAQgBgNgDgNIgDgKIAAgDIgCgEIgEgMIAEgVQACgMgCgKIAAgBIgDgEIgBgHQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBgCQgBgFgCgCIAAgNIgBgFIAAgHQgCgDAAgEIAAgBIAFgCIAGgEIAXgJIAPgBIAJgBIAsgDQAbgDAcgBIASAAIAeAAIASABIBGAGIATgHIACAAIAZABIABAAIAWgCIACAAIAKAAIARABIADAAIANAAIAQABIASABIABAAIAHABIAGAAIAjACIAFABIACAAIAtACIABAAIABABQATALAUAGIABAAIAMAHQARAHATADQAdAGAjgEIAmgEQARgDATgBIApAFIArAIIANALQAHAHAJAHIAJAJIAJAIIAIAEIATAIIAJABQAWAFAWABIgEAQIgCABIgaAIIgCAAIgBACIgMAKQAAAHACAFIABABIgOAPQgGAIgCAIIgIAGIgIgDIgCgBQgRAKgDASIAAABIACABIgCABIgDACQgIAGgGAIIAHAQIAAABIABABIAJAXIAAACIAEADIAYAgIAAACIAAACIAFAFIABAAIACASIALAJIABABIACACIAGAFIACADQAAADACADIABAAIABADIALAbIABACIAEADIABAAIAJAJIAAACQABAEAEAAIADAFQAIAFAGAGIABACIAFAGIAGALQAKAHAGANQAEAGADAIIABADQAIAFAFAIIACACIALAJIAFAKIAFAFIAAABIAAACIAGAEIAEADIABACIABAAIAKAMIAAABIAEAFIACAFIACADIALAWIADADIAZARIAFAaIABACIAHAFIADACIAAADIAEADIACACIAGADIAFADIADACIAEAEIACACIACADIgEACIgIABIgDAAIgHAAQgRAEgMAHIgEACIgdAHIgCAAIgrgCIgCABIgJANIAAAAIg+ANIgEAAIgjgCIgFABIgVALIgIACIgBAAIgIgDQgJgFgLgCIgGgBQgIAAgHADIgFAFIgHAIIgKAEIgnADIgPgCIghgGIgSAEIgOgBQhWgQhUAGIgKABIgDAAIgJgFIgigeIgFgBIgsgDIgDADQgcAdgiAXIgWADIgMgOgAmWC0QACAmBCASQBCAUA6AAQA5ABAigTQAkgSAUgWQAUgUglgPQgkgOhCAFQhCAGhPgIIgagCQg0AAADAegABTgLQgEAcA3AiQA3AiAugEQAtgCAkgYQAigYADgdQAFgdhLAbQhLAagjgeQgkgegZgDIgGgBQgTAAgEAbgAilkJQgeAQgWASQgVATgEAbQgFAcA1ACQA0ACBIgRQBGgRAEgWQAGgWgDgMQgEgNhEgMQgegFgXAAQgeAAgRAIg");
	this.shape_9.setTransform(-36.6,-11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AjAEGQg6gBhAgVQhBgTgBglQgDglBPAJQBOAKBBgFQBCgEAkAPQAkAPgVATQgUAVgkASQghARgzAAIgIAAgAChBAQg1gjAFgdQAFgdAZAFQAYAEAiAdQAjAfBLgaQBLgYgFAcQgFAdgjAYQgkAWgtACIgGABQgrAAgygggAieiRQg0gDAFgbQAFgbAWgSQAWgSAfgPQAegPBFANQBEANACAMQADANgGAVQgFAWhHAQQg9AOgvAAIgPgBg");
	this.shape_10.setTransform(-39.1,-13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AFaF0IgggHIgLABIgGACIgPAAQhUgShVAFIgJAAIgCAAQgFgBgFgDIgigfIgEgBIgsgDIgDACQgcAdgiAXIgVACIgNgNIgCAAIgNgHIgLgCIgRgJIgBgBIgOgGQgggHgcAOIgPAHIgDAAIgSACIAAAAIgNgKIgDgCIgIgIIgBAAIgNgEQg5gLgkARIgUAAQgqgHgngJIgCgEQgEgEgHgDIAAAAIgCgEIgJgIIgGgEIgHgCIgxgEIgGADIgBABIgFADIgDAAIgFAAIgxgQIgFgDIgDgFIgBgDIgDgDIgBgBIgOgJIgDgBIgVgCIgCAAIglgZIgEgDQgHgEgDgFIgGgEIgBAAIgEAAIAsgbIAHAAIAMACIADABIADgBIABgBQAfgQAQgaQACgDAFAAIACgGQADgDADgBIAFgFIA9glIAbgDIACAAIAYgIQAJgJAFgOQANgKALgMIAJgHIANgBIALgHQAFgFAEgGIALgEIALgHIAOgMIADgBIAIAAIAHgPIACgQIAAgEIACgSIABgCIgCgJIgGgIIgDgbQAAgFgBgEIgEgJIgCgNQADgQgDgNQgBgFgDgFIABgCIgCgBIgBgBQAAgNgCgMIgDgKIAAgEIgDgDIgCgNIADgUQACgMgCgKIAAgBIgCgFIAAgGQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBgDQAAgEgCgDIABgMIgBgGIAAgGQgCgCAAgFIgBAAIAFgDIAGgEIAVgKIAPgBIAIgBIAtgDIA2gDIASAAIAeABIASAAIBFAHIATgFIADABIAYABIABAAIAWgEIACAAIAJABIARACIADAAIANAAIAQABIASABIACAAIAHABIAFAAIAiACIAGABIACAAIAtAEIABAAIABAAQATAKAUAHIABAAIALAGQARAIATAEQAdAHAhgEIAngDIAjgEIAqAFIAqAJIANALQAHAGAKAGIAIAKIAIAIIAIAFIASAIIAJACQAVAFAXACIgCAOIgCABQgNAEgMAFIgCAAIgBACIgLAJQgCAGABAFIABABIgPAOQgFAJgCAGIgHAHIgIgCIgDgBQgQAJgEASIAAABIABABIgCABIgDAAQgIAGgGAIIAFAQIAAABIABACIAGAVIgBACIAFAEIAWAfIABADIgBACIAFAEIABAAIACASIALAKIABAAIACAEIAFADIACAEQAAACABACIABABIAAAFIAMAZIABADIAEACIABAAIAIAKIAAACQABAEADABIADAEQAIAGAGAHIAAABQACAEAEABIAGAMQAJAHAGANQAEAGADAJIABACQAHAFAFAIIABACIALAJIAGAKIAEAFIAAABIABADIAEAEIAEADIABACIABABIAKALIAAAAIAEAGIACAEIACAEIAKAWIADADIAYARIAFAaIABACIAGAGIADACIABACIADAEIACACIAFACIAGAEIACACIAFAEIABACIABADIgEABIgHABIgEAAIgGAAQgSAFgMAFIgEACIgcAGIgDABIgqgDIgDABIgJANIAAABIg9ALIgFAAIgigCIgEABIgWAKIgIACIgBAAIgIgCQgIgGgMgCIgFgBQgIgBgHACIgGAGIgGAIIgLAEIgmACIgQgBgAmRCuQACAkBBAUQBAAUA5ACQA5ABAjgSQAkgSAVgVQAUgTgkgPQgjgPhCAEQhCAEhOgJQgPgCgNAAQgyAAACAegABcgJQgFAcA2AjQA1AhAugCQAtgDAkgWQAjgXAEgdQAGgchLAYQhMAZgigdQgigegZgEIgGgBQgTAAgFAagAiSkHQgfAPgVASQgWASgFAbQgGAbA1ADQAzACBIgPQBHgQAFgWQAFgVgCgNQgDgMhDgNQgggGgYAAQgbAAgRAIg");
	this.shape_11.setTransform(-37.1,-11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AjFEDQg5gCg/gVQg/gVgBgkQgBglBNALQBOAKBBgDQBCgEAjAPQAjAQgVATQgVAUglARQggAQgwAAIgMAAgAChBDQgzgiAFgdQAHgdAYAFQAYAFAiAdQAgAfBMgYQBMgYgGAdQgGAdgkAWQgkAWgtABIgEAAQgsAAgyghgAiUiQQg0gDAGgbQAGgbAXgRQAWgSAfgOQAfgPBEAOQBCAPADAMQACAMgHAVQgGAWhGAOQg6AMgtAAIgUgBg");
	this.shape_12.setTransform(-39,-13.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AFWF1IgggIIgMABIgGACIgOgBQhUgShUADIgJABIgCgBIgJgEIgigfIgEgBIgrgEIgEACQgcAbgiAWIgVAEIgOgMIgCAAIgLgJIgKgCIgRgIIgBgBIgPgHQgfgIgcANIgPAHIgDAAIgSACIAAAAIgNgJIgDgBIgIgJIgBAAIgMgFQg4gMglAQIgUABIhQgRIgBgEQgFgFgHgDIAAAAIgCgDQgDgEgFgEIgGgEIgHgDIgwgEIgGACIgCAAIgFADIgCAAIgFABIgxgQIgFgEIgDgEIAAgDIgEgDIAAgBIgPgKIgCgBIgVgCIgCAAQgQgMgUgNIgEgDQgHgFgDgFIgGgEIgBAAIgEAAIAtgZIAHgBIAMACIACABIADgBIACAAQAfgPARgZQACgEAFAAIACgGQADgDADAAIAFgFIA9gkIAbgEIACAAIAYgGQAKgJAFgMQANgLALgMIAJgGIANgCIALgGQAFgFAEgFIALgEIAMgGIANgMIADgBIAIAAIAJgPIADgPIABgDIADgRIABgCIgCgJIgFgIQgCgOAAgNQABgGgBgEIgEgJIgCgNQADgPgDgNQAAgFgDgFIABgCIgBgCIgBgBQABgMgCgMIgDgLIAAgDIgDgDIgCgNIAEgUQACgLgCgLIAAAAIgBgFIABgHQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIgBgCQAAgFgBgCIABgMIgCgGIABgHQgDgCAAgEIAAgBIAEgDIAFgEIAUgMIAPgBIAJAAIAsgCIA2gCIASAAIAeABIARABQAiADAjAEIATgEIACAAIAYACIABAAIAWgDIACAAIAJABIAQABIADAAIANAAIARACIASABIABAAIAHAAIAGABIAiADIAFABIACAAIAsAEIABAAIABAAQAUAKAUAGIABAAIALAHQAQAIASAFQAdAHAigCIAmgDQARgCASgBIApAEIAqAKIANAKIARAMIAIAKIAIAJIAHAFIARAIIAJADQAVAFAWACIABAOIgBABIgYAJIgCAAIgBABIgMAJQgDAGABADIAAABIgPAOQgEAJgCAHIgIAHIgHgCIgDgBQgQAJgFARIgBABIABAAIgCAAIgCABQgIAGgHAHIADAQIABACIABABIACAVIgBACIAFADIAVAgIAAADIgBACIAGAEIAAABIADARIALALIABADIAGAEIABACQAAAEABACIABABIgBAEIANAZIABACIAEADIABAAIAGALIAAACQABAEADABIACAEQAIAGAGAGIAAACQACADAEACIAGALQAJAJAFANQAEAFADAIIABADQAGAGAFAHIABACIALAKIAFAKIAEAFIAAAAIABADIAEAEIADAEIACACIAAAAIALAMIAAAAIADAGIACAFIACADIAJAWIADADIAXASIAEAaIABACIAHAFIACADIABACIAFAGIAFACIAGAEIACACIAFAEIAAACIABADIgFABIgHABIgDAAIgGAAQgSAEgMAFIgEACIgcAGIgDAAIgqgDIgDABIgJANIAAAAIg9ALIgFAAIgigDIgEABIgWAJIgIACIgBAAIgHgCQgJgGgLgCIgFgBQgIgBgHACIgGAFIgGAIIgLAEIgmACIgPgBgAmLClQAAAlBAAUQA/AVA5ACQA4ACAkgRQAlgRAVgVQAVgTgjgPQgjgPhCADQhBAEhOgLQgRgCgNAAQgvAAABAcgABlgJQgFAcAzAjQA0AiAugBQAtgCAkgVQAkgXAFgdQAHgchMAXQhMAYghgeQghgegYgEIgGgBQgTAAgGAZgAh+kHQgfAOgXARQgWARgGAcQgGAbA0ADQAzADBIgPQBGgOAGgVQAHgWgCgMQgDgMhCgOQghgHgYAAQgaAAgQAIg");
	this.shape_13.setTransform(-37.6,-12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AjJD/Qg5gDg+gWQg/gVABgkQABgkBMALQBNAMBBgDQBBgCAiAPQAjAQgWATQgVAUglAQQggAOguAAIgOAAgACiBHQgzgjAHgdQAHgcAZAFQAYAFAfAeQAgAfBMgXQBMgXgHAdQgHAcgkAWQglAVgtABIgCAAQgsAAgxgigAiLiPQgzgEAHgaQAHgbAXgRQAWgRAggNQAfgPBDAPQBCAQACALQABAMgHAWQgGAVhHANQg3AKgrAAIgZgBg");
	this.shape_14.setTransform(-38.8,-14.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AFRF1IgggIIgLABIgGABIgPAAQhSgUhUACIgJABIgCgBIgKgDIggggIgEgCIgrgEIgEACQgcAagiAVIgVAEIgOgLIgCAAIgKgKIgLgCIgRgIIgBgBIgNgHQgfgJgdAMIgPAHIgCAAIgSACIgBAAIgNgIIgDgBIgHgJIgBgBIgMgFQg3gNglAPIgTABQgpgIgngKIgCgDQgEgFgHgDIAAAAIgBgDQgDgEgFgEIgHgFIgHgDIgvgFIgGACIgCAAIgFADIgCAAIgGAAIgwgQIgEgDIgDgFIgBgCIgDgEIAAgBIgOgKIgDgBIgVgCIgBAAQgQgNgUgNIgEgDQgGgFgDgFIgGgEIgBAAIgDABIAsgZIAIgBIALADIADAAIADAAIABgBQAfgOASgYQADgEAEAAIACgFQADgDAEgBIAFgEIA9gjIAagEIACAAIAYgFQALgIAGgMQANgKAKgNIAKgFIANgDIALgFIAJgKIALgDIAMgGIANgMIADgBIAIAAIAKgOIAFgOIACgCIAEgRIABgCIgCgJIgEgIQgBgOAAgNQABgGgBgEIgEgIIgBgOQACgOgCgNIgCgLIABgCIgBgBIgBgBQACgNgCgMIgDgKIABgDIgDgDIgBgNIADgUQACgLgBgLIgBgFIABgHQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAgCQAAgFgBgCIABgMIgBgGIAAgHQgDgBAAgEIAAgBIADgEIAGgEIASgNIAPgBIAIAAIAsgCIA2gBIASAAIAdABIASABIBEAJIATgDIADAAIAXACIABAAIAWgEIAAABIAKABIARABIACAAIAOABIAQABIASACIABAAIAHAAIAGABIAhADIAGABIACAAIAsAFIABAAIABAAQATAJAVAHIABAAIAKAHQAQAJASAFQAcAIAhgCIAmgCIAjgCIApAEIAqAKIANAJIARAMIAHAKIAIAJIAHAFIAQAKIAJACQAVAGAWADIAEANIgBAAIgYAKIgCAAIgBABIgMAHQgEAGAAADIAAABIgPANQgFAJgBAHIgHAHIgIgBIgCgBQgQAJgHAQIAAAAIABABIgDgBIgCABQgIAFgHAHIACAQIAAACIABABIgCAUIAAACIAEAEIAUAgIABADIgBACIAFAEIAAAAIADASIAKAKIAAABIABADIAGADIABAEQgBADABACIABABIgBAFIAOAYIAAACIAEADIABAAIAFAMIAAABQABAEACACIACAEQAIAGAGAGIAAACQACADADACQAEAFADAGQAIAJAEANQAFAFADAIIAAADQAGAGAEAIIABACIALAJIAFAKIAEAFIAAABIABADIADAEIADAEIACACIAAAAIALALIAAABIADAGIACAFIACADIAIAXIADADIAWASIADAaIABACIAHAFIACADIABACIAFAGIAFACIAFAEIADACIAEAFIAAABIAAADIgFABIgGAAIgEAAIgGAAQgRAEgNAFIgEACIgcAFIgCABIgqgEIgDABIgJAMIgBAAIg9AKIgEAAIgigDIgEAAIgWAJIgIACIgBAAIgHgCQgIgFgLgDIgGgBQgIgBgGACIgHAEIgGAHIgKAFIgmACIgPgCgAmGCdQgBAkA/AVQA+AWA5ADQA3ACAlgQQAlgRAVgUQAWgSgjgQQgigPhBACQhBAChNgLQgSgDgNAAQgtAAgBAcgABugIQgHAbAzAjQAyAjAtgBQAtgBAlgUQAkgWAHgdQAHgchMAXQhMAWgggfQgfgdgYgFIgHgBQgTAAgGAZgAhrkIQggAOgWARQgXAQgHAbQgHAbAzAEQAzAEBIgOQBHgNAGgVQAHgVgBgMQgCgMhCgPQgigIgZAAQgYAAgPAHg");
	this.shape_15.setTransform(-38,-12.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AjOD8Qg4gEg9gXQg9gVACgkQACgkBLAMQBMANBBgCQBBgBAhAQQAiAQgWASQgWATglAQQgfANgqAAIgUAAgACiBLQgxgkAIgcQAIgcAYAFQAYAGAeAeQAfAfBMgVQBNgWgIAcQgIAcglAVQglAUgtAAIgDAAQgsAAgvgigAiBiNQgzgFAIgbQAIgaAXgQQAXgQAggOQAggNBBAQQBCAQABALQABAMgIAVQgHAVhHAMQg0AJgpAAIgdgBg");
	this.shape_16.setTransform(-38.7,-15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AFLF2IgfgJIgLAAIgGACIgOAAQhSgVhTAAIgKABIgCgBIgJgDIgfgfIgEgDIgrgFIgEACQgdAZgiAUIgUAEIgPgKIgCAAIgIgKIgLgDIgRgHIgBgBIgNgIQgfgJgdALIgOAGIgDAAIgSADIAAAAIgRgJIgGgKIgBAAIgMgGQg2gOglAOIgTABQgpgIgmgLIgCgCQgFgEgGgDIgBAAIAAgEQgDgEgFgEIgHgGIgGgDIgwgGIgGACIgBAAIgFACIgDABIgFAAIgvgQIgFgEIgDgEIAAgCIgDgEIAAgCIgOgJIgCgBIgVgDIgCAAQgPgNgUgOIgEgDQgGgFgDgFIgGgDIgBAAIgCAAIAsgYIAIgBIAMADIACABIADgBIABAAQAfgNATgXQADgEAEgBIACgFQAEgDADAAIAFgFIA9ghIAagFIACAAIAZgDQALgIAHgKQANgKAKgNIAJgGIANgBIALgGIAKgJIALgCIAMgHIANgLIADgCIAIAAIAKgMIAIgOIADgBIAFgRIAAgCIgBgJIgEgIQAAgNABgOQABgGgBgDIgEgJIgBgNQACgOgBgNIgBgLIAAgCIgBgCIAAgBQADgMgCgMIgCgLIAAgCIgCgDIgBgNIADgTQACgLgBgLIAAgFIACgIIgBgCIAAgCIAAgHIACgLIgCgGIAAgHQgDgCAAgEIAAAAIACgFIAGgEIARgOIAPgBIAIAAIArgBIA2AAIASAAIAdABIARABIBEAKIATgCIADAAIAWADIABAAIAVgFIACABIAJABIARABIADAAIANABIAQACIASACIABAAIAHABIAGAAIAhAEIAGABIACAAIArAGIABAAIABAAQAUAIAVAGIAAABIAKAHQAPAJASAGQAbAIAiAAIAlgCIAjgBIApAEIAqAKIANAJIARALIAHAKIAHAKQACADAEACIAQALIAIACQAVAHAWACIAHAMIAAABIgYAKIgCAAIgBABIgNAGIgGAIIAAAAIgPAOQgEAJAAAHIgIAGIgIAAIgCgBQgPAKgIAOIgBAAIABABIgDgCIgCAAQgIAFgHAHQgBAHABAJIgBACIACACIgGATIABACIADAEIATAgIABADIgBACIAFAEIAAAAIADARIAJALIABABIAAACIAGAFIAAADIAAAGIAAAAIAAAFIAIAMIAGAMIAAACIADADIABAAIAFAMIgBACQABAEACACIABAFQAIAFAGAGIABACQABADAEACQAEAFACAGQAIAJADANQAFAGADAIIABACQAFAHADAIIABACIAKAJIAGAKIAEAFIAAAAIABADIACAFIADAEIABACIABABIAKAKIAAABIADAGIACAFIADADIAHAXIACADIAWATIACAaIABABIAGAGIADADIAAACIAGAGIAFACIAFAEIACADIAEAEIAAABIgBADIgFABIgGAAIgEgBIgGABQgRADgNAGIgEABIgcAFIgCAAIgqgFIgCACIgKALIgBABIg8AIIgEAAIgigDIgEAAIgWAIIgIACIgBAAIgIgBQgHgGgLgDIgGgBQgIgBgGABIgGAEIgHAHIgKAFIglABIgQgBgAmBCUQgCAkA+AWQA9AWA4AEQA3AEAlgQQAlgQAWgTQAWgTghgQQgigPhBABQhBABhLgMQgTgDgPAAQgqAAgCAagAB3gIQgIAbAxAkQAwAkAtgBQAtAAAmgUQAkgVAIgcQAIgchMAVQhNAVgegfQgegegYgFIgHgBQgSAAgHAYgAhYkIQggANgXARQgYAQgIAaQgIAaA0AFQAyAFBIgMQBHgNAHgUQAIgVgBgMQgCgMhCgQQgjgIgZAAQgWAAgOAGg");
	this.shape_17.setTransform(-38.5,-13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AjSD4Qg4gFg8gXQg8gWADgkQADgjBLANQBLAOBBgBQBAAAAhAQQAhAQgXASQgWATgmAPQgdAMgpAAIgWgBgAD+ByQgsAAgwgkQgvgkAJgcQAJgbAYAFQAXAGAdAeQAdAfBNgTQBNgVgJAcQgJAcglAUQgkATgqAAIgFAAgAh3iNQgzgFAIgaQAJgaAYgQQAYgQAggMQAggNBAAQQBBASACALQAAAMgJAVQgIAUhHALQgvAHgmAAQgTAAgRgCg");
	this.shape_18.setTransform(-38.6,-16.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AFGF3IgfgJIgLgBIgGACIgOAAQhRgWhTgBIgJAAIgCAAIgJgDIgfggIgDgDIgrgFIgDABQgeAYgiATIgVAFIgPgJIgCAAIgHgMIgKgCIgRgHIgBgBIgNgJQgegKgdAKIgPAGIgDAAQgHACgKABIgBAAIgOgHIgDgBIgGgKIAAAAIgMgHQg0gOgmAMIgTACQgogJgmgLIgCgCQgFgEgHgDIAAAAIAAgEQgCgEgFgEIgHgGIgHgEIgvgGIgGABIgBAAIgFACIgDABIgFABIgvgRIgFgEIgCgEIAAgCIgDgEIAAgCIgOgKIgCgBIgVgDIgCAAQgOgNgUgOIgDgDQgGgFgDgGIgGgDIgBAAIgCABIAtgXIAHgBIAMADIACAAIADAAIACAAQAfgMATgXQADgDAEgCIADgEQADgDAEAAIAEgFIA+gfIAagGIACAAIAYgCQAMgHAIgJQAMgKAKgOIAKgEIAMgDIALgFIAKgJIAMgBIAMgGIANgLIACgCIAIgBIAMgLIAKgNIADAAIAGgRIABgCIgBgIIgDgIQAAgOABgNQACgGgBgEIgEgIIAAgOQACgNgBgNIgBgLIABgCIgBgCIAAgBQAEgNgBgLIgDgLIABgCIgDgCIAAgNIADgUQACgLgBgLIABgFIADgHIgBgDIABgCIAAgHIACgLIgCgGIABgGQgEgCAAgEIAAAAIACgFIAFgFIAQgQIAOAAIAJAAIArAAIA2AAIARABIAdABIARACIBDAKIAUgBIACAAIAVADIABAAIAWgEIABAAIAKABIAQACIADAAIANABIAQACIASACIABAAIAHABIAGABIAhAEIAFABIACAAIArAGIABAAIABAAIApAOIABAAIAKAIQAOAKARAGQAbAJAiABIAlgBIAigBIApADIApALIAOAIIARALIAGALQADAFAEAEIAGAGIAPALIAIADQAUAHAWADIAKALIAAABIgXAKIgCAAIgBABIgNAGIgIAGIAAAAIgQANQgDAKAAAHIgIAGIgHAAIgCAAQgQAJgJAOIgBgBIABAAIgDgCIgBAAQgJAFgHAHQgCAHAAAJIgBABIACACIgJATIAAACIADADIASAhIABADIgBACIAFAEIAAABIADAQIAJALIAAAAIAAADIAGAFIAAAEIgBAGIAAAAIgBAFIAJALIAGAMIABACIACADIABAAIADANIAAACQAAAEACACIABAFQAIAFAGAGIAAACQABADAEACQAEAFADAGQAHAJADANQAFAGADAIIAAACQAFAHADAIIAAACIAKAKIAGAKIAEAFIAAAAIAAADIADAFIACAEIABACIABABIAKAKIAAABIADAGIACAFIACAEIAHAXIACADIAVATIABAaIABABIAGAGIADADIAAACIAFAGIAFACIAFAFIADACIADAFIAAAAIgCADIgFABIgGAAIgDgBIgHAAQgRADgMAGIgEABIgdAFIgCAAIgpgGIgDACIgKALIAAABIg9AHIgEAAIghgEIgEAAIgXAIIgHACIgBAAIgIgCQgHgFgLgEIgFgBQgIgBgGABIgHADIgHAHIgKAFIgkABIgQgBgAl8CMQgDAkA8AWQA9AXA3AFQA3AEAmgPQAlgPAXgTQAWgSgggQQghgQhBAAQhBABhLgOQgUgDgPAAQgoAAgDAZgAB/gHQgIAbAvAkQAvAkAtAAQAtABAlgUQAmgUAJgcQAJgbhNAUQhNATgdgfQgdgegYgGIgHgBQgSAAgIAYgAhFkIQggAMgYAQQgYAQgJAaQgJAaAzAFQAyAGBHgLQBIgLAIgUQAJgVgBgMQgBgLhBgSQgkgJgaAAQgUAAgOAGg");
	this.shape_19.setTransform(-38.9,-13.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AjXD0Qg3gFg7gYQg7gXAEgkQAFgiBKAOQBKAOBAABQBBABAgAQQAgARgXARQgYASglAPQgcALgmAAIgbgCgAD9B2QgtAAgtglQgugkAKgcQAKgaAXAFQAXAFAcAgQAcAfBNgSQBOgUgKAcQgKAcgmATQgkASgoAAIgHgBgAhuiMQgzgGAKgaQAKgZAZgPQAYgQAggMQAggMBAARQBAASABAMQAAALgKAVQgIAUhIAKQgrAGgkAAQgXAAgTgDg");
	this.shape_20.setTransform(-38.4,-16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AFQF6IgPgBIgfgKIgLgBIgGABIgOABQhPgYhUgCIgJAAIgBAAIgKgCIgeghIgDgDIgrgGIgCAAQgeAYgjATIgUAEIgPgIIgCAAIgGgMIgLgDIgRgHIgBgBIgMgJQgdgKgeAJIgPAEIgCABQgIACgKACIAAAAIgSgIIgFgKIgBgBIgLgHQgzgPgnALIgTADQgngKglgMIgDgCIgLgGIgBAAIABgDQgCgFgFgFIgHgGIgGgEIgwgHIgFAAIgBABIgGACIgCABIgGABIgugSIgEgDIgDgEIAAgCIgDgFIABgBIgNgKIgDgCIgVgDIgBgBIgigbIgDgDQgGgFgCgFIgHgEIgBAAIgBABIAtgWIAHgBIAMADIACABIADAAIACgBQAfgLAUgVQADgDAEgDIADgDQAEgEADABIAEgFIA/geIAYgGIAbgBQAMgGAKgJQAMgJAJgNIAKgFIAMgEIAMgEIAKgJIALAAIANgGIANgLIACgBIAIgCIANgKIAMgMIADAAIAHgPIABgDIgBgIIgCgIQAAgOADgNQACgGgBgEIgEgIIAAgNQACgNAAgOIgBgKIABgCIgBgDIABgBQAEgMAAgLIgDgLIABgDIgDgCIAAgMIADgUQADgKAAgMIABgFIADgHIAAgDIABgCIABgHIADgLIgDgGIAAgGQgDgBAAgEIAAgBQACgDgBgCIAFgFIAOgRIAPgBIAIABIArAAIA2ABIARABIAcACIARACIBDALIASAAIACAAIAXADIABAAIAVgEIABAAIAKABIAQACIADAAIANABIAQADIASADIABAAIAHAAIAFABIAhAEIAGACIACAAIArAGIABAAIABAAIAoAOIABAAIAJAIQAOAKASAHQAaAKAhABIAlAAIAiAAIApADIAoAMIAOAHIASAJIAGAMIAFAKIAGAFIAOANIAIADQAUAHAWAEQAFAFAHAEIABACIgWAKIgCABIgBABIgOADIgJAGIgBAAIgQAMQgDAKABAHIgIAGIgHABIgCAAQgQAJgKAMIgBAAIgCgDIgBAAQgJAEgHAHQgDAHgCAJIAAABIACACIgNASIAAACIAEAEIAQAiIABACIgCABIAGAFIAAABIADAQIAIALIAAABIAAACIAGAGIgBADIgBAGIAAABIgCAEIAJALIAHAMIAAABIADAEIABAAIACAOIAAACIABAGIAAAFQAIAFAHAHIAAABQABAEADABQAEAFADAGQAHAJACANQAFAGADAIIABACQADAIACAIIAAACIALAKIAGAJIAEAFIAAABIAAADIACAFIACAEIAAACIABABIAKAJIAAACIAEAGIABAFIACAEIAHAXIABADIAVAUIAAAZIABACIAGAGIACADIAAACIAEADIACADIAFACIAEAFIADACIADAFIAAABIgEABIgEABIgHAAIgCgBIgHABQgRACgMAGIgFAAIgcAFIgCAAIgpgGIgDABIgKALIAAABIg9AGIgDAAIglgEIgXAHIgHACIgBAAIgIgBQgHgGgLgEIgFgBIgOgBIgHAEIgGAGIgKAGIglAAgAl2CFQgFAjA7AXQA7AYA3AFQA3AGAmgPQAlgPAYgRQAXgSgggRQgggQhAgBQhBAAhKgPQgVgEgQAAQgmAAgDAZgACIgGQgKAbAuAkQAuAlAsAAQAsACAngSQAmgUAKgcQAKgchOAUQhNATgcggQgbgfgYgFIgHgBQgSAAgIAWgAgykHQghALgYAQQgZAPgKAZQgJAaAyAHQAyAFBHgJQBIgKAIgUQAKgUAAgMQgBgMhAgSQgmgKgZAAQgTAAgNAGg");
	this.shape_21.setTransform(-39.3,-14.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AjbDxQg3gGg6gZQg6gYAGgjQAGgiBJAPQBJAQBBABQBAACAfARQAfARgXAQQgYASgnAOQgaAKgiAAQgPAAgRgCgAD8B7QgtgBgsglQgsglALgbQALgaAXAFQAXAGAaAgQAbAfBOgRQBOgSgMAcQgKAbgnATQgjAPgnAAIgJAAgAhkiKQgygHALgaQAKgZAZgOQAZgPAhgMQAggMA/ATQA/ASAAAMQAAAMgKATQgJAUhJAJQgnAFgiAAQgaAAgVgDg");
	this.shape_22.setTransform(-38.3,-17.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AFKF7IgPgBIgegKIgLgCIgGABIgOABQhOgZhTgDIgJgBIgCAAQgFAAgFgCIgcghIgDgDIgpgGIgEAAQgfAWgjASIgTAGIgRgHIgCAAIgEgPIgKgCIgRgHIgBgBIgMgJQgdgMgdAIIgPAFIgDABQgHACgKABIgSgGIgGgLIAAgBIgLgIQgygPgnAJIgTADQgngKgkgLIgDgCIgMgGIgBAAIABgEQgBgGgFgEIgGgGIgHgFIgugHIgHAAIgBAAIgFACIgDABIgFABIgtgSIgFgDIgBgEIgBgCIgDgFIABgCIgPgLIgVgEIgCAAIgggcIgEgDQgGgGgCgFIgFgCIgBAAIgCAAIAugUIAGgDIAMAEIADABIACAAIACAAQAggLAUgUIAHgGIADgEQAEgDADABIAFgFIA+gcIAZgHIAaABQANgGALgHQAMgKAIgNIAKgFIANgDIALgFIAKgIIAMABIANgFIAMgMIADgBIAHgCIAPgJIAOgLIAEABIAIgQIABgCIgBgJIgBgIQAAgNAEgNQACgGgBgDIgEgJIABgNIACgbIAAgKIABgCIgBgDIABgBQAGgMAAgLQAAgGgCgFIABgCIgEgCIAAgNIAEgTIACgVIAAgBIACgFIAEgHIABgDIAAgCQACgEAAgDIACgLIgCgGIABgGQgEgBABgEIgBgBQABgDAAgCIADgGIAPgSIANAAIAJABIArAAIA1ACIARABIAcACIARACIBBALIATACIACABIAXADIAAAAIAVgFIADAAIAJACIAPACIAEAAIAMABIAQADIASADIABAAIAHABIAFAAIAhAFIAGACIACAAIAqAHIABAAIABAAIApAMIAAABIAKAIQANALARAHQAaALAgADQASABATgBIAigBIApAEIAoAMIAOAHIASAJIAFAMIAGAKIAEAGIAPANIAHADQAUAIAUAEIAQAJIACAAIgWALIgCABIgBABIgOADIgLAEIgCAAIgPANQgEAJADAHIgIAGIgHACIgDAAQgPAJgLALIgBgBIAAAAIgDgDIgBgBQgJAEgHAHQgEAGgCAKIgBABIABACIgPARIAAACIADAEIAPAiIABADIgBABQABACADACIABABIAEAPIAHANIAAAAIAAADIAEAFIAAAEIgCAGIAAABIgCAEIAKAKIAHAMIAAACQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIABAAIAAAPIAAACIAAAHIABAFQAIAFAHAGIgBACQABADAEABIAHALQAGAKACANQAFAGADAIIABACQACAHABAJIABACIAKAKIAGAJIAEAFIAAABIAAADIABAFIADAFIAAADIAKAJIAAABIADAHIACAFIACAEIAFAXIACADIAUAUIAAAaIABABIAFAGIACADIAAACIAFAGIAFACIAFAFIACADIADAFIgBAAIgDACIgFABIgHgBIgCAAIgHAAQgRACgNAFIgDABIgdAEIgCAAIgogHIgDACIgLALIgBAAQgdADgdACIgFAAIgkgFIgXAHIgHACIgBAAIgIgBQgHgGgKgEIgGgCIgNAAIgHACIgIAHIgJAFIglAAgAlxB9QgHAjA7AYQA6AYA3AGQA2AHAmgPQAmgNAZgSQAXgRgfgRQgfgRhBgBQhAgChJgPQgXgFgQAAQgkAAgEAYgACQgEQgKAaAsAlQAsAkAtACQArACAogSQAngTAKgbQAMgbhPASQhNARgbggQgbgegWgHIgIgBQgRAAgKAXgAgfkHQgiALgYAPQgZAPgLAZQgKAZAyAHQAxAHBHgJQBJgIAIgUQALgUAAgMQAAgLhAgTQgmgLgaAAQgSAAgMAFg");
	this.shape_23.setTransform(-39.8,-15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AjgDtQg2gHg5gZQg5gZAHgiQAHgjBJARQBIAQBAADQBAADAfARQAeARgYAQQgYASgnANQgaAJggAAQgQAAgTgDgAD6CAQgsgCgrglQgqgmALgaQANgbAWAGQAXAHAZAfQAaAgBOgQQBOgQgMAbQgMAagnASQgjAPglAAIgMAAgAhbiJQgxgIALgZQAMgZAZgOQAZgOAigLQAhgMA9AUQA/ATgBALQAAAMgLAUQgKAThJAIQgjADgeAAQgeAAgZgDg");
	this.shape_24.setTransform(-38.2,-18.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AGtF9IgJgBQgGgGgKgEIgFgCIgOgBIgHACIgIAGIgJAGIgkgBIgOgBIgfgKIgLgDIgGABIgOABQhNgZhSgFIgKgBIgCAAQgEAAgFgBIgbgiIgDgDIgpgIIgEAAQgfAWgjAQIgTAHIgRgGIgCAAIgDgPIgbgJIgCgBIgLgLQgcgMgeAHIgPAFIgCAAQgIADgKABIgSgFIgFgMIAAAAIgLgJQgxgRgnAJIgTADQgmgKgkgMIgDgCIgMgFIgBAAIACgFQgBgFgFgEIgHgHIgHgFIgugIIgGAAIgBAAIgFACIgDABIgFABIgsgTIgGgDIgBgEIgBgCIgCgEIABgDIgPgLIgVgEIgBAAQgOgOgTgPIgCgDQgHgGgBgGIgGgBIgBAAIgBAAIAtgTIAIgDIALAEIADABIADAAIABAAQAggKAVgTIAHgGIADgEQAEgDAEABIAEgEIA+gbIAZgIIACAAIAZADQANgGAMgGQAMgIAIgPIAJgFIAYgIIALgGIAMABIANgFQAHgFAFgHIADgBIAHgCIAQgIIAQgKIAFACIAJgQIAAgCIAAgJIgBgIQABgNAFgNQACgHgBgCIgEgJIABgNIADgaIABgLIAAgCIAAgDIABgBQAHgMAAgLQAAgFgCgFIABgCIgEgCIACgNIADgTIACgVIAAgBIADgFIAEgHIACgDIAAgCIAEgHIACgLIgCgFIABgHQgFAAAAgEIAAgBQABgEgBgCIAEgGIAMgTIAPAAIAHAAIAqACQAbAAAaACIASACIAbACIARABIBBANIATADIADAAIAVAFIABAAIAVgGIACAAIAJACIAQACIADAAIANACIAQACIARAEIABAAIAHABIAFAAIAhAGIAGABIACAAIApAIIACAAIABAAIAoAMIABAAIAJAJQANALAQAIQAZAMAhADQASACASgBIAiAAIAoAEIApAMIAOAGIARAIQAEAGACAHIAEAKIAGAGQAFAHAHAHIAHAEQAUAIAVAEIATAIIACABIgWALIgCABIgBABIgOACIgOADIAAAAIgRAMQgDAKADAGIgIAGIgIACIgCABQgOAJgNAKIgBgBIAAgBIgCgDIgCgCQgJAEgHAGQgFAHgDAJIgBACIABACIgTARIABACIACAEIAPAhIABADIgCACIAEAEIAAAAIAFAQIAGAMIAAABIgBADIAGAFIgBAEIgDAGIAAABIgCAEIAJAKIAIAMIAAABQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAABIABAAIAAAPIAAACIgBAIIAAAFQAJAFAGAGIAAABQAAAEAFABQAEAFACAGQAGAKABANQAGAGACAIIABACQADAHAAAJIAAACIAJAKIAHAKIADAFIABADIABAGQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAAADIAAABIAKAIIAAACIACAHIACAFIADADIAEAYIABADIAUAVIgCAZIABACIAGAGIABADIAAACIAGAGIAFACIAFAFIABADIADAFIgBAAIgEACIgFAAIgGAAIgEgBIgFAAQgSACgNAFIgDABIgcADIgDAAIgogHIgNAMIgBAAIg7AEIgEAAIglgGIgWAHIgHACIgBAAgAlsB1QgHAjA5AYQA4AaA3AHQA2AHAngOQAngNAYgRQAYgQgfgSQgegRhAgDQhAgChIgRQgYgFgRAAQgiAAgFAXgACZgDQgMAaArAlQArAlAsACQAsADAogRQAngSALgbQANgbhPARQhOAPgZgfQgZgfgXgHIgIgBQgRAAgKAWgAgMkHQgiALgZAPQgZAOgMAYQgMAZAyAIQAxAIBHgIQBJgHAJgUQAMgTAAgMQABgLg/gUQgngMgcAAQgPAAgMAEg");
	this.shape_25.setTransform(-40.2,-15.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AjkDpQg3gHg3gaQg4gaAJgiQAIgiBIASQBHARBAAEQBAADAeASQAdASgZAPQgZARgnAMQgYAIgdAAQgTAAgUgDgAD5CEQgsgDgpglQgpgmAMgaQAOgbAWAHQAWAHAYAgQAYAgBPgPQBPgPgOAbQgMAagoARQgiAOgjAAIgPgBgAhRiJQgygIANgZQANgYAagOQAZgOAigKQAggLA+AUQA9AVAAALQgBAMgMATQgLAThIAGQggADgZAAQgkAAgbgFg");
	this.shape_26.setTransform(-38,-19.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AGmF/IgIgBQgGgGgLgFIgFgBIgNgBIgIABIgHAGIgJAGIgkgCIgOAAIgpgPIgGABIgOACQhMgbhSgGIgJgBIgCAAQgFAAgFgBIgagiIgDgDIgpgIIgDgBQggAUgjARIgTAGIgSgEIgCAAIgBgRIgbgJIgBgBIgLgKQgcgNgfAFIgNAEIgEACQgGACgLACIgTgGIgDgLIAAgBIgKgJQgxgSgnAIQgKABgJADQgmgLgjgMIgEgCIgMgFIAAAAIABgEQgBgGgEgFIgHgGIgHgGIgtgJIgHgBIgBAAIgFACIgDABIgFACIgrgUIgGgCIgBgEIAAgCIgCgFIABgCIgOgLIgCgCIgUgDIgBAAQgOgOgSgQIgDgDQgGgGgBgFIgFgCIgCAAIAAAAIAtgRIAHgEIAMAFIADAAIACABIACAAQAggKAWgSIAHgGIADgDQAEgEAEACIAEgFIBXgiIACAAIAZAFIAagKQAMgJAHgPIAigMIALgGIANABIAMgDIANgNIAZgLIAUgJIAFAEIAKgPIABgCIgBgJIAAgIQACgOAFgNQADgGgBgDQgBgFgDgDIABgOIADgZIACgMIABgCIAAgCIABgCQAIgMAAgLQAAgFgCgFIACgBIgFgCIACgNIADgTIADgVIAAAAIADgGIAGgHIACgDIAAgCIAEgHIADgKIgCgGIAAgHQgEAAAAgEIAAAAQABgEgCgDIAEgHIALgUIANAAIAJABIAqACIA1AEIARABIAbACIAQADIBBAMIATAEIACACIAWAEIABAAIAUgGIACAAIAJACIAQADIACAAIAOABIAPADIARAEIABAAIAHABIAGAAIAgAGIAGACIACAAIApAJIABAAIABAAIAqAKIAAAAIAJAKQAMALAQAJQAZANAgADQARACATAAIAiAAIAoAEIAoANIAOAGIASAHIAFANIAEAKIAFAHIALAPQADACAFABQATAJAUAFQALAEALACIACABIgUAMIgCABIgCABIgOABIgPABIgCAAIgQAMQgDAKADAHIgIAFIgGADIgDABIgcASIgBgCIAAgBIgDgDIgBgCQgKADgGAGQgHAGgEAKIgBACIACADIgYAPIABACIADAEIAOAjIAAACIgBABQABADACACIAAABIAMAbIAAABIgCAEIAFAEIgBAFIgEAFIAAABIgCAFIAKAJIAHALIAAACIACAEIABAAIgCAQIAAACIgBAIIgBAEQAJAFAHAHIgBACQAAADAFAAQAEAFADAGQAEALABANQAFAGADAHIABADQACAIAAAIIAAADIAJAKIAHAJIADAFIAAAAIAAAEIAAAFIACAGIAAACIAAAAIAKAIIAAACIADAHIABAGIADADIADAYIABAEIAUAVIgDAZIABACIAGAFIAAAEIABACIADADIACADIAFACIAFAFIABAEIADAEIgCAAIgEABIgFABIgHgBIgCgBIgHABQgRACgNAEIgDAAIgdADIgCAAIgogIIgOANIgBAAIg6ADIgEAAIglgHIgWAGIgHACIgBAAgAlnBtQgJAiA4AZQA4AaA2AIQA2AIAngNQAmgMAagRQAZgPgegSQgegSg/gEQhAgDhIgSQgZgGgRAAQghAAgFAXgACigDQgNAaApAlQApAmAsADQArAEApgRQAogRANgaQANgbhPAPQhPAPgYghQgXgegXgIIgIgBQgRAAgKAVgAAFkHQghAKgZAOQgaAOgMAYQgOAZAyAIQAwAIBIgGQBIgGALgUQAMgSABgMQAAgLg9gVQgogNgcAAQgPAAgMAEg");
	this.shape_27.setTransform(-40.6,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:-34.7,y:-8.7}},{t:this.shape,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:-39.9,y:-9.1}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.906,scaleY:0.947,skewX:28.1,skewY:11.7,x:-29.2,y:-15.8}},{t:this.shape,p:{scaleX:0.906,scaleY:0.947,skewX:28.1,skewY:11.7,x:-33.7,y:-17.1}}]},1).wait(1));

	// Fragments1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AhWBIQgkgVAAgeQAAgcAzghQAzghA4gFQA6gFAPAmQAPAmgBAbQgBAcg/gMQg+gMgXAjQgPAVgTAAQgMAAgOgIg");
	this.shape_28.setTransform(-103,-22.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgQEwQgFgDgIgGIguAAIgEgHIgKgFIgBgCIgWgLIgDgLIgSgOIgPAAQgSgMgZABIgDgHQgcgVgsAEIgCAAIgJgIIgBAAIgUgRQACgQgBgSIgBgDIgHgHIAAgPQgIgJgIgJIgOgVQAJgVgEgZIgBgEIgNgOIgYAAIADgTIAEgJIAxgnIADgBIAGgOQAHgPAJgNQAQgXAWgRIAegWQB/gsB4guQAmgPAfgUIAcgHIA0gMQAmgIAogHIAEAJIgFAJQAAAKAFAHQACACABAHIAOALIgCAMQAGAKAJAIIgCgEIACACIADACIABAEIgEgEIAKAcIAAALQABAGAAAGIAPAVIADAHIAAABIATA4IgBAFIADAHIAAALIAHAEIANAmIgCAEQAAAGAGADIAGATIgIACIgHAIIAAAXIgYASIgeAFQgGADgDADIgMAQIAAANIgvAkIgYADIgQAKIgHAMIgBANIgvAkQgPABgLAEIgFAGQgFADgCAJIgCAIIgqAgIgcABIgKAKQgFAFgDAJIAAALIAAAAQgMAAgNgGgACNirQg6AGgzAhQgyAhAAAdQAAAeAjAUQAkAVAYghQAXgjA/AMQBAAMAAgdQABgbgOgnQgOghgvAAIgMAAgAEVj7IAEADIgCACgAEAkxIgBgDIAIgBIABAAIgEAIg");
	this.shape_29.setTransform(-113.4,-13.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AhUBJQgjgTgBgeQgBgcAygiQAxgiA4gGQA4gHAQAlQAPAlAAAbQgBAcg+gKQg9gKgWAiQgOAWgUAAQgMAAgNgHg");
	this.shape_30.setTransform(-105.1,-21.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AAGEyIgJgCIgGgCQgGgCgHgGIgEAAIgMAAIgeABIgEgGIgFgDIgFgCIgBgCIgKgFIgLgFIgEgKIgSgOIgOAAIgHgEQgQgHgUABIgDgFIAAgBIgEgDQgcgRgnAFIgCAAIgIgGIgBgBIgCAAIgSgPIgCgCQADgOgCgQIAAgBIAAgCIgBgDIgHgHIAAgHIAAgHIgHgIIgKgKIgEgFIgJgQQAEgLABgNIgBgEIgBgRIgBgDIgNgMIgBgBIgQgBIgGgBIAEgTIADgJIAdgXIADgCIALgJIAFgEQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAGgNIAFgMQAFgJAGgIQALgRAQgOIAJgIIAWgRIAHgFQB8gvB0gwIAFgCQAigQAcgTIALgDIAPgEIAPgEIAkgJIATgFIA5gMIAEAIIgDAIIAAADQAAAFACAEIADAEIACAGIAAADIAKAIIAEAEIAAACIgBAIIAEAGIAIAKIADACIAFALIAGARIAAAIIAAACIABAIIAAAEIADAFIAMAPIACADIABAFIABAAIAAABIASAyIABAEIAAABIgBAEIABACIADAEIgBAJIAAACIAHAFIALAeIABAFIABACIgBADIAAADQACAEAEADIAEALIACAHIgIABIgCADIgEAFIAAAYIgXASIgZAEIgFABIgEADIgEAEIgKAOIgBACIAAAJIAAADIguAlIgYADIgPALIgHAMIAAACIgBAKIgBABIgsAkIgGABQgKABgJAEIgGAFQgCADgCAGIgCAEIgBAHIgDACIgHAGIgeAZIgcADIgKAIIgEAGIgEAIIAAAFIAAAGIAAABIgDAAIgFgBgACHipQg5AHgxAiQgxAiABAdQABAdAiATQAkATAXghQAWgjA+AKQA+AKABgcQAAgbgPglQgNgggrAAIgQABg");
	this.shape_31.setTransform(-115.2,-12.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AhRBKQgjgSgBgdQgBgbAwgjQAvgjA2gIQA4gIAQAkQAQAkAAAaQAAAbg9gIQg8gIgWAjQgOAXgUAAQgLAAgMgHg");
	this.shape_32.setTransform(-107.3,-20.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AADEvIgFgCQgGgCgHgFIgEAAIgMAAIgdACIgEgGIgFgCIgFgCIgBgCIgKgEIgLgFIgFgKIgRgNIgIgBIgGABIgHgEQgQgGgUACIgDgFIAAgBIgEgDQgbgQgnAGIgCAAIgIgGIgBgBIgBAAIgTgNIgBgCQACgOgDgQIAAgBIAAgCIgBgDIgCgCIgEgFIgBgHIAAgHIgIgHIgJgKIgEgFIgJgQQAEgLAAgMIAAgFIgDgQIgBgDIgNgKIgBgBIgPgCIgGgBIAFgTIADgJIAcgYIADgBIAKgKIAFgEIACgBIAFgOIAFgLIAKgRQALgRAPgOIAJgIIAVgRIAHgGQB4gyBxgyIAFgCQAhgQAbgUIAKgDIAPgFIAPgEIAjgKIASgFIA4gNIAEAHIgDAHIAAADIADAIIACAEQACABAAAEIABAEIAJAIIAEADIAAACIAAAJIAEAFIAIAKIADACIAFALIAGAQIABAIIAAACIABAIIAAAEIADAFIANAPIACAHIABAAIAAABIAAAAIATAxIABAEIAAABIgBAEIABABIADAFIgBAIIAAACIAIAFIALAdIABAFIABACIgBADIAAADQACAEAEACIAEALIACAIIgHACIgHAHIAAAXIgWATIgYAEIgFABIgEAEIgDADIgKAOIgBACIAAAJIAAAEIgsAlIgXAEIgPAKIgGANIAAACIgBAKIgCABIgqAkIgFABQgKACgJAEIgFAFQgDADgCAFIgCAEIgBAIIgCACIgGAFIgeAaIgQADIgLAAIgJAJIgEAFIgFAIIAAAFIABAGIgBABIgIAAIgIgBgACBimQg3AIgwAjQgvAjABAcQABAdAjASQAjASAWgiQAVgjA9AIQA9AIAAgbQAAgbgQgkQgMgdgnAAQgKAAgKABg");
	this.shape_33.setTransform(-117,-12);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AhOBLQgjgQgCgcQgCgcAvgjQAugkA1gKQA2gKAQAjQAQAjABAaQABAbg8gGQg7gGgVAjQgNAXgVAAQgKAAgLgGg");
	this.shape_34.setTransform(-109.4,-20);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AAKEtIgGgBQgFgCgIgEIgEAAIgLAAIgdACIgFgFIgEgBIgFgDIAAgCIgKgDIgCgBIgJgEIgGgIIgRgOIgIAAIgFAAIgHgCQgRgHgSADIgEgEIAAgBIgEgDQgbgPgmAHIgBAAIgBAAIgIgGIAAAAIgDAAIgSgNIgCgCQACgOgCgPIgBgBIAAgCIgBgDIgBgCIgFgFIgBgHIgBgGIgHgIIgKgJIgEgFIgIgQQADgLAAgMIgBgFIgDgPIgBgCIgNgJIgBgBIgNgDIgGgCIAAAAIAEgSIAEgJIAbgZIACgCIAKgJIAEgEQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAFgOIAFgLQAEgJAFgIQALgRAPgNIAJgIIATgSIAHgFQB1g1Btg0IAEgDQAhgQAagUIAJgEIAPgFIAOgFIAigKIASgGIA2gPIAEAGIgBAGIAAADIADAIIACAEIABAFIABADIAJAIIAFAEIAAACIAAAIIAEAFIAHAJIADADIAGAKIAHAQIABAHIAAACIABAJIAAAEIACAEIAOAPIABACIACAFIAAAAIAAABIAUAwIAAAEIAAAEIABACIADAEIgBAIIABADIADABIAEADIAMAcIABAFIABACIgBAEIABACQABAEAEACIAEALIABAHIgHADIgFAHIAAAXIgWASIgXAFIgFACIgDADIgEAEIgJAOIgBACIAAAJIAAADIgqAmIgXAEIgNALIgHAMIAAAMIgrAmIgEABQgLACgIAEIgFAFIgFAIIgCAEIgBAIIgCACIgGAFIgcAbIgPADIgLABIgJAIIgEAFIgFAJIAAAFIAAAFIAAABIgHABIgDAAIgEgBgAB7ijQg2AJguAkQguAkACAcQACAcAiARQAjAQAUgiQAVgjA8AGQA8AGAAgbQgCgagQgjQgMgcgkAAQgKAAgMADg");
	this.shape_35.setTransform(-118.8,-11.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AhMBNQgigPgCgcQgCgcAsgjQAtglA0gMQA1gLAQAiQARAhABAaQABAag7gDQg6gEgTAiQgNAYgWAAQgJAAgLgEg");
	this.shape_36.setTransform(-111.5,-19.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AAQErIgGgBQgGgBgFgEIgEAAIgMAAIgcAEIgFgFIgFgBIgEgDIgBgBIgKgEIgCgBIgJgDIgFgIIgIgHIgJgGIgOABIgHgDQgQgFgSADIgEgEIAAgBIgEgDQgbgOglAJIgCAAIgIgGIgBgBIgCABIgSgMIgBgCQABgOgDgPIAAgBIAAgCIgBgDIgDgCIgEgFIAAgGIgCgGIgIgHIgJgKIgFgEIgHgQQACgMAAgMIgBgEIgEgOIgBgCIgOgHIAAgBIgNgFIgFgBIAAgBIAFgSIADgJIAagZIADgCIAIgKIAEgEIACgCIAFgMIAEgLIAKgRQAKgQAOgOIAIgIIATgSIAHgGQBxg2Bqg3IAEgDQAfgRAZgUIAKgFIAOgFIAOgFIAhgLIARgGIA1gRIAEAFIAAAFIAAACIADAIIABAEIACAGIABADIAJAIIADAEIABACIABAHIAEAEIAGAKIAEADIAGAJIAHAPIABAIIAAACIABAIIABAEIACAFIANAOIAEAGIAAABIAVAvIAAAEIAAABIABADIABACIACAEIgBAIIABACIAEACIADACIAMAcIABAFIABACIAAADIABACQABAEAEACIAEALIABAHIgHADIgFAIIABANIgBAIIgQAPIgEAEIgXAGIgFACIgDADIgEADIgIAPIgBACIABAIIgBAEIgoAmIgXAFIgNALIgBACIgFAKIAAAMIgCABIgmAmIgFABQgKACgIAEIgGAFIgEAIIgBAEIgBAHIgDADIgEAFIgcAbIgOAEIgLACIgJAHIgEAFIgEAIIgBAFIABAGIgBABIgGABIgEABIgDgBgAB1ihQg0ALgtAlQgsAlACAbQACAcAiAPQAjAPAUgiQATgjA7AEQA6AEgBgbQgBgagQgiQgNgZghAAQgLAAgNADg");
	this.shape_37.setTransform(-120.6,-10.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AhJBOQgigOgDgbQgDgbArglQAsglAygNQA0gNARAgQARAhABAZQACAag6gCQg5gCgSAjQgNAZgVAAQgJAAgKgEg");
	this.shape_38.setTransform(-113.6,-18.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AAREpQgGgBgGgEIgFABIgKgBIgcAFIgFgEIgEgBIgFgCIgBgBIgKgEIgBgBIgKgCIgFgIIgIgHIgJgFIgIAAIgFABIgHgCQgQgGgSADIgEgCIAAgBIgFgDQgagOglAKIgBAAIgJgEIAAgBIgCAAIgSgMIgBgCQABgNgDgPIgBgBIAAgBIgCgDIgCgCIgDgFIgBgGIgDgHIgIgGIgJgKIgEgDIgIgRQADgLgCgLIAAgFIgFgNIgCgBIgNgGIAAgBIgMgGIgFgCIAAgBIAGgRIADgJIAZgaIACgBIAIgKIADgFIADgCIAEgMIAEgLIAJgQQAKgRANgOIAIgIIASgSIAHgFQBtg6Bmg5IAFgDQAegSAYgVIAKgEIANgGIANgFIAggMIAQgGIA0gSIAFADIAAAEIAAACIAEAIIABAEIABAGIABADIAIAIIAFADIAAACIACAGIADAFIAHAKIADACIAGAJIAIAPIACAHIAAADIABAIIAAADIADAGIANAMIADAHIABABIAWAuIAAAEIAAAAIAAAEIACABIABAEIAAAIIABACIAEACIADACIANAbIABAEIABADIABADIAAACQABAEADACIAFAKIAAAHIAAAAIgGADIgCADIgCAFIABAOIgBAHIgQAPIgEAEIgXAGIgEADIgDADIgDADIgIAPIgBACIABAIIgBADIgmAoIgXAFIgMAMIgBABIgFAKIAAAMIgCABIgkAnIgFABQgKADgIAEIgEAEIgFAJIgBADIgBAHIgCADIgFAFIgZAbIgOAGIgLABIgJAIIgEAEIgEAIIAAAFIAAAGIgBAAIgGADIgFABIgGgBgABvieQgzAMgrAmQgqAmACAbQADAbAhANQAjAOASgiQATgjA6ACQA5ABgCgZQgBgagRghQgMgXgeAAQgMAAgPAEg");
	this.shape_39.setTransform(-122.3,-10.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AhHBPQgigMgDgbQgDgbAqglQApgnAxgOQAzgPARAgQASAfACAaQACAYg5ABQg4AAgRAjQgNAagWAAQgIAAgJgEg");
	this.shape_40.setTransform(-115.7,-17.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgkEmIgEgBIgFgDIgBgBIgJgDIgCgBIgJgCIgOgOIgJgFIgIAAIgFABIgHgCQgPgEgSAEIgEgDIAAgBIgEgDQgbgMgkALIgBAAIgJgFIAAAAIgCAAIgSgKIgBgCQAAgOgDgOIgBgCIAAgBIgBgDIgDgBIgDgFIgBgHIgDgFIgIgHIgKgJIgEgEIgGgQQABgLgBgMIgBgEIgGgMIgCgBIgNgFIgBgBIgKgGIgEgDIAAgBIAFgRIAEgJIAXgZIADgCIAHgLIADgEIACgCIAEgNIAEgKIAIgQQAJgQANgOIAIgIIARgTIAHgFQBpg8Bkg8IAEgDQAdgSAXgVIAJgFIANgGIANgGIAegNIARgHIAygTIAEADIACACIAAACIADAIIABAEIABAFIABADQAEAFAFADIADAEIABACIACAGIAFAEIAFAJIAEADIAHAJIAHAOIACAHIABACIABAIIABAEIACAFIANANIACACIACAEIAAAAIAAABIABAAIAVAsIABAEIAAABIABADIABACIACAEIAAAHIABACIADABIAEADIANAaIAAAFIABACIABADIABACQABADAEACIAEAKIAAAHIgGADIgCADIgCAGIACAOIgCAGIgOAQIgFADIgWAHIgEADIgDADIgDAEIgHAOIgBACIABAIIgBAEIglAnIgVAGIgMAMIgBABIgFALIAAALIgkAoIgFACQgJADgIAEIgFAFIgEAIIgBADIgBAHIgCADIgDAFIgaAcIgMAGIgLACIgJAHIgEAEIgEAIIAAAFIAAAGIgBAAIgFADIgFACIgFAAQgGgBgHgDIgEAAIgLAAIgbAFIgFgCgABpidQgyAOgpAnQgpAmADAbQADAbAhAMQAjAMARgiQARgjA5AAQA5gBgCgZQgCgagSgfQgLgWgcAAQgNAAgQAFg");
	this.shape_41.setTransform(-124.1,-9.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AhEBQQgigLgDgaQgEgaAogmQAogoAwgQQAxgQASAeQASAfACAZQADAYg4ACQg3ACgQAkQgMAagWAAQgIAAgIgDg");
	this.shape_42.setTransform(-117.8,-16.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AgdEmIgEgBIgEgDIgBgBIgKgDIgCAAIgJgCIgNgNIgKgEIgHgBIgGABIgGgBQgQgEgRAEIgEgBIgBgCIgDgDQgbgLgjAMIgBABIgBAAIgIgFIAAAAIgCAAIgTgKIgBgCQABgNgEgOIAAgCIgBgBIgBgCIgDgCIgDgFIgBgHIgDgEIgJgHIgKgJIgEgDIgGgQQACgLgCgMIgBgEIgHgLIgCgBIgOgDIAAgBIgJgIIgEgDIAAgBIAGgQIADgKIAXgZIACgCIAGgLIADgFIACgCIAEgMIADgLIAIgPQAJgQAMgOIAIgJIAQgSIAGgFQBmg/Bhg+IAEgEQAbgSAXgWIAIgFIAMgGIANgGIAegOIAPgHIAxgVIAFACIACABIAAACIAEAHIABAEIABAFIAAADQAEAFAFADIADAEIABACIADAFIAEAEIAGAKIAEADIAHAIIAHANIADAHIAAACIABAIIABAEIADAFIANAMIACACIACAEIAAAAIAAABIABAAIAWArIABAFIAAAAIABADIABABIACAFIAAAHIABACIAEABIADACIANAaIAAAEIACADIABACIABACIAEAGIAFAJIgBAHIgFADIgCADIgBAGIACANIgCAIIgOAOIgFAEIgVAIIgEADIgDADIgCADIgHAPIgBABIABAJIgBADIgjApIgVAGIgLAMIgBABIgFALIABALIgBABIgiAoIgEABQgJADgIAFIgFAFQgCADgCAEIgBAEIgBAHIgBADIgEAFIgYAcIgLAGIgLADIgJAHIgEAEIgEAIIAAAEIgBAGIAAABIgFADIgDADIgGAAQgGgBgGgCIgEAAIgMAAIgaAGIgFgBgABjicQgxAQgoAoQgnAnAEAaQAEAaAgAKQAjALAQghQAQgkA4gCQA3gCgCgaQgDgYgRgfQgMgUgZAAQgNAAgSAGg");
	this.shape_43.setTransform(-125.9,-8.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AhBBSQghgKgFgZQgEgaAmgnQAngpAvgRQAwgSASAdQASAeADAYQADAYg3AEQg1AEgPAkQgMAbgXAAQgHAAgHgCg");
	this.shape_44.setTransform(-120,-16);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgWElIgFAAIgDgDIgBgBIgKgCIgCgBIgJgCIgGgEIgHgHIgKgEIgHgBIgFABIgHAAQgPgEgRAFIgFgBIAAgBIgEgEQgagJgiANIgCABIAAAAIgIgFIgBgBIgBABIgTgKIgBgBQAAgNgEgOIAAgBIgBgCIgCgCIgCgCIgDgEIgBgHIgEgFIgJgGIgKgIIgEgFIgFgPQABgLgDgMIgBgDIgIgLIgBAAIgOgCIgBgBIgIgIIgDgEIAAgBIAGgRIADgIIAWgaIACgCIAGgLIACgFIACgCIADgMIAEgLIAHgQQAJgPALgOIAHgJIAQgTIAGgEQBihBBdhBIAFgDQAagVAVgVIAIgGIAMgGIAMgHIAdgOIAPgIIAvgWIAFABIADgBIAAACIAEAHIABAFIABAEIAAADQAEAFAEADIAEAEIABACIAEAFIAEADIAFAJIAEAFIAHAGIAIAOIADAHIABACIABAHIABAEIACAFIAOAMIABABIACAFIABAAIAAABIAAAAIAYAqIAAAEIAAABIABACIACABIABAFIAAAHIACABIAEABIACADIAOAZIABAEIABACIACADIAAABIAFAGIAFAJIgCAGIAAAAIgFAFIgBACIgBAGIACANIgCAHIgOAQIgEACIgVAJIgDADIgDAEIgCADIgHAPIAAABIABAIIgBADIghAqIgVAHIgLAMIgBABIgEALIAAACIABAJIgBABIghAnIgDADQgJADgHAFIgFAFIgEAHIgBADIgBAHIgBADIgDAGIgXAcIgLAHIgKADIgJAHIgEADIgEAJIAAAEIgBAFIAAABIgFAEIgCAEIgGAAQgFAAgHgCIgEABIgMgBIgZAHIgFgBgABdibQgwARgmApQgmApAFAZQAEAaAgAIQAiAKAPgiQAPgkA3gEQA3gEgDgYQgEgZgRgdQgMgTgXAAQgOAAgSAHg");
	this.shape_45.setTransform(-127.6,-8.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("Ag/BTQghgIgEgZQgFgZAlgoQAkgqAugTQAvgUATAdQASAcAEAYQADAXg2AHQg0AGgOAjQgMAdgYAAIgMgCg");
	this.shape_46.setTransform(-122.1,-15.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgXEjIgBgCIgJgBIgCgBIgJgBIgHgEIgHgHIgKgEIgHgBIgFABIgHABQgOgDgSAFIgEAAIAAgCIgDgDQgbgJghAPIgCABIAAAAIgIgFIgBAAIgBAAIgUgIIAAgCQgBgNgDgOIgBgBIgBgBIgBgCIgDgBIgDgGIgBgGIgEgEIgKgHIgKgIIgEgDIgEgQQAAgLgDgLIAAgEIgJgKIgCAAIgPAAIAAAAIgHgKIgDgFIAAgBIAHgQIADgIIAUgaIADgCIAEgMIADgEIABgDIAEgMIACgKIAHgRQAJgPAKgNIAHgIIAPgUIAGgFQBehEBahDIAEgDQAZgVAVgWIAHgGIALgGIANgHIAbgQIAPgIIAtgXIAFAAIAFgCIAAACIAEAGIAAAFIABAEIAAADQAEAFAEADIAEAEIAAACIAFAEIAFADIAEAJIAFAFIAHAFIAIAOIAEAGIABADIABAGIABAFIACAEIAQAOIACAEIAAABIAZAoIAAAEIAAABIABADIABABIACAEIAAAHIADABIADABIACADIAPAYIAAAFIABABIADADIAAABIAFAFIAFAJIgCAHIgEAEIgCADIAAAFIACAOIgCAHIgOAPIgEAEIgUAJIgDACIgDAEIgCAEIgGANIAAADIABAIIgBADIggApIgUAIIgKANIgBABIgEAKIAAACIABAJIgBABIgfApIgDACQgJAEgGAEIgGAGIgDAGIgBAEIgBAGIgBADIgCAGIgWAdIgKAHIgKAEIgIAHIgFADIgDAIIgBAEIgBAGIAAABIgEAEIgCAEIgFABQgFABgHgCIgEAAIgMAAIgYAIIgGAAIgFAAIgDgDgABXiaQgvATgkArQgkAoAFAZQAEAaAhAHQAhAIAOgiQAOgjA2gHQA2gGgEgYQgEgYgSgdQgLgQgVAAQgPAAgTAHg");
	this.shape_47.setTransform(-129.4,-7.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("Ag8BVQghgHgFgZQgGgYAkgpQAjgrAsgUQAugWATAcQATAbAEAYQAEAWg1AJQgzAIgNAkQgLAdgZAAIgKgBg");
	this.shape_48.setTransform(-124.2,-14.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgQEkIgBgBIgJgBIgCgCIgJgBIgIgCIgGgIIgKgDIgGgBIgGACIgGAAQgPgDgQAGIgFAAIgBgBIgDgDQgagIghAQIgCABIAAAAIgIgFIgBAAIgBABQgKgEgJgEIAAgCQgBgNgFgNIAAgCIgBgBIgCgBIgCgBIgDgGIgCgGIgDgEIgKgGIgKgIIgFgEIgDgPQAAgLgEgLIgBgEIgKgIIgCAAIgOACIgBgBIgFgLIgDgFIAAgBIAGgQIAEgIIAUgbIACgCIAEgLIACgFIABgCIADgMIADgLIAGgQQAIgQAKgNIAHgIIAOgUIAGgEQBahHBXhFIAEgEQAYgVATgWIAHgHIALgHIALgHIAbgQIAPgJIAsgZIAFgBIAFgCIAAABIAEAGIABAEIAAAFIAAADQADAFAFADIAEADIABACIAFAEIAFADIADAJIAGAFIAHAFIAJANIADAGIABADIABAGIABAFIADAEIANALIACACIACADIABAAIAAABIABABIAYAoIABADIAAABIABACIACACIABAEIAAAGIACABIAEABIACADIAQAXIAAAEIABADQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAIAAABIAFAFIAFAJIgDAFIAAABIgEAFIgCACIAAAHIAEAMIgDAHIgNAQIgEADIgUAKIgDACIgCAFIgBADIgGAOIAAACIABAIIgBADIgeAqIgUAJIgKAMIgBABIgDALIAAACIABAJIAAABIgeAoIgDAEQgIADgHAFIgFAFIgDAHIgBADIgBAGIgBADIgCAGIgUAdIgJAJIgKAEIgIAGIgFADIgEAJIAAADIgBAGIAAABIgEAEIgBAGIgEABIgNAAIgEAAIgLAAIgYAIIgGABIgEAAIgEgCgABRiYQguAVgjAqQgiArAFAYQAGAYAfAGQAiAIAMgjQANgjA1gJQA1gIgEgXQgFgYgSgcQgLgPgTAAQgPAAgUAJg");
	this.shape_49.setTransform(-131.1,-6.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("Ag6BWQgggFgGgZQgFgYAhgpQAigsArgWQAtgXATAaQATAaAFAYQAEAWgzALQgzAKgLAjQgLAfgaAAIgJgBg");
	this.shape_50.setTransform(-126.3,-13.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AgJEkIgBgBIgJgBIgCgBIgJgBIgHgCIgHgHIgJgDIgIgBIgFACIgFABQgPgCgRAGIgEABIgBgBIgEgDQgZgIggARIgCABIgIgDIgBgBIgBABQgKgDgJgEIgBgCQgBgMgEgNIgBgCIgBgBIgCgCIgDgBIgCgFIgBgGIgGgEIgKgFIgJgIIgFgEIgDgPQAAgLgEgLIgCgEIgKgHIgDAAIgOADIAAgBIgFgLIgBgFIAAgCIAGgPIAEgJIATgbIABgBIADgMIACgFIABgDIADgLIACgLIAGgQQAIgPAJgOIAGgJIANgSIAGgGQBXhIBUhIIADgEQAYgWASgWIAGgHIALgIIALgHIAZgRIAOgJIArgbIAGgCIAFgDIAAAAIAFAHIAAAEIAAAFIABACQADAGAEACQABABACADIABACIAHADIAEADIAEAJIAEAEIAIAFIAJANIAFAGIAAACIACAHIABAEIACAFIAOAKIACACIACADIABACIAZAmIABAEIACADIACABIABAEIABAGIABABIAEABIADADIAPAWIgBAEIACACQAAABABAAQAAABABAAQAAAAABAAQAAABABAAIAAABIAEAEIAFAJIgDAFIAAABIgEAFIgBADIAAAGIAEAMIgDAHIgLAQIgFAEIgTAKIgDAEIgCAEIgBACIgGAOIAAACIACAIIgCADIgbArIgTAJIgLAOIgDAKIAAACIABAJIgBABIgbApIgDAEQgHADgIAFIgEAFIgEAHIgBADIAAAGIgBAEIgBAGIgTAdIgJAJIgJAEIgJAGIgEADIgEAIIgBAEIAAAGIgBAAIgCAGIAAAGIgFACIgLAAIgFABIgMgBIgYAKIgFABIgFABIgDgDgABLiWQgsAWghAsQgiAqAGAYQAGAYAfAFQAhAGANgjQALgjA0gKQAzgLgEgXQgFgYgTgaQgKgOgSAAQgPAAgVALg");
	this.shape_51.setTransform(-132.9,-6.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("Ag3BXQgfgEgHgXQgGgYAggrQAggsAqgYQArgYAUAZQATAZAGAXQAFAWgzAMQgxAMgLAkQgKAggbAAIgHgBg");
	this.shape_52.setTransform(-128.5,-12.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AijEoIgIgDIAAAAIgCABIgTgHIAAgCQgCgMgEgNIgBgBIgBgCIgCgBIgDgBIgCgFIgCgGIgFgEIgKgFIgKgHIgFgEQAAgIgDgHQgBgLgDgLIgCgDIgMgHIgCABIgOAFIAAgBIgEgNIgCgGIAAgCIAIgPIADgIIASgbIABgCIADgMIABgFIABgDIACgLIACgKIAGgQQAHgQAJgOIAGgIIANgTIAEgFQBVhLBPhKIAEgFQAXgWAQgXIAGgHIAKgIIAKgHIAZgSIAOgKIApgcIAGgDIAHgFIAAAAIAEAGIAAAFIAAAFIABACQADAFAEADQACAAABAEIABACIAHACIAFACIACAKIAGAEIAJAFIAJAMIAEAGIAAACIACAGIABAEIADAGIAPALIADADIABABIAAABIAbAlIAAAEIACACIABACIABAEIABAGIADAAIADABIASAZIAAAEIABACQACACADAAIADAFIAHAJIgFAFIAAAAIgDAGIgBADIABAFIADANIgDAGIgLARIgWAPIgDADIgCAEIgBAEIgFANIAAACIACAHIgCADIgaArIgTAKIgIANIgBABIgDALIAAACIACAIIgBABIgaAqIgCAEQgIAEgHAFIgEAFIgEAGIgBAEQAAACAAADIgBAEIAAAGIgSAdIgIALIgKAEIgIAGIgEADIgEAIIgBADIgBAGIAAABIgCAGIACAHIgGABIgLACIgEAAQgGABgGgCIgYALIgGACIgFACIgCgDIgBgBIgJgBIgBgBIgRgBIgHgHIgJgDIgIgBIgEACIgGACQgPgDgPAHIgGACIgBgBIgCgDQgbgHgfASIgBABgABFiVQgrAYgfAtQghAsAHAXQAGAXAfAEQAhAEALgjQAKgjAzgMQAygNgEgXQgGgXgTgZQgKgNgQAAQgQAAgVAMg");
	this.shape_53.setTransform(-134.6,-5.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("Ag0BZQgggDgHgXQgGgXAegsQAfgtAogaQArgaAUAYQATAYAGAXQAGAWgyAOQgwAOgKAkQgJAhgdAAIgEAAg");
	this.shape_54.setTransform(-130.6,-12.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AiaEsIgIgDIgBABIgUgGIAAgCQgCgMgFgMIgBgCIgBgBIgCgBIgDgBIgEgLIgFgEIgLgEIgKgIIgFgDIgBgPQgCgLgFgLIgBgEIgMgFIgDACIgPAFIAAgBIgCgNIgBgHIAAgCIAHgOIAEgIIAQgcIACgBIABgNIACgFIAAgCIADgMIABgKIAGgQQAGgPAIgOIAGgJIALgUIAGgEICciaIAEgFQAVgWAQgYIAGgIIAJgIIAKgIIAYgSIANgLQATgPAVgOIAFgEIAIgGIAAABIAFAFIAAAFIgBAEIABADQACAFAFACQABABACAEIABABIAIACIAFACIACAKIAGAEIAIAEIAKAMIAEAFIABADIACAGIACAEIABAFIAQALIADADIABABIAbAkIAAAFIADACIABABIABAEIABAFIADABIAEAAIASAZIgBADIACACQACADADAAIAEAEIAFAJIgEAFIAAAAIgEAJIAFASIgOAXIgVAPIgDAEIgCAEIgBAEIgEAOIAAAAIACAIIgCADIgYAsIgSAKIgIAOIgBABIgDAKIAAACIACAIIgBABIgYArIgCAEQgIAEgGAFIgEAFIgEAHIgBACIAAAHIAAADIAAAGIgYApIgKAFIgIAFIgEADIgDAIIgBADIgCAGIAAABIgCAGIADAIIgFACIgLADIgEAAIgMgBIgYALIgGADIgEADIgDgEIgBgBIgIAAIgCgBIgSAAIgFgIIgRgDIgFACIgGACQgOgBgQAIIgEABIgBgBIgEgDQgZgGgfAUIgBABgAA/iWQgqAZgdAuQgfAsAHAYQAHAVAeADQAhADAKgiQAJglAygOQAxgOgFgXQgGgWgUgYQgJgMgPAAQgQAAgWAOg");
	this.shape_55.setTransform(-136.4,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:-113.4,y:-13.1}},{t:this.shape_28,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:-103,y:-22.4}}]}).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_29,p:{scaleX:0.833,scaleY:0.8,skewX:-18,skewY:-29.2,x:-138.5,y:-0.1}},{t:this.shape_28,p:{scaleX:0.833,scaleY:0.8,skewX:-18,skewY:-29.2,x:-133.2,y:-11.3}}]},1).wait(1));

	// Obstacle
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("ACJBgIhggYQgygNghgYIhUhAQgzgoAmgSQAmgTBMAVQBMAWAEAdQAFAdA+A3QA0AvgZAAIgMgBg");
	this.shape_56.setTransform(31.3,-19);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AgJDrIgHgEIgOgGIgqgtQgBgMgDgLIgEgKQgagagjgQIgtgwQgBgKAAgLIACgJIgIgQQgcgTgjgKIgngqIgBgCQgBgGgEgCIgCgmQgIgSgPgHQALgVABgaIAhgpIABAAQABgEAHACIAUgKIAIgNIAAgTIAMgPQAdgBAdgGQAPgDAPgBQA9APA6ATIAZAJIAQAGIADACQAOAIAOAKIAbACQAzAWApAXIAGADIABAAIAAAWIAHAOQAYAYAhADIAWAAQASARANAQQAIALAGALIgJALIAAAaIASgGIgIAwQAKAKAMAFIgDAVIgBAAQghALgIAnQgCAHAAAHQACAHAEAFIgCADQgSAVgYAVIgMABIgEAAQgLAFgJALQgEAGgBAGQgSAMgVAMIgSgCIgWAHIAAAPIgOAHQgOgGgPACIgDAAQgMAGgJAJIgEAHIAAAGIgPAGQgRghgcgYgAjhihQgmASAzAoIBUBBQAhAYAzANIBfAXQAuAKg9g3Qg9g4gFgdQgEgdhNgWQgogLgeAAQgbAAgRAJg");
	this.shape_57.setTransform(39.9,-11.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("ABeBcIg0gOQgXgHgTgJQgWgJgRgOIgjgbIguglQgSgPgGgMQgMgUAXgMQAQgJAZgBQAPAAASADQASADAVAGQAdAJATAKQAcAPADASQAEARAUAZQAOASAYAYQAVAUAIAMQgXAJgRAAQgJAAgHgDg");
	this.shape_58.setTransform(33,-17.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("AAYDxIgJgGIgGgFIgCgBIgFgCQgGgCgGgEIgjgfIgHgHIgBgCIgBgBIgHgVIgFgKIgCgBQgRgOgVgMIgOgIIgHgDIgXgVIgKgKIgOgOIgBgHIAAgBIgBgLIAAgJIgEgHIgDgGIgBgBIgDgCQgNgJgPgFIgJgFIgYgGIgIgJIgXgVIgKgKIgBgCQgBgFgEgCIgFgjQgIgRgPgHQAKgWABgZIAAgBIAWgcIAHgIIADgEIABgBIAAAAQABgEAHABIAPgIIAFgDIAHgOIAAgTIAKgOQAcgEAcgHIALgDIASgDIAWADIAOADIANADIA/ANIADABIAXAHIABAAIADABIAFACIAEABIACABIADACQANAGANAHIADADIACAAIAPABIAKABIAGABIAFACIAsARIABAAIAJAGIAKAEIAIAEIAJADIAGADIABAAIABAUIAFAGIADAHQASASAWAFIALACIAFAAIAFAAIAFgBIAMABIAKAIIAGAFIADAEIAHAIIAFAHIADAEIAGAIIAGAIIgBACIgGAJIABAYIAAABIASgEIgCAXIgCAUIAAADIAFAGIACABQAGAGAIADIAAAIIgBANIgBAAIgIAEQgWAOgFAhQgBAHAAAHIADAFIACAFIAAABIABABIgCADIgJAJIgIAKIgWAXQgFABgFABIgDAAIgBABQgHAEgGAGIgDAFQgEAGgBAGIgMAJIgOALIgLAGIgDAAIgPgCIgIAEIgMAFIABADIgBALIgOAHQgLgFgNACIgEABIgDAAIgLAIIgJAIQgDADgBADIAAABIAAABIgBAEIgOAGQgOgXgTgQgAirixQgZABgQAJQgXAMAMAVQAHAMARAOIAuAnIAjAbQARANAXAJQAUAKAXAGIAyAOQAXAGAhgNQgIgLgVgUQgXgYgPgSQgTgagEgRQgDgRgcgQQgTgKgegJQgUgGgSgDQgQgDgNAAIgFAAg");
	this.shape_59.setTransform(40.9,-9.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("ABcBfIgzgQQgWgHgTgJQgWgKgRgNQgQgMgSgQIgsgmQgQgPgHgMQgLgVAVgMQAPgKAZAAQAQgBASAEQASADAUAGQAcAJATALQAcAPADARQAFASASAYQAMASAXAZQATAUAIANQgVALgSAAQgHAAgHgCg");
	this.shape_60.setTransform(35,-15.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AArDpIgJgFIgGgEIgBAAQgDgCgDgBIgNgEIgjgcIgIgHIgBgCIgBgBIgIgTIgGgIIgBgBQgTgNgVgLIgPgIIgHgDIgMgLIgLgHIgLgKIgNgNIgCgGIgBgCIgCgKIAAgIIgEgGIgEgGIgBgBIgDgBQgNgIgPgGIgJgEQgNgEgMgDIgJgHIgXgTIgLgKIgBgCQgCgFgDgCIgHggIAAgBQgJgPgQgGIAAAAQAJgWADgZIAAgBQAKgQALgNIAHgJIADgFIABAAQABgEAHABIAPgJIADgDIAIgOIAAgFIgBgOIAJgPQAbgGAagJIALgEIARgEIAVACIAOABIALACIA8AGIADABIAWAFIACAAIADABIAFACIAFABIACAAIADACQAMAFANAHIAEACIABAAIAPABIAKAAIAFACIAGABQAXAHAVAHIABAAIAJAFIAKAEIAIADIAJADIAHACIAAAAIADASIAFAFIADAIQATAPAXAGIAKAAIAEAAIAEgBIAFAAIAMAAIALAIIAGAGIADACIAGAJIAFAHIADAFIAHAHIAHAHIgBABIgGAKIADAYIASgDIAAAWIgBAWIAAADIAGAFIACACQAGAGAIADIAAAIIAAAMIgBAAIgHAEQgSAPgEAgQgBAHABAHIAEAFIACAFIAAABIAAABIgCADIgJAKIgHAJIgTAZIgJACIgDAAIAAABQgGAEgFAGIgDAFQgDAGAAAHIgMAJIgNAMIgLAFIgDABIgPgBIgIAEIgJAEIABADIgCALIgOAHQgLgDgMACIgEABIgDABIgJAHIgJAIIgFAHIAAABIAAABIgBAEIgOAFQgPgVgUgNgAiei4QgZABgPAJQgWANAMAUQAHANAQAOIAsAnQASAQAQAMQARANAWAKQAUAKAWAHIAyAOQAWAHAegPQgHgNgUgUQgWgYgMgSQgRgZgFgSQgEgRgbgQQgTgKgdgJQgVgHgRgDQgQgDgOAAIgEAAg");
	this.shape_61.setTransform(41.8,-6.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("ABaBhIgygQQgWgIgSgKQgWgKgQgNQgQgNgRgPIgqgnQgQgPgGgNQgMgVAUgMQAPgKAZAAQAPgBASAEQASADAUAHQAcAIATAMQAbAPAEARQAGASAPAXQALASAUAaQASATAIAOQgTAOgSAAQgHAAgGgCg");
	this.shape_62.setTransform(36.9,-13.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#666666").s().p("AA9DhIgIgDIgGgDIgBgBIgGgBIgNgEIglgZIgIgGIgBgCIgBgBQgFgJgGgIIgFgHIgCgBQgTgMgWgJIgOgIIgHgDIgNgLIgLgFIgMgJIgNgNIgDgGIgBgCIgCgJIgBgHIgFgFIgEgFIgBgBIgDgBQgOgHgPgFIgJgFIgYgGIgKgHIgYgSIgLgJIgBgCQgDgEgDgCIgKgeQgJgOgQgHIgBAAQAKgVACgaIAAgBQAKgPALgOIAGgJIAEgEIAAgBIABAAQABgEAGAAIATgNIAGgOIgBgTIAHgQQAagHAZgLIAKgFIARgFIAUAAIANAAIAJABIA6gBIACAAIAXAEIACAAIADABIAFABIAEABIACABIAEABIAZAKIADACIACAAIAPABIAKgBIAGABIAFABIAsAMIABAAIAJAEIAKADIAIACIAJADIAHABIAFAQIAFAFIADAHIABAAQATAPAWAFIAJgBIAFgBIADAAIAFgCIAMABIALAIIAHAFIACADIAHAJIAFAHIADAEIAHAHIAHAFIgBACIgDAKIAEAXIAAAAIARgBIABAWIACAVIAAADIAFAFIACACQAHAGAHAEIAAAIIABALIAAAAIgGAEQgPARgBAeQAAAIABAHIADAEIACAGIAAAAIAAABIgCADIgJAKIgIALIgPAYQgEABgDACIgDAAIAAABQgEAEgDAHIgDAEQgDAGAAAHIgKAKIgNAMIgMAGIgCAAIgPABIgIAEIgHAEIABADIgCAKIgNAIQgLgCgNACIgDACIgDABIgIAHIgJAJIgFAGIAAACIgBAEIgPAEQgPgTgWgKgAiRi+QgZAAgPALQgUAMAMAVQAGAMAPAPIAqAoQARAQARAMQAPAOAXAKQATAJAWAIIAwAQQAYAIAbgUQgIgOgSgTQgUgagLgRQgQgZgFgSQgEgQgbgQQgSgMgdgIQgUgHgSgDQgQgDgNAAIgEAAg");
	this.shape_63.setTransform(42.8,-4.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("ABYBjIgwgRQgWgJgSgJQgVgLgRgNIgfgdIgogoQgPgPgHgNQgKgVASgMQAOgKAZgBQAQAAARADQASADAUAHQAaAJAUAMQAaAQAFAQQAHATANAWQAJASATAaQAQAUAIAPQgRARgRAAQgHAAgHgDg");
	this.shape_64.setTransform(38.8,-11.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("ABQDfIgJgCIgGgCIgBAAIgFgCIgNgDIgngVIgIgGIgCgCIgBgBQgFgIgGgGIgGgGIgDgBQgTgLgXgIIgOgIIgHgCIgOgKIgKgFIgNgHQgGgHgIgGIgCgGIgBgCIgEgIQgBgDAAgDIgGgFIgEgEIgBAAIgEgBQgOgHgPgEIgJgEQgMgFgNgCIgKgGIgZgRIgMgJIgBgCQgCgEgDgCIgHgPIgGgLIAAAAQgKgNgQgGIgCAAQAKgXAEgZIAAgBQAIgQALgOIAGgJIAEgEIAAgBIABAAQABgEAGgBIAOgJIAEgEIAGgOIAAgFIgBgPIAGgQQAXgJAYgNIAKgFIARgHIATgBIAMgCIAIgBIA2gHIADAAIAXADIABAAIADAAIAFACIAEgBIACABIADABQAOADANAFIADACIACAAIAPACIAKgCIAFAAIAFABIAtAIIABAAIAJAFIAKACIAHABIAKACIAHABIAAAAIAHANIAFAFIADAHIAAAAQAUAOAYAFIAHgCIADgBIADgBIAFgCIANABIALAHIAGAFIAEADIAFAJIAGAIIADAEIAHAFIAIAFIgBACIgCAJIAGAXIAAAAIARAAIADAVIACAVIACADIAFAFIACADIANALIABAHIACAMIgBAAIgEAEQgLAQAAAfQAAAHACAGIACAGIADAEIAAABIAAACIgDADIgIAKIgIAKIgMAaIgFACIgCABIAAABQgDAEgCAGIgDAFQgDAGAAAHIgJAKIgMAOIgLAGIgDAAIgOACIgIAEIgFAEIABADIgCAKIgOAHQgLgBgMADIgDACIgCABIgHAIIgJAJIgFAGIAAACIgCADIgOAEQgSgQgVgIgAiFi/QgZABgOAKQgSAMAKAVQAHANAPAPIAoApIAfAdQARANAVALQATAJAWAJIAvAQQAYAJAYgWQgIgPgQgUQgTgagJgSQgNgXgHgTQgFgQgZgQQgUgMgbgJQgUgHgSgDQgPgDgOAAIgEAAg");
	this.shape_65.setTransform(43.7,-2.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("ABWBlIgvgSQgVgJgSgKQgVgLgQgNQgPgNgQgQIgmgpQgOgPgGgNQgLgVASgMQANgLAZgBQAQAAARADQASADAUAIQAZAJATAMQAaAQAFAQIATApQAHARARAbQAQAUAHAQQgPATgRAAQgGAAgHgDg");
	this.shape_66.setTransform(40.8,-9.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("ABjDdIgKgBIgFAAIgBAAIgFgCIgOgCIgogSIgJgGIgCgBIgBgBQgGgIgHgFIgGgEIgDgBQgTgJgYgIIgNgIIgHgCIgQgJIgKgDIgMgGQgHgIgIgFIgDgFIgBgCIgFgIIgBgFIgHgEIgEgEIgBAAIgEAAQgPgGgPgEIgJgEQgNgEgMgCIgKgFIgbgRIgMgIIgBgCQgCgEgEgCIgIgPIgHgIIAAgBQgLgLgQgFIgCgBQAKgWAEgZIAAgBQAHgRALgPIAGgJIAEgDIABgBIAAAAQABgFAHgBIANgKIADgEIAGgPIAAgFIgBgOIAEgQQAWgMAWgPIAJgGIARgHIATgDIAMgEIAFgCIA0gOIACgBIAXACIABAAIADABIAGABIADgBIACABIAEABIAcAFIADADIACAAIAOABIAJgCIAGAAIAEAAIAtAFIABAAIAKAFIAKACIAGAAIALAAIAGABIABAAIAIALIAGAEIACAHIABAAQAUANAYAFIAHgDIACgCIADgBIAFgCIAMABIAMAHIAGAFIAFACIAEAJIAGAIIADAEIAHAFIAJAEIAAACIgBAJIAHAWIAAAAIARABIAEAVIAFAVIABADIAFAFIACACIANAMIABAIIADALIgDAEQgIARACAeQABAHACAHIACAFIADAFIAAAAIAAACIgDADIgIAKIgIALQgFAOgEAMIgDADIgCABIAAABIgDAKIgCAFQgCAGAAAHIgIALIgLAOIgMAGIgDAAIgNAEIgIAEIgDAEIACACIgEAKIgNAIQgLAAgMADIgCADIgCABQgEAEgCAEIgJAJIgGAGIAAACIgCACIgOAFQgTgPgVgFgAh4i/QgaAAgNALQgRAMALAVQAGAOAOAOIAmAqQAPAQAQANQAPAOAWALQATAKAUAIIAvASQAYAKAUgaQgHgQgPgTQgSgbgGgSIgTgpQgFgRgZgPQgUgNgZgJQgUgHgTgDQgOgDgOAAIgEAAg");
	this.shape_67.setTransform(44.7,-1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("ABVBoIgvgUQgUgJgSgKQgVgMgPgNQgPgNgPgQIgkgqQgNgPgGgOQgKgVAPgMQANgMAZAAQAQgBARAEQASADATAIQAZAJATANQAaAQAFAQIASAoQAFASAQAbQANAUAHAQQgNAWgQAAQgGAAgGgCg");
	this.shape_68.setTransform(42.7,-8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#666666").s().p("AByDbIgKAAIgFABIgBAAIgFgBIgNgBIgqgPIgKgFIgCgCIgBgBQgHgGgIgEIgHgEIgCAAQgUgIgYgGIgOgIIgHgCIgPgJIgLgBIgNgGQgGgHgJgFIgDgFIgCgCIgFgGIgDgFIgGgDIgFgDIgBAAIgEAAIgegJIgKgEQgMgEgNgCIgLgEIgbgPIgMgIIgCgCQgCgEgEgCIgJgOIgIgGIAAgBQgMgLgRgEIgCgBQAKgWAFgZIAAgBQAGgRALgPIAGgKIAEgDIAAgBIABAAQACgEAFgCIANgLIADgEIAGgPIAAgFIgCgOIADgRQAVgOAUgRIAJgGIAQgIIATgGQAGgBAEgDIAEgEIAwgVIADgBIAXABIABAAIADAAIAGACIADgCIACAAIADABIAcAEIAEACIACABIAPABIAJgDIAFgBIAEgBIAuADIABAAIAJAFIAKABIAHgBIAKAAIAHAAIAAAAIAKAJIAGADIADAHIAAAAQAWANAYAEIAFgEIACgCIACgCIAEgCIANABIAMAGIAHAFIAEACIAFAJIAFAJIADAEIAIAEIAJADIAAABIAAAKIAJAVIARADIAHAUIAFAUIACAEIAFAFIACACIANANIABAHIAEALIAAAAIgCAEQgEATAEAcIADAOIADAFIADAFIAAABIgBABIgDADIgJALIgGALQgFAPgCAMIgCADIgBABIABABIAAAKIgCAFQgCAGAAAHIgHAMIgKAPIgLAGIgDAAIgOAEIgIAFIAAADIABADIgEAKIgNAHQgLABgLAFIgDACIgBACIgEAIIgJAJIgGAGIAAACIgDACIgOAEQgUgNgWgCgAhvjAQgaAAgMAMQgQAMAKAVQAHAOANAPIAkArQAOAQAPANQAQANAUAMQATAKAUAJIAuATQAYALASgeQgHgQgOgUQgQgbgEgSIgSgpQgGgQgZgQQgTgNgZgJQgUgIgSgDQgPgDgOAAIgDAAg");
	this.shape_69.setTransform(46,0.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("ABTBqIgugVQgUgJgRgLQgVgMgPgNQgPgOgNgQIgigrQgMgOgHgPQgKgVAPgMQAMgMAZgBQAQAAARAEQARADAUAIQAXAJAUANQAZAQAGAQQAKAUAGAUQADARAOAdQANATAHASQgLAZgQAAQgGAAgGgDg");
	this.shape_70.setTransform(44.6,-6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#666666").s().p("ACBDaIgKABIgFACIAAABIgGgBIgNgBIgsgLIgJgFIgDgCIgBAAQgIgGgJgDIgHgCIgDAAQgUgHgZgFIgOgIIgHgCIgQgIIgKABIgOgFQgGgIgIgFIgFgEIgCgCIgFgGIgEgEIgHgCIgFgCIgBAAIgEABQgPgFgQgEIgJgEQgNgDgNgBIgLgEIgdgOIgNgIIgBgBIgGgGIgKgNIgKgEIAAgBQgNgKgQgEIgDgBQAJgXAGgYIAAgBQAGgSAKgPIAGgKIAEgDIABAAQACgFAFgCIAMgMIAEgFIAFgPIAAgFIgDgOIACgRQAUgQATgTIAIgHIAQgJIASgHQAGgDADgDIACgFIAugcIACgBIAXgBIABAAIAEABIAFABIADgCIACAAIADAAIAdACIAEADIACAAIAQABIAJgEIAEgBIAFgBIAtAAIAAAAIAKAFIAKAAIAGgCIALgBIAHAAIALAHIAHACIADAHIAAAAQAWAMAYADIAGgFIAAgCIACgCIAEgDIANACIANAGIAGAEIAFACIADAJIAHAJIACAEIAIAEIAKACIAAABIACAJIALAVIAAAAIAQAEIAIAUIAHAUIACADIAGAFIABADIANANIACAHIAEAKIAAABIAAAEQAAATAFAcIADAOIADAFIAEAFIAAAAIgBACIgDADIgJALIgGALQgEAQAAAMIAAAEIgBABIABABIADAJIgCAGIgBANIgGAMQgDAIgGAIIgMAGIgDAAIgOAGIgHAFIACADIACACIgFAKIgNAIQgLABgLAFIgCADIgCACIgCAJIgJAJIgGAGIAAABIgBAAIgCACIgPAEQgUgLgXABgAhmjAQgaAAgMAMQgPANAKAVQAHAOAMAPIAiAsQANAQAQANQAPAOAUALQATALASAJIAuAUQAZAMAOghQgHgRgNgUQgOgcgCgRQgGgVgKgUQgHgQgZgQQgTgNgYgKQgUgHgRgEQgPgDgOAAIgDAAg");
	this.shape_71.setTransform(47.4,2.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("ABRBsIgtgWQgTgKgRgLQgUgMgPgOQgPgOgNgQIgfgrQgLgPgHgPQgKgVAOgMQALgNAaAAQAPgBARAEQARAEATAIQAXAJAUAOQAYAQAHAQQALAUAEAUQABAQAMAdQALATAHATQgJAcgPAAQgGAAgGgDg");
	this.shape_72.setTransform(46.5,-4.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#666666").s().p("AB8DiIgOAAIgugIIgJgFIgDgCIgBAAQgIgFgLgCIgIgBIgCAAQgWgFgYgEIgOgJIgHgBIgQgHIgLADIgOgFQgHgIgIgEIgFgFIgCgBIgHgFIgEgDIgHgCIgHgBIgBAAIgDABQgPgEgRgDIgJgEQgNgDgMgBIgMgEIgegLIgNgIIgBgBQgDgEgEgCIgLgMIgMgDQgNgIgRgFIgDAAQAKgYAFgYIAAgCQAFgSALgOIAGgKIAEgEIABAAQACgFAFgDIALgMIADgFIAFgPIABgGIgEgOIABgRIAkgnIAHgIIAQgKIASgJQAFgDADgFIAAgFIArgjIABgCIAYgCIABAAIAEABIAFABIADgDIACAAIADAAIAdAAIAFADIACABIAPAAIAIgEIAGgCIAEgCIAtgDIAAABIAKAEIALAAIAFgDIALgCIAHAAIANAEIAHABIADAHIABAAQAWAMAZADIAEgGIAAgDIABgDIAEgDIANACIANAGIAHADIAEACIAEALIAGAIIADAEIAIADIALABIAAABIADAJIAMAVIAAAAIARAFIAJAUIAJATIACADIAGAGIABACIAMANIACAIIAGAJIABABIABAFQACAUAIAcIAEANIADAFIADAFIAAAAIgBACIgDAEIgJAKIgGAMQgDAPADAMIABAGIAAABIABABIAFAJIgBAGQgBAGAAAGIgFAOQgDAIgFAIIgMAGIgDAAIgOAHIgHAFIAEAEIADACIgGAJIgMAIQgLADgMAFIgBADIgBACQgCAGABAEIgKAIIgGAHIAAAAIgBAAIgCACIgPAEQgWgJgXADIgKADIgFADIAAABIgFAAgAhdi9QgaABgLAMQgOAMAKAWQAHAOALAPIAfAsQANAQAPAOQAPAOAUAMQASALASAJIAtAWQAZAMALglQgHgSgLgTQgMgdgBgRQgEgUgLgUQgHgQgYgQQgTgOgYgJQgTgIgRgEQgPgDgNAAIgEAAg");
	this.shape_73.setTransform(48.7,3.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("ABPBuIgsgXIgkgWQgTgMgOgNQgPgPgMgQIgegsQgKgPgGgPQgKgWAMgMQAKgNAagBQAPAAARAEQARAEATAIQAXAJATAOQAYARAIAPQAMAVABATQgBAQALAeQAJATAHATQgGAggQAAQgFAAgGgEg");
	this.shape_74.setTransform(48.5,-2.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#666666").s().p("AB9DlQgXgBgYgDQgFgDgFgCIgDgCIgBAAQgJgDgLgBIgJAAIgCABIgvgHIgPgJIgGgBIgRgHIgLAFIgPgFQgGgGgJgFIgGgFIgCgBIgHgDIgGgDIgHgBIgHgBIgBAAIgDADIgggHIgKgEQgNgDgMgBIgNgCIgfgKIgNgIIgBgBIgHgGIgNgLIgMAAQgPgJgRgDIgDgBQAJgXAHgZIAAgBQAEgUAKgPIAGgKIAFgDIAAAAQADgGAEgBIALgOIADgFIAFgPIAAgGIgEgOIAAgSIAhgrIAHgJIAPgKIARgLQAFgDACgGIgBgHIAngrIACgBIAXgDIACAAIADABIAGAAIACgDIADAAIADAAIAdgCIAFACIACABIAPABIAIgFIAFgCIAEgEIAugFIAAABIAKAEIALgBIAFgEIALgCIAHgBIAPADIAHAAIADAHIABAAQAXAKAZADIADgIIAAgDIAAgCIADgEIAOACIANAFIAIADIAEADIADAKIAGAJIADAEIAJACIALAAIABAAIAEAKIANAUIARAGIALAUIAKATIACADIAGAGIACACIAMAOIACAHIAHAJIAAABIADAFIAPAwIAFAOIADAEIADAFIAAAAIgBACIgDAEIgJAKIgGAMQgCARAFAMIADAGIAAAAIABABIAIAKIgBAGIAAANIgEAOQgCAIgFAKIgMAEIgDABIgOAHIgHAHIAGACIADACIgGAJIgMAIQgLAEgMAGIgBAEIAAACIAAAKIgJAIIgHAHIAAABIgBAAIgDABIgOACQgXgGgYAGIgLAFIgEADIAAABIgFABIgOAAgAhVi8QgaAAgKANQgMANAKAVQAGAPAKAQIAeAtQAMAQAPAOQAOAOATAMIAkAVIAsAXQAZANAIgpQgHgSgJgTQgLgeABgRQgBgTgMgVQgIgQgYgQQgTgOgXgJQgTgIgRgFQgPgDgNAAIgEAAg");
	this.shape_75.setTransform(50.1,5.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("ABOBxIgrgZQgTgKgQgMQgUgMgNgOQgPgPgLgQIgcgtQgJgPgGgQQgKgVALgNQAJgNAbgBQAPAAAQAEQARAEASAIQAXAKATAOQAXARAJAPQANAVgBATQgDAPAJAfQAIATAHAUQgEAigPAAQgFAAgGgDg");
	this.shape_76.setTransform(50.4,-0.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("ABZDoQgFgDgFgBIgDgCIgBAAQgKgDgMAAIgJABIgDABIgwgEIgPgJIgGgBIgRgFIgLAFIgQgDQgGgHgJgFIgGgDIgCgCIgJgDIgGgBIgIgBIgHABIgBAAIgDACIghgFIgJgEQgOgDgMAAIgNgCIgggJIgOgIIgBgBQgEgDgEgBIgNgLIgOACQgPgHgSgEIgDAAQAJgYAHgZIAAgBQAEgUAKgPIAGgLIAEgDIABAAQACgFAEgEIALgOIACgFIAGgUIgFgPIgCgSIAfgvIAGgJIAOgMIARgNQAFgEACgGIgDgIIAkgyIABgCIAYgEIACAAIADABIAFAAIACgDIADAAIADgBIAegEIAFADIACABIAPAAIAIgFIAFgDIAEgEIAvgIIAAAAIAJAFIALgCIAEgFIAMgDIAHgBIARAAIAHgBIADAIIABAAQAXAJAaADIACgJIgBgEIAAgDIADgDIAOACIANAFIAIADIAEABIADALIAHAJIADAFIAIABIANgBIAAAAIAGAJIAPAUIAQAIIAMASIAMATIADADIAGAGIACACIALAPIACAIIAJAIIAAABIAEAEIAUAyIAGANIADAFIADAFIABAAIgCACIgDADIgJAKIgFANQgBARAHAMIAEAGIABABIABABIAKAKIAAAFIAAAOIgDAOQgCAJgEAKIgNAFIgDABIgNAIIgHAGIAJADIADABIgIAJIgLAJQgLAEgLAHIgBAEIAAADQAAAFABAFIgJAIIgHAHIAAAAIgBAAIgDACIgPACQgYgFgYAJIgLAGIgEAFIAAABIgFABIgOABIgQAAIghgBgAhOi7QgaABgKANQgKANAJAVQAHAQAJAPIAbAuQALAQAPAPQAOAOATAMQARALASAKIArAZQAZAOAFgtQgGgTgIgTQgKgfADgQQABgTgNgVQgIgPgXgRQgUgOgVgKQgTgIgRgEQgPgEgNAAIgEAAg");
	this.shape_77.setTransform(51.6,6.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("ABMByIgqgZIgigXQgTgNgOgNQgOgPgKgRIgaguQgIgPgHgQQgIgVAJgNQAIgOAbAAQAPgBAQAEQARAEASAJQAVAKAUAPQAXAQAJAPQAOAWgDASQgFAPAIAgIAMAoQgBAkgPAAQgFAAgGgEg");
	this.shape_78.setTransform(52.3,1.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#666666").s().p("ABXDsIgDgCIgBAAQgLgCgMACIgKACIgDABIgxgCIgPgJIgGAAIgSgFIgLAHIgQgCQgGgHgKgFIgGgDIgCgCIgKgBIgGgBIgJAAIgHABIgBABIgEACIghgEIgKgEQgNgDgNAAIgNgBIghgIIgOgHIgCgBIgHgEIgPgKIgPAEIAAAAQgQgGgSgDIgEgBQAKgYAHgZIAAgBQADgUAKgQIAFgLIAFgDIABAAQACgFAEgEIALgPIAHgaIgFgOIgEgTIAcgyIAGgKIAOgNQAIgHAIgIQAFgFABgHIgFgJIAhg5IABgCIAYgFIACAAIADAAIAFABIACgEIADgBIADAAQAPgEAPgCIAFACIACABIAPABIAJgHIAFgDIADgEIAwgLIAAAAIAKAFIAKgDIADgGIANgEIAHgBIAAAAIAagEIADAIIAAAAQAZAIAaADIAAgKIgBgEIgBgEIADgDIAOACIAOAEIAIADIAFABIACALIAGAKIADAEIAJABIANgCIABAAIAHAJIAQATIAQAJIAPASIANASIADAEIAGAGIACACIALAQIACAHIAKAIIAAABIAFAEQAOAXAMAbIAHANIADAGIADAEIABABIgDACIgDADIgJAKIgFANQABASAIAMIAGAGIACACIABABIANAIIAAAGIABAOIgCAPQgCAKgEAJIgMAGIgDAAIgUAQIALADIADABIgIAJIgMAIIgVANIgBAEIAAAEQABAFACAFIgJAIIgHAHIAAAAIgBAAIgEABIgPACQgZgCgZAMIgLAGIgEAGIAAACIgFABIgNACQgYACgbAAIgLgEgAhKi4QgaAAgJAOQgJANAJAVQAGAQAJAPIAZAvQALARAOAPQAOANASANIAjAWIAqAZQAZAQACgwIgNgnQgIggAFgQQADgSgOgWQgJgPgWgQQgUgPgUgKQgTgJgRgEQgOgDgOAAIgEAAg");
	this.shape_79.setTransform(53.4,8.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("ABKB1IgpgaIgigYQgSgNgNgOQgOgQgKgQIgXgvIgOgfQgJgWAIgMQAIgPAbAAQAPgBAQAEQARAEARAJQAVAKAUAQQAWAQAJAPQAPAWgFARQgHAPAGAhIAMAoQAAAogOAAQgFAAgGgEg");
	this.shape_80.setTransform(54.2,3.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#666666").s().p("AACD5IgOgIIgFgBIgTgEIgLAIIgRAAQgGgIgKgEIgHgDIgCgCIgKgBIgIAAIgIABIgJACIAAABIgEADIgigDIgJgEQgOgDgNABIgOgBIgigGIgOgHIgCgBIgHgDIgRgKIgQAGQgRgEgSgDIgEgCQAKgXAIgaIAAAAQABgVAKgQIAGgLIAFgEQADgFADgFIAKgPIACgFIAEgRIABgFIgKgiIAYg1IAFgLIAPgOIAPgRQAEgFABgHIgHgLIAehAIACgCIAXgHIACAAIAEAAIAEAAIADgDIACgBIADAAIAfgJIAFADIACAAIAPABIAJgHIAFgEIADgEIAvgPIAAABIAKAFIALgEIAEgHIANgEIAGgCIAcgHIADAIIABAAQAYAHAaADIAAgLIgCgGIgBgCIACgFIAPADIAOADIAIADIAFABIABAMIAIAJIACAEQAFABAFgBIAOgDIAAABIAJAJIASASIAAAAIAPAKIAQASIAPASIADADIAHAGIABADIALAQIADAHIAKAIIABABIAHAEQAQAYAOAbIAIAMIACAFIAEAGIABAAIgDADIgDACIgJALIgFANQABARAMANIAHAGIACACIACABIAPAJIAAAGIACANIgBAQQgBALgEAJIgNAGIgDAAIgTASIANACIADABIgJAIIgLAJIgVAPIAAAEIAAAEQABAGADAEIgJAJIgIAHIgBAAIgDABIgPABQgbgBgaAQQgGADgFAEQgCAEgBADIAAACIgFACIgNACQgZAEgbACIgLgEIgEgBIgBAAQgMgCgOADIgKADIgCACIg0AAgAhFi2QgaABgJAOQgHAMAIAWIAOAfIAXAxQAKAQAOAPQANAOATAMIAhAYIApAaQAaARgBg1IgMgnQgFggAGgRQAGgRgQgVQgJgPgWgRQgUgQgUgKQgSgIgRgFQgOgDgOAAIgDAAg");
	this.shape_81.setTransform(55.2,9.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("ABIB3IgogbIghgZQgSgNgNgOQgOgQgIgQIgWgwIgNggQgIgWAGgMQAIgPAagBQAQAAAPAEQARAEASAJQATAKAUAQQAWARAKAPQAQAXgIAPQgJAQAFAhIAKApQADAqgOAAQgFAAgGgEg");
	this.shape_82.setTransform(56.2,5.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#666666").s().p("AgHD7IgGAAIgTgDIgLAKIgSAAQgGgHgKgEIgHgDIgDgCIgLABIgIAAIgJACIgIACIgBABIgEAEIgjgCIgJgEQgOgDgNABQgHgBgHABIgjgFIgPgGIgCgBIgIgEIgRgIIgSAIIAAAAQgRgEgSgCIgFgBIASgxIAAgBQABgWAKgQIAFgMIAGgCIAGgLIAJgQIAGgbIgMgjIAWg5IAFgMIANgOQAIgJAHgKQAFgGAAgJIgJgLIAbhHIABgDIAYgIIACAAIADABIAGAAIABgFIADgBIADAAIAfgLIAFADIACABIAQAAIAIgHIAEgEIADgGIAxgRIAAABIAKAFIAKgFIAEgIIANgFIAHgDIAdgJIADAIIABAAQAZAGAbACIgCgMIgCgFIgCgEIADgEIAOACIAOAEIAJACIAFABIABALIAHAKIADAFQAFAAAFgBIAOgEIABAAIAJAJIAUASIAQALIARASIAQARIAEAEIAHAGIABACIAKARIAEAHIALAIIABABIAIAEQAUAZAQAZIAIANIADAGIAEAEIAAABIgDACIgDADIgJALIgEAOQACASANAMIAJAHIACACIACABIASAJIABAGIACAOIAAAQQgBALgDAKIgNAFIgDABIgTATIAPACIAEABIgKAIIgLAJIgVAQIABAFIAAAEQACAGAEAEIgKAJIgHAHIgBAAIgFAAQgHAAgIABQgbACgaARIgMAJQgCAFgBAEIAAACQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAIgOAEQgaAFgcAEIgLgEIgEgBIgBAAQgMgBgPAEQgGACgEADIgDACIg1ACIgOgJgAhBi3QgbAAgHAPQgGANAIAWIANAfIAVAxQAJARAOAQQANANASANIAhAYIAoAcQAaARgFg3IgJgpQgFghAJgQQAHgQgQgXQgKgOgVgRQgUgQgUgKQgRgJgRgEQgOgEgOAAIgDAAg");
	this.shape_83.setTransform(57,11.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("ABEB4QgjgZgkgdQgmgdgOgfQgNgfgSgyQgIgWAFgNQAGgPAbgBQAPAAAQAEQAiAJAnAfQA3AtgRAZQgQAXARBEQAMAwgPAAQgGAAgKgHg");
	this.shape_84.setTransform(58.3,7.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#666666").s().p("AhREDIgDgCQgPAAgPAFIgJADIgFAFIgjgBIgKgEQgXgDgTADIgkgEIgrgRIgTAKIgqgGIATgxQAAgXAKgRIAFgMIAFgCIAQgcIAFgcIgOgjIAXhKQAPgQANgUQAEgGgBgKIgKgNIAZhQIAYgKIAFABIAFAAIACgFIAlgPIAIAEIAPAAIANgMIACgHIAxgTIAAAAIAKAFIALgFIACgJIA2gWIACAIQAaAGAbACIgCgNIgGgKIADgFIAdAGIAJACIAEABIABALIALAPQAFAAAFgCIAPgFIAgAaIAjAeIASARIALAKIABADQAHAMAHAMIAWAMQAgAkAVAhIAEAFIABAAIgQARIgEAOQAFAbAdAPIAUAIQAFATAAASQAAALgCALIgRAGIgSAUIAUADIgqAjQACAMAHAIIgRAPIgBAAQgogDgjAcQgHAFgFAFQgDAGAAAGIgEACQggAKglAHQgGgDgGgBIgDgBQgPAAgQAFQgIADgFAFIg2AFIgPgJIgZgCIgLAMIgSAAQgIgKgQgDgAg9i4QgbAAgGAPQgGANAIAWQATAzANAfQAOAfAlAcQAlAdAjAZQAkAZgShCQgQhCAQgZQAQgYg3gtQgmgggjgJQgOgDgOAAIgCAAg");
	this.shape_85.setTransform(58.9,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56}]}).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).wait(1));

	// Explosion
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFF00").ss(1,1,1).p("AG7iwQAzAIAnAeQA3ApAAA6QAAAkgVAdQgNASgVAPQg2AphMAAQhNAAg2gpQg2gpAAg5QAAg6A2gpQA2gpBNAAQAVAAATADgADZkDQBtAUBXAuQAQAIAOAJAlmC4QgDAEgEAFQgmAvg2AAQg2AAgmgvQgmgwAAhDQAAhEAmgvQAlgtAygCQADAAACAAQA2AAAmAvQAmAvAABEQAAA9gfAtgAnOhUQAmg8BcgxQBMgoBbgUADZkDQgFArgzAfQg4AkhQAAQhOAAg5gkQgvgdgIgnQgBgIAAgIQAAgyA4gjQA5gjBOAAQBQAAA4AjQA5AjAAAyQAAAFgBAFgAFXFhQAAAPhBALQhAALhbAAQhbAAhAgLQhAgLAAgPQAAgQBAgLQBAgLBbAAQBbAABAALQBBALAAAQgAI3AaQgPBkiLBJQiaBRjbAAQjZAAibhRQgOgIgMgH");
	this.shape_86.setTransform(-36.3,-10);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF6600").s().p("AggF7QhAgLAAgPQAAgQBAgLQBAgLBbAAQBbAABAALQBBALAAAQQAAAPhBALQhAALhbAAQhbAAhAgLgAolDBQgmgwAAhEQAAhDAmgvQAlgtAzgCIAEAAQA2AAAmAvQAmAvAABDQAAA+gfAtIgHAJQgmAvg2AAQg2AAgmgvgAEQA7Qg2gpAAg5QAAg6A2gpQA2gpBNAAQAVAAATADQAzAIAnAeQA3ApAAA6QAAAkgVAcQgNATgVAPQg2AphMAAQhNAAg2gpgAhui4QgvgegIgnQgBgIAAgIQAAgyA4gjQA5gjBOAAQBQAAA4AjQA5AjAAAyIgBAKQgFArgzAgQg4AjhQAAQhOAAg5gjg");
	this.shape_87.setTransform(-36.3,-10);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFF99").s().p("AmAC8IgagOQAfgtAAg+QAAhDgmgvQgmgvg2AAIgFAAQAmg9BcgwQBMgoBbgUQAIAnAvAdQA5AkBPAAQBPAAA4gkQAzgfAFgrQBsAUBYAuIAeARQgTgDgVAAQhNAAg2ApQg2ApAAA6QAAA5A2ApQA2ApBNAAQBMAAA2gpQAVgQANgSQgPBliLBIQiaBSjaAAQjaAAibhSg");
	this.shape_88.setTransform(-31.1,-9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFF00").ss(1,1,1).p("AhgjAQAAAwg0AiQg0AhhKAAQhJAAg1ghQg0giAAgwQAAgvA0giQA1giBJAAQBKAAA0AiQA0AiAAAvgAHFiEQAAAohAAbQhAAchaAAQhaAAhAgcQg/gbAAgoQAAgnA/gcQBAgcBaAAQBaAABAAcQBAAcAAAngAgLDGQAAAtg+AgQg/AhhYAAQhYAAg+ghQg/ggAAgtQAAguA/ggQA+ggBYAAQBYAAA/AgQA+AgAAAug");
	this.shape_89.setTransform(-47.8,-6.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF6600").s().p("Al2ETQg/ggAAguQAAgtA/ggQA+ghBYAAQBYAAA/AhQA+AgAAAtQAAAug+AgQg/AhhYAAQhYAAg+ghgABRhBQg/gbAAgnQAAgoA/gcQBAgbBagBQBaABBAAbQBAAcAAAoQAAAnhAAbQhAAchaAAQhaAAhAgcgAmQhvQg0ghAAgwQAAgvA0giQA1giBJAAQBKAAA0AiQA0AiAAAvQAAAwg0AhQg0AjhKAAQhJAAg1gjg");
	this.shape_90.setTransform(-47.8,-6.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFF00").ss(1,1,1).p("ADZkDQBtAUBXAuQAQAIAOAJAI3AaQgNASgVAPQg2AphMAAQhNAAg2gpQg2gpAAg5QAAg6A2gpQA2gpBNAAQAVAAATADQAzAIAnAeQA3ApAAA6QAAAkgVAdQgPBkiLBJQiaBRjbAAQjZAAibhRQgOgIgMgHAnOhUQADAAACAAQA2AAAmAvQAmAvAABEQAAA9gfAtQgDAEgEAFQgmAvg2AAQg2AAgmgvQgmgwAAhDQAAhEAmgvQAlgtAygCQAmg8BcgxQBMgoBbgUQgBgIAAgIQAAgyA4gjQA5gjBOAAQBQAAA4AjQA5AjAAAyQAAAFgBAFQgFArgzAfQg4AkhQAAQhOAAg5gkQgvgdgIgnAFXFhQAAAPhBALQhAALhbAAQhbAAhAgLQhAgLAAgPQAAgQBAgLQBAgLBbAAQBbAABAALQBBALAAAQg");
	this.shape_91.setTransform(-36.3,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).to({state:[{t:this.shape_90},{t:this.shape_89}]},4).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_91}]},5).to({state:[]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.4,-50,223,80.4);
p.frameBounds = [rect, new cjs.Rectangle(-151.4,-50,224.8,80), new cjs.Rectangle(-152.5,-50,226.5,80), new cjs.Rectangle(-153.5,-50,228.4,80), new cjs.Rectangle(-154.5,-48.9,230.2,75.2), new cjs.Rectangle(-155.6,-49.3,232,74.7), new cjs.Rectangle(-156.6,-49.8,234.6,74.9), new cjs.Rectangle(-157.7,-50.3,237.2,75.6), new cjs.Rectangle(-158.7,-50.9,239.8,77.4), new cjs.Rectangle(-159.8,-51.5,242.4,81.5), new cjs.Rectangle(-160.8,-52.2,245.4,82.4), new cjs.Rectangle(-161.8,-52.9,248.9,85.3), new cjs.Rectangle(-162.9,-53.6,252.4,88.4), new cjs.Rectangle(-163.9,-54.3,255.9,91.9), new cjs.Rectangle(-165,-55,259.5,95.7)];


(lib.Obstacle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Obstacle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AljEJQhGgQgJgmQgIgnBSAEQBSAFBDgKQBDgJAnANQAoANgSAWQgRAXgiAWQgiAVg6ADIgQABQg1AAg8gPgABnAtQg9ggAAgeQAAggAbADQAaADAoAdQApAdBJgfQBJghAAAgQAAAeggAbQghAaguAFIgPABQgpAAg0gbgAMYgCIhggYQgzgNghgYIhUhBQgzgoAmgSQAmgTBMAVQBNAWAEAdQAFAdA+A4QA0AvgZAAIgMgBgAsHg8QgkgVAAgeQAAgdAzghQAzghA6gFQA6gFAPAmQAPAmgBAcQgBAcg/gMQg/gMgYAjQgOAVgUAAQgMAAgOgIgAk8izQABgdATgUQAUgVAdgSQAdgSBJAJQBJAJAFANQAEAMgCAYQgBAXhHAVQhHAWg2ABIgDAAQgzAAAAgcg");
	this.shape.setTransform(-34.2,-9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgZGIIgKgSIgggEIgSgLQgugLghAYQgFAEgKAFIgVAAIgLgPIgPgHQhIgMgnAbQg3gFg0gJIAAgEQgEgHgHgDIgWgMIg5AAQgDADgFACIgFADIg8gMIgJgLIAAgDIgWgLIgZAAQgVgMgagNQgNgHgFgHQgSABgPgHQgGgDgIgGIguAAIgDgHIgLgFIgBgCIgVgLIgDgLIgSgOIgPAAQgTgMgZABIgCgHQgdgVgrAEIgCAAIgJgIIgCAAIgUgRQADgQgCgSIgBgDIgHgHIAAgPQgHgJgIgJIgPgVQAJgVgDgYIgBgEIgOgOIgYAAIAEgTIADgKIAygnIACgBQATgzAqgfIAdgWQCAgsB5guQAmgPAegUIAcgHIA0gMQA3gMA6gJIAzgHQAzgHA0gFIASgCQA9AAA9ADIASgMIADAAIAbgBIAiAAIAVAAIAOgBIAjAAIAJAAIAuAAIAyABIAAAAQBEAuBbgTQAkgJAogDQAsAEArAHIALANQANARAZAPIAJADQBEAPBFgPQAPgDAQgBQA8APA6ATIAbAJIAPAFIADACQAPAJANAJIAbADQAzAWApAXIAGADIABAAIAAAVIAHAPQAYAYAhADIAXAAQARARANAQQAIAKAGALIgJAMIAAAZIASgFIgHAxQAKAJALAFIgCAVIgBAAQgiALgIAnQgCAHAAAHQACAHAFAFIgDADQgRAVgZAUIgMABIgEAAQgLAGgIAKQgFAHgBAGQgSAMgUAMIgTgDIgWAIIAAAPIgNAHQgOgHgPADIgEAAQgMAGgJAJIgEAGIAAAHIgdALIgLAAQgUAHgNAJIgfAJIgvAAIgHARIg/AQIgpAAIgaAOIgJACQgNgHgRgCQgMgBgJAFIgKARIg0AIIgygHIgSAHQhhgPhdAMQgFACgFABIgygkIgzAAQgbAkgjAdIgXAAgAmDDPQAJAnBGAQQBGARA7gDQA7gDAhgWQAigVARgXQASgXgngNQgogMhDAJQhDAJhSgEIgPAAQhCAAAHAigABZgUQAAAdA9AhQA+AgAugGQAvgFAggbQAggbAAgdQAAgghJAgQhJAfgogcQgpgegagCIgEAAQgXAAAAAdgAIyi+QgmATAzAoIBUBBQAhAYAzANIBhAYQAuAIg+g2Qg+g4gFgdQgEgdhNgWQgogLgeAAQgaAAgSAIgApcjXQg6AGgzAhQgzAhAAAdQABAeAjAUQAlAWAXgiQAYgjA/AMQA/AMABgdQABgbgPgnQgNghgvAAIgNAAgAjIkOQgdASgTAUQgUAVgBAdQAAAdA2gBQA2gBBHgWQBHgWABgWQADgYgFgMQgFgNhJgJQgYgDgUAAQgnAAgTAMg");
	this.shape_1.setTransform(-38.9,-8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Obstacle, rect = new cjs.Rectangle(-150.4,-47.9,223,78.3), [rect]);


(lib.Laser = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3300FF").ss(1,1,1).p("AAnAAQAAAkgMAZQgLAZgQAAQgPAAgLgZQgMgZAAgkQAAgjAMgZQALgZAPAAQAQAAALAZQAMAZAAAjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AgaA9QgMgZAAgkQAAgjAMgZQALgZAPAAQAQAAALAZQAMAZAAAjQAAAkgMAZQgLAZgQAAQgPAAgLgZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Laser, rect = new cjs.Rectangle(-4.8,-9.6,9.8,19.3), [rect]);


(lib.Ship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{rest:0,boostleft:5,boostright:10,charging:15,explode:20,damage:30,speed:50});

	// timeline functions:
	this.frame_4 = function() {
		this.gotoAndStop("rest")
	}
	this.frame_9 = function() {
		this.gotoAndStop("rest")
	}
	this.frame_14 = function() {
		this.gotoAndStop("rest")
	}
	this.frame_19 = function() {
		this.gotoAndStop("rest")
	}
	this.frame_29 = function() {
		this.gotoAndStop("rest")
	}
	this.frame_49 = function() {
		///* this.gotoAndStop("rest")*/
	}
	this.frame_84 = function() {
		this.gotoAndStop("rest");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(10).call(this.frame_29).wait(20).call(this.frame_49).wait(35).call(this.frame_84).wait(1));

	// Body
	this.instance = new lib.ShipGraphic("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-0.1,1,1,0,0,0,0,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#B8860B","#FFFFFF"],[0,1],-17.4,7.5,17.8,-4.2).ss(1,1,1).p("AARgCIAWgxIAIAUIgVAlgAAAg3IAVgxIAIAUIgVAngAgggsIgwgaIAGAUIAoATgAgOAIIgwgZIAGATIAoATgAACA9IgugaIAGAUIAnATgAAABjIgcgQIAFAUIAEACAA7BPIAOgeIAIAUIgDADAAiAyIAXgxIAIAUIgVAmg");
	this.shape.setTransform(-2.1,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#B8860B","#FFFFFF"],[0,1],-28.2,-9.5,15.9,-23.2).ss(0.5,1,1).p("AgjAsIgfAKIAHhVAAMg1IAYBLIAfgJg");
	this.shape_1.setTransform(3.9,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#B8860B","#FFFFFF"],[0,1],-24.6,-1,19.5,-14.7).ss(1,1,1).p("Ag8AMIAqAOIADgNIgUgJAA9gZIgaAiIgKgJIAMgS");
	this.shape_2.setTransform(0.4,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#B8860B","#FFFFFF"],[0,1],-8.9,0.3,35.8,-5).ss(0.5,1,1).p("AAKgwIgeAEIALBdIAegEg");
	this.shape_3.setTransform(-20.3,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#FFFFFF","#B8860B"],[0,1],-33.9,-7,8.5,0.6).ss(0.5,1,1).p("AgGguIAdAFIgQBYIgdgFg");
	this.shape_4.setTransform(18.7,5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(0.5,1,1).p("Ag1kyQAPgGANgBQAlgDAWAkQgBAjgPAaQgBABgBACQgBgCAAgCQgXgtghAHQgNADgOALQgCABgCABQAAgCABgBQAAgfASgegAhKE6IgKggIgBgDICggyIABADIAKAggAhLCdIAYBM");
	this.shape_5.setTransform(5.5,4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#22313F").ss(1,1,1).p("AgmjGIAjhLQAsg2AegKQAYgIAQATQACADACAEQAOAXAEA1IgMBbIAAABQACADABACAB5iYIgDAIAgoi+IACgHIAAgBQAAAAAAABQgEABgDACAgxBlIgDgJIg7iwAhBDIIgGgRIAAgBAhIDJIAHgBAijimQhPBWgQBxQgDASgBARICBAPAkIBEIACAAABoCUIArCMIgEACIigAyIgFABIgriNABsCRIgEADABiCBIAGATAC3hXQBSBlAACDIh9AHAAXiBIA+C5");
	this.shape_6.setTransform(-1.2,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF860B","#6F6D30"],[0,1],-15.1,8,-3,11.5).s().p("AgDACIABgCIAFgCIABgBIAAABIgDAGg");
	this.shape_7.setTransform(-5.4,-20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#454545","#FF860B"],[0,1],-3.5,11.5,8.6,15).s().p("AgCADIACgHIAAABIADAEIgCAEg");
	this.shape_8.setTransform(11,-15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#0047D9","#FFFFFF"],[0,1],-4.6,-1.9,5.1,0.9).s().p("AAhAtQgXgtggAHQgNACgOALIgDADIAAgEQAAgeASgdQAPgGANgBQAlgEAWAkQgBAigPAbIgCACIgCgDg");
	this.shape_9.setTransform(3.6,-21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#B8860B","#6F6D30"],[0,1],-11.8,16.1,4.1,20.7).s().p("AhWA0IACgIIAAAAIAjhKQAtg2AdgLQAYgIAQAUIAEAGQAOAYAEA0IgMBbIgDAIgAAjBPIACAEIACgDQAPgaABgjQgXgjgkADQgNABgPAGQgSAdAAAfIgBADIAEgCQAOgLANgDIAJgBQAaAAAUAng");
	this.shape_10.setTransform(3.4,-25.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FF860B","#6F6D30"],[0,1],-9.8,3.9,0.5,0.5).s().p("AgghbIAEgCIA7CwIACAJIgEACg");
	this.shape_11.setTransform(-9.5,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#B8860B","#6F6D30"],[0,1],-6.6,2.6,6.9,-1.9).s().p("AgnBrIg7ixICHgtIA+C6IgRAFIACgEIgHgUIgOAeIg7AUIgcgQIAFAVIAEACIgVAHgAgiA7IAnATIABgOIgugagAAmA2IAKAJIAVgmIgIgVgAg0AGIAoATIACgOIgwgZgAAVABIAJAJIAVglIgIgUgAhGguIAoATIACgOIgwgagAADgzIAJAJIAVgmIgIgUg");
	this.shape_12.setTransform(-2.5,-2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#454545","#FF860B"],[0,1],0,0.7,10.3,-2.7).s().p("AgghbIAEgCIA9C5IgEACg");
	this.shape_13.setTransform(4.4,-4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FF860B","#6F6D30"],[0,1],-15.5,-5.6,-2.6,-9.6).s().p("AgFgHIAFgBIAAABIAGAQIgGABg");
	this.shape_14.setTransform(-8.4,18.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#B8860B","#6F6D30"],[0,1],-13.6,-14.2,3.4,-19.4).s().p("AhngiIgFgRIgBgBIAbgIIAqAOIADgNIgUgJIBIgXIgMATIAKAJIAagjIAVgHIAGATIAsCLIgFACIgBgEIigAyIABAEIgEABgAg0BBIAegJIgXhLgAAxAiIAfgKIg3hBg");
	this.shape_15.setTransform(2.6,22.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#454545","#FF860B"],[0,1],-3.2,-9.5,9.7,-13.5).s().p("AgEgIIAEgBIAFAQIgEADg");
	this.shape_16.setTransform(9.1,13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FF860B","#6F6D30"],[0,1],-7.5,1.2,5.6,-0.3).s().p("Ag/BtIADgjQARhwBOhWIAdD5gAgMgRIALBdIAdgDIgLhdg");
	this.shape_17.setTransform(-21,-5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#454545","#FF860B"],[0,1],-4.5,-0.3,7.9,1.9).s().p("AgSh3QBRBmAACCIh9AHgAgaBIIAdAFIAQhYIgdgFg");
	this.shape_18.setTransform(19.1,2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6D31").s().p("AhUAJICggxIAKAgIigAxg");
	this.shape_19.setTransform(5.6,32.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B8860B").s().p("ACrBRIAQhYIAeAFIgQBYgAjYhRIAfgEIALBdIgfADg");
	this.shape_20.setTransform(-0.7,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFC40C").s().p("AgVB7IAWBMIgdAJgAAxBlIA3BCIgfAKgAg6BSIAZgIIAUAJIgDANgAAbBGIAMgTIAYgHIgaAjgAguAAIgFgUIAdAQIgUAGgAAyg2IAHAUIgCAEIgTAHgAg9gvIgGgUIAvAaIgBANgAALg0IAXgxIAIAUIgVAmgAhPhkIgGgUIAwAaIgCANgAgFhpIAVgxIAIAUIgVAmgAhhiZIgGgUIAwAaIgCANgAgXieIAWgxIAHAUIgUAng");
	this.shape_21.setTransform(0.2,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},20).wait(10).to({_off:false,alpha:0.391},0).wait(3).to({alpha:1},0).wait(3).to({alpha:0.391},0).wait(3).to({alpha:1},0).wait(3).to({alpha:0.391},0).wait(3).to({alpha:1},0).wait(3).to({alpha:0.391},0).wait(2).to({alpha:1},0).wait(1).to({regY:0,y:-1.7},0).wait(1).to({y:-3.5},0).wait(1).to({y:-5.2},0).wait(1).to({y:-7},0).wait(1).to({y:-8.7},0).wait(1).to({y:-10.5},0).wait(1).to({y:-12.2},0).wait(1).to({y:-14},0).wait(1).to({y:-13.5},0).wait(1).to({y:-12.9},0).wait(1).to({y:-12.4},0).wait(1).to({y:-11.8},0).wait(1).to({y:-11.3},0).wait(1).to({y:-10.7},0).wait(1).to({y:-10.2},0).wait(1).to({y:-9.6},0).wait(1).to({y:-9.1},0).wait(1).to({y:-8.5},0).wait(1).to({y:-8},0).wait(1).to({y:-7.4},0).wait(1).to({y:-6.9},0).wait(1).to({y:-6.4},0).wait(1).to({y:-5.8},0).wait(1).to({y:-5.3},0).wait(1).to({y:-4.7},0).wait(1).to({y:-4.2},0).wait(1).to({y:-3.6},0).wait(1).to({y:-3.1},0).wait(1).to({y:-2.5},0).wait(1).to({y:-2},0).wait(1).to({y:-1.4},0).wait(1).to({y:-0.9},0).wait(1).to({y:-0.3},0).wait(1).to({y:0.2},0).wait(1));

	// Effects
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF6D31").ss(1,1,1).p("AgvgjQBKgPAWBYIhEgMQgagDgBgUQgDgnACABg");
	this.shape_22.setTransform(15.5,20.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF5C18").s().p("AgTAaQgagDgBgUQgDgnACABQBKgPAWBYg");
	this.shape_23.setTransform(15.5,20.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF6D31").ss(1,1,1).p("AAwgjQhLgPgVBYIBEgMQAagDABgUQADgngCABg");
	this.shape_24.setTransform(-15.1,20.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF5C18").s().p("AAwgjQACgBgDAnQgBAUgaADIhEAMQAVhYBLAPg");
	this.shape_25.setTransform(-15.1,20.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFF2CE").s().p("AgxAkQgUgOAAgWQAAgUAUgPQAVgPAcgBQAdABAVAPQAUAPAAAUQAAAWgUAOQgVAQgdAAQgcAAgVgQg");
	this.shape_26.setTransform(-0.1,30.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.498)").s().p("AgdBTQgngHgWgYQgWgYAAghQAAgiAWgYQAWgXAfAAQAfAAAtAWQAuAWAWA+QAWA/g8ADIglABQgjAAgagEg");
	this.shape_27.setTransform(12.6,18.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.498)").s().p("Ag6BGQgZgdAAgpQAAgoAZgdQAYgdAiAAQAjAAAYAdQAZAdAAAoQAAApgZAdQgYAdgjAAQgiAAgYgdg");
	this.shape_28.setTransform(-15,23.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.498)").s().p("AhIBDQgdgcAAgnQAAgnAdgcQAfgbApAAQArAAAdAbQAeAcABAnQgBAngeAcQgdAcgrAAQgpAAgfgcg");
	this.shape_29.setTransform(-7.4,-20.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.498)").s().p("AgxBQQgUghAAgvQAAguAUghQAVggAcAAQAdAAAUAgQAVAhAAAuQAAAvgVAhQgUAggdABQgcgBgVggg");
	this.shape_30.setTransform(5.6,-2.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFF99","#FF0000"],[0,0.988],0,0,0,0,0,17.7).s().p("AhoB6QgsgzAAhHQAAhHAsgyQArgzA9AAQA9AAAsAzQAsAyAABHQAABHgsAzQgsAyg9AAQg9AAgrgyg");
	this.shape_31.setTransform(-4.8,-3.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.498)").s().p("Ag0A5QgWgXAAgiQAAghAWgYQAWgXAeAAQAfAAAWAXQAWAYAAAhQAAAigWAXQgWAZgfAAQgeAAgWgZg");
	this.shape_32.setTransform(8.8,17.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,17.8).s().p("AgmB6QgQgyAAhIQAAhHAQgzQAQgzAWAAQAXAAAQAzQAQAzAABHQAABIgQAyQgQAzgXAAQgWAAgQgzg");
	this.shape_33.setTransform(-0.4,30.4,0.5,0.407);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,10).s().p("AgVA7QgJgYAAgjQAAgiAJgYQAJgYAMgBQANABAJAYQAJAYAAAiQAAAjgJAYQgJAZgNAAQgMAAgJgZg");
	this.shape_34.setTransform(-0.3,28.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,11.1).s().p("AgYBEQgKgcABgoQgBgnAKgcQALgcANAAQAPAAAJAcQALAcAAAnQAAAogLAcQgJAcgPAAQgNAAgLgcg");
	this.shape_35.setTransform(-0.2,27);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,12.3).s().p("AgaBNQgLgfAAguQAAgsALggQALggAPAAQAQAAALAgQALAgAAAsQAAAugLAfQgLAggQAAQgPAAgLggg");
	this.shape_36.setTransform(-0.2,25.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,13.4).s().p("AgcBWQgMgkAAgyQAAgyAMgkQAMgjAQAAQARAAAMAjQAMAkAAAyQAAAygMAkQgMAkgRAAQgQAAgMgkg");
	this.shape_37.setTransform(-0.2,23.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,14.5).s().p("AgfBfQgNgnAAg4QAAg3ANgoQANgnASAAQATAAANAnQANAoAAA3QAAA4gNAnQgNAogTAAQgSAAgNgog");
	this.shape_38.setTransform(-0.1,21.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,15.6).s().p("AghBoQgOgrAAg9QAAg8AOgsQAOgrATAAQAUAAAOArQAOAsAAA8QAAA9gOArQgOAsgUAAQgTAAgOgsg");
	this.shape_39.setTransform(-0.1,20.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,16.7).s().p("AgjBxQgPgugBhDQABhBAPgwQAPguAUAAQAWAAAOAuQAQAwAABBQAABDgQAuQgOAwgWgBQgUABgPgwg");
	this.shape_40.setTransform(0,18.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,17.5).s().p("AgmB4QgPgyAAhGQAAhFAPgyQAQgyAWAAQAXAAAPAyQAQAyAABFQAABGgQAyQgPAygXAAQgWAAgQgyg");
	this.shape_41.setTransform(0,17.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,17.1).s().p("AglB1QgPgxAAhEQAAhDAPgyQAQgvAVAAQAWAAAPAvQAQAyAABDQAABEgQAxQgPAwgWABQgVgBgQgwg");
	this.shape_42.setTransform(0,17.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,16.8).s().p("AgkByQgPgvAAhDQAAhCAPgwQAPgvAVAAQAWAAAPAvQAPAwAABCQAABDgPAvQgPAwgWAAQgVAAgPgwg");
	this.shape_43.setTransform(0,18.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,16.5).s().p("AgjBvQgPgtAAhCQAAhAAPgvQAPgtAUgBQAVABAPAtQAPAvAABAQAABCgPAtQgPAvgVgBQgUABgPgvg");
	this.shape_44.setTransform(-0.1,18.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,16.1).s().p("AgiBtQgPgtAAhAQAAg/APgtQAOgtAUAAQAVAAAOAtQAPAtAAA/QAABAgPAtQgOAtgVAAQgUAAgOgtg");
	this.shape_45.setTransform(-0.1,19.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,15.8).s().p("AgiBqQgOgsAAg+QAAg9AOgsQAPgsATAAQAUAAAOAsQAPAsAAA9QAAA+gPAsQgOArgUAAQgTAAgPgrg");
	this.shape_46.setTransform(-0.1,19.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,15.4).s().p("AggBnQgOgqgBg9QABg7AOgrQANgrATAAQAUAAAOArQAOArAAA7QAAA9gOAqQgOArgUAAQgTAAgNgrg");
	this.shape_47.setTransform(-0.1,20.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,15.1).s().p("AggBkQgOgpAAg7QAAg6AOgqQANgpATAAQATAAAOApQAOAqAAA6QAAA7gOApQgOAqgTAAQgTAAgNgqg");
	this.shape_48.setTransform(-0.1,21);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,14.7).s().p("AgfBhQgOgoAAg5QAAg4AOgpQANgoASAAQATAAANAoQANApAAA4QAAA5gNAoQgNApgTAAQgSAAgNgpg");
	this.shape_49.setTransform(-0.1,21.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,14.4).s().p("AgfBeQgNgmABg4QgBg3ANgnQANgnASAAQATAAAMAnQANAnABA3QgBA4gNAmQgMAogTAAQgSAAgNgog");
	this.shape_50.setTransform(-0.1,22);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,14.1).s().p("AgeBcQgNgmAAg2QAAg1ANgmQANgmARAAQASAAANAmQANAmAAA1QAAA2gNAmQgNAmgSAAQgRAAgNgmg");
	this.shape_51.setTransform(-0.1,22.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,13.7).s().p("AgdBZQgMglAAg0QAAgzAMglQAMglARAAQASAAAMAlQAMAlAAAzQAAA0gMAlQgMAlgSAAQgRAAgMglg");
	this.shape_52.setTransform(-0.2,23.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,13).s().p("AgcBUQgLgjAAgxQAAgwALgjQAMgiAQAAQARAAALAiQAMAjAAAwQAAAxgMAjQgLAigRAAQgQAAgMgig");
	this.shape_53.setTransform(-0.2,24.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,12.7).s().p("AgbBRQgLgiAAgvQAAguALgiQAMghAPAAQARAAAKAhQAMAiAAAuQAAAvgMAiQgKAhgRAAQgPAAgMghg");
	this.shape_54.setTransform(-0.2,24.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,12.4).s().p("AgaBOQgLggAAguQAAgtALggQALggAPAAQAQAAALAgQALAgAAAtQAAAugLAgQgLAggQAAQgPAAgLggg");
	this.shape_55.setTransform(-0.2,25.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,12).s().p("AgZBLQgLgfAAgsQAAgrALgfQAKgfAPAAQAPAAAMAfQAKAfAAArQAAAsgKAfQgMAfgPAAQgPAAgKgfg");
	this.shape_56.setTransform(-0.2,25.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,11.7).s().p("AgYBJQgLgfAAgqQAAgpALgeQAKgeAOAAQAPAAALAeQAKAeAAApQAAAqgKAfQgLAdgPAAQgOAAgKgdg");
	this.shape_57.setTransform(-0.2,26.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,11.3).s().p("AgYBGQgKgdAAgpQAAgoAKgdQAKgcAOAAQAPAAAJAcQALAdAAAoQAAApgLAdQgJAcgPAAQgOAAgKgcg");
	this.shape_58.setTransform(-0.2,26.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,11).s().p("AgXBDQgKgbAAgoQAAgmAKgcQAKgcANABQAOgBAKAcQAKAcAAAmQAAAogKAbQgKAcgOAAQgNAAgKgcg");
	this.shape_59.setTransform(-0.3,27.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,10.6).s().p("AgWBAQgKgaAAgmQAAgkAKgbQAJgaANAAQAOAAAJAaQAKAbAAAkQAAAmgKAaQgJAagOAAQgNAAgJgag");
	this.shape_60.setTransform(-0.3,27.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,10.3).s().p("AgWA9QgJgZAAgkQAAgiAJgaQAKgaAMAAQANAAAJAaQAKAaAAAiQAAAkgKAZQgJAagNAAQgMAAgKgag");
	this.shape_61.setTransform(-0.3,28.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,10).s().p("AgVA6QgJgYAAgiQAAghAJgYQAJgYAMAAQANAAAJAYQAJAYAAAhQAAAigJAYQgJAYgNAAQgMAAgJgYg");
	this.shape_62.setTransform(-0.3,28.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,9.6).s().p("AgUA4QgJgXAAghQAAgfAJgYQAJgWALAAQAMAAAJAWQAJAYAAAfQAAAhgJAXQgJAWgMAAQgLAAgJgWg");
	this.shape_63.setTransform(-0.3,29.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#2AFFFF","#0000FF"],[0,0.988],0,0,0,0,0,9.3).s().p("AgTA1QgJgWAAgfQAAgeAJgWQAIgVALAAQAMAAAJAVQAHAWABAeQgBAfgHAWQgJAVgMAAQgLAAgIgVg");
	this.shape_64.setTransform(-0.3,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22}]},5).to({state:[{t:this.shape_25},{t:this.shape_24}]},5).to({state:[{t:this.shape_26}]},5).to({state:[{t:this.shape_31,p:{x:-4.8,y:-3.7}},{t:this.shape_30,p:{x:5.6,y:-2.7}},{t:this.shape_29,p:{x:-7.4,y:-20.2}},{t:this.shape_28,p:{x:-15,y:23.4}},{t:this.shape_27}]},5).to({state:[{t:this.shape_31,p:{x:0.5,y:1.1}},{t:this.shape_30,p:{x:10.8,y:-5.7}},{t:this.shape_29,p:{x:-10.2,y:-13.9}},{t:this.shape_28,p:{x:-14,y:11.9}},{t:this.shape_32}]},2).to({state:[{t:this.shape_31,p:{x:-4.8,y:-3.7}},{t:this.shape_30,p:{x:5.6,y:-2.7}},{t:this.shape_29,p:{x:-7.4,y:-20.2}},{t:this.shape_28,p:{x:-15,y:23.4}},{t:this.shape_27}]},2).to({state:[{t:this.shape_31,p:{x:0.5,y:1.1}},{t:this.shape_30,p:{x:10.8,y:-5.7}},{t:this.shape_29,p:{x:-10.2,y:-13.9}},{t:this.shape_28,p:{x:-14,y:11.9}},{t:this.shape_32}]},2).to({state:[{t:this.shape_31,p:{x:-4.8,y:-3.7}},{t:this.shape_30,p:{x:5.6,y:-2.7}},{t:this.shape_29,p:{x:-7.4,y:-20.2}},{t:this.shape_28,p:{x:-15,y:23.4}},{t:this.shape_27}]},2).to({state:[]},2).to({state:[{t:this.shape_33,p:{scaleX:0.5,scaleY:0.407,x:-0.4,y:30.4}}]},20).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_33,p:{scaleX:1,scaleY:1,x:0,y:16.8}}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_33,p:{scaleX:0.5,scaleY:0.407,x:-0.4,y:30.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-32.2,44.2,64.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-22,-32.2,44.2,67.5), rect, rect, rect, rect, rect=new cjs.Rectangle(-28.7,-35.9,55.1,73.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-22,-32.2,44.2,64.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-22,-32.2,44.2,69.7), new cjs.Rectangle(-22,-33.9,44.2,71), new cjs.Rectangle(-22,-35.7,44.2,72.3), new cjs.Rectangle(-22,-37.4,44.2,73.7), new cjs.Rectangle(-22,-39.2,44.2,75), new cjs.Rectangle(-22,-40.9,44.2,76.3), new cjs.Rectangle(-22,-42.7,44.2,77.7), new cjs.Rectangle(-22,-44.4,44.2,79), new cjs.Rectangle(-22,-46.2,44.2,80.3), new cjs.Rectangle(-22,-45.6,44.2,79.9), new cjs.Rectangle(-22,-45.1,44.2,79.5), new cjs.Rectangle(-22,-44.5,44.2,79.1), new cjs.Rectangle(-22,-44,44.2,78.6), new cjs.Rectangle(-22,-43.4,44.2,78.2), new cjs.Rectangle(-22,-42.9,44.2,77.8), new cjs.Rectangle(-22,-42.3,44.2,77.4), new cjs.Rectangle(-22,-41.8,44.2,76.9), new cjs.Rectangle(-22,-41.2,44.2,76.5), new cjs.Rectangle(-22,-40.7,44.2,76.1), new cjs.Rectangle(-22,-40.1,44.2,75.7), new cjs.Rectangle(-22,-39.6,44.2,75.3), new cjs.Rectangle(-22,-39.1,44.2,74.9), new cjs.Rectangle(-22,-38.5,44.2,74.4), new cjs.Rectangle(-22,-38,44.2,74.1), new cjs.Rectangle(-22,-37.4,44.2,73.6), new cjs.Rectangle(-22,-36.9,44.2,73.2), new cjs.Rectangle(-22,-36.3,44.2,72.8), new cjs.Rectangle(-22,-35.8,44.2,72.4), new cjs.Rectangle(-22,-35.2,44.2,72), new cjs.Rectangle(-22,-34.7,44.2,71.5), new cjs.Rectangle(-22,-34.1,44.2,71.1), new cjs.Rectangle(-22,-33.6,44.2,70.7), new cjs.Rectangle(-22,-33,44.2,70.3), new cjs.Rectangle(-22,-32.5,44.2,69.8), new cjs.Rectangle(-22,-32,44.2,69.5)];


(lib.TitleScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.timeDisplay = new cjs.Text("TIME - 0:00", "31px 'Helvetica'", "#CC9900");
	this.timeDisplay.name = "timeDisplay";
	this.timeDisplay.textAlign = "right";
	this.timeDisplay.lineHeight = 37;
	this.timeDisplay.lineWidth = 232;
	this.timeDisplay.parent = this;
	this.timeDisplay.setTransform(390,257.1);

	this.scoreDisplay = new cjs.Text("Score - 0", "31px 'Helvetica'", "#FF9999");
	this.scoreDisplay.name = "scoreDisplay";
	this.scoreDisplay.textAlign = "right";
	this.scoreDisplay.lineHeight = 37;
	this.scoreDisplay.lineWidth = 232;
	this.scoreDisplay.parent = this;
	this.scoreDisplay.setTransform(390,320.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scoreDisplay},{t:this.timeDisplay}]}).wait(1));

	// ship
	this.instance = new lib.Ship("single",59);
	this.instance.parent = this;
	this.instance.setTransform(58,327,2.034,2.034,26.5,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// titles
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3333CC").s().p("ALFKIIgkgIIAAiIIA+ANIAjABQAQABAHgGQAIgGAAgLQAAgJgJgJIg4gtQgQgOgPgSQgPgSgJgVQgJgXAAgdQAAgfALgZQALgYAVgRQAUgQAcgIQAbgJAgAAIBbAJIAAB/IgxgDIgMACIgJAEQgEAEAAAGQAAAFAJAJIA0AsQAQAOANASQANATAJAXQAJAXAAAdQAAAdgJAbQgHASgMAPIgLANQgUASgfAMQgfALgrAAgALaJKIA+AGQATAAASgEQASgEAOgLQAOgKAJgQQAIgQAAgYQAAgTgJgRQgKgSgQgRIhBg9QgPgPgKgPQgKgQAAgQQAAgZAQgNQAPgNAjAAIAhACIAAgSIgggCQglAAgYARQgMAIgGANQgFANAAASQAAASAJARQAKARAPAQIBCA+QAPAPAKAQQAKAQAAARQAAARgGAMQgFANgLAJQgWAQgnAAIg+gGgA1EKIIgkgIIAAiIIA+ANIAjABQAQABAHgGQAIgGAAgLQAAgJgJgJIg4gtQgQgOgPgSQgPgSgJgVQgJgXAAgdQAAgfALgZQALgYAVgRQAUgQAcgIQAbgJAgAAIBbAJIAAB/IgxgDIgMACIgJAEQgEAEAAAGQAAAFAJAJIA0AsQAQAOANASQANATAJAXQAJAXAAAdQAAAdgJAbQgHASgMAPIgLANQgUASgfAMQgfALgrAAgA0vJKIA+AGQATAAASgEQASgEAOgLQAOgKAJgQQAIgQAAgYQAAgTgJgRQgKgSgQgRIhBg9QgPgPgKgPQgKgQAAgQQAAgZAQgNQAPgNAjAAIAhACIAAgSIgggCQglAAgYARQgMAIgGANQgFANAAASQAAASAJARQAKARAPAQIBCA+QAPAPAKAQQAKAQAAARQAAARgGAMQgFANgLAJQgWAQgnAAIg+gGgATBKEIAAinIhRAAIAACnIiRAAIAAnFICRAAIAACaIBRAAIAAiaICRAAIAAHFgAT9GiIAACsIARAAIAAlYIgRAAIAACcIjIAAIAAicIgSAAIAAFYIASAAIAAisgAHkKEIAAnFICaAAIAAHFgAIoJOIASAAIAAlYIgSAAgAEkKEIAAijIhdCIIhdiIIAACjIiPAAIAAnFIB2AAIB2CuIB2iuIB4AAIAAHFgAFfJOIASAAIAAlYIgSAAIiYDfIiYjfIgSAAIAAFYIASAAIAAk4ICYDdICYjdgAjdKEIhEhzIAABzIiQAAIAAnFICcAAQAsAAAkALQAmAMAbAXIAYAZIASAeQAIARAEASQAEATAAAVQAAAjgKAYQgJAYgMAPQgOASgRAMIBVCVgAiwJOIAVAAIhEhyQATgHAOgJQAPgKALgOQAWgbAAgrQAAgdgMgXQgLgXgVgPQgUgPgbgIQgbgHggAAIhKAAIAAFYIASAAIAAhnIA4AAQAbAAAZgGgAp6KEIAAnFICZAAIAAHFgAo3JOIASAAIAAlYIgSAAgAs2KEIhhiLIAACLIiTAAIAAnFICTAAIAABoIBWhoICxAAIigDQICoD1gAsSJOIAVAAIiEjCIB5iWIgVAAIi3DhIAAjhIgSAAIAAFYIASAAIAAhcIBHhYgAlcHXIAAjRIA4AAQAfAAAYAGQAYAIASANQAjAbAAAyQAAAzgjAbQgSANgYAGQgYAIgfAAgAkhGeIAIAAQAaAAASgMQASgLAAgcQAAgbgSgLQgSgMgaAAIgIAAgAhAi4QgXgEgWgKQgrgSggggQghghgTgsQgJgVgEgYQgFgXAAgYQAAgYAFgXQAEgXAJgWQATgsAhghQAggfArgTQAPgHAQgEIAOgEQAXgEAZAAQAfAAAdAIQAQAEAPAHQAsATAgAfQAgAhATAsQATArAAAxQAAAYgFAXQgFAYgJAVQgTAsggAhQggAggsASQgrATgwAAQgZAAgXgFgAhUpCQgfAOgYAYQgYAYgOAgQgNAfAAAkQAAAkANAgQAOAgAYAXQAYAYAfANQAgAOAkAAQAjAAAggOQAfgNAYgYQAYgXANggQAOggAAgkQAAgkgOgfQgNgggYgYQgYgYgfgOQgggNgjAAQgkAAggANgAoNjEQgtgSgggfQgRgPgMgUQgNgSgJgWQgTgsAAg1QAAg2ATgsQAKgWANgTQANgSAQgQQAhgfArgRQAOgGAOgDIARgEQAXgEAZAAQAnAAAeAIIACAAQAdAHAVAJQAZALASANIhHB+IgYgQIgbgKQgQgFgVAAQgVAAgRAHQgSAIgOANQgNAMgHASQgIARAAAUQAAATAIASQAIASANANQAOAMATAIQASAHAVABQAWAAARgHIAdgLQANgIALgKIBHB+QgSAOgZAMQgWAKgfAIQgeAIgoAAQg1AAgtgRgAnvpDQgfAMgYAXQgYAXgPAgQgHARgEARIgEAmQAAAoAOAgQAOAgAZAXQAYAXAhAMQAhAMAkAAIAlgEIAcgHIAXgLIgKgQIgUAKIgYAHIgiAEQglAAgegNQgegMgVgVQgUgVgMgdQgLgdAAggQAAghALgcQAMgcAUgWQAUgVAegMQAdgMAkAAIAfACIAYAGIATAIIAKgQIgXgJIgagHIgjgCQgjAAggAMgASBi/IAAlOIhUAAIAAh3IE9AAIAAB3IhUAAIAAFOgARio9IBhAAIAAFIIASAAIAAlIIBhAAIAAgRIjUAAgAMNi/IAAnFIELAAIAAB3Ih7AAIAAAzIB5AAIAABwIh5AAIAAA0ICAAAIAAB3gANQj1ICaAAIAAgQIiIAAIAAiVICBAAIAAgRIiBAAIAAiSICIAAIAAgRIiaAAgAJNi/IAAijIhdCIIhdiIIAACjIiRAAIAAnFIB4AAIB2CuIB2iuIB3AAIAAHFgAKIj1IARAAIAAlZIgRAAIiYDgIiYjgIgSAAIAAFZIASAAIAAk4ICYDdICYjdgAhNkRQgcgMgWgWQgVgVgMgcQgMgdAAggQAAggAMgdQAMgcAVgVQAWgWAcgMQAcgMAhAAQAfAAAdAMQAcAMAVAWQAWAVAMAcQAMAdAAAgQAAAggMAdQgMAcgWAVQgVAWgcAMQgdANgfAAQghAAgcgNgAg1n5QgSAIgMANQgNAMgIASQgHARAAAUQAAATAHASQAIASANANQAMAMASAIQARAHAUABQATgBARgHQARgIANgMQANgNAIgSQAHgSAAgTQAAgUgHgRQgIgSgNgMQgNgNgRgIQgRgHgTAAQgUAAgRAHg");
	this.shape.setTransform(249.4,96.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("A/P/PMA+fAAAMAAAA+fMg+fAAAg");
	this.shape_1.setTransform(200,200);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("A/PfQMAAAg+fMA+fAAAMAAAA+fg");
	this.shape_2.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TitleScreen, rect = new cjs.Rectangle(-1,-1,402,402), [rect]);


// stage content:
(lib.Untitled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var c, w, h, s, d, isImmune, isBoost, isPlaying, increaseDifficulty, startTime, currentTime, titleScreen;
		var backGround, starField1, starField2, spaceCorridor1, spaceCorridor2;
		var hud, shieldBar, pointsDisplay, timeDisplayString;
		var game, ship, shields, obstacles, nextObstacle, pickups, nextPickup, currentPoints;
		var laser, isFiring;
		
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
		}
		
		function gameLoop(e) {
			if (isPlaying) {
				
				if(shields == 0) {
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
			if((nextPickup -= a) < 0) {
				addPickup();
			}
			for(var i = pickups.numChildren - 1; i >= 0; i--) {
				var shield = pickups.getChildAt(i);
				shield.y += a / 2;
				if(shield.y > h + 100) {
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
			if(shields < 4) {
				shields++;
				shieldBar.gotoAndStop(shields);
				c.Sound.play("Pickup");
			}
		}
		
		function performObstacleMovements(a) {
			if((nextObstacle -= a) < 0) {
				addObstacle();
			}
			for(var i = obstacles.numChildren - 1; i >=0; i--) {
				var obstacle = obstacles.getChildAt(i);
				obstacle.y += a;
				if(obstacle.y > h + 300) {
					obstacles.removeChild(obstacle);
				}
				if(isFiring) {
					var obstacleGTL = obstacle.globalToLocal(0, 0);
					var laserGTL = laser.globalToLocal(0, 0);
					if (obstacleGTL.x < laserGTL.x + laser.nominalBounds.width &&
						obstacleGTL.x + obstacle.nominalBounds.width > laserGTL.x &&
						obstacleGTL.y < laserGTL.y + laser.nominalBounds.height &&
						obstacle.nominalBounds.height + obstacleGTL.y > laserGTL.y) {
							obstacles.removeChild(obstacle);
							var explosion = new lib.Obstacle_explosion();
							explosion.x = obstacle.x;
							explosion.y = obstacle.y;
							stage.addChild(explosion);
							c.Tween.get(explosion, {
								override: true
							}).to({
								y: explosion.y + 50
							}, 1000, c.Ease.linear).call(function () {
								stage.removeChild(explosion);
							});
					}
				}
			}
			var obstacleTarget = obstacles.getObjectUnderPoint(ship.x, ship.y, 1);
			if(obstacleTarget) {
				damage();
			}
		}
		
		function damage() {
			if(shields > 0 && !isImmune){
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
			if(!isFiring){
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
				}, 1200, c.Ease.quintOut).call(function() {
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
			shield.x = random(0,w);
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
			var coinFlip = random(0,1);
			//renders normal or alternative obstacle depending on coin flip
			var obstacle = coinFlip === 0 ? new lib.Obstacle() : new lib.ObstacleAlt();
			if(side == 1) {
				obstacle.x = w - random(-200, 300);
			}else{
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];
// library properties:
lib.properties = {
	width: 400,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"sounds/BGM.mp3?1513679893586", id:"BGM"},
		{src:"sounds/Booster.mp3?1513679893586", id:"Booster"},
		{src:"sounds/Charging.mp3?1513679893586", id:"Charging"},
		{src:"sounds/Damage.mp3?1513679893586", id:"Damage"},
		{src:"sounds/Death.mp3?1513679893586", id:"Death"},
		{src:"sounds/LaserFX.mp3?1513679893586", id:"LaserFX"},
		{src:"sounds/Pickup.mp3?1513679893586", id:"Pickup"},
		{src:"sounds/Title.mp3?1513679893586", id:"Title"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;