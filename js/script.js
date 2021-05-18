var  app = new Vue (
    {
        el: `#root`,
        data: {
            images :[
                "https://petfamily.it/wp-content/uploads/2020/05/pastore-tedesco-in-posa.jpg",
               "https://www.zooplus.it/magazine/wp-content/uploads/2018/12/cane-corso.jpg"
                
            ],

            index : 0
        },

        methods: {
            left: function() {
               index = index++;
               console.log(index);
            }

        }
    }
);