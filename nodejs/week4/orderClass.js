class Order {
    constructor (orderType, status, created, modified, id) {
        
        
        this.orderType = orderType;
        //console.log(this.orderType);
        this.status = status;
        this.created = new Date (Date.now());
        this.modified = new Date (Date.now());
        this.id = this.id;
    }

   
};

const orderOne = new Order ('Salad', 'ordered');
console.log(orderOne);
const orderTwo = new Order ('Pizza', 'preparing');
console.log(orderTwo);

const orderThree = new Order ('Burger', 'delivered'); 
console.log(orderThree);



module.exports = Order; 