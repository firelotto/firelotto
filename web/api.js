"use strict";

/**
 * Copyright (c) 2018 Fire Lotto
 *
 * This is open-source part of Fire Lotto (firelotto.com)
 *
 * This class contains full code, responsible for working
 * with Fire Lotto smart-contract (including the purchase of tickets)
 *
 * Your can review this file on production: https://firelotto.com/js/api.js
 */

var isTestnet = false;

var Api;

(function () {
    Api = function Api() {

        var host = isTestnet ? 'rinkeby.infura.io' : 'mainnet.infura.io';

        this.web3 = new Web3();
        this.web3.setProvider(new this.web3.providers.HttpProvider('https://' + host + '/mYusdi6HiB3V6cq2aF93'));

        this.gameClass = this.web3.eth.contract(JSON.parse('[{"constant":true,"inputs":[],"name":"ticketCountMax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"},{"name":"to","type":"address"}],"name":"transferFromReserve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_intervalTime","type":"uint256"}],"name":"setIntervalTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"games","outputs":[{"name":"startTime","type":"uint256"},{"name":"jackpot","type":"uint256"},{"name":"reserve","type":"uint256"},{"name":"price","type":"uint256"},{"name":"winNumbers","type":"bytes"},{"name":"checkTicketIndex","type":"uint256"},{"name":"checkWinTicketIndex","type":"uint256"},{"name":"checkWinTicketLevel","type":"uint256"},{"name":"needPlayersTransfer","type":"uint256"},{"name":"addToJackpotAmount","type":"uint256"},{"name":"addToReserveAmount","type":"uint256"},{"name":"bitcoinBlockIndex","type":"uint256"},{"name":"bitcoinBlockHash","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drawer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"technicalPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nextPrice","type":"uint256"}],"name":"setNextPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isNeedCloseCurrentGame","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ticketCountMax","type":"uint256"}],"name":"setTicketCountMax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_needToReserve","type":"uint256"}],"name":"setNeedToReserve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"bitcoinBlockHash","type":"string"},{"name":"numbersCount","type":"uint256"},{"name":"numbersCountMax","type":"uint256"}],"name":"getWinNumbers","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"gasMin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyEnable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"winPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_prPercent","type":"uint256"}],"name":"setPrPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_buyEnable","type":"bool"}],"name":"setBuyEnable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_prWallet","type":"address"}],"name":"setPrWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"prWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_disableBuyingTime","type":"uint256"}],"name":"setDisableBuyingTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"needToReserve","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gameIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"jackpotGuaranteed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkGameIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isNeedCheckTickets","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"closeTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"gameIndex","type":"uint256"},{"name":"offset","type":"uint256"},{"name":"count","type":"uint256"}],"name":"getWins","outputs":[{"name":"wins","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"bitcoinBlockIndex","type":"uint256"}],"name":"isNeedDrawGame","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_dividendsWallet","type":"address"}],"name":"setDividendsWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gameIndexToBuy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"technicalWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_dividendsPercent","type":"uint256"}],"name":"setDividendsPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addReserve","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_technicalWallet","type":"address"}],"name":"setTechnicalWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bitcoinBlockIndex","type":"uint256"}],"name":"closeCurrentGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_jackpotGuaranteed","type":"uint256"}],"name":"setJackpotGuaranteed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"disableBuyingTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"},{"name":"offset","type":"uint256"},{"name":"count","type":"uint256"}],"name":"getPlayerTickets","outputs":[{"name":"tickets","type":"int256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bonusAddress","type":"address"},{"name":"value","type":"bool"}],"name":"setBonusAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"},{"name":"count","type":"uint256"}],"name":"getGames","outputs":[{"name":"res","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_technicalPercent","type":"uint256"}],"name":"setTechnicalPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addBalance","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"},{"name":"to","type":"address"}],"name":"transferFromBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"startTime","type":"uint256"}],"name":"setNextStartTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"numbers","type":"uint256[]"},{"name":"bonusAddress","type":"address"}],"name":"buyTicket","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_gasMin","type":"uint256"}],"name":"setGasMin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numbersCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bitcoinBlockIndex","type":"uint256"},{"name":"bitcoinBlockHash","type":"string"}],"name":"drawGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"prPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dividendsWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_winPercent","type":"uint256[]"}],"name":"setWinPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nextPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dividendsPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"checkTickets","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numbersCountMax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_drawer","type":"address"}],"name":"setDrawer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"intervalTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"array","type":"bytes"}],"name":"noDuplicates","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameIndex","type":"uint256"},{"indexed":false,"name":"riseAmount","type":"uint256"},{"indexed":false,"name":"technicalAmount","type":"uint256"},{"indexed":false,"name":"dividendsAmount","type":"uint256"},{"indexed":false,"name":"prAmount","type":"uint256"}],"name":"LogTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameIndex","type":"uint256"},{"indexed":false,"name":"startTime","type":"uint256"},{"indexed":false,"name":"bitcoinBlockIndex","type":"uint256"},{"indexed":false,"name":"numbers","type":"bytes"},{"indexed":false,"name":"riseAmount","type":"uint256"},{"indexed":false,"name":"transferAmount","type":"uint256"},{"indexed":false,"name":"addToJackpotAmount","type":"uint256"},{"indexed":false,"name":"addToReserveAmount","type":"uint256"}],"name":"LogDraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameIndex","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogReserveUsed","type":"event"}]'));

        this.gameContracts = [
            this.gameClass.at(this.gameAddresses[0]),
            this.gameClass.at(this.gameAddresses[1]),
            this.gameClass.at(this.gameAddresses[2])
        ];


        Api.prototype.wheelAddress = "0x4b640fc87f30506f354bd1bf13e76d50f6c9bd6a";


        this.wheelClass = this.web3.eth.contract(JSON.parse('[{"constant":true,"inputs":[],"name":"ticketCountMax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"},{"name":"to","type":"address"}],"name":"transferFromReserve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_intervalTime","type":"uint256"}],"name":"setIntervalTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"games","outputs":[{"name":"startTime","type":"uint256"},{"name":"jackpot","type":"uint256"},{"name":"reserve","type":"uint256"},{"name":"price","type":"uint256"},{"name":"winNumbers","type":"bytes"},{"name":"checkTicketIndex","type":"uint256"},{"name":"checkWinTicketIndex","type":"uint256"},{"name":"checkWinTicketLevel","type":"uint256"},{"name":"needPlayersTransfer","type":"uint256"},{"name":"addToJackpotAmount","type":"uint256"},{"name":"addToReserveAmount","type":"uint256"},{"name":"bitcoinBlockIndex","type":"uint256"},{"name":"bitcoinBlockHash","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drawer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"technicalPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nextPrice","type":"uint256"}],"name":"setNextPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isNeedCloseCurrentGame","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ticketCountMax","type":"uint256"}],"name":"setTicketCountMax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_needToReserve","type":"uint256"}],"name":"setNeedToReserve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"bitcoinBlockHash","type":"string"},{"name":"numbersCount","type":"uint256"},{"name":"numbersCountMax","type":"uint256"}],"name":"getWinNumbers","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"gasMin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyEnable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"winPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_prPercent","type":"uint256"}],"name":"setPrPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_buyEnable","type":"bool"}],"name":"setBuyEnable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_prWallet","type":"address"}],"name":"setPrWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"prWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_disableBuyingTime","type":"uint256"}],"name":"setDisableBuyingTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"needToReserve","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gameIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"jackpotGuaranteed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkGameIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isNeedCheckTickets","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"closeTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"gameIndex","type":"uint256"},{"name":"offset","type":"uint256"},{"name":"count","type":"uint256"}],"name":"getWins","outputs":[{"name":"wins","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"bitcoinBlockIndex","type":"uint256"}],"name":"isNeedDrawGame","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_dividendsWallet","type":"address"}],"name":"setDividendsWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gameIndexToBuy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"technicalWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_dividendsPercent","type":"uint256"}],"name":"setDividendsPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addReserve","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_technicalWallet","type":"address"}],"name":"setTechnicalWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bitcoinBlockIndex","type":"uint256"}],"name":"closeCurrentGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_jackpotGuaranteed","type":"uint256"}],"name":"setJackpotGuaranteed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"disableBuyingTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"},{"name":"offset","type":"uint256"},{"name":"count","type":"uint256"}],"name":"getPlayerTickets","outputs":[{"name":"tickets","type":"int256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bonusAddress","type":"address"},{"name":"value","type":"bool"}],"name":"setBonusAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"},{"name":"count","type":"uint256"}],"name":"getGames","outputs":[{"name":"res","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_technicalPercent","type":"uint256"}],"name":"setTechnicalPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"addBalance","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"},{"name":"to","type":"address"}],"name":"transferFromBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"startTime","type":"uint256"}],"name":"setNextStartTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"numbers","type":"uint256[]"},{"name":"bonusAddress","type":"address"}],"name":"buyTicket","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_gasMin","type":"uint256"}],"name":"setGasMin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numbersCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bitcoinBlockIndex","type":"uint256"},{"name":"bitcoinBlockHash","type":"string"}],"name":"drawGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"prPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dividendsWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_winPercent","type":"uint256[]"}],"name":"setWinPercent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nextPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dividendsPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"checkTickets","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"numbersCountMax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_drawer","type":"address"}],"name":"setDrawer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"intervalTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"array","type":"bytes"}],"name":"noDuplicates","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameIndex","type":"uint256"},{"indexed":false,"name":"riseAmount","type":"uint256"},{"indexed":false,"name":"technicalAmount","type":"uint256"},{"indexed":false,"name":"dividendsAmount","type":"uint256"},{"indexed":false,"name":"prAmount","type":"uint256"}],"name":"LogTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameIndex","type":"uint256"},{"indexed":false,"name":"startTime","type":"uint256"},{"indexed":false,"name":"bitcoinBlockIndex","type":"uint256"},{"indexed":false,"name":"numbers","type":"bytes"},{"indexed":false,"name":"riseAmount","type":"uint256"},{"indexed":false,"name":"transferAmount","type":"uint256"},{"indexed":false,"name":"addToJackpotAmount","type":"uint256"},{"indexed":false,"name":"addToReserveAmount","type":"uint256"}],"name":"LogDraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"gameIndex","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogReserveUsed","type":"event"}]'));


        this.wheelContract = this.wheelClass.at(this.wheelAddress)
    };


    Api.prototype.gameAddresses = isTestnet ?
        [
            '0xd026add38deda7fa590d1555b6d172b69b78309d',
            '0x1b120a9fb75546bc1001f7cb7943fdf887c1c289',
            '0xd281ab3ad0b0f2e3a56d8b66b6491e373735531a'
        ] :
        [
            '0x9f3eae582f7541e673fe486900cc5539b8f24c8e',
            '0xc1abd580ac9545f771f3c430bbfdc8792ff3f987',
            '0xcce900b307443c2b600a21b82c8e0b8d9279bfd1'
        ];

    Api.prototype.gameNumbersCount = [4, 5, 6];

    Api.prototype.gameNumbersCountMax = [20, 36, 45];

    Api.prototype.buyTicketLimit = 30;

    Api.prototype.wheelCreateBetGasLimit = 200000;

    Api.prototype.buyTicketGasLimit = 157000;

    Api.prototype.wheelCreateBet = function (value, amount, privateKey, callback) {

        console.log("lottoCreateBet: " + value + " " + amount);

        let amountWei = this.web3.toBigNumber(this.web3.toWei(amount));

        console.log(amountWei);

        this.contractBuy(this.wheelAddress,
            this.wheelContract.createBet.getData(value, 0),
            privateKey, amountWei, this.wheelCreateBetGasLimit, callback
        );
    };

    Api.prototype.getBlock = function () {
        this.web3.eth.getBlock("pending", function (error, block) {
            console.log("blockNumber = " + block.number);
            console.log("hash = " + block.hash);
        });

        console.log("blockNumber = " + this.web3.eth.blockNumber);
    };

    Api.prototype.wheelSubscribe = function (playerAddress, callbackCurrentBets, callbackCloseBets) {
        var api = this;
        api.web3.eth.getBlock("pending", function (error, pendingBlock) {
            console.log("pending blockNumber = " + pendingBlock.number);


            getPlayerBetsFromBlock(api.wheelContract, playerAddress, pendingBlock.number, pendingBlock.hash, callbackCurrentBets);

            var timer = function () {
                api.web3.eth.getBlock("latest", function (error, latestBlock) {
                    console.log("latest blockNumber = " + latestBlock.number + " old = " + api.latestBlockNumber);

                    if (api.latestBlockNumber != latestBlock.number) {
                        api.latestBlockNumber = latestBlock.number;
                        getPlayerBetsFromBlock(api.wheelContract, playerAddress, latestBlock.number, latestBlock.hash, callbackCloseBets);
                    }
                });
            };
            timer();
            setInterval(timer, 1000);
        });
    };

    function getPlayerBetsFromBlock(wheelContract, playerAddress, blockNumber, hash, callback) {
        console.log("getPlayerBetsFromBlock " + playerAddress + " " + blockNumber + " " + hash);
        wheelContract.getPlayerBetsFromBlock(playerAddress, blockNumber, function (error, res) {
            if (error) {
                console.error(error);
                callback(error, null);
            } else {
                var bets = uintsToBets(wheelContract, res, hash);
                callback(null, bets);
            }
        })
    }

    function calcWin(wheelContract, bet, hash) {
        var betValues = [0, 6, 2, 5, 2, 10, 2, 5, 2, 6, 2, 5, 2, 6, 2, 10, 2, 5, 2, 20, 2];

        if (bet.winAmount.toNumber() > 0) throw new Error(bet);

        var hash0 = hexToBytes(hash)[0];

        var random = sha3(bet.id + hash0);
        var random0 = hexToBytes(random)[0];
        var winValue = betValues[random0 % betValues.length];

        console.log("bet.id = " + bet.id);
        console.log("bet.blockNumber = " + bet.blockNumber);
        console.log("hash = " + hash);
        console.log("hash0 = " + hash0);
        console.log("random = " + random);
        console.log("random0 = " + random0);
        console.log("winValue = " + winValue);

        bet.hash0 = hash0;
        bet.winValue = winValue;
        bet.winAmount = bet.amount.mul(winValue);

        wheelContract.getWinValue(bet.id, function (err, res) {
            console.log(winValue + " " + res.toNumber());

            /*this.web3.eth.getBlock(bet.blockNumber, function (error, block) {
                console.log("_blockNumber = " + block.number);
                console.log("_hash = " + block.hash);
            });*/


            if (winValue != res.toNumber()) {
                throw new Error("Invalid win value!");
            } else {
                console.log("good win value " + bet.blockNumber);
            }
        });

        //var wheelWinValue = await

    }

    function uintsToBets(wheelContract, res, hash) {
        var bets = [];
        var i = 0;

        while (i < res.length) {
            var item = {
                id: res[i++].toNumber(),
                user: "0x" + res[i++].toString(16),
                amount: res[i++],
                value: res[i++].toNumber(),
                blockNumber: res[i++].toNumber(),
                winAmount: res[i++],
            };
            bets.push(hash ? calcWin(wheelContract, item, hash) : item);
        }
        return bets;
    }

    Api.prototype.contractBuy = function (contractAddress, contractData, privateKey, amount, gasLimit, callback) {
        var privateKeyBuffer = new EthJS.Buffer.Buffer(privateKey, 'hex');
        var playerAddress = "0x" + EthJS.Util.privateToAddress(privateKeyBuffer).toString('hex');
        console.log("playerAddress = " + playerAddress);

        var web3 = this.web3;

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

        runMethod(web3.eth.getBalance, playerAddress, function (balance) {

            if (amount.gt(balance)) {
                callback(playerAddress, "no money");
                return;
            }


            runMethod(web3.eth.getTransactionCount, playerAddress, function (txCount) {
                runMethod(web3.eth.getGasPrice, null, function (gasPrice) {

                    var txParams = {
                        nonce: web3.toHex(txCount),
                        gasPrice: web3.toHex(gasPrice),
                        gasLimit: web3.toHex(gasLimit),
                        from: playerAddress,
                        to: contractAddress,
                        value: web3.toHex(amount),
                        data: contractData
                    };
                    var tx = new EthJS.Tx(txParams);
                    tx.sign(privateKeyBuffer);
                    var serializedTx = tx.serialize().toString('hex');
                    runMethod(web3.eth.sendRawTransaction, "0x" + serializedTx, function (txhash) {
                        console.log("pending tx " + txhash);

                        var waitReceipt = function (txhash, callback) {
                            runMethod(web3.eth.getTransactionReceipt, txhash, function (receipt) {
                                if (receipt && receipt.transactionHash == txhash) {
                                    callback(receipt);
                                } else setTimeout(waitReceipt, 5000, txhash, callback)
                            });
                        };


                        waitReceipt(txhash, function (receipt) {

                            console.log("receipt", receipt);

                            callback(playerAddress, receipt.status == 1 ? null : "error");
                        });
                    });
                });
            });
        });
    }

    Api.prototype.getGames = function (gameTypeIndex, offset, count, callback) {
        var numbersCount = this.gameNumbersCount[gameTypeIndex];
        var games = [];

        var contract = this.gameContracts[gameTypeIndex];

        var self = this;

        contract.jackpotGuaranteed(function (error, jackpotGuaranteed) {
            if(error || jackpotGuaranteed.eq(0)) {
                console.error(error);
                callback([]);
            } else {
                contract.getGames(offset, count, function (error, res) {
                    if (error) {
                        console.error(error);
                        callback([]);
                    } else {
                        var i = 0;

                        while (i < res.length) {
                            var item = {
                                gameIndex: res[i++].toNumber(),
                                startTime: res[i++].toNumber(),
                                jackpot: self.web3.fromWei(res[i++]),
                                reserve: self.web3.fromWei(res[i++]),
                                price: self.web3.fromWei(res[i++]),
                                ticketCount: res[i++].toNumber(),
                                riseAmount: self.web3.fromWei(res[i - 1].mul(res[i - 2])),
                                needPlayersTransfer: self.web3.fromWei(res[i++]),
                                addToJackpotAmount: self.web3.fromWei(res[i++]),
                                addToReserveAmount: self.web3.fromWei(res[i++]),
                                bitcoinBlockIndex: res[i++].toNumber(),
                                numbers: res.slice(i, i + numbersCount).map(function (value) {
                                    return value.toNumber();
                                }),
                                jackpotGuaranteed: jackpotGuaranteed
                            };

                            item.finalJackPot = getJackPot(item);

                            item.numbers.sort(function (a, b) {
                                return a - b;
                            });
                            games.push(item);
                            i += numbersCount;
                        }
                        callback(games);
                    }
                });
            }
        });
    };

    Api.prototype.getPlayerTickets = function (gameTypeIndex, address, offset, count, callback) {
        var numbersCount = this.gameNumbersCount[gameTypeIndex];
        var tickets = [];
        var self = this;
        this.gameContracts[gameTypeIndex].getPlayerTickets(address, offset, count, function (error, res) {
            if (!error) {
                var i = 0;

                while (i < res.length) {
                    var item = {
                        gameIndex: res[i++].toNumber(),
                        ticketIndex: res[i++].toNumber(),
                        startTime: res[i++].toNumber(),
                        winAmount: self.web3.fromWei(res[i++]),
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
    };

    Api.prototype.getBalanceNumber = function (address, callback) {
        var self = this;
        this.web3.eth.getBalance(address, function (error, balance) {
            if (error) {
                callback(0)
            } else {
                callback(self.web3.fromWei(balance));
            }
        });
    };

    Api.prototype.getWinHistory = function (gameTypeIndex, gameIndex, offset, count, callback) {
        var wins = [];
        var web3 = this.web3;

        this.gameContracts[gameTypeIndex].getWins(gameIndex, offset, count, function (error, res) {
            if (!error) {
                var i = 0;

                while (i < res.length) {
                    var item = {
                        user: "0x" + res[i++].toString(16),
                        numbersCount: res[i++].toNumber(),
                        ticketIndex: res[i++].toNumber(),
                        winAmount: web3.fromWei(res[i++]),
                        gameIndex: gameIndex,
                    };
                    wins.push(item);
                }
            } else {
                console.error(error);
            }

            console.log(wins);

            callback(wins);
        });
    };

    Api.prototype.getEvent = function (game, name, filter, callback) {
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
    };

    Api.prototype.getEthToUsdPrice = function (callback) {
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
    };

    Api.prototype.privateKeyToAddress = function (privateKey) {
        var privateKeyBuffer = new EthJS.Buffer.Buffer(privateKey, 'hex');
        var address = "0x" + EthJS.Util.privateToAddress(privateKeyBuffer).toString('hex');
        return address;
    };

    Api.prototype.getGasPrice = function (callback) {
        this.web3.eth.getGasPrice(function (error, gasPrice) {
            var defaultPrice = new BigNumber(21000000000);

            var res = error ? defaultPrice : gasPrice;
            console.log("getGasPrice = " + res);

            callback(res);
        });
    };

    Api.prototype.getGasPrice2 = function (callback) {
        var url = 'https://api.blockcypher.com/v1/eth/main';
        var defaultPrice = new BigNumber(21000000000);

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);

                try {
                    var responseData = JSON.parse(this.responseText);

                    var res = new BigNumber(responseData.medium_gas_price);
                    console.log("getGasPrice = ", res);
                    callback(res);

                } catch (error) {
                    console.log(error);
                    callback(defaultPrice);
                }
            }
        };
        xhr.send();
    };

    Api.prototype.buyTicket = function (gameIndex, numbers, price, ticketCount, privateKey, gasPrice, callback) {

        price = this.web3.toWei(price);

        console.log("buyTicket numbers: " + numbers);

        var privateKeyBuffer = new EthJS.Buffer.Buffer(privateKey, 'hex');
        var playerAddress = "0x" + EthJS.Util.privateToAddress(privateKeyBuffer).toString('hex');
        console.log("playerAddress = " + playerAddress);

        var self = this;

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

        runMethod(self.web3.eth.getBalance, playerAddress, function (balance) {

            if (price.gt(balance)) {
                callback(playerAddress, "no money");
                return;
            }

            runMethod(self.web3.eth.getTransactionCount, playerAddress, function (txCount) {

                var contractData = self.gameContracts[gameIndex].buyTicket.getData(numbers, 0);
                var txParams = {
                    nonce: self.web3.toHex(txCount),
                    gasPrice: self.web3.toHex(gasPrice),
                    gasLimit: self.web3.toHex(self.buyTicketGasLimit * ticketCount),
                    from: playerAddress,
                    to: self.gameAddresses[gameIndex],
                    value: self.web3.toHex(price),
                    data: contractData
                };
                console.log(txParams);
                var tx = new EthJS.Tx(txParams);
                tx.sign(privateKeyBuffer);
                var serializedTx = tx.serialize().toString('hex');
                runMethod(self.web3.eth.sendRawTransaction, "0x" + serializedTx, function (txhash) {
                    console.log("pending tx " + txhash);

                    var waitReceipt = function (txhash, callback) {
                        runMethod(self.web3.eth.getTransactionReceipt, txhash, function (receipt) {
                            if (receipt && receipt.transactionHash == txhash) {
                                callback(receipt);
                            } else setTimeout(waitReceipt, 5000, txhash, callback)
                        });
                    };


                    waitReceipt(txhash, function (receipt) {

                        console.log("receipt", receipt);

                        callback(playerAddress, receipt.status == 1 ? null : "error");
                    });
                });
            });
        });
    };

    function hexToBytes(hex) {
        for (var bytes = [], c = 2; c < hex.length; c += 2)
            bytes.push(parseInt(hex.substr(c, 2), 16));
        return bytes;
    }


})();

