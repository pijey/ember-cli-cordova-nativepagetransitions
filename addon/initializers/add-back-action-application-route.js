import Ember from 'ember';

export function initialize(container, app){
    Ember.run.next(function(){
        var applicationRoute = container.lookup('route:application');
        if (applicationRoute && typeof applicationRoute.reopen === 'function'){
            applicationRoute.reopen({
                actions: {
                    back: function(transitionDirection, transitionType){
                        this.router.back(transitionDirection, transitionType);
                    }
                }
            });
        }
    });
}

export default {
  name: 'add-back-action-application-route',
  initialize
};