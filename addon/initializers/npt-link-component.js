import Ember from 'ember';

export function initialize(container, application) {

  var config = container.lookupFactory('config:environment').nptTransition;
  config.backTransitionType = null;
  config.transitionType = null;
  config.backTransitionOptions = null;
  config.transitionOptions = null;

  container.register("npt-link:config", config, { instantiate: false });
  application.inject('router', 'nptLinkConfig', 'npt-link:config');

  Ember.LinkComponent.reopen({
    transitionOptions: null,
    transitionType: null,
    _invoke: function() {
      
      if(this.get("transitionType") === null){
        config.transitionType=config.defaultTransitionType;
        config.transitionOptions=config.defaultTransitionOptions;
      }
      else {
        config.transitionType=this.get("transitionType");
        config.transitionOptions=this.get("transitionOptions");
      }
      this._super(...arguments);
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
      this.send("back");
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
    routes:[],
    /**
      @override
    **/
    init: function(){
      // if(window.plugins !== undefined && window.plugins.nativepagetransitions !== undefined){
      //   this.set("transitionActivated", false);
      // }
      // else {
      //   console.error("NativePageTransitions plugin is not detected, did you install it ?");
      // }
      this._super(...arguments);
    },
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
    back: function(transitionType, transitionOptions){
      if(transitionType === undefined || transitionType === null){
        transitionType = this.get("nptLinkConfig.defaultBackTransitionType");
        transitionOptions = this.get("nptLinkConfig.defaultBackTransitionOptions");
      }
      
      if(this.get("routes").length > 1){
        var backRoute = this.get("routes")[this.get("routes").length - 2];
        // transitionOptions.href=backRoute;
        console.log("npt - routing back to " + backRoute);
        var that = this;
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
        console.log("npt - Transition type " + this.get("nptLinkConfig.transitionType"));
        console.log("npt - Transition options " + JSON.stringify(this.get("nptLinkConfig.transitionOptions")));
        // Do the transition
        if(this.get("nptLinkConfig.transitionType") === "slide"){
          window.plugins.nativepagetransitions.slide(this.get("nptLinkConfig.transitionOptions"));
        }
        else if(this.get("nptLinkConfig.transitionType") === "flip"){
          window.plugins.nativepagetransitions.flip(this.get("nptLinkConfig.transitionOptions"));
        }
        else if(this.get("nptLinkConfig.transitionType") === "fade"){
          window.plugins.nativepagetransitions.fade(this.get("nptLinkConfig.transitionOptions"));
        }
        else if(this.get("nptLinkConfig.transitionType") === "curl"){
          window.plugins.nativepagetransitions.curl(this.get("nptLinkConfig.transitionOptions"));
        }
        
      }
      this._super(routeName, models, queryParams);
    }
  });

}

export default {
  name: 'npt-link-component',
  initialize
};
