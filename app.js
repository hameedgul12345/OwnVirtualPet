var pet={
    name:'mano',
    type:'cat',
    age:1,
    happiness: 80,
    hunger: 50,
    fed:function(){
        this.hunger=this.hunger-20;
    }
}

function playWithPet(){
    alert('meo')
}
playWithPet()