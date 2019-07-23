const router = require("express").Router();
const orderController = require("../controllers/orderController");

router.post(
  "/orders/create/:staff_id/:table_no",
  orderController.createTableOrder
);
router.patch("/order/:order_id", orderController.addIntoOrder);
router.post("/orders/makecomplete/:order_id", orderController.completeAOrder);
router.post("/orders/homeDelivery/:customer_id", orderController.placeHomeDelivery);
router.patch("/orders/homeDelivery/assignStaff/:home_delivery_id", orderController.assignDeliveryStaff);
router.patch("/orders/homeDelivery/updateDeliveryStatus/:home_delivery_id", orderController.updateDeliveryStatus);
router.get("/orders", orderController.showOrders);
router.get("/orders/table/:table_no", orderController.getTableOrders);
router.get("/orders/staff/:staff_id", orderController.getOrdersByStaff);
router.get("/orders/customer/:customer_id", orderController.getCustomerOrders);
router.delete("/order/:order_id", orderController.deleteOrder);
module.exports = router;
