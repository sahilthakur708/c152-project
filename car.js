AFRAME.registerComponent("car",{
    schema:{
        clickCounter:{type:'number', default:0}
    },
    update:function(){
        window.addEventListener('click',(e)=>{
             if(this.data.clickCounter===0){
                this.el.setAttribute('rotation',{x:0,y:-60,z:0})
                this.data.clickCounter+=1
             }
            else if(this.data.clickCounter===1){
                this.el.setAttribute('rotation',{x:0,y:-120,z:0})
                this.data.clickCounter+=1

             }
          else if(this.data.clickCounter===2){
                this.el.setAttribute('rotation',{x:0,y:-180,z:0})
                this.data.clickCounter+=1

             }
             else if(this.data.clickCounter===3){
                this.el.setAttribute('rotation',{x:0,y:-240,z:0})
                this.data.clickCounter+=1

             }
             else if(this.data.clickCounter===4){
                this.el.setAttribute('rotation',{x:0,y:-300,z:0})
                this.data.clickCounter+=1

             }
             else if(this.data.clickCounter===5){
                this.el.setAttribute('rotation',{x:0,y:-360,z:0})
                this.data.clickCounter+=1
             }
             else{
                this.el.setAttribute('rotation',{x:0,y:360,z:0})
                this.data.clickCounter=0
             }
        })
       var rotation=this.el.getAttribute('rotation')
       rotation.y=this.data.clickCounter+rotation.y
    }
})