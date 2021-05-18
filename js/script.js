var  app = new Vue (
    {
        el: `#root`,
        data: {
            images :[
                "https://petfamily.it/wp-content/uploads/2020/05/pastore-tedesco-in-posa.jpg",
               "https://www.zooplus.it/magazine/wp-content/uploads/2018/12/cane-corso.jpg",
               "https://www.razzedicani.net/wp-content/uploads/2016/03/san-bernardo-e1466581666914.jpg",
              "https://i.pinimg.com/originals/bc/b9/58/bcb95857be8178a07be7367e5ed69c2f.jpg"       
            ],
            indexs : 0,
    
        },

        methods: {
            left: function() {
                this.indexs--;
                if (this.indexs == -1) {
                    this.indexs = this.images.length - 1;
                }
            },
            right: function() {
                this.indexs++;
                if(this.indexs == this.images.length){
                    this.indexs = 0
                }
            },
            active : function() {
                if(index == this.indexs){
                   this.active=true 
                }
                console.log(this.active);
            }

        }
    }
);