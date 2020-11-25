function ArrayList() {
    this.array = [];
    this.size = 0;
}
ArrayList.prototype.myInit = function(array) {
    this.array = array;
    this.size = array.length;
} 

ArrayList.prototype.myPush = function (arg) {
    this.array[this.array.length] = arg;

    return ++this.size;
}

ArrayList.prototype.myPop = function () {
    let deleteElement = this.array[this.array.length - 1];
    this.array.length -= 1;
    this.size--;

    return deleteElement ;
}

ArrayList.prototype.myShift = function () {
    let deleteElement = this.array[0];

    for(let i = 1; i < this.array.length; i++) {
        this.array[i-1] = this.array[i];
    }

    this.array.length -=1;
    this.size--;

    return deleteElement;
}

ArrayList.prototype.myUnShift = function (arg) {
    let length = this.array.length ;

    for(let i = length; i >= 0; i--) {
        this.array[i] = this.array[i - 1];
    }
    this.array[0] = arg;

    return ++this.size;
}

ArrayList.prototype.myClear = function() {
    this.array.length = 0;
    this.size = 0;
}

ArrayList.prototype.myToString = function() {
    let listString = '[';

    for(let i = 0; i < this.array.length; i++) {
        if(i === this.size - 1) {
        listString += this.array[i]; 
        } else {
            listString += `${this.array[i]}, `; 
        }
    }
    listString += ']'

    return listString;
}

ArrayList.prototype.myRevers = function() {
    const box = [];
    let x = 0;

    for(let i = this.array.length - 1; i >= 0; i--) {
        box[x++] = this.array[i];
    }
    this.array = box;

    return this.array;
}

ArrayList.prototype.mySlice = function(index1, index2) {

    this.newarr = [];

    if(index2 === undefined){
        for(let i = 0; i < this.array.length; i++) { 
            this.newarr[i] = this.array[i+index1];
        }

        this.newarr.length = this.array.length - index1;

    return this.newarr;
    }
    this.newarr.length = index2;
    for(let i = 0; i < this.array.length; i++) { 
        this.newarr[i] = this.array[i+index1];
    }
    this.newarr.length = index2 - index1;

    return this.newarr;

}

const alist = new ArrayList;
alist.myInit([1, 2, 3]);
// console.log(alist.myUnShift(8));
// console.log(alist);
// console.log(alist.myRevers());
//alist.mySlice();
console.log(alist.mySlice(1))

module.exports = ArrayList;


