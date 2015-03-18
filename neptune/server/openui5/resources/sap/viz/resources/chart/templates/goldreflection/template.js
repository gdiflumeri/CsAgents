(function(){var t=Object.prototype.toString;function c(i){return t.call(i)==='[object Array]'}function d(i){return t.call(i)==='[object Object]'}function _(a,b){for(var i in b){if(c(b[i])){a[i]=b[i].slice()}else if(d(b[i])){a[i]=a[i]||{};_(a[i],b[i])}else{a[i]=b[i]}}return a}function m(){var a={};for(var i=0;i<arguments.length;++i){_(a,arguments[i])}return a}var e="#333333";var f="#d8d8d8";var r={rangeSlider:{sliderStyle:{borderColor:"#d8d8d8",highlightBorderColor:"#707070"},tooltipStyle:{fontColor:"#000000",borderColor:"#bebebe",highlightBorderColor:"#748cb2",backgroundColor:"#f4f3f4"},thumbStyle:{indicatorStartColor:"#fbfbfb",indicatorEndColor:"#cccccc",indicatorPressStartColor:"#e8e8e8",indicatorPressEndColor:"#a4a4a4",indicatorBorderStartColor:"#878787",indicatorBorderEndColor:"#474747",indicatorPressBorderStartColor:"#878787",indicatorPressBorderEndColor:"#474747",indicatorInternalLineColor:"#000000",subRectBorderColor:"#707070",subRectColor:"#bbbbbb",rectOpacity:0.2,rectColor:'#009de0',rectPressOpacity:0.48,rectPressColor:"#636363"}}};var g={background:{border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false},stroke:'#fcdab0',strokeWidth:1},drawingEffect:"normal"}};var l={legend:{drawingEffect:"normal",title:{visible:true},hoverShadow:{color:"#737373"},mouseDownShadow:{color:"#f0ab00"}}};var h={tooltip:{drawingEffect:"normal",background:{borderColor:"#fdc411"}}};var p={plotArea:{drawingEffect:"normal",gridline:{color:"#fcdab0"}}};var z={zAxis:{title:{visible:true},hoverShadow:{color:"#737373"},mouseDownShadow:{color:"#f0ab00"},color:e}};var j={title:{visible:true},gridline:{color:f},hoverShadow:{color:"#737373"},mouseDownShadow:{color:"#f0ab00"},color:e};var s={axisline:{visible:true}};var k={axisline:{visible:true}};var n={axisline:{visible:false}};var o={axisline:{visible:false}};var q={gridline:{type:"line",color:f,showLastLine:true}};var u={title:{applyAxislineColor:true}};var v={xAxis:m(j,n,q),yAxis:j,xAxis2:m(j,n)};var w=m(v,{xAxis:u,xAxis2:u});var x={yAxis:m(j,n,q),xAxis:j,yAxis2:m(j,n)};var y=m(x,{yAxis:u,yAxis2:u});var A=m(g,l,h,p);var B=m(A,v);var C=m(A,v,z);var D=m(A,w);var E=m(A,x,r);var F=m(A,x,z);var G=m(A,y);var H=m(A,v);var I=m(A,w);var J=m(A,x);var K=m(A,y);var L=m(A,x,r);var M=m(A,y);var N=m(A,v);var O=m(A,w);var P=m(A,x,r);var Q=m(A,y);var R=m(A,v);var S=m(A,w);var T=m(A,{yAxis:m(j,n,q),xAxis:j});var U=m(l,p);var V=U;var W=m(l,h,p,{background:{visible:false},plotArea:{valueAxis:{title:{visible:true},gridline:{color:f}},dataline:{fill:{transparency:0}}}});var X=m(A,{yAxis:m(j,n,q),xAxis:m(j,s),xAxis2:m(j,s)});var Y=m(A,{xAxis:m(j,n,q),yAxis:m(j,s),yAxis2:m(j,s)});var Z={legend:{title:{visible:true}}};sap.viz.extapi.env.Template.register({id:"goldreflection",name:"GoldReflection",version:"4.0.0",properties:{'viz/bar':B,'viz/3d_bar':C,'viz/image_bar':B,'viz/multi_bar':B,'viz/dual_bar':D,'viz/multi_dual_bar':D,'viz/column':E,'viz/3d_column':F,'viz/multi_column':E,'viz/dual_column':G,'viz/multi_dual_column':G,'viz/stacked_bar':H,'viz/multi_stacked_bar':H,'viz/dual_stacked_bar':I,'viz/multi_dual_stacked_bar':I,'viz/100_stacked_bar':H,'viz/multi_100_stacked_bar':H,'viz/100_dual_stacked_bar':I,'viz/multi_100_dual_stacked_bar':I,'viz/stacked_column':J,'viz/multi_stacked_column':J,'viz/dual_stacked_column':K,'viz/multi_dual_stacked_column':K,'viz/100_stacked_column':J,'viz/multi_100_stacked_column':J,'viz/100_dual_stacked_column':K,'viz/multi_100_dual_stacked_column':K,'riv/cbar':m(l,{background:{drawingEffect:"normal"},yAxis:j}),'viz/combination':P,'viz/horizontal_combination':R,'viz/dual_combination':Q,'viz/dual_horizontal_combination':S,'viz/boxplot':m(A,{yAxis:m(j,n,q),xAxis:j}),'viz/horizontal_boxplot':m(A,{xAxis:m(j,n,q),yAxis:j}),'viz/waterfall':m(A,{yAxis:m(j,n,q),xAxis:{title:{visible:true},color:e}}),'viz/horizontal_waterfall':m({xAxis:m(j,n,q),yAxis:{title:{visible:true},color:e}}),'viz/stacked_waterfall':J,'viz/horizontal_stacked_waterfall':H,'viz/line':L,'viz/multi_line':L,'viz/dual_line':M,'viz/multi_dual_line':M,'viz/horizontal_line':N,'viz/multi_horizontal_line':N,'viz/dual_horizontal_line':O,'viz/multi_dual_horizontal_line':O,'viz/area':L,'viz/multi_area':L,'viz/100_area':L,'viz/multi_100_area':L,'viz/horizontal_area':N,'viz/multi_horizontal_area':N,'viz/100_horizontal_area':N,'viz/multi_100_horizontal_area':N,'viz/pie':U,'viz/multi_pie':U,'viz/donut':U,'viz/multi_donut':U,'viz/pie_with_depth':V,'viz/donut_with_depth':V,'viz/multi_pie_with_depth':V,'viz/multi_donut_with_depth':V,'viz/bubble':T,'viz/multi_bubble':T,'viz/scatter':T,'viz/multi_scatter':T,'viz/scatter_matrix':T,'viz/radar':W,'viz/multi_radar':W,'viz/tagcloud':{legend:{title:{visible:true}}},'viz/heatmap':{legend:{title:{visible:true}},xAxis:{title:{visible:true},color:e},yAxis:{title:{visible:true},color:e}},'viz/treemap':Z,'viz/mekko':X,'viz/100_mekko':X,'viz/horizontal_mekko':Y,'viz/100_horizontal_mekko':Y,'viz/number':{plotArea:{valuePoint:{label:{fontColor:'#000000'}}}},'info/column':$(E),'info/bar':$(B),'info/line':$(L),'info/pie':$(U),'info/donut':$(U),'info/scatter':b1(T),'info/bubble':b1(T),'info/stacked_column':$(J),'info/stacked_bar':$(H),'info/combination':$(P),'info/stacked_combination':$(P),'info/dual_stacked_combination':a1(Q),'info/dual_column':a1(G),'info/dual_bar':a1(D),'info/dual_line':a1(M),'info/100_stacked_column':$(J),'info/100_stacked_bar':$(H),'info/horizontal_line':$(N),'info/dual_horizontal_line':a1(O),'info/horizontal_combination':$(R),'info/horizontal_stacked_combination':$(R),'info/dual_horizontal_stacked_combination':a1(S),'info/treemap':Z,'info/trellis_column':$(E),'info/trellis_bar':$(B),'info/trellis_line':$(L),'info/trellis_pie':$(U),'info/trellis_donut':$(U),'info/trellis_scatter':b1(T),'info/trellis_bubble':b1(T),'info/trellis_stacked_column':$(J),'info/trellis_stacked_bar':$(H),'info/trellis_combination':$(P),'info/trellis_dual_column':a1(G),'info/trellis_dual_bar':a1(D),'info/trellis_dual_line':a1(M),'info/trellis_100_stacked_column':$(J),'info/trellis_100_stacked_bar':$(H),'info/trellis_horizontal_line':$(N),'info/trellis_dual_horizontal_line':a1(O),'info/trellis_horizontal_combination':$(R),'info/dual_stacked_bar':a1(I),'info/100_dual_stacked_bar':a1(I),'info/dual_stacked_column':a1(K),'info/100_dual_stacked_column':a1(K),'info/time_bubble':b1(T)},css:".v-datapoint .v-boxplotmidline{stroke:#333333}\
         .v-longtick{stroke:#b3b3b3;}\
         .v-m-main .v-background-body{stroke:#fcdab0;stroke-width:1}\
         .v-m-tooltip .v-background{border-color:#fdc411}\
         .v-hovershadow-mousedown{fill:#f0ab00}\
         .v-hovershadow{fill:#737373}"});function $(a){var b={};for(var i in a){if(a.hasOwnProperty(i)){b[i]=a[i]}}b.valueAxis=m(j,o,q);b.categoryAxis=j;c1(b);return b}function a1(a){var b={};for(var i in a){if(a.hasOwnProperty(i)){b[i]=a[i]}}b.valueAxis=m(j,o,q,u);b.categoryAxis=j;b.valueAxis2=m(j,o,u);c1(b);return b}function b1(a){var b={};for(var i in a){if(a.hasOwnProperty(i)){b[i]=a[i]}}b.valueAxis=m(j,k,q);b.valueAxis2=m(j,o);b.sizeLegend=m(a.sizeLegend||{},{title:{visible:true}});c1(b);return b}function c1(a){a.plotArea=a.plotArea||{};a.plotArea.background=a.background;delete a.background;delete a.xAxis;delete a.xAxis2;delete a.yAxis;delete a.yAxis2}})();
