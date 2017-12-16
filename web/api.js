"use strict";

var _web3 = new Web3();
_web3.setProvider(new _web3.providers.HttpProvider("https://firelotto.com/eth"));
var gameClass = _web3.eth.contract(JSON.parse('[{"constant":true,"inputs":[],"name":"ticketCountMax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"},{"name":"to","type":"address"}],"name":"transferFromReserve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_intervalTime","type":"uint256"}],"name":"setIntervalTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"games","outputs":[{"name":"startTime","type":"uint256"},{"name":"jackpot","type":"uint256"},{"name":"reserve","type":"uint256"},{"name":"price","type":"uint256"},{"name":"winNumbers","type":"bytes"},{"name":"checkTicketIndex","type":"uint256"},{"name":"checkWinTicketIndex","type":"uint256"},{"name":"checkWinTicketLevel","type":"uint256"},{"name":"needPlayersTransfer","type":"uint256"},{"name":"addToJackpotAmount","type":"uint256"},{"name":"addToReserveAmount","type":"uint256"},{"name":"bitcoinBlockIndex","type":"uint256"},{"name":"bitcoinBlockHash","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drawer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_currentPrice","type":"uint256"}],"name":"setCurrentPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"technicalPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ticketCountMax","type":"uint256"}],"name":"setTicketCountMax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_needToReserve","type":"uint256"}],"name":"setNeedToReserve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"bitcoinBlockHash","type":"string"},{"name":"numbersCount","type":"uint256"},{"name":"numbersCountMax","type":"uint256"}],"name":"getWinNumbers","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"gasMin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyEnable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"winPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_prPercent","type":"uint256"}],"name":"setPrPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_buyEnable","type":"bool"}],"name":"setBuyEnable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_prWallet","type":"address"}],"name":"setPrWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"prWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_disableBuyingTime","type":"uint256"}],"name":"setDisableBuyingTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"needToReserve","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gameIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"jackpotGuaranteed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkGameIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"numbers","type":"uint256[]"}],"name":"buyTicket","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_dividendsWallet","type":"address"}],"name":"setDividendsWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"technicalWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_dividendsPercent","type":"uint256"}],"name":"setDividendsPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addReserve","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_technicalWallet","type":"address"}],"name":"setTechnicalWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_jackpotGuaranteed","type":"uint256"}],"name":"setJackpotGuaranteed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"disableBuyingTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"},{"name":"offset","type":"uint256"},{"name":"count","type":"uint256"}],"name":"getPlayerTickets","outputs":[{"name":"tickets","type":"int256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"},{"name":"count","type":"uint256"}],"name":"getGames","outputs":[{"name":"res","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_technicalPercent","type":"uint256"}],"name":"setTechnicalPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"},{"name":"to","type":"address"}],"name":"transferFromBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_gasMin","type":"uint256"}],"name":"setGasMin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numbersCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bitcoinBlockIndex","type":"uint256"},{"name":"bitcoinBlockHash","type":"string"}],"name":"drawGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"prPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dividendsWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_winPercent","type":"uint256[]"}],"name":"setWinPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dividendsPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"checkTickets","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numbersCountMax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_drawer","type":"address"}],"name":"setDrawer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"intervalTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"array","type":"bytes"}],"name":"noDuplicates","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameIndex","type":"uint256"},{"indexed":false,"name":"riseAmount","type":"uint256"},{"indexed":false,"name":"technicalAmount","type":"uint256"},{"indexed":false,"name":"dividendsAmount","type":"uint256"},{"indexed":false,"name":"prAmount","type":"uint256"}],"name":"LogTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameIndex","type":"uint256"},{"indexed":false,"name":"startTime","type":"uint256"},{"indexed":false,"name":"bitcoinBlockIndex","type":"uint256"},{"indexed":false,"name":"numbers","type":"bytes"},{"indexed":false,"name":"riseAmount","type":"uint256"},{"indexed":false,"name":"transferAmount","type":"uint256"},{"indexed":false,"name":"addToJackpotAmount","type":"uint256"},{"indexed":false,"name":"addToReserveAmount","type":"uint256"}],"name":"LogDraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameIndex","type":"uint256"},{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"numbersCount","type":"uint256"},{"indexed":false,"name":"ticketIndex","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogWin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameIndex","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogReserveUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameIndex","type":"uint256"},{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"numbers","type":"bytes"},{"indexed":false,"name":"ticketIndex","type":"uint256"}],"name":"LogBuyTicket","type":"event"}]'));
var gameAddresses = [
    "0xc39c57f47c5ae46bb783ea1ca8bd87a8a94cde97",
    "0x939dac61c67f5e52dc9b6efd13677e17b861353c",
    "0x96b8321666d5ced3c20eb0e9ebe9f5d6c332c665",

];
var gameNumbersCount = [4, 5, 6];
var gameNumbersCountMax = [20, 36, 45];
var gameContracts = [gameClass.at(gameAddresses[0]), gameClass.at(gameAddresses[1]), gameClass.at(gameAddresses[2])];
var buyTicketLimit = 30;

function getGames(gameTypeIndex, offset, count, callback) {
    var numbersCount = gameNumbersCount[gameTypeIndex];
    var games = [];

    var contract = gameContracts[gameTypeIndex];

    contract.jackpotGuaranteed(function (error, jackpotGuaranteed) {

        contract.getGames(offset, count, function (error, res) {
            if (!error) {
                var i = 0;

                while (i < res.length) {
                    var item = {
                        gameIndex: res[i++].toNumber(),
                        startTime: res[i++].toNumber() * 1000,
                        jackpot: res[i++],
                        reserve: res[i++],
                        price: res[i++],
                        ticketCount: res[i++].toNumber(),
                        riseAmount: res[i - 1].mul(res[i - 2]),
                        needPlayersTransfer: res[i++],
                        addToJackpotAmount: res[i++],
                        addToReserveAmount: res[i++],
                        bitcoinBlockIndex: res[i++].toNumber(),
                        numbers: res.slice(i, i + numbersCount).map(function (value) {
                            return value.toNumber();
                        }),
                        jackpotGuaranteed: jackpotGuaranteed
                    };
                    item.numbers.sort(function (a, b) {
                        return a - b;
                    });
                    games.push(item);
                    i += numbersCount;
                }
            } else {
                console.error(error);
            }
            //console.log(games);
            callback(games);
        });
    });
}

function getPlayerTickets(gameTypeIndex, address, offset, count, callback) {

    var numbersCount = gameNumbersCount[gameTypeIndex];
    var tickets = [];
    gameContracts[gameTypeIndex].getPlayerTickets(address, offset, count, function (error, res) {
        if (!error) {
            var i = 0;

            while (i < res.length) {
                var item = {
                    gameIndex: res[i++].toNumber(),
                    ticketIndex: res[i++].toNumber(),
                    startTime: res[i++].toNumber() * 1000,
                    winAmount: res[i++],
                    price: res[i++],
                    numbers: res.slice(i, i + numbersCount).map(function (value) {
                        return value.toNumber();
                    })
                };
                tickets.push(item);
                i += numbersCount;
            }
        } else {
            console.error(error);
        }
        callback(tickets);
    });
}

function getBalanceNumber(address, callback) {
    _web3.eth.getBalance(address, function (error, balance) {
        if (error) {
            callback(0)
        } else {
            callback(_web3.fromWei(balance).toNumber());
        }
    })
}

function getWinHistory(gameTypeIndex, gameIndex, callback) {

    getEvent(gameContracts[gameTypeIndex], "LogWin", {gameIndex: gameIndex}, function (error, items) {
        if (!error) {
            items.forEach(function (item) {
                item.gameIndex = item.gameIndex.toNumber();
                item.ticketIndex = item.ticketIndex.toNumber();
                item.numbersCount = item.numbersCount.toNumber();
                item.user = item.user;
            });
        }
        callback(items);
    });
}

function getEvent(game, name, filter, callback) {
    game[name](filter, {fromBlock: 0, toBlock: 'latest'}).get(function (error, result) {
        if (error) {
            callback(error);
        }
        else {
            var list = result.map(function (event) {
                return event.args;
            });
            callback(null, list);
        }
    });
}

function getEthToUsdPrice(callback) {
    var xhr = new XMLHttpRequest();
    var apiToken = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
    xhr.open("GET", apiToken, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var responseData = JSON.parse(this.responseText);
                callback(responseData.USD);
            }
            else {
                callback(0);
            }
        }
    };
    xhr.send();
}

function buyTicket(gameIndex, numbers, price, ticketCount, privateKey, callback) {

    var privateKeyBuffer = new EthJS.Buffer.Buffer(privateKey, 'hex');
    var playerAddress = "0x" + EthJS.Util.privateToAddress(privateKeyBuffer).toString('hex');
    console.log("playerAddress = " + playerAddress);

    var runMethod = function (f, arg, onResult) {
        var _callback = function (error, res) {
            if (error) {
                callback(playerAddress, error);
            } else {
                onResult(res);
            }
        };
        if (arg) {
            f(arg, _callback);
        } else {
            f(_callback);
        }
    };

    runMethod(_web3.eth.getBalance, playerAddress, function (balance) {

        if (price.gt(balance)) {
            callback(playerAddress, "no money");
            return;
        }

        runMethod(_web3.eth.getTransactionCount, playerAddress, function (txCount) {
            runMethod(_web3.eth.getGasPrice, null, function (gasPrice) {

                var contractData = gameContracts[gameIndex].buyTicket.getData(numbers);
                var txParams = {
                    nonce: _web3.toHex(txCount),
                    gasPrice: _web3.toHex(gasPrice),
                    gasLimit: _web3.toHex(150000 * ticketCount),
                    from: playerAddress,
                    to: gameAddresses[gameIndex],
                    value: _web3.toHex(price),
                    data: contractData
                };
                var tx = new EthJS.Tx(txParams);
                tx.sign(privateKeyBuffer);
                var serializedTx = tx.serialize().toString('hex');
                runMethod(_web3.eth.sendRawTransaction, "0x" + serializedTx, function (txhash) {
                    console.log("pending tx " + txhash);
                    var filter = _web3.eth.filter('latest');
                    filter.watch(function (err, result) {
                        runMethod(_web3.eth.getTransactionReceipt, txhash, function (receipt) {
                            if (receipt && receipt.transactionHash == txhash) {

                                console.log("receipt", receipt);

                                filter.stopWatching(function () {
                                    callback(playerAddress, receipt.status == 1 ? null : "error");
                                });
                            }
                        });
                    });
                });
            });
        });
    });
}

function hexToBytes(hex) {
    for (var bytes = [], c = 2; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}