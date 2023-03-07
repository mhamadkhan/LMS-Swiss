let express = require('express');
let router = express.Router();
const cors = require("cors");
let Order = require('../models/order');
let User = require('../models/user');
let jsonwebtoken = require('jsonwebtoken');
router.use(cors());

const stripe = require('stripe')(String(process.env.STRIPE_SECRET_KEY));

// const calculateOrderAmount = (items) => {
//     // Replace this constant with a calculation of the order's amount
//     // Calculate the order total on the server to prevent
//     // people from directly manipulating the amount on the client
//     return 1400;
//   };
// router.post('/create-payment-intent',async(req,res)=>{
//     console.log(req.body);
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: calculateOrderAmount(1400),
//         currency: "usd",
//         automatic_payment_methods: {
//           enabled: true,
//         },
//       });
    
//       res.send({
//         clientSecret: paymentIntent.client_secret,
//       });
//     });

router.post("/pay", cors(), async (req, res) => {
	let { amount, id, cartData } = req.body;
	amount = amount *100;
	console.log(amount);
	console.log(id);
	console.log(cartData);
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Payment Testing",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment);
		let data = await jsonwebtoken.verify(req.query.token, "FSD m cat says mioon")
        let Suser = await User.findById(data.id);

		let order = await new Order(req.body);
        order.user = Suser.id;
		order.customerName=Suser.firstName +Suser.lastName;
		order.customerEmail = Suser.email;
		order.orderAmount=amount/100;
		order.transactionID=id;
		order.orderItems=cartData;
		await order.save();
		console.log(order);
		res.json({
			message: "Payment successful",
			success: true,
			order
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

router.get('/totalOrders',async(req,res)=>{
	try {
		
		let totalOrders=await Order.find().countDocuments();
		console.log(totalOrders);
		res.json(totalOrders);
	} catch (error) {
		res.send(error.message);
	}

})

module.exports = router;