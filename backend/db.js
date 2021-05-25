const mongoose = require("mongoose");

mongoose.connect(
  "your connection string",
  "mongodb+srv://test1:Ameh@2021@cluster0.yf0qq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const paymentSchema = new mongoose.Schema({
  id: String,
  itemId: String,
  paid: Boolean,
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = {
  Payment,
};
