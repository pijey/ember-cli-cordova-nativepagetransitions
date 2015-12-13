import Ember from 'ember';

export function initialize(container){
    Ember.run.next(function(){
        var applicationRoute = container.lookup('route:application');
        if (applicationRoute && typeof applicationRoute.reopen === 'function'){
            //Add "back" action to the application route
            applicationRoute.reopen({
                actions: {
                    back: function(transitionType, transitionOptions){
                        this.router.back(transitionType, transitionOptions);
                    }
                }
            });
        }
    });
}

export default {
  name: 'back-action',
  initialize
};