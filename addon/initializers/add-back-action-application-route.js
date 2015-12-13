import Ember from 'ember';

export function initialize(container){
    Ember.run.next(function(){
        var applicationRoute = container.lookup('route:application');
        if (applicationRoute && typeof applicationRoute.reopen === 'function'){
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
  name: 'add-back-action-application-route',
  initialize
};