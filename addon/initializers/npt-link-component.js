import Ember from 'ember';

export function initialize(application) {
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
      // init: function(){
      //  this._super(...arguments);
     //    var transitionType = this.get("transitionType");
     //    var transitionOptions = this.get("transitionOptions");
        
      // }
    });

    Ember.inject.service('-routing').reopen({
          transitionType:transitionType,
          transitionOptions:transitionOptions,
          back: function(){
            console.log("npt - routing back");
            var transitionType = this.get("transitionType");
            if(transitionType !== null && transitionType !== null){
              //Update router routes to pop the last two routes

              //Transition to the previous page 
              this.get("router");
            }
          },
          transitionTo: function(routeName, models, queryParams, shouldReplace) {
            console.log(transitionType);
            console.log("npt - routing transitionTo " + JSON.stringify(routeName));
            if(this.get("transitionType") !== null){
            //Generate the url
              var url = this.generateURL(routeName, models, queryParams);
              console.log("npt - Transition url " + url);
              console.log("npt - Transition options " + JSON.stringify(transitionOptions));
              //Do the transition
              // window.plugins.nativepagetransitions.slide({
              //     options: that.get("transitionOptions"),
              //     "href" : url
              // });
            }
            else {
              this._super(routeName, models, queryParams, shouldReplace);
            }
          }
        });


    Ember.Router.reopen({
      /**
          Sets the `transitionActivated` attribute of the `LinkComponent`'s HTML element.
          @property transitionActivated
          @default false (no transition by default)
          @public
      **/
      transitionActivated:false,
      /**
          Sets the `routes` attribute of the `LinkComponent`'s HTML element.
          @property routes
          @default false (no transition by default)
          @public
      **/
      routes:[],
      /**
        @override
      **/
      didTransition: function() {
        console.log("npt - router didTransition");
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
      back:function(){
        console.log("npt - router back");
        //Transition to the previous page

        //Remove the last two routes from the route history
        this.get("routes").pop();
      }
    });

}

export default {
  name: 'npt-link-component',
  initialize
};
