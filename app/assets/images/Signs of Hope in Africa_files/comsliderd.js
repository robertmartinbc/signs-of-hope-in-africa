function comSlider16140() { 
var self = this; 
var g_HostRoot = "";
var g_TransitionTimeoutRef = null;
var g_CycleTimeout = 7;
var g_currFrame = 0;
var g_currDate = new Date(); var g_currTime = g_currDate.getTime();var g_microID = g_currTime + '-' + Math.floor((Math.random()*1000)+1); 
var g_InTransition = 0;var g_Navigation = 0;this.getCurrMicroID = function() { return g_microID; } 
this.comSLoadImgInFrame = function(frameid, src) 
{
     jqCS16140("#comSImg16140_"+frameid+" img").attr("src", src).load(function(){
         if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0)
         {
             //broken image
         }
     });
}
this.setNavStyle = function(id, background, color, border, type)
{
 if (background == "")
 {
     jqCS16140("#comSNavigation16140_"+id).css("background", "none");
 }
 else
 {
     jqCS16140("#comSNavigation16140_"+id).css("background", "#"+background);
 }
 jqCS16140("#comSNavigation16140_"+id).css("background", "#"+background);
 jqCS16140("#comSNavigation16140_"+id).css("color", "#"+color);
 jqCS16140("#comSNavigation16140_"+id).css("border", border+"px solid #"+color);
 var margin = (-1)*border;
 jqCS16140("#comSNavigation16140_"+id).css("margin-top", margin+"px");
 jqCS16140("#comSNavigation16140_"+id).css("margin-left", margin+"px");
 if (type == 0)
 {
   jqCS16140("#comImgBullet16140_"+id).show();
   jqCS16140("#comImgBulletcurr16140_"+id).hide();
 }
 else
 {
   jqCS16140("#comImgBulletcurr16140_"+id).show();
   jqCS16140("#comImgBullet16140_"+id).hide();
 }
}
this.targetClearTimeouts = function()
{
 if (g_TransitionTimeoutRef != null)     { window.clearTimeout(g_TransitionTimeoutRef); g_TransitionTimeoutRef = null;}
}
this.getNextFrame = function()
{
 var ret = g_currFrame;
 ret++;
 if (ret == 3) {ret = 0;}
 return ret;
}
this.getPrevFrame = function()
{
 var ret = g_currFrame;
 ret--;
 if (ret < 0) {ret = (3-1);}
 return ret;
}
this.stopAll = function()
{
jqCS16140("#comSFrame16140_0").stop(true, true);
jqCS16140("#comSFrameSek16140_0").stop(true, true);
jqCS16140("#comSFrame16140_1").stop(true, true);
jqCS16140("#comSFrameSek16140_1").stop(true, true);
jqCS16140("#comSFrame16140_2").stop(true, true);
jqCS16140("#comSFrameSek16140_2").stop(true, true);
}
this.switchFrame = function()
{
     g_Navigation = 1;
     var currFrame=g_currFrame;
     g_currFrame = self.getNextFrame();
     self.switchFromToFrame(currFrame, g_currFrame);
}
 
this.switchFramePrev = function()
{
     g_Navigation = 0;
     var currFrame=g_currFrame;
     g_currFrame = self.getPrevFrame();
     self.switchFromToFrame(currFrame, g_currFrame);
}
 
this.switchToFrame = function(toFrame)
{
     if ((g_InTransition == 1) || (g_currFrame == toFrame))
     {
         if (g_currFrame == toFrame) { return false; }
         self.stopAll();
     }
     var currFrame=g_currFrame;
     g_currFrame=toFrame;
     if (currFrame < g_currFrame)
         g_Navigation = 0;
     else
         g_Navigation = 1;
     self.switchFromToFrame(currFrame, g_currFrame);
}
 
this.switchFromToFrame =  function(currFrame, toFrame)
{
     if (g_InTransition == 1)
     {
         self.stopAll();
     }
g_InTransition = 1;
self.startTransitionTimer();
     jqCS16140("#comSFrameSek16140_"+currFrame+"").css("z-index", 1);
     jqCS16140("#comSFrameSek16140_"+toFrame+"").css("z-index", 2);
     jqCS16140("#comSFrameSek16140_"+toFrame+"").hide().fadeIn(1000, function() { 
 } ); 
  self.setNavStyle(currFrame, '','FFFFFF',0, 0);  self.setNavStyle(toFrame, '','00FF00',0, 1); jqCS16140("#comSFrame16140_"+toFrame).show("slide", { direction: "left" }, 7000, function() {if (g_microID !=objcomSlider16140.getCurrMicroID()){return false;}; jqCS16140("#comSFrame16140_"+currFrame).hide(); g_InTransition = 0;
});
     
     
     
     
}
this.startTransitionTimer = function()
{
  self.targetClearTimeouts(); g_TransitionTimeoutRef = window.setTimeout(function() {objcomSlider16140.onTransitionTimeout(g_microID)}, g_CycleTimeout*1000);
}
this.onTransitionTimeout = function(microID)
{
   if (g_microID != microID) { return false; }
     self.switchFrame();
}
this.initFrame = function()
{
g_currFrame = 0;
self.startTransitionTimer();
     jqCS16140("#comSFrameSek16140_"+g_currFrame+"").hide().fadeIn(1000);
  jqCS16140("#comSFrame16140_"+g_currFrame).show(1, function(){if (g_microID !=objcomSlider16140.getCurrMicroID()){return false;};self.setNavStyle(g_currFrame, '','00FF00',0, 1);     });
  return true;
}

                this.scriptLoaded = function()
                {
                    jqCS16140 = jQuery16140.noConflict(false);
                    jqCS16140("#comslider_in_point_16140").html('<div id="comSWrapper16140_" name="comSWrapper16140_" style="overflow:hidden; background: none; border:0px solid #00ff00; width:950px; height:431px; position: relative;"><div id="comSFrame16140_0" name="comSFrame16140_0" style="position:absolute; top:0px; left:0px; width:950px; height:431px;"><div id="comSFrameSek16140_0" name="comSFrameSek16140_0" style="position:absolute; overflow:hidden; top:0px; left:0px; width:950px; height:431px;"><div id="comSImg16140_0" name="comSImg16140_0" style="position:absolute; overflow:hidden; top:0px; left:0px; width:950px; height:431px;"><img style="border:0px;"></img></div></div></div><div id="comSFrame16140_1" name="comSFrame16140_1" style="position:absolute; top:0px; left:0px; width:950px; height:431px;"><div id="comSFrameSek16140_1" name="comSFrameSek16140_1" style="position:absolute; overflow:hidden; top:0px; left:0px; width:950px; height:431px;"><div id="comSImg16140_1" name="comSImg16140_1" style="position:absolute; overflow:hidden; top:0px; left:0px; width:950px; height:431px;"><img style="border:0px;"></img></div></div></div><div id="comSFrame16140_2" name="comSFrame16140_2" style="position:absolute; top:0px; left:0px; width:950px; height:431px;"><div id="comSFrameSek16140_2" name="comSFrameSek16140_2" style="position:absolute; overflow:hidden; top:0px; left:0px; width:950px; height:431px;"><div id="comSImg16140_2" name="comSImg16140_2" style="position:absolute; overflow:hidden; top:0px; left:0px; width:950px; height:431px;"><img style="border:0px;"></img></div></div></div><a name="0" style="cursor:pointer; text-decoration:none !important; font-size:12px;" href=""><div id="comSNavigation16140_0" name="comSNavigation16140_0" style="margin-left:0px; margin-top:0px; border: 0px solid #FFFFFF; position:absolute; height:15px; width:15px; top:409px; left:884px; z-index: 5; text-align: center; vertical-align:bottom;  color: #FFFFFF;background: #; "><div id="height_workaround" style="font-size:1px;line-height:0;height:15px;">&nbsp;<img style="position: absolute; top: 0px; left: 0px; border:0px;" id="comImgBullet16140_0" name="comImgBullet16140_0" src="comslider16140/imgnav/nav13739448900.png?timstamp=1373944890" /><img style="display: none; position: absolute; position: absolute; top: 0px; left: 0px; border:0px;" id="comImgBulletcurr16140_0" name="comImgBulletcurr16140_0" src="comslider16140/imgnav/bulls13739448900.png?timstamp=1373944890" /></div></div></a><script type="text/javascript"> jqCS16140("#comSNavigation16140_0").fadeTo(0,0.6);</script><a name="1" style="cursor:pointer; text-decoration:none !important; font-size:12px;" href=""><div id="comSNavigation16140_1" name="comSNavigation16140_1" style="margin-left:0px; margin-top:0px; border: 0px solid #FFFFFF; position:absolute; height:15px; width:15px; top:409px; left:906px; z-index: 5; text-align: center; vertical-align:bottom;  color: #FFFFFF;background: #; "><div id="height_workaround" style="font-size:1px;line-height:0;height:15px;">&nbsp;<img style="position: absolute; top: 0px; left: 0px; border:0px;" id="comImgBullet16140_1" name="comImgBullet16140_1" src="comslider16140/imgnav/nav13739448901.png?timstamp=1373944890" /><img style="display: none; position: absolute; position: absolute; top: 0px; left: 0px; border:0px;" id="comImgBulletcurr16140_1" name="comImgBulletcurr16140_1" src="comslider16140/imgnav/bulls13739448901.png?timstamp=1373944890" /></div></div></a><script type="text/javascript"> jqCS16140("#comSNavigation16140_1").fadeTo(0,0.6);</script><a name="2" style="cursor:pointer; text-decoration:none !important; font-size:12px;" href=""><div id="comSNavigation16140_2" name="comSNavigation16140_2" style="margin-left:0px; margin-top:0px; border: 0px solid #FFFFFF; position:absolute; height:15px; width:15px; top:409px; left:928px; z-index: 5; text-align: center; vertical-align:bottom;  color: #FFFFFF;background: #; "><div id="height_workaround" style="font-size:1px;line-height:0;height:15px;">&nbsp;<img style="position: absolute; top: 0px; left: 0px; border:0px;" id="comImgBullet16140_2" name="comImgBullet16140_2" src="comslider16140/imgnav/nav13739448902.png?timstamp=1373944890" /><img style="display: none; position: absolute; position: absolute; top: 0px; left: 0px; border:0px;" id="comImgBulletcurr16140_2" name="comImgBulletcurr16140_2" src="comslider16140/imgnav/bulls13739448902.png?timstamp=1373944890" /></div></div></a><script type="text/javascript"> jqCS16140("#comSNavigation16140_2").fadeTo(0,0.6);</script></div>');
                    jqCS16140("#comslider_in_point_16140 a").bind('click',  function() { if ((this.name.length > 0) && (isNaN(this.name) == false)) { self.switchToFrame(parseInt(this.name)); return false;} });
                self.comSLoadImgInFrame("0", "comslider16140/img/Signs_of_Hope_in_Africa_1.jpg?1373944861");
jqCS16140("#comSFrame16140_0").hide();
self.comSLoadImgInFrame("1", "comslider16140/img/Signs_of_Hope_in_Africa_2.jpg?1373944861");
jqCS16140("#comSFrame16140_1").hide();
self.comSLoadImgInFrame("2", "comslider16140/img/Signs_of_Hope_in_Africa_3.jpg?1373944861");
jqCS16140("#comSFrame16140_2").hide();
jqCS16140("#comSFrame16140_2").hide();
self.initFrame();

}
var g_CSIncludes = new Array();
var g_CSLoading = false;
var g_CSCurrIdx = 0; 
 this.include = function(src, last) 
                {
                    if (src != '')
                    {				
                            var tmpInclude = Array();
                            tmpInclude[0] = src;
                            tmpInclude[1] = last;					
                            //
                            g_CSIncludes[g_CSIncludes.length] = tmpInclude;
                    }            
                    if ((g_CSLoading == false) && (g_CSCurrIdx < g_CSIncludes.length))
                    {


                            var oScript = null;
                            if (g_CSIncludes[g_CSCurrIdx][0].split('.').pop() == 'css')
                            {
                                oScript = document.createElement('link');
                                oScript.href = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/css';
                                oScript.rel = 'stylesheet';

                                oScript.onloadDone = true; 
                                g_CSLoading = false;
                                g_CSCurrIdx++;								
                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                        self.scriptLoaded(); 
                                else
                                        self.include('', false);
                            }
                            else
                            {
                                oScript = document.createElement('script');
                                oScript.src = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/javascript';

                                //oScript.onload = scriptLoaded;
                                oScript.onload = function() 
                                { 
                                        if ( ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true; 
                                                g_CSLoading = false;
                                                g_CSCurrIdx++;								
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                };
                                oScript.onreadystatechange = function() 
                                { 
                                        if ( ( "loaded" === oScript.readyState || "complete" === oScript.readyState ) && ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true;
                                                g_CSLoading = false;	
                                                g_CSCurrIdx++;
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                }
                                
                            }
                            //
                            document.getElementsByTagName("head").item(0).appendChild(oScript);
                            //
                            g_CSLoading = true;
                    }

                }
                

}
objcomSlider16140 = new comSlider16140();
objcomSlider16140.include('comslider16140/js/jquery-ui-1.10.3.effects.js', false);
objcomSlider16140.include('comslider16140/js/helpers.js', false);
objcomSlider16140.include('comslider16140/js/jquery-1.10.1.js', false);
objcomSlider16140.include('comslider16140/js/idangerous.swiper.css', true);
