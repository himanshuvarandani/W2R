import { Router } from "express"

import allRetailerDetails from "./allRetailerDetails"
import allRetailerOrders from "./allRetailerOrders"
import allWholesalerDetails from "./allWholesalerDetails"
import allWholesalerProducts from "./allWholesalerProducts"
import retailerDetails from "./retailerDetails"
import retailerOrderDetails from "./retailerOrderDetails"
import wholesalerDetails from "./wholesalerDetails"
import wholesalerProductDetails from "./wholesalerProductDetails"

const router = Router()

router.use("/all_wholesaler_details", allWholesalerDetails)
router.use("/wholesaler_details", wholesalerDetails)
router.use("/all_wholesaler_products", allWholesalerProducts)
router.use("/wholesaler_product_details", wholesalerProductDetails)
router.use("/all_retailer_details", allRetailerDetails)
router.use("/retailer_details", retailerDetails)
router.use("/all_retailer_orders", allRetailerOrders)
router.use("/retailer_order_details", retailerOrderDetails)

export default router
