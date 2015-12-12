import Ember from 'ember';

export function initialize(application) {
  // const config = ENV['nptTransition'] || {};
  var transitionOptions = null;
  var transitionType = null;
  console.log(application);
// if(application.get("nptTransition")){
//  transitionOptions = application.get("nptTransition.transitionOptions");
//  transitionType = application.get("nptTransition.transitionType");
// }
  Ember.LinkComponent.reopen({
    /**
        Sets the `transitionOptions` attribute of the `LinkComponent`'s HTML element.
        @property transitionOptions
        @default null (using native-page-transition default values)
        @public
    **/
    // transitionOptions: {
   //    "direction"        : "left",
   //      "duration"         :  400,
   //      "slowdownfactor"   :    1,
   //      "iosdelay"         :  -1,
   //      "androiddelay"     :  -1,
   //      "winphonedelay"    :  -1,
   //      "fixedPixelsTop"   :    0,
   //      "fixedPixelsBottom":   0 
   //  },
    transitionOptions:transitionOptions,
    /**
        Sets the `transitionType` attribute of the `LinkComponent`'s HTML element.
        @property transitionType
        @default null (no transition by default)
        @public
    **/
    // transitionType: "slide",
    transitionType: transitionType,

    // /**
    //  Override
    // **/
    init: function(){
      // this.get("_routing");
      this._super(...arguments);
      // var transitionType = this.get("transitionType");
      // var transitionOptions = this.get("transitionOptions");
    }
  });
  
  Ember.Route.reopen({
    activate: function () {
      this.get('cordova').on('backbutton', this, this.goBack);
    },
    deactivate: function() {
        this.get('cordova').off('backbutton', this, this.goBack);
    },
    goBack: function(){
      this.send("back", "right");
    },
  });

  Ember.Router.reopen({
    /**
        Sets the `transitionActivated` attribute of the `LinkComponent`'s HTML element.
        @property transitionActivated
        @default false (no transition by default)
        @public
    **/
    transitionActivated:true,
    /**
        Sets the `routes` attribute of the `LinkComponent`'s HTML element.
        @property routes
        @default false (no transition by default)
        @public
    **/
    transitionOptions: {
       "direction"        : "left",
         "duration"         :  400,
         "slowdownfactor"   :    1,
         "iosdelay"         :  -1,
         "androiddelay"     :  -1,
         "winphonedelay"    :  -1,
         "fixedPixelsTop"   :    0,
         "fixedPixelsBottom":   0 
    },
     /**
         Sets the `transitionType` attribute of the `LinkComponent`'s HTML element.
         @property transitionType
         @default null (no transition by default)
         @public
     **/
    transitionType: "slide",
    routes:[],
    /**
      @override
    **/
    didTransition: function() {
      //Update local route history
      this.get("routes").push(this.get("url"));
      
      console.log(this.get("routes"));
      if(this.get("transitionActivated")){
        window.plugins.nativepagetransitions.executePendingTransition(
          function (msg) {console.log("success: " + msg);}, // called when the animation has finished
          function (msg) {alert("error: " + msg);} // called in case you pass in weird values
        );
      }
      this._super(...arguments);
    },
    /**
    Allow to transition back to the previous url
      @public
    **/
    back: function(transitionDirection, transitionType){
      if(this.get("routes").length > 1){
        var backRoute = this.get("routes")[this.get("routes").length - 2];
        console.log("npt - routing back to " + backRoute);
        transitionType = transitionType === undefined ? "slide" : transitionType;
        transitionDirection = transitionDirection === undefined ? "right" : transitionDirection;
        var options = {
          href: backRoute,
          "direction" : transitionDirection,
        };
        var that = this;
        //Transition to the previous page
        window.plugins.nativepagetransitions.slide(
          options,
          function (msg) {console.log("success: " + msg);}, // called when the animation has finished
          function (msg) {alert("error: " + msg);} // called in case you pass in weird values
        );
        //Remove the last route from the route history
        that.get("routes").pop();
        that.get("routes").pop();

        history.back();
      }
    },
    _doTransition: function(routeName, models, queryParams) {
      console.log("npt - routing transitionTo " + JSON.stringify(routeName));
      if(this.get("transitionActivated")){
        //Generate the url
        var args = [];
        if (typeof routeName === 'string') {
          args.push('' + routeName);
        }
        args.push.apply(args, models);
        args.push({ queryParams: queryParams });

        var url = this.generate.apply(this, args);
        console.log("npt - Transition url " + url);
        console.log("npt - Transition options " + JSON.stringify(this.get("transitionOptions")));
        // Do the transition
        window.plugins.nativepagetransitions.slide({
            options: this.get("transitionOptions"),
            "href" : url
        });
      }
      this._super(routeName, models, queryParams);
    }
  });

}

export default {
  name: 'npt-link-component',
  initialize
};
