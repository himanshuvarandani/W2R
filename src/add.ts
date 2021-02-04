import { Router } from "express"

import addProduct from "./addWholesalerProduct"
import addRetailer from "./addRetailer"
import addRetailerOrder from "./addRetailerOrder"
import addWholesaler from "./addWholesaler"

const router = Router()

router.use("/add_retailer", addRetailer)
router.use("/add_wholesaler", addWholesaler)
router.use("/add_wholesaler_product", addProduct)
router.use("/add_retailer_order", addRetailerOrder)

export default router
