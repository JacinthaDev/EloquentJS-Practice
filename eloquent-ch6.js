//A Vector Type

class Vec{
    constructor(x, y){
        this.x = x
        this.y = y
    }
    
    plus(vector){
        return  new Vec((this.x + vector.x),  (this.y + vector.y))
    }
    
    minus(vector){
        return new Vec((this.x - vector.x),  (this.y - vector.y))
    }

    get length(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
  // → 5


// Group

class Group{

    constructor (){
        this.group =[]

    }

    add(item){
        let index = this.group.indexOf(item)
        //indexOf returns -1 if the value is not found. So if the value is not already in the array, we should expect to see -1 as the index 
        if (index === -1){
            this.group.push(item)
        }
    }

    delete(item){
        //find the index of the item we want to delete
        let index = this.group.indexOf(item)
        //indexOf returns -1 if the value is not found. So if the value is found, it's going to return something other than -1
        if (index !== -1){
            //delete the item by starting at it's index and removing just one item
            this.group.splice(index,1)
        }
    }

    has(item){
        //includes returns true or false 
        return this.group.includes(item)
    }

    //make a static method called from that takes a parameter
    static from(a) {
        //make a new instance of the Group object
        let g = new Group();
        //iterate through each item passed in the from(a)
        for (let item of a) {
        //run the add method which pushing unique items only into the array held in the constructor
            g.add(item);
        }
        return g;
    }


    //Make it iterable -- not sure what this does

    [Symbol.iterator](){
        return new GroupIterator(this)
    }

}

class GroupIterator{
    constructor(o){
        this.i = 0
        this.group = o.group
    }

    next(){
        if (this.i == this.group.length || this.i >10){
            return {done: true}
        }

        let value = this.group[this.i]
        this.i++
        return {value, done: false}
    }
}


for (let value of Group.from(['a', 'b', 'c'])) {
    console.log(value)
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false




//Borrowing a method

let map = {one: true, two: true, hasOwnProperty: true};
// Fix this call
//console.log(map.hasOwnProperty("one"));
console.log(hasOwnProperty.call(map, 'one'));
// → true