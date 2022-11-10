import * as express from "express";
import ItemController from "../controllers/ItemController";
import CategoryController from "../controllers/CategoryController";
import OrderController from "../controllers/OrderController";
import PaymentController from "../controllers/PaymentController";
import DeliveryController from "../controllers/DeliveryController";
import EmployeeController from "../controllers/EmployeeController";
import SupplierController from "../controllers/SupplierController";
import PermissionController from "../controllers/PermissionController";
import LoginController from "../controllers/LoginController";
import ApprovalController from "../controllers/ApprovalController";
import SiteController from "../controllers/SiteController";
import RulesController from "../controllers/IRulesController";
import { multerMiddleWare } from "../middleware/multer";

export default function setRoutes(app:any){

    const router = express();
    const itemControl = new ItemController();
    const categoryControl = new CategoryController();
    const orderControl = new OrderController();
    const paymentControl = new PaymentController();
    const deliveryControl = new DeliveryController();
    const employeeControl = new EmployeeController();
    const supplierControl = new SupplierController();
    const permissionControl = new PermissionController();
    const loginControl = new LoginController();
    const approvalControl = new ApprovalController();
    const siteControl = new SiteController();
    const rulesControl = new RulesController();


    app.use("/api",router);

    //Routes
    // Item Routes
    router.route('/items').post(itemControl.addItem);
    router.route('/items').get(itemControl.getAllItems);
    router.route('/items/supplier/:id').get(itemControl.getItemsBySupplierId);
    router.route('/items/:id').get(itemControl.getItemById);
    router.route('/items/:id').put(itemControl.editItem);
    router.route('/items/:id').delete(itemControl.removeItem);

    //Category Routes
    router.route("/category").post(categoryControl.createCategory);
    router.route("/category").get(categoryControl.getAllCategory);
    router.route("/category/:id").get(categoryControl.getCategoryById);
    router.route("/category/:id").put(categoryControl.updateCategory);
    router.route("/category/:id").delete(categoryControl.deleteCategory);

    // Order Routes
    router.route('/orders').post(orderControl.addOrder);
    router.route('/orders').get(orderControl.viewOrders);
    router.route('/orders/status/:id').put(orderControl.updateOrderStatus);
    router.route('/orders/comments/:id').post(orderControl.addComments);
    router.route('/orders/:status/:empType').get(orderControl.getOrderByStatusAndEmpType);
    router.route('/orders/:id').get(orderControl.getOrderById);
    router.route('/orders/:id').put(orderControl.editOrder);
    router.route('/orders/:id').delete(orderControl.deleteOrder);

    // Payment Routes
    router.route('/payments').post(paymentControl.addPayment);
    router.route('/payments').get(paymentControl.viewPayments);
    router.route('/payments/:id').get(paymentControl.getPaymentById);
    router.route('/payments/:id').put(paymentControl.editPayment);
    router.route('/payments/:id').delete(paymentControl.deletePayment);

    // Delivery Routes
    router.route('/deliveries').post(deliveryControl.addDelivery);
    router.route('/deliveries').get(deliveryControl.viewDeliveries);
    router.route('/deliveries/:id').get(deliveryControl.getDeliveryById);
    router.route('/deliveries/:id').put(deliveryControl.editDelivery);
    router.route('/deliveries/:id').delete(deliveryControl.deleteDelivery);

    // Employee Routes
    router.route('/employees').post(employeeControl.addEmployee);
    router.route('/employees').get(employeeControl.viewEmployees);
    router.route("/employees/status").put(employeeControl.updateEmployeeStatus);
    router.route('/employees/type/:type').get(employeeControl.getEmployeeByType);
    router.route('/employees/:id').get(employeeControl.getEmployeeById);
    router.route('/employees/:id').put(multerMiddleWare({type:'single', path:'employee'}), employeeControl.editEmployee);
    router.route('/employees/image/:name').get(employeeControl.getEmployeeAvatar);
    router.route('/employees/:id').delete(employeeControl.deleteEmployee);
    router.route('/employees/change-password/:id').put(employeeControl.updateEmployeePassword);

    // Supplier Routes
    router.route("/supplier").post(supplierControl.createSupplier);
    router.route("/supplier").get(supplierControl.getAllSupplier);
    router.route("/supplier/:id").get(supplierControl.getSupplierById);
    router.route("/supplier/:id").put(supplierControl.updateSupplier);
    router.route("/supplier/:id").delete(supplierControl.deleteSupplier);

    // Permission Routes
    router.route("/permission").post(permissionControl.createPermission);
    router.route("/permission").get(permissionControl.getAllPermission);
    router.route("/permission/:id").get(permissionControl.getPermissionById);
    router.route("/permission/:id").put(permissionControl.updatePermission);
    router.route("/permission/:id").delete(permissionControl.deletePermission);


    // Login Routes
    router.route('/auth/login').post(loginControl.authenticate);


    // Approval Routes
    router.route("/approval").post(approvalControl.addApproval);
    router.route("/approval").get(approvalControl.getAllApprovals);
    router.route("/approval/:id").get(approvalControl.getApprovalById);
    router.route("/approval/:id").put(approvalControl.editApproval);
    router.route("/approval/:id").delete(approvalControl.removeApproval);

    //Site Routes
    router.route("/site").post(siteControl.createSite);
    router.route("/site").get(siteControl.getAllSite);
    router.route("/site/:id").get(siteControl.getSiteById);
    router.route("/site/:id").put(siteControl.updateSite);
    router.route("/site/:id").delete(siteControl.deleteSite);

    //Rules Routes
    router.route("/rules").post(rulesControl.createRules);
    router.route("/rules").get(rulesControl.getAllRules);
    router.route("/rules/:id").get(rulesControl.getRulesById);
    router.route("/rules/:id").put(rulesControl.updateRules);
    router.route("/rules/:id").delete(rulesControl.deleteRules);

}
