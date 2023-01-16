const express = require("express");
const router = new express.Router();

const Tata = require("../schemas/tata")
const Reliance = require("../schemas/reliance")
const Eichermot = require("../schemas/eichermot")
const Cipla = require("../schemas/cipla")
const Bse = require("../schemas/bse")
const Nse = require("../schemas/nse")
const Ashok = require("../schemas/ashok");
const { json } = require("express");
const fs = require('fs')
const csv = require('fast-csv');
router.get("/:param",(req,res)=>
{
    const companyName = req.params.param;
    if(companyName==='bse'){

        const data = []
        fs.createReadStream('./Data/BSE.NS.csv')
          .pipe(csv.parse({ headers: true })) 
          .on('error', error => console.error(error))
          .on('data', row => data.push(row))
          .on('end', () =>{
            var finalArray = data.map(function (obj) {
                const date = new Date(obj.Date);
                const seconds = date.getTime();
                const open = parseFloat(obj.Open);
                const close = parseFloat(obj.Close);
                const high = parseFloat(obj.High);
                const low = parseFloat(obj.Low);
                const volume = parseFloat(obj.Volume);
                const adjclose = parseFloat(obj["Adj Close"]);
                return [seconds,open,close,high,low,volume,adjclose];
              });
            res.send(finalArray);
          });
    }
    else if(companyName==='nse'){
        const data = []
        fs.createReadStream('./Data/NSE.V.csv')
          .pipe(csv.parse({ headers: true })) 
          .on('error', error => console.error(error))
          .on('data', row => data.push(row))
          .on('end', () =>{
            var finalArray = data.map(function (obj) {
                const date = new Date(obj.Date);
                const seconds = date.getTime();
                const open = parseFloat(obj.Open);
                const close = parseFloat(obj.Close);
                const high = parseFloat(obj.High);
                const low = parseFloat(obj.Low);
                const volume = parseFloat(obj.Volume);
                const adjclose = parseFloat(obj["Adj Close"]);
                return [seconds,open,close,high,low,volume,adjclose];
              });
            res.send(finalArray);
          });
    }
    else if(companyName==='tata'){
        const data = []
        fs.createReadStream('./Data/TATASTEEL.NS.csv')
          .pipe(csv.parse({ headers: true })) 
          .on('error', error => console.error(error))
          .on('data', row => data.push(row))
          .on('end', () =>{
            var finalArray = data.map(function (obj) {
                const date = new Date(obj.Date);
                const seconds = date.getTime();
                const open = parseFloat(obj.Open);
                const close = parseFloat(obj.Close);
                const high = parseFloat(obj.High);
                const low = parseFloat(obj.Low);
                const volume = parseFloat(obj.Volume);
                const adjclose = parseFloat(obj["Adj Close"]);
                return [seconds,open,close,high,low,volume,adjclose];
              });
            res.send(finalArray);
          });
    }
    else if(companyName==='ashok'){
        const data = []
        fs.createReadStream('./Data/ASHOKLEY.NS.csv')
          .pipe(csv.parse({ headers: true })) 
          .on('error', error => console.error(error))
          .on('data', row => data.push(row))
          .on('end', () =>{
            var finalArray = data.map(function (obj) {
                const date = new Date(obj.Date);
                const seconds = date.getTime();
                const open = parseFloat(obj.Open);
                const close = parseFloat(obj.Close);
                const high = parseFloat(obj.High);
                const low = parseFloat(obj.Low);
                const volume = parseFloat(obj.Volume);
                const adjclose = parseFloat(obj["Adj Close"]);
                return [seconds,open,close,high,low,volume,adjclose];
              });
            res.send(finalArray);
          });
    }
    else if(companyName==='reliance'){
        const data = []
        fs.createReadStream('./Data/RELIANCE.NS.csv')
          .pipe(csv.parse({ headers: true })) 
          .on('error', error => console.error(error))
          .on('data', row => data.push(row))
          .on('end', () =>{
            var finalArray = data.map(function (obj) {
                const date = new Date(obj.Date);
                const seconds = date.getTime();
                const open = parseFloat(obj.Open);
                const close = parseFloat(obj.Close);
                const high = parseFloat(obj.High);
                const low = parseFloat(obj.Low);
                const volume = parseFloat(obj.Volume);
                const adjclose = parseFloat(obj["Adj Close"]);
                return [seconds,open,close,high,low,volume,adjclose];
              });
            res.send(finalArray);
          });
            }
    else if(companyName==='eichermot'){
        const data = []
        fs.createReadStream('./Data/EICHERMOT.NS.csv')
          .pipe(csv.parse({ headers: true })) 
          .on('error', error => console.error(error))
          .on('data', row => data.push(row))
          .on('end', () =>{
            var finalArray = data.map(function (obj) {
                const date = new Date(obj.Date);
                const seconds = date.getTime();
                const open = parseFloat(obj.Open);
                const close = parseFloat(obj.Close);
                const high = parseFloat(obj.High);
                const low = parseFloat(obj.Low);
                const volume = parseFloat(obj.Volume);
                const adjclose = parseFloat(obj["Adj Close"]);
                return [seconds,open,close,high,low,volume,adjclose];
              });
            res.send(finalArray);
          });
    }
    else if(companyName==='cipla'){
        const data = []
        fs.createReadStream('./Data/CIPLA.NS.csv')
          .pipe(csv.parse({ headers: true })) 
          .on('error', error => console.error(error))
          .on('data', row => data.push(row))
          .on('end', () =>{
            var finalArray = data.map(function (obj) {
                const date = new Date(obj.Date);
                const seconds = date.getTime();
                const open = parseFloat(obj.Open);
                const close = parseFloat(obj.Close);
                const high = parseFloat(obj.High);
                const low = parseFloat(obj.Low);
                const volume = parseFloat(obj.Volume);
                const adjclose = parseFloat(obj["Adj Close"]);
                return [seconds,open,close,high,low,volume,adjclose];
              });
            res.send(finalArray);
          });
    }
    else{
        res.send("route not found");
    }
});
module.exports = router;