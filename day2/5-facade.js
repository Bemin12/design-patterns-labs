class InventorySystem {
  checkStock(productId) {
    console.log(`Checking stock for product ${productId}`);
    return true;
  }
}

class PaymentGateway {
  processPayment(amount) {
    console.log(`Processing payment of ${amount}`);
    return true;
  }
}

class ShippingService {
  shipProduct(productId) {
    console.log(`Shipping product ${productId}`);
  }
}

class OrderFacade {
  constructor() {
    this.inventory = new InventorySystem();
    this.gateway = new PaymentGateway();
    this.shipping = new ShippingService();
  }

  placeOrder(productId, amount) {
    if (this.inventory.checkStock(productId)) {
      if (this.gateway.processPayment(amount)) {
        this.shipping.shipProduct(productId, amount);
        console.log('Order placed successfully');
        return;
      }
    }

    console.log('Order failed');
  }
}

// Usage
const orderFacade = new OrderFacade();
orderFacade.placeOrder('TV', 2);
