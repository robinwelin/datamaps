require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.scale.quantize");suite.addBatch({quantize:{topic:function(){return d3.scale.quantize},"has the default domain [0, 1]":function(e){var t=e();assert.deepEqual(t.domain(),[0,1]),assert.equal(t(.25),0)},"has the default range [0, 1]":function(e){var t=e();assert.deepEqual(t.range(),[0,1]),assert.equal(t(.75),1)},"maps a number to a discrete value in the range":function(e){var t=e().range([0,1,2]);assert.equal(t(0),0),assert.equal(t(.2),0),assert.equal(t(.4),1),assert.equal(t(.6),1),assert.equal(t(.8),2),assert.equal(t(1),2)},"coerces domain to numbers":function(e){var t=e().domain(["0","100"]);assert.strictEqual(t.domain()[0],0),assert.strictEqual(t.domain()[1],100)},"only considers the extent of the domain":function(e){var t=e().domain([-1,0,100]);assert.deepEqual(t.domain(),[-1,100])},"clamps input values to the domain":function(e){var t={},n={},r={},i=e().range([t,n,r]);assert.equal(i(-0.5),t),assert.equal(i(1.5),r)},"range cardinality determines the degree of quantization":function(e){var t=e();assert.inDelta(t.range(d3.range(0,1.001,.001))(1/3),.333,1e-6),assert.inDelta(t.range(d3.range(0,1.01,.01))(1/3),.33,1e-6),assert.inDelta(t.range(d3.range(0,1.1,.1))(1/3),.3,1e-6),assert.inDelta(t.range(d3.range(0,1.2,.2))(1/3),.4,1e-6),assert.inDelta(t.range(d3.range(0,1.25,.25))(1/3),.25,1e-6),assert.inDelta(t.range(d3.range(0,1.5,.5))(1/3),.5,1e-6),assert.inDelta(t.range(d3.range(1))(1/3),0,1e-6)},"range values are arbitrary":function(e){var t={},n={},r={},i=e().range([t,n,r]);assert.equal(i(0),t),assert.equal(i(.2),t),assert.equal(i(.4),n),assert.equal(i(.6),n),assert.equal(i(.8),r),assert.equal(i(1),r)}}}),suite.export(module)