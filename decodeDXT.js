    this.DecodeDXT1toBitmap32=function(encData, decData, w, h, trans) {
        var x=0;
        var y=0;
        var i=0;
        var j=0;
        var k=0;
        var select=0;
        var col0=0;
        var col1=0;
        var colors=[];
        var bitmask=0;
        var temp=undefined;
        var r0=0;
        var g0=0;
        var b0=0;
        var r1=0;
        var g1=0;
        var b1=0;
        trans.set(false);
        if(!(pas.System.Assigned(encData) && pas.System.Assigned(decData))) {
            return;
        };
        temp=encData;
        {y=0; for(var $efor_57_4=(Math.floor(h/4) - 1); y<=$efor_57_4; y++) {
            {x=0; for(var $efor_58_7=(Math.floor(w/4) - 1); x<=$efor_58_7; x++) {
                col0=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 2);
                col1=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 2);
                bitmask=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 4);
                $impl.DecodeColor565(col0, {get:function(){return r0;},set:function(v){r0=v;}}, {get:function(){return g0;},set:function(v){g0=v;}}, {get:function(){return b0;},set:function(v){b0=v;}});
                $impl.DecodeColor565(col1, {get:function(){return r1;},set:function(v){r1=v;}}, {get:function(){return g1;},set:function(v){g1=v;}}, {get:function(){return b1;},set:function(v){b1=v;}});
                colors[0][0]=(r0 << 3);
                colors[0][1]=(g0 << 2);
                colors[0][2]=(b0 << 3);
                colors[0][3]=255;
                colors[1][0]=(r1 << 3);
                colors[1][1]=(g1 << 2);
                colors[1][2]=(b1 << 3);
                colors[1][3]=255;
                if((col0 > col1)) {
                    colors[2][0]=Math.floor((((colors[0][0] << 1) + colors[1][0]) + 1)/3);
                    colors[2][1]=Math.floor((((colors[0][1] << 1) + colors[1][1]) + 1)/3);
                    colors[2][2]=Math.floor((((colors[0][2] << 1) + colors[1][2]) + 1)/3);
                    colors[2][3]=255;
                    colors[3][0]=Math.floor(((colors[0][0] + (colors[1][0] << 1)) + 1)/3);
                    colors[3][1]=Math.floor(((colors[0][1] + (colors[1][1] << 1)) + 1)/3);
                    colors[3][2]=Math.floor(((colors[0][2] + (colors[1][2] << 1)) + 1)/3);
                    colors[3][3]=255;
                } else {
                    trans.set(true);
                    colors[2][0]=Math.floor((colors[0][0] + colors[1][0])/2);
                    colors[2][1]=Math.floor((colors[0][1] + colors[1][1])/2);
                    colors[2][2]=Math.floor((colors[0][2] + colors[1][2])/2);
                    colors[2][3]=255;
                    colors[3][0]=Math.floor(((colors[0][0] + (colors[1][0] << 1)) + 1)/3);
                    colors[3][1]=Math.floor(((colors[0][1] + (colors[1][1] << 1)) + 1)/3);
                    colors[3][2]=Math.floor(((colors[0][2] + (colors[1][2] << 1)) + 1)/3);
                    colors[3][3]=0;
                };
                k=0;
                {j=0; for(var $efor_97_10=3; j<=$efor_97_10; j++) {
                    {i=0; for(var $efor_98_13=3; i<=$efor_98_13; i++) {
                        select=((bitmask & (3 << (k << 1))) >> (k << 1));
                        if(((((x << 2) + i) < w) && (((y << 2) + j) < h))) {
                            decData[(((((y << 2) + j) * w) + ((x << 2) + i)) << 2)]=colors[select];
                        };
                        pas.System.Inc({get:function(){return k;},set:function(v){k=v;}});
                    }
                    };
                }
                };
            }
            };
        }
        };
    };
    this.DecodeDXT3toBitmap32=function(encData, decData, w, h) {
        var x=0;
        var y=0;
        var i=0;
        var j=0;
        var k=0;
        var select=0;
        var col0=0;
        var col1=0;
        var wrd=0;
        var colors=[];
        var bitmask=0;
        var offset=0;
        var temp=undefined;
        var r0=0;
        var g0=0;
        var b0=0;
        var r1=0;
        var g1=0;
        var b1=0;
        var alpha=[];
        if(!(encData && decData)) {
            return;
        }
        temp=encData;
        {y=0; for(var $efor_125_4=(Math.floor(h/4) - 1); y<=$efor_125_4; y++) {
            {x=0; for(var $efor_126_7=(Math.floor(w/4) - 1); x<=$efor_126_7; x++) {
                alpha[0]=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 2);
                alpha[1]=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 2);
                alpha[2]=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 2);
                alpha[3]=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 2);
                col0=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 2);
                col1=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 2);
                bitmask=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 4);
                $impl.DecodeColor565(col0, {get:function(){return r0;},set:function(v){r0=v;}}, {get:function(){return g0;},set:function(v){g0=v;}}, {get:function(){return b0;},set:function(v){b0=v;}});
                $impl.DecodeColor565(col1, {get:function(){return r1;},set:function(v){r1=v;}}, {get:function(){return g1;},set:function(v){g1=v;}}, {get:function(){return b1;},set:function(v){b1=v;}});
                colors[0][0]=(r0 << 3);
                colors[0][1]=(g0 << 2);
                colors[0][2]=(b0 << 3);
                colors[0][3]=255;
                colors[1][0]=(r1 << 3);
                colors[1][1]=(g1 << 2);
                colors[1][2]=(b1 << 3);
                colors[1][3]=255;
                colors[2][0]=Math.floor((((colors[0][0] << 1) + colors[1][0]) + 1)/3);
                colors[2][1]=Math.floor((((colors[0][1] << 1) + colors[1][1]) + 1)/3);
                colors[2][2]=Math.floor((((colors[0][2] << 1) + colors[1][2]) + 1)/3);
                colors[2][3]=255;
                colors[3][0]=Math.floor(((colors[0][0] + (colors[1][0] << 1)) + 1)/3);
                colors[3][1]=Math.floor(((colors[0][1] + (colors[1][1] << 1)) + 1)/3);
                colors[3][2]=Math.floor(((colors[0][2] + (colors[1][2] << 1)) + 1)/3);
                colors[3][3]=255;
                k=0;
                {j=0; for(var $efor_156_10=3; j<=$efor_156_10; j++) {
                    {i=0; for(var $efor_157_13=3; i<=$efor_157_13; i++) {
                        select=((bitmask & (3 << (k << 1))) >> (k << 1));
                        if(((((x << 2) + i) < w) && (((y << 2) + j) < h))) {
                            decData[(((((y << 2) + j) * w) + ((x << 2) + i)) << 2)]=colors[select];
                        };
                        pas.System.Inc({get:function(){return k;},set:function(v){k=v;}});
                    }
                    };
                }
                };
                {j=0; for(var $efor_165_10=3; j<=$efor_165_10; j++) {
                    wrd=alpha[j];
                    {i=0; for(var $efor_167_13=3; i<=$efor_167_13; i++) {
                        if(((((x << 2) + i) < w) && (((y << 2) + j) < h))) {
                            offset=((((((y << 2) + j) * w) + ((x << 2) + i)) << 2) + 3);
                            decData[offset]=(wrd & 15);
                            decData[offset]=(decData[offset] | (decData[offset] << 4));
                        };
                        wrd=(wrd >> 4);
                    }
                    };
                }
                };
            }
            };
        }
        };
    };
    this.DecodeDXT5toBitmap32=function(encData, decData, w, h) {
        var x=0;
        var y=0;
        var i=0;
        var j=0;
        var k=0;
        var select=0;
        var col0=0;
        var col1=0;
        var colors=[];
        var bits=0;
        var bitmask=0;
        var offset=0;
        var temp=undefined;
        var alphamask=undefined;
        var r0=0;
        var g0=0;
        var b0=0;
        var r1=0;
        var g1=0;
        var b1=0;
        var alphas=[];
        if(!(pas.System.Assigned(encData) && pas.System.Assigned(decData))) {
            return;
        };
        temp=encData;
        {y=0; for(var $efor_196_4=(Math.floor(h/4) - 1); y<=$efor_196_4; y++) {
            {x=0; for(var $efor_197_7=(Math.floor(w/4) - 1); x<=$efor_197_7; x++) {
                alphas[0]=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}});
                alphas[1]=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}});
                alphamask=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 6);
                col0=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 2);
                col1=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 2);
                bitmask=temp;
                pas.System.Inc({get:function(){return temp;},set:function(v){temp=v;}}, 4);
                $impl.DecodeColor565(col0, {get:function(){return r0;},set:function(v){r0=v;}}, {get:function(){return g0;},set:function(v){g0=v;}}, {get:function(){return b0;},set:function(v){b0=v;}});
                $impl.DecodeColor565(col1, {get:function(){return r1;},set:function(v){r1=v;}}, {get:function(){return g1;},set:function(v){g1=v;}}, {get:function(){return b1;},set:function(v){b1=v;}});
                colors[0][0]=(r0 << 3);
                colors[0][1]=(g0 << 2);
                colors[0][2]=(b0 << 3);
                colors[0][3]=255;
                colors[1][0]=(r1 << 3);
                colors[1][1]=(g1 << 2);
                colors[1][2]=(b1 << 3);
                colors[1][3]=255;
                colors[2][0]=Math.floor((((colors[0][0] << 1) + colors[1][0]) + 1)/3);
                colors[2][1]=Math.floor((((colors[0][1] << 1) + colors[1][1]) + 1)/3);
                colors[2][2]=Math.floor((((colors[0][2] << 1) + colors[1][2]) + 1)/3);
                colors[2][3]=255;
                colors[3][0]=Math.floor(((colors[0][0] + (colors[1][0] << 1)) + 1)/3);
                colors[3][1]=Math.floor(((colors[0][1] + (colors[1][1] << 1)) + 1)/3);
                colors[3][2]=Math.floor(((colors[0][2] + (colors[1][2] << 1)) + 1)/3);
                colors[3][3]=255;
                k=0;
                {j=0; for(var $efor_226_10=3; j<=$efor_226_10; j++) {
                    {i=0; for(var $efor_227_13=3; i<=$efor_227_13; i++) {
                        select=((bitmask & (3 << (k << 1))) >> (k << 1));
                        if(((((x << 2) + i) < w) && (((y << 2) + j) < h))) {
                            decData[(((((y << 2) + j) * w) + ((x << 2) + i)) << 2)]=colors[select];
                        };
                        pas.System.Inc({get:function(){return k;},set:function(v){k=v;}});
                    }
                    };
                }
                };
                if((alphas[0] > alphas[1])) {
                    alphas[2]=Math.floor((((6 * alphas[0]) + alphas[1]) + 3)/7);
                    alphas[3]=Math.floor((((5 * alphas[0]) + (alphas[1] << 1)) + 3)/7);
                    alphas[4]=Math.floor((((alphas[0] << 2) + (3 * alphas[1])) + 3)/7);
                    alphas[5]=Math.floor((((3 * alphas[0]) + (alphas[1] << 2)) + 3)/7);
                    alphas[6]=Math.floor((((alphas[0] << 1) + (5 * alphas[1])) + 3)/7);
                    alphas[7]=Math.floor(((alphas[0] + (6 * alphas[1])) + 3)/7);
                } else {
                    alphas[2]=Math.floor((((alphas[0] << 2) + alphas[1]) + 2)/5);
                    alphas[3]=Math.floor((((3 * alphas[0]) + (alphas[1] << 1)) + 2)/5);
                    alphas[4]=Math.floor((((alphas[0] << 1) + (3 * alphas[1])) + 2)/5);
                    alphas[5]=Math.floor(((alphas[0] + (alphas[1] << 2)) + 2)/5);
                    alphas[6]=0;
                    alphas[7]=255;
                };
                bits=alphamask;
                {j=0; for(var $efor_252_10=1; j<=$efor_252_10; j++) {
                    {i=0; for(var $efor_253_13=3; i<=$efor_253_13; i++) {
                        if(((((x << 2) + i) < w) && (((y << 2) + j) < h))) {
                            offset=((((((y << 2) + j) * w) + ((x << 2) + i)) << 2) + 3);
                            decData[offset]=alphas[(bits & 7)];
                        };
                        bits=(bits >> 3);
                    }
                    };
                }
                };
                pas.System.Inc({get:function(){return alphamask;},set:function(v){alphamask=v;}}, 3);
                bits=alphamask;
                {j=2; for(var $efor_264_10=3; j<=$efor_264_10; j++) {
                    {i=0; for(var $efor_265_13=3; i<=$efor_265_13; i++) {
                        if(((((x << 2) + i) < w) && (((y << 2) + j) < h))) {
                            offset=((((((y << 2) + j) * w) + ((x << 2) + i)) << 2) + 3);
                            decData[offset]=alphas[(bits & 7)];
                        };
                        bits=(bits >> 3);
                    }
                    };
                }
                };
            }
            };
        }
        };
    };
    DecodeColor565:function(col, r, g, b) {
        r.set((col & 31));
        g.set(((col >> 5) & 63));
        b.set(((col >> 11) & 31));
    }
