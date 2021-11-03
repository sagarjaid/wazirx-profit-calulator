// Stat the Shit!

// first input buy trade //

var buyCoins = document.querySelector('input[name="buy-coins"]');

buyCoins.addEventListener("change", (e) => {
  var buy_value = buyCoins.value;

  var buy_trade = Math.fround(buy_value);

  var buy_coins = parseFloat(buy_trade.toFixed(4));

  document.getElementById("buy-coins-1").innerText = buy_coins;
  document.getElementById("buy-coins-2").innerText = buy_coins;

  console.log("buy trade  : " + buy_coins);

  // second input buy at price //

  var buyCoinAtINR = document.querySelector('input[name="buy-at-price"]');

  buyCoinAtINR.addEventListener("change", (e) => {
    var buy_at_value = buyCoinAtINR.value;

    var buy_coin_at_inr = Math.fround(buy_at_value);

    var buy_coin_at_price_inr = parseFloat(buy_coin_at_inr.toFixed(7));

    document.getElementById("buy-atp").innerText = buy_coin_at_price_inr;

    console.log("Buy at : " + buy_coin_at_price_inr);

    // third input sell at price //

    var sellCoinAtINR = document.querySelector('input[name="sell-at-price"]');

    sellCoinAtINR.addEventListener("change", (e) => {
      var sell_at_value = sellCoinAtINR.value;

      var sell_coin_at_inr = Math.fround(sell_at_value);

      var sell_coin_at_price_inr = parseFloat(sell_coin_at_inr.toFixed(7));

      document.getElementById("sell-atp").innerText = sell_coin_at_price_inr;

      console.log("Sell at : " + sell_coin_at_price_inr);

      /////////////////////////// other code start here ///////////////////////

      // Trading fees

      var trading_fees_percentage = 0.1;

      // Total USDT/Coins

      var coins = buy_coins / buy_coin_at_price_inr;

      var total_coins = parseFloat(coins.toFixed(2));

      document.getElementById("total-coins").innerText = total_coins;

      console.log("COINS : " + total_coins);

      // fess value

      var buy_fees = buy_coins * (trading_fees_percentage / 100);

      var new_buy_fees = parseFloat(buy_fees.toFixed(2));

      document.getElementById("new-buy-fees").innerText = new_buy_fees;

      console.log("buy fees : " + new_buy_fees);

      //  profit per coin

      var ppc = sell_coin_at_price_inr - buy_coin_at_price_inr;

      var profit_per_coin = parseFloat(ppc.toFixed(6));

      document.getElementById("profit-per-coin").innerText = profit_per_coin;

      console.log("profit per coin : " + profit_per_coin);

      // profit with fees

      var pwf = profit_per_coin * total_coins;

      var profit_with_fess = parseFloat(pwf.toFixed(2));

      document.getElementById("profit-with-fess").innerText = profit_with_fess;
      document.getElementById("profit-with-fess-2").innerText =
        profit_with_fess;
      document.getElementById("profit-with-fess-3").innerText =
        profit_with_fess;

      console.log("profit with fees : " + profit_with_fess);

      //  sell tarde

      var sell_trade = buy_coins + profit_with_fess;

      var sell_coins = parseFloat(sell_trade.toFixed(4));

      document.getElementById("sell-coins").innerText = sell_coins;
      document.getElementById("sell-coins-2").innerText = sell_coins;

      console.log("Sell Trade : " + sell_coins);

      // sell fees

      var sell_fees = sell_coins * (trading_fees_percentage / 100);

      var new_sell_fess = parseFloat(sell_fees.toFixed(2));

      document.getElementById("new-sell-fees").innerText = new_sell_fess;

      console.log("sell fees : " + new_sell_fess);

      // total fess

      var tf = buy_fees + sell_fees;

      var total_fees = parseFloat(tf.toFixed(2));

      document.getElementById("total-fees-1").innerText = total_fees;
      document.getElementById("total-fees-2").innerText = total_fees;
      document.getElementById("total-fees-3").innerText = total_fees;

      console.log("total fees : " + total_fees);

      // gross net profit

      var gp = sell_coins - total_fees;

      var gross_profit = parseFloat(gp.toFixed(4));

      //   document.getElementById("net-profit-1").innerText = total_fees;
      //   document.getElementById("net-profit-2").innerText = total_fees;

      console.log("gross profit : " + gross_profit);

      // net profit

      var np = gross_profit - buy_coins;

      var net_profit = parseFloat(np.toFixed(2));

      document.getElementById("net-profit-1").innerText = net_profit;
      document.getElementById("net-profit-2").innerText = net_profit;

      console.log("net profit : " + net_profit);

      /// select case 2//

      var e = document.getElementById("fees");

      e.addEventListener("change", (event) => {
        var fess_value = e.options[e.selectedIndex].value;

        var trading_fees = Math.fround(fess_value);

        var trading_fees_percentage = parseFloat(trading_fees.toFixed(2));

        document.getElementById("trading-fees").innerText =
          trading_fees_percentage;

        console.log("Fees % : " + trading_fees_percentage);

        //////////////////////////////////////// second case vars ///////////////////////////

        // Total USDT/Coins

        var coins = buy_coins / buy_coin_at_price_inr;

        var total_coins = parseFloat(coins.toFixed(2));

        document.getElementById("total-coins").innerText = total_coins;

        console.log("COINS : " + total_coins);

        // fess value

        var buy_fees = buy_coins * (trading_fees_percentage / 100);

        var new_buy_fees = parseFloat(buy_fees.toFixed(2));

        document.getElementById("new-buy-fees").innerText = new_buy_fees;

        console.log("buy fees : " + new_buy_fees);

        //  profit per coin

        var ppc = sell_coin_at_price_inr - buy_coin_at_price_inr;

        var profit_per_coin = parseFloat(ppc.toFixed(6));

        document.getElementById("profit-per-coin").innerText = profit_per_coin;

        console.log("profit per coin : " + profit_per_coin);

        // profit with fees

        var pwf = profit_per_coin * total_coins;

        var profit_with_fess = parseFloat(pwf.toFixed(2));

        document.getElementById("profit-with-fess").innerText =
          profit_with_fess;
        document.getElementById("profit-with-fess-2").innerText =
          profit_with_fess;
        document.getElementById("profit-with-fess-3").innerText =
          profit_with_fess;

        console.log("profit with fees : " + profit_with_fess);

        //  sell tarde

        var sell_trade = buy_coins + profit_with_fess;

        var sell_coins = parseFloat(sell_trade.toFixed(4));

        document.getElementById("sell-coins").innerText = sell_coins;
        document.getElementById("sell-coins-2").innerText = sell_coins;

        console.log("Sell Trade : " + sell_coins);

        // sell fees

        var sell_fees = sell_coins * (trading_fees_percentage / 100);

        var new_sell_fess = parseFloat(sell_fees.toFixed(2));

        document.getElementById("new-sell-fees").innerText = new_sell_fess;

        console.log("sell fees : " + new_sell_fess);

        // total fess

        var tf = buy_fees + sell_fees;

        var total_fees = parseFloat(tf.toFixed(2));

        document.getElementById("total-fees-1").innerText = total_fees;
        document.getElementById("total-fees-2").innerText = total_fees;
        document.getElementById("total-fees-3").innerText = total_fees;

        console.log("total fees : " + total_fees);

        // gross net profit

        var gp = sell_coins - total_fees;

        var gross_profit = parseFloat(gp.toFixed(4));

        //   document.getElementById("net-profit-1").innerText = total_fees;
        //   document.getElementById("net-profit-2").innerText = total_fees;

        console.log("gross profit : " + gross_profit);

        // net profit

        var np = gross_profit - buy_coins;

        var net_profit = parseFloat(np.toFixed(2));

        document.getElementById("net-profit-1").innerText = net_profit;
        document.getElementById("net-profit-2").innerText = net_profit;

        console.log("net profit : " + net_profit);
      });
    });
  });
});

document.getElementById("reload").addEventListener("click", function () {
  console.log("i got clicked");
  window.location.reload();
});

// // Stat the Shit!

// // var buy_trade = Math.fround(prompt("How much money you want to put in INR"));

// var buy_coins = parseFloat(buy_trade.toFixed(4));

// console.log("Buy tarde : " + buy_coins);

// // var buy_coin_at_inr = Math.fround(prompt("BUY COIN at INR Price"));

// var buy_coin_at_price_inr = parseFloat(buy_coin_at_inr.toFixed(7));

// console.log("Buy at : " + buy_coin_at_price_inr);

// // var sell_coin_at_inr = Math.fround(prompt("SELL COIN at INR Price"));

// var sell_coin_at_price_inr = parseFloat(sell_coin_at_inr.toFixed(7));

// console.log("Sell at : " + sell_coin_at_price_inr);

// // Trading fees

// // var trading_fees = Math.fround(prompt("trading fees in %"));

// var trading_fees_percentage = parseFloat(trading_fees.toFixed(2));

// console.log("Fees % : " + trading_fees_percentage);

// // Total USDT/Coins

// var coins = buy_coins / buy_coin_at_price_inr;

// var total_coins = parseFloat(coins.toFixed(2)); // Total USDT

// console.log("COINS : " + total_coins);

// // fess value

// var buy_fees = buy_coins * (trading_fees_percentage / 100);

// var new_buy_fees = parseFloat(buy_fees.toFixed(2));

// console.log("buy fees : " + new_buy_fees);

// //  profits

// var ppc = sell_coin_at_price_inr - buy_coin_at_price_inr;

// var profit_per_coin = parseFloat(ppc.toFixed(6));

// console.log("profit per coin : " + profit_per_coin);

// var pwf = profit_per_coin * total_coins;

// var profit_with_fess = parseFloat(pwf.toFixed(2));

// console.log("profit with fees : " + profit_with_fess);

// //  sell tarde

// var sell_trade = buy_coins + profit_with_fess;

// var sell_coins = parseFloat(sell_trade.toFixed(4));

// console.log("Sell Trade : " + sell_coins);

// // sell fees + total fess

// var sell_fees = sell_coins * (trading_fees_percentage / 100);

// var new_sell_fess = parseFloat(sell_fees.toFixed(2));

// console.log("sell fees : " + new_sell_fess);

// var tf = buy_fees + sell_fees;

// var total_fees = parseFloat(tf.toFixed(2));

// console.log("total fees : " + total_fees);

// // gross profit

// var gp = sell_coins - total_fees;

// var gross_profit = parseFloat(gp.toFixed(4));

// console.log("gross profit : " + gross_profit);

// // net profit

// var np = gross_profit - buy_coins;

// var net_profit = parseFloat(np.toFixed(2));

// console.log("net profit : " + net_profit);

// // recheck

// var rcp = profit_with_fess - total_fees;

// var recheck_profit = parseFloat(rcp.toFixed(2));

// console.log("recheck profit : " + recheck_profit);

// // Run the Shit

// //////////////////////////////////////////
