// // // popup.js


chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var currentTab = tabs[0];
  var currentUrl = currentTab.url;

  console.log(currentUrl);

  document.getElementById('result').innerHTML = '';
  document.getElementById('gen').style.display = 'none';
  document.getElementById('error').style.display = 'none';
  document.getElementById('infoTable').style.display = 'none';
  document.getElementById('spinner').style.display = 'block';

  console.log(currentUrl);
  if(currentUrl.includes("amazon.in")){
    fetch('http://localhost:5500/scrape', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ currentUrl }),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('infoTable').style.display = 'table';
    var title = document.getElementById('title');
    var price = document.getElementById('price');
    var mrp = document.getElementById('mrp');
    var lp = document.getElementById('lp');
    var dis = document.getElementById('dis');
    var adisc = document.getElementById('adisc');
    var rate = document.getElementById('rate');
    var res = document.getElementById('result');

    launch=[{
      "_id": {
        "$oid": "656d6e1a404c285a74bfe020"
      },
      "product": "Crocs Unisex Adult Navy/Pepper LiteRide 360 Clog 206708-4CC-M9W11",
      "price": "6,000"
    },
    {
      "_id": {
        "$oid": "656d6ea7404c285a74bfe021"
      },
      "product": "Samsung Galaxy A54 5G (Awesome Violet, 8GB, 256GB Storage) | 50 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger",
      "price": "37,499"
    },
    {
      "_id": {
        "$oid": "656d6ea7404c285a74bfe022"
      },
      "product": "Fire-Boltt Ninja Call Pro Plus 1.83\" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution",
      "price": "1,999"
    },
    {
      "_id": {
        "$oid": "656d6ea7404c285a74bfe023"
      },
      "product": "Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C) ​​​​​​​",
      "price": "24,900"
    },
    {
      "_id": {
        "$oid": "656d6ea7404c285a74bfe024"
      },
      "product": "Samsung Galaxy A54 5G (Awesome Violet, 8GB, 128GB Storage) | 50 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger",
      "price": "35,499"
    },
    {
      "Position": "3",
      "product": "Samsung Galaxy M34 5G (Prism Silver,8GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|16GB RAM with RAM+|Android 13|Without Charger",
      "price": "17,999"
    },
    {
      "Position": "4",
      "product": "Samsung Galaxy M14 5G (Smoky Teal,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger",
      "price": "13,990"
    },
    {
      "Position": "5",
      "product": "Samsung Galaxy M34 5G (Midnight Blue,6GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|12GB RAM with RAM+|Android 13|Without Charger",
      "price": "15,999"
    },
    {
      "Position": "6",
      "product": "Samsung Galaxy M14 5G (Smoky Teal,4GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger",
      "price": "12,490"
    },
    {
      "Position": "7",
      "product": "Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera",
      "price": "7,999"
    },
    {
      "Position": "10",
      "product": "Samsung Galaxy A05 (Light Green, 6GB, 128GB Storage) | 50 MP Main Camera | Upto 12GB RAM with RAM Plus | MediaTek Helio G85 | 5000 mAh Battery",
      "price": "12,499"
    },
    {
      "Position": "11",
      "product": "Samsung Galaxy A15 5G (Blue, 8GB, 128GB Storage) | 50 MP Main Camera | Android 14 with One UI 6.0 | 16GB Expandable RAM | MediaTek Dimensity 6100+ | 5000 mAh Battery",
      "price": "19,499"
    },
    {
      "Position": "12",
      "product": "Samsung Galaxy F04 4GB 64GB Jade Purple",
      "price": "7,999"
    },
    {
      "Position": "13",
      "product": "Samsung Galaxy M34 5G (Waterfall Blue,8GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|16GB RAM with RAM+|Android 13|Without Charger",
      "price": "17,999"
    },
    {
      "Position": "14",
      "product": "Samsung Galaxy A23 5G, Light Blue (8GB, 128GB Storage) with Offer",
      "price": "24,999"
    },
    {
      "Position": "15",
      "product": "TECNO Spark 10C (Magic Skin Orange, 8GB RAM,128GB Storage)|16GB Expandable RAM | 90Hz Refresh Rate 6.6\" HD+Dot Display | 16MP AI Dual Rear Camera",
      "price": "8,199"
    },
    {
      "Position": "16",
      "product": "Samsung Galaxy S24 5G AI Smartphone (Amber Yellow, 8GB, 512GB Storage)",
      "price": "89,999"
    },
    {
      "Position": "17",
      "product": "Samsung Galaxy S21 FE 5G (2023) (8GB 256GB Olive) with Snapdragon 888",
      "price": "39,999"
    },
    {
      "Position": "18",
      "product": "Samsung Galaxy A34 5G (Awesome Violet, 8GB, 256GB Storage) | 48 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Travel Adapter to be Purchased Separately",
      "price": "29,499"
    },
    {
      "Position": "19",
      "product": "Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera",
      "price": "7,999"
    },
    {
      "Position": "20",
      "product": "Samsung Galaxy A25 5G (Blue, 8GB, 128GB Storage) | 50 MP Main Camera | Android 14 with One UI 6.0 | 16GB Expandable RAM | Exynos 1280 | 5000 mAh Battery",
      "price": "26,999"
    },
    {
      "Position": "21",
      "product": "Samsung Galaxy A34 5G (Awesome Graphite, 8GB, 128GB Storage) | 48 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger",
      "price": "27,499"
    },
    {
      "Position": "22",
      "product": "Samsung Galaxy M34 5G (Prism Silver,6GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|12GB RAM with RAM+|Android 13|Without Charger",
      "price": "15,999"
    },
    {
      "Position": "23",
      "product": "Samsung Galaxy A54 5G (Awesome Graphite, 8GB, 256GB Storage) | 50 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger",
      "price": "37,499"
    },
    {
      "Position": "24",
      "product": "Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
      "price": "11,999"
    },
    {
      "Position": "25",
      "product": "Samsung Galaxy S24 Plus 5G AI Smartphone (Cobalt Violet, 12GB, 512GB Storage)",
      "price": "1,09,999"
    },
    {
      "Position": "27",
      "product": "TECNO POP 8 (Mystery White,(8GB*+64GB)|90Hz Punch Hole Display with Dynamic Port & Dual Speakers with DTS| 5000mAh Battery |10W Type-C| Side Fingerprint Sensor| Octa-Core Processor",
      "price": "6,499"
    },


  ]
    n = 27
    
    
    for (var i = 0; i < n; i++) {
      if(launch[i]['product']==data['title'].trim()){
        var launchPrice = parseInt(launch[i]['price'].replace(/,/g, ''), 10); 
          var dataPrice = parseInt(data['price'].replace(/,/g, ''), 10);
          var disc = parseInt(data['disc'].replace(/%/g, ''), 10);
          disc = disc*(-1);

          var acd = launchPrice - dataPrice;
          var acdp = (acd * 100) / launchPrice;
        
        if(launch[i]['price']>data['price'] &  disc-acdp<1){
          title.innerHTML =data['title'];
          price.innerHTML = data['price'];
          mrp.innerHTML = data['lprice'];
          lp.innerHTML = launch[i]['price'];
          dis.innerHTML = disc + '%';
          adisc.innerHTML = acdp.toFixed(2) + '%';
          rate.innerHTML = data['rev'];
          res.innerHTML = 'No Dark Pattern Detected';
          adisc.style.backgroundColor = 'green';
          res.style.color = 'green';
        }
        else{
          title.innerHTML =data['title'];
          price.innerHTML = data['price'];
          mrp.innerHTML = data['lprice'];
          lp.innerHTML = launch[i]['price'];
          dis.innerHTML = disc + '%';
          adisc.innerHTML = acdp.toFixed(2) + '%';
          rate.innerHTML = data['rev'];
          res.innerHTML = 'Dark Pattern Detected';
          adisc.style.backgroundColor = 'red';
          res.style.color = 'red';
        }
        
      }
    }
    // res.innerHTML = 'Price: ' + data['price'] + '<br><br>' + 'MRP: ' + data['lprice'] + '<br><br>' + 'Ratings: '+ data['rev'] + '<br><br>' + 'Title: ' + data['title']; 
  })
  .catch(error => {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('infoTable').style.display = 'none';
    document.getElementById('error').style.display = 'block';
    document.getElementById('result').innerHTML = "An Error Occured while fetching the data. Please try again.";
    console.error('Error:', error);
  });
  }
  else{
    document.getElementById('gen').style.display = 'block';
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('infoTable').style.display = 'none';
    document.getElementById('result').innerHTML = "This extension only works on Amazon.in";
  }


});


// document.getElementById('submit').addEventListener('click', function (event) {
//   event.preventDefault();
//   var url = document.getElementById('url').value;
//   document.getElementById('result').innerHTML = '';
//   document.getElementById('infoTable').style.display = 'none';
//   document.getElementById('spinner').style.display = 'block';
//   console.log(url);
//   fetch('http://localhost:5000/scrape', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ url }),
//   })
//   .then(response => response.json())
//   .then(data => {
//     document.getElementById('spinner').style.display = 'none';
//     document.getElementById('infoTable').style.display = 'table';
//     var title = document.getElementById('title');
//     var price = document.getElementById('price');
//     var mrp = document.getElementById('mrp');
//     var lp = document.getElementById('lp');
//     var dis = document.getElementById('dis');
//     var adisc = document.getElementById('adisc');
//     var rate = document.getElementById('rate');
//     var res = document.getElementById('result');

//     launch=[{
//       "_id": {
//         "$oid": "656d6e1a404c285a74bfe020"
//       },
//       "product": "Crocs Unisex Adult Navy/Pepper LiteRide 360 Clog 206708-4CC-M9W11",
//       "price": "6,000"
//     },
//     {
//       "_id": {
//         "$oid": "656d6ea7404c285a74bfe021"
//       },
//       "product": "Samsung Galaxy A54 5G (Awesome Violet, 8GB, 256GB Storage) | 50 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger",
//       "price": "37,499"
//     },
//     {
//       "_id": {
//         "$oid": "656d6ea7404c285a74bfe022"
//       },
//       "product": "Fire-Boltt Ninja Call Pro Plus 1.83\" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution",
//       "price": "1,999"
//     },
//     {
//       "_id": {
//         "$oid": "656d6ea7404c285a74bfe023"
//       },
//       "product": "Apple AirPods Pro (2nd Generation) with MagSafe Case (USB‑C) ​​​​​​​",
//       "price": "24,900"
//     },
//     {
//       "_id": {
//         "$oid": "656d6ea7404c285a74bfe024"
//       },
//       "product": "Samsung Galaxy A54 5G (Awesome Violet, 8GB, 128GB Storage) | 50 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger",
//       "price": "35,499"
//     },
//     {
//       "Position": "3",
//       "product": "Samsung Galaxy M34 5G (Prism Silver,8GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|16GB RAM with RAM+|Android 13|Without Charger",
//       "price": "₹17,999"
//     },
//     {
//       "Position": "4",
//       "product": "Samsung Galaxy M14 5G (Smoky Teal,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger",
//       "price": "₹13,990"
//     },
//     {
//       "Position": "5",
//       "product": "Samsung Galaxy M34 5G (Midnight Blue,6GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|12GB RAM with RAM+|Android 13|Without Charger",
//       "price": "₹15,999"
//     },
//     {
//       "Position": "6",
//       "product": "Samsung Galaxy M14 5G (Smoky Teal,4GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger",
//       "price": "₹12,490"
//     },
//     {
//       "Position": "7",
//       "product": "Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera",
//       "price": "₹7,999"
//     },
//     {
//       "Position": "10",
//       "product": "Samsung Galaxy A05 (Light Green, 6GB, 128GB Storage) | 50 MP Main Camera | Upto 12GB RAM with RAM Plus | MediaTek Helio G85 | 5000 mAh Battery",
//       "price": "₹12,499"
//     },
//     {
//       "Position": "11",
//       "product": "Samsung Galaxy A15 5G (Blue, 8GB, 128GB Storage) | 50 MP Main Camera | Android 14 with One UI 6.0 | 16GB Expandable RAM | MediaTek Dimensity 6100+ | 5000 mAh Battery",
//       "price": "₹19,499"
//     },
//     {
//       "Position": "12",
//       "product": "Samsung Galaxy F04 4GB 64GB Jade Purple",
//       "price": "₹7,999"
//     },
//     {
//       "Position": "13",
//       "product": "Samsung Galaxy M34 5G (Waterfall Blue,8GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|16GB RAM with RAM+|Android 13|Without Charger",
//       "price": "₹17,999"
//     },
//     {
//       "Position": "14",
//       "product": "Samsung Galaxy A23 5G, Light Blue (8GB, 128GB Storage) with Offer",
//       "price": "₹24,999"
//     },
//     {
//       "Position": "15",
//       "product": "TECNO Spark 10C (Magic Skin Orange, 8GB RAM,128GB Storage)|16GB Expandable RAM | 90Hz Refresh Rate 6.6\" HD+Dot Display | 16MP AI Dual Rear Camera",
//       "price": "₹8,199"
//     },
//     {
//       "Position": "16",
//       "product": "Samsung Galaxy S24 5G AI Smartphone (Amber Yellow, 8GB, 512GB Storage)",
//       "price": "₹89,999"
//     },
//     {
//       "Position": "17",
//       "product": "Samsung Galaxy S21 FE 5G (2023) (8GB 256GB Olive) with Snapdragon 888",
//       "price": "₹39,999"
//     },
//     {
//       "Position": "18",
//       "product": "Samsung Galaxy A34 5G (Awesome Violet, 8GB, 256GB Storage) | 48 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Travel Adapter to be Purchased Separately",
//       "price": "₹29,499"
//     },
//     {
//       "Position": "19",
//       "product": "Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera",
//       "price": "₹7,999"
//     },
//     {
//       "Position": "20",
//       "product": "Samsung Galaxy A25 5G (Blue, 8GB, 128GB Storage) | 50 MP Main Camera | Android 14 with One UI 6.0 | 16GB Expandable RAM | Exynos 1280 | 5000 mAh Battery",
//       "price": "₹26,999"
//     },
//     {
//       "Position": "21",
//       "product": "Samsung Galaxy A34 5G (Awesome Graphite, 8GB, 128GB Storage) | 48 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger",
//       "price": "₹27,499"
//     },
//     {
//       "Position": "22",
//       "product": "Samsung Galaxy M34 5G (Prism Silver,6GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|12GB RAM with RAM+|Android 13|Without Charger",
//       "price": "₹15,999"
//     },
//     {
//       "Position": "23",
//       "product": "Samsung Galaxy A54 5G (Awesome Graphite, 8GB, 256GB Storage) | 50 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Without Charger",
//       "price": "₹37,499"
//     },
//     {
//       "Position": "24",
//       "product": "Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
//       "price": "₹11,999"
//     },
//     {
//       "Position": "25",
//       "product": "Samsung Galaxy S24 Plus 5G AI Smartphone (Cobalt Violet, 12GB, 512GB Storage)",
//       "price": "₹1,09,999"
//     },
//     {
//       "Position": "27",
//       "product": "TECNO POP 8 (Mystery White,(8GB*+64GB)|90Hz Punch Hole Display with Dynamic Port & Dual Speakers with DTS| 5000mAh Battery |10W Type-C| Side Fingerprint Sensor| Octa-Core Processor",
//       "price": "₹6,499"
//     },


//   ]
//     n = 5
    
    
//     for (var i = 0; i < n; i++) {
//       if(launch[i]['product']==data['title'].trim()){
//         var launchPrice = parseInt(launch[i]['price'].replace(/,/g, ''), 10); 
//           var dataPrice = parseInt(data['price'].replace(/,/g, ''), 10);
//           var disc = parseInt(data['disc'].replace(/%/g, ''), 10);
//           disc = disc*(-1);

//           var acd = launchPrice - dataPrice;
//           var acdp = (acd * 100) / launchPrice;
        
//         if(launch[i]['price']>data['price'] &  disc-acdp<1){
//           title.innerHTML =data['title'];
//           price.innerHTML = data['price'];
//           mrp.innerHTML = data['lprice'];
//           lp.innerHTML = launch[i]['price'];
//           dis.innerHTML = disc + '%';
//           adisc.innerHTML = acdp.toFixed(2) + '%';
//           rate.innerHTML = data['rev'];
//           res.innerHTML = 'No Dark Pattern Detected';
//           adisc.style.backgroundColor = 'green';
//           res.style.color = 'green';
//         }
//         else{
//           title.innerHTML =data['title'];
//           price.innerHTML = data['price'];
//           mrp.innerHTML = data['lprice'];
//           lp.innerHTML = launch[i]['price'];
//           dis.innerHTML = disc + '%';
//           adisc.innerHTML = acdp.toFixed(2) + '%';
//           rate.innerHTML = data['rev'];
//           res.innerHTML = 'Dark Pattern Detected';
//           adisc.style.backgroundColor = 'red';
//           res.style.color = 'red';
//         }
        
//       }
//     }
//     // res.innerHTML = 'Price: ' + data['price'] + '<br><br>' + 'MRP: ' + data['lprice'] + '<br><br>' + 'Ratings: '+ data['rev'] + '<br><br>' + 'Title: ' + data['title']; 
//   })
//   .catch(error => {
//     document.getElementById('spinner').style.display = 'none';
//     document.getElementById('infoTable').style.display = 'none';
//     document.getElementById('result').innerHTML = "An Error Occured while fetching the data. Please try again.";
//     console.error('Error:', error);
//   });
// });

