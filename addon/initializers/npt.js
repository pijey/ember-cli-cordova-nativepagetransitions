import Ember from 'ember';

export function initialize(container, application) {

  //Get the npt config in environment.js
  var config = container.lookupFactory('config:environment').npt;

  //Init 
  config.backTransitionType = null;
  config.backTransitionOptions = null;
  config.transitionType = null;
  config.transitionOptions = null;

  //Register the config object and inject it in the router
  container.register("npt:config", config, { instantiate: false });
  application.inject('router', 'nptConfig', 'npt:config');

  Ember.LinkComponent.reopen({
    transitionOptions: null,
    transitionType: null,
    /**
      @override
    **/
    _invoke: function() {
      if(this.get("transitionType") === null){
        //If no transitionType is given, use default transition options
        config.transitionType=config.defaultTransitionType;
        config.transitionOptions=config.defaultTransitionOptions;
      }
      else {
        //else use given transition options !
        config.transitionType=this.get("transitionType");
        config.transitionOptions=this.get("transitionOptions");
      }
      this._super(...arguments);
    }
  });
  
  //Back button management (Android only)
  Ember.Route.reopen({
    activate: function () {
      this.get('cordova').on('backbutton', this, this.goBack);
    },
    deactivate: function() {
        this.get('cordova').off('backbutton', this, this.goBack);
    },
    goBack: function(){
      //On back button event, send action "back", see add-back-action-application-route
      this.send("back");
    },
  });

  Ember.Router.reopen({
    transitionActivated:config.transitionActivated,
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
    **/
    back: function(transitionType, transitionOptions){
      if(this.get("transitionActivated")){
        if(transitionType === undefined || transitionType === null){
          //Use default back transition when no transitionType is given
          transitionType = this.get("nptConfig.defaultBackTransitionType");
          transitionOptions = this.get("nptConfig.defaultBackTransitionOptions");
        }
        
        //No back action necessary when in home page
        if(this.get("routes").length > 1){
          var backRoute = this.get("routes")[this.get("routes").length - 2];
          console.log("npt - routing back to " + backRoute);

          //Transition to the previous page
          if(transitionType === "slide"){
            window.plugins.nativepagetransitions.slide(transitionOptions);
          }
          else if(transitionType === "flip"){
            window.plugins.nativepagetransitions.flip(transitionOptions);
          }
          else if(transitionType === "fade"){
            window.plugins.nativepagetransitions.fade(transitionOptions);
          }
          else if(transitionType === "curl"){
            window.plugins.nativepagetransitions.curl(transitionOptions);
          }
          //Remove the last two routes from the route history
          this.get("routes").pop();
          this.get("routes").pop();
        }
      }
      //Go back
      history.back();
    },
    /**
      @override
    **/
    _doTransition: function(routeName, models, queryParams) {
      console.log("npt - routing transitionTo " + JSON.stringify(routeName));
      if(this.get("transitionActivated")){
        // Do the transition
        if(this.get("nptConfig.transitionType") === "slide"){
          window.plugins.nativepagetransitions.slide(this.get("nptConfig.transitionOptions"));
        }
        else if(this.get("nptConfig.transitionType") === "flip"){
          window.plugins.nativepagetransitions.flip(this.get("nptConfig.transitionOptions"));
        }
        else if(this.get("nptConfig.transitionType") === "fade"){
          window.plugins.nativepagetransitions.fade(this.get("nptConfig.transitionOptions"));
        }
        else if(this.get("nptConfig.transitionType") === "curl"){
          window.plugins.nativepagetransitions.curl(this.get("nptConfig.transitionOptions"));
        }
      }
      this._super(routeName, models, queryParams);
    }
  });

}

export default {
  name: 'npt',
  initialize
};
