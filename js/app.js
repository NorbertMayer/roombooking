(function(){
   var app = angular.module('bookingApp', []);
    var books = [
        {
        name: 'Norbert Mayer',
        classid: 'oeamm15eint',
        email: 'helmuth.norbert@gmail.com',
        reason: 'Project',
        time: [
            {
                timeFrom: '8:00',
                timeTo: '10:00'
            }
        ]
    },
        {
        name: 'John Juanda',
        classid: 'oeamm15eint',
        email: 'johnjuanda@gmail.com',
        reason: 'Couseling',
        time: [
            {
                timeFrom: '8:00',
                timeTo: '10:00'
            }
        ]
    },
        {
        name: 'Daniel Negreanu',
        classid: 'oeamm15eint',
        email: 'danielnegreanu@gmail.com',
        reason: 'Project',
        time: [
            {
                timeFrom: '8:00',
                timeTo: '10:00'
            }
        ]
    }
    ]
    
    app.controller('bookingController', function(){
       this.infos = books; 
    });
})();
