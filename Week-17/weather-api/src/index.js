const express = require('express');
const cors = require('cors');
require('dotenv').config('.env')
// import { cities } from 'weatherLib.js'
// const { cities } = require('./weatherLib');
// const weatherLib = require('./weatherLib');
// import {cities} from '../src/weatherLib';

const app = express();
app.use(cors());
/**
 * get city weather data
 */
app.get('/city', async (req, res) => {
  const cityName = req.query.name;
  const cityPin = req.query.pin;
  if(!cityName && !cityPin){
    return res.json(errorResponse('Please pass valid params'))
  }
  const cityWeatherData  = await cityData(cityName || cityPin);
  const errorMsg = cityWeatherData?.error?.message
  if(errorMsg){
    return res.json(errorResponse(errorMsg));
  }
  return res.json(successResponse(cityWeatherData));
});

/**
 * multiple cities data
 */
app.get('/cities', async (req, res) => {
  let citiesNames = req.query.name;
  if(!Array.isArray(citiesNames)){
    citiesNames = [citiesNames];
  }

  if(citiesNames.length > 3){
    return res.json(errorResponse("Max 3 cities allowed"));
  }

  if(citiesNames.length < 1){
    return res.json(errorResponse('Please pass valid params'))
  }

  const citiesWeatherData  = {};
  for (const cityName of citiesNames) {
    const cityWeatherData  = await cityData(cityName);
    const errorMsg = cityWeatherData?.error?.message
    citiesWeatherData[cityName.toLowerCase()] = errorMsg ? errorMsg : cityWeatherData;
  }

  return res.json(successResponse(citiesWeatherData));
});


/**
 * get city Forecast
 */
 app.get('/forecast', async (req, res) => {
  const cityName = req.query.name;
  const days = req.query.days;
  if(!cityName && !days){
    return res.json(errorResponse('Please pass valid params'))
  }
  const cityForecastData  = await forecastData(cityName, days);
  const errorMsg = cityForecastData?.error?.message
  if(errorMsg){
    return res.json(errorResponse(errorMsg));
  }
  return res.json(successResponse(cityForecastData));
});

/**
 * get Random cities data with pagination
 */
 app.get('/random', async (req, res) => {
  const start = Number.parseInt(req.query.start || 0);
  const length = Number.parseInt(req.query.length || 3);

  if(length > 5){
    return res.json(errorResponse('Max 5 cities per page allowed'));
  }

  const citiesNames = indianCityNames.slice(start, length+start);
  const citiesWeatherData  = {};
  for (const cityName of citiesNames) {
    const cityWeatherData  = await cityData(cityName);
    const errorMsg = cityWeatherData?.error?.message
    citiesWeatherData[cityName.toLowerCase()] = errorMsg ? errorMsg : cityWeatherData;
  }

  return res.json(successResponse(citiesWeatherData));
  
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});



/*==============================================
 * Utils
 ==============================================*/
 const indianCityNames = ["Achalpur","Achhnera","Adalaj","Adilabad","Adityapur","Adoni","Adoor","Adra","Adyar","Afzalpur","Agartala","Agra","Ahmedabad","Ahmednagar","Aizawl","Ajmer","Akola","Akot","Alappuzha","Aligarh","AlipurdUrban Agglomerationr","Alirajpur","Allahabad","Alwar","Amalapuram","Amalner","Ambejogai","Ambikapur","Amravati","Amreli","Amritsar","Amroha","Anakapalle","Anand","Anantapur","Anantnag","Anjangaon","Anjar","Ankleshwar","Arakkonam","Arambagh","Araria","Arrah","Arsikere","Aruppukkottai","Arvi","Arwal","Asansol","Asarganj","Ashok Nagar","Athni","Attingal","Aurangabad","Aurangabad","Azamgarh","Bagaha","Bageshwar","Bahadurgarh","Baharampur","Bahraich","Balaghat","Balangir","Baleshwar Town","Ballari","Balurghat","Bankura","Bapatla","Baramula","Barbil","Bargarh","Barh","Baripada Town","Barmer","Barnala","Barpeta","Batala","Bathinda","Begusarai","Belagavi","Bellampalle","Belonia","Bengaluru","Bettiah","BhabUrban Agglomeration","Bhadrachalam","Bhadrak","Bhagalpur","Bhainsa","Bharatpur","Bharuch","Bhatapara","Bhavnagar","Bhawanipatna","Bheemunipatnam","Bhilai Nagar","Bhilwara","Bhimavaram","Bhiwandi","Bhiwani","Bhongir","Bhopal","Bhubaneswar","Bhuj","Bikaner","Bilaspur","Bobbili","Bodhan","Bokaro Steel City","Bongaigaon City","Brahmapur","Buxar","Byasanagar","Chaibasa","Chalakudy","Chandausi","Chandigarh","Changanassery","Charkhi Dadri","Chatra","Chennai","Cherthala","Chhapra","Chhapra","Chikkamagaluru","Chilakaluripet","Chirala","Chirkunda","Chirmiri","Chittoor","Chittur-Thathamangalam","Coimbatore","Cuttack","Dalli-Rajhara","Darbhanga","Darjiling","Davanagere","Deesa","Dehradun","Dehri-on-Sone","Delhi","Deoghar","Dhamtari","Dhanbad","Dharmanagar","Dharmavaram","Dhenkanal","Dhoraji","Dhubri","Dhule","Dhuri","Dibrugarh","Dimapur","Diphu","Dumka","Dumraon","Durg","Eluru","English Bazar","Erode","Etawah","Faridabad","Faridkot","Farooqnagar","Fatehabad","Fatehpur Sikri","Fazilka","Firozabad","Firozpur Cantt.","Firozpur","Forbesganj","Gadwal","Gandhinagar","Gangarampur","Ganjbasoda","Gaya","Giridih","Goalpara","Gobichettipalayam","Gobindgarh","Godhra","Gohana","Gokak","Gooty","Gopalganj","Gudivada","Gudur","Gumia","Guntakal","Guntur","Gurdaspur","Gurgaon","Guruvayoor","Guwahati","Gwalior","Habra","Hajipur","Haldwani-cum-Kathgodam","Hansi","Hapur","Hardoi ","Hardwar","Hazaribag","Hindupur","Hisar","Hoshiarpur","Hubli-Dharwad","Hugli-Chinsurah","Hyderabad","Ichalkaranji","Imphal","Indore","Itarsi","Jabalpur","Jagdalpur","Jaggaiahpet","Jagraon","Jagtial","Jaipur","Jalandhar Cantt.","Jalandhar","Jalpaiguri","Jamalpur","Jammalamadugu","Jammu","Jamnagar","Jamshedpur","Jamui","Jangaon","Jatani","Jehanabad","Jhansi","Jhargram","Jharsuguda","Jhumri Tilaiya","Jind","Jodhpur","Jorhat","Kadapa","Kadi","Kadiri","Kagaznagar","Kailasahar","Kaithal","Kakinada","Kalimpong","Kalpi","Kalyan-Dombivali","Kamareddy","Kancheepuram","Kandukur","Kanhangad","Kannur","Kanpur","Kapadvanj","Kapurthala","Karaikal","Karimganj","Karimnagar","Karjat","Karnal","Karur","Karwar","Kasaragod","Kashipur","KathUrban Agglomeration","Katihar","Kavali","Kayamkulam","Kendrapara","Kendujhar","Keshod","Khair","Khambhat","Khammam","Khanna","Kharagpur","Kharar","Khowai","Kishanganj","Kochi","Kodungallur","Kohima","Kolar","Kolkata","Kollam","Koratla","Korba","Kot Kapura","Kota","Kothagudem","Kottayam","Kovvur","Koyilandy","Kozhikode","Kunnamkulam","Kurnool","Kyathampalle","Lachhmangarh","Ladnu","Ladwa","Lahar","Laharpur","Lakheri","Lakhimpur","Lakhisarai","Lakshmeshwar","Lal Gopalganj Nindaura","Lalganj","Lalganj","Lalgudi","Lalitpur","Lalsot","Lanka","Lar","Lathi","Latur","Lilong","Limbdi","Lingsugur","Loha","Lohardaga","Lonar","Lonavla","Longowal","Loni","Losal","Lucknow","Ludhiana","Lumding","Lunawada","Lunglei","Macherla","Machilipatnam","Madanapalle","Maddur","Madhepura","Madhubani","Madhugiri","Madhupur","Madikeri","Madurai","Magadi","Mahad","Mahalingapura","Maharajganj","Maharajpur","Mahasamund","Mahbubnagar","Mahe","Mahemdabad","Mahendragarh","Mahesana","Mahidpur","Mahnar Bazar","Mahuva","Maihar","Mainaguri","Makhdumpur","Makrana","Malaj Khand","Malappuram","Malavalli","Malda","Malegaon","Malerkotla","Malkangiri","Malkapur","Malout","Malpura","Malur","Manachanallur","Manasa","Manavadar","Manawar","Mancherial","Mandalgarh","Mandamarri","Mandapeta","Mandawa","Mandi Dabwali","Mandi","Mandideep","Mandla","Mandsaur","Mandvi","Mandya","Manendragarh","Maner","Mangaldoi","Mangaluru","Mangalvedhe","Manglaur","Mangrol","Mangrol","Mangrulpir","Manihari","Manjlegaon","Mankachar","Manmad","Mansa","Mansa","Manuguru","Manvi","Manwath","Mapusa","Margao","Margherita","Marhaura","Mariani","Marigaon","Markapur","Marmagao","Masaurhi","Mathabhanga","Mathura","Mattannur","Mauganj","Mavelikkara","Mavoor","Mayang Imphal","Medak","Medininagar (Daltonganj)","Medinipur","Meerut","Mehkar","Memari","Merta City","Mhaswad","Mhow Cantonment","Mhowgaon","Mihijam","Mira-Bhayandar","Mirganj","Miryalaguda","Modasa","Modinagar","Moga","Mohali","Mokameh","Mokokchung","Monoharpur","Moradabad","Morena","Morinda, India","Morshi","Morvi","Motihari","Motipur","Mount Abu","Mudabidri","Mudalagi","Muddebihal","Mudhol","Mukerian","Mukhed","Muktsar","Mul","Mulbagal","Multai","Mumbai","Mundargi","Mundi","Mungeli","Munger","Murliganj","Murshidabad","Murtijapur","Murwara (Katni)","Musabani","Mussoorie","Muvattupuzha","Muzaffarpur","Mysore","Nabadwip","Nabarangapur","Nabha","Nadbai","Nadiad","Nagaon","Nagapattinam","Nagar","Nagari","Nagarkurnool","Nagaur","Nagda","Nagercoil","Nagina","Nagla","Nagpur","Nahan","Naharlagun","Naidupet","Naihati","Naila Janjgir","Nainital","Nainpur","Najibabad","Nakodar","Nakur","Nalbari","Namagiripettai","Namakkal","Nanded-Waghala","Nandgaon","Nandivaram-Guduvancheri","Nandura","Nandurbar","Nandyal","Nangal","Nanjangud","Nanjikottai","Nanpara","Narasapuram","Narasaraopet","Naraura","Narayanpet","Nargund","Narkatiaganj","Narkhed","Narnaul","Narsinghgarh","Narsinghgarh","Narsipatnam","Narwana","Nashik","Nasirabad","Natham","Nathdwara","Naugachhia","Naugawan Sadat","Nautanwa","Navalgund","Navsari","Nawabganj","Nawada","Nawanshahr","Nawapur","Nedumangad","Neem-Ka-Thana","Neemuch","Nehtaur","Nelamangala","Nellikuppam","Nellore","Nepanagar","New Delhi","Neyveli (TS)","Neyyattinkara","Nidadavole","Nilambur","Nilanga","Nimbahera","Nirmal","Niwai","Niwari","Nizamabad","Nohar","Noida","Nokha","Nokha","Nongstoin","Noorpur","North Lakhimpur","Nowgong","Nowrozabad (Khodargama)","Nuzvid","O' Valley","Obra","Oddanchatram","Ongole","Orai","Osmanabad","Ottappalam","Ozar","P.N.Patti","Pachora","Pachore","Pacode","Padmanabhapuram","Padra","Padrauna","Paithan","Pakaur","Palacole","Palai","Palakkad","Palampur","Palani","Palanpur","Palasa Kasibugga","Palghar","Pali","Pali","Palia Kalan","Palitana","Palladam","Pallapatti","Pallikonda","Palwal","Palwancha","Panagar","Panagudi","Panaji","Panamattom","Panchkula","Panchla","Pandharkaoda","Pandharpur","Pandhurna","PandUrban Agglomeration","Panipat","Panna","Panniyannur","Panruti","Panvel","Pappinisseri","Paradip","Paramakudi","Parangipettai","Parasi","Paravoor","Parbhani","Pardi","Parlakhemundi","Parli","Partur","Parvathipuram","Pasan","Paschim Punropara","Pasighat","Patan","Pathanamthitta","Pathankot","Pathardi","Pathri","Patiala","Patna","Patratu","Pattamundai","Patti","Pattran","Pattukkottai","Patur","Pauni","Pauri","Pavagada","Pedana","Peddapuram","Pehowa","Pen","Perambalur","Peravurani","Peringathur","Perinthalmanna","Periyakulam","Periyasemur","Pernampattu","Perumbavoor","Petlad","Phagwara","Phalodi","Phaltan","Phillaur","Phulabani","Phulera","Phulpur","Phusro","Pihani","Pilani","Pilibanga","Pilibhit","Pilkhuwa","Pindwara","Pinjore","Pipar City","Pipariya","Piriyapatna","Piro","Pithampur","Pithapuram","Pithoragarh","Pollachi","Polur","Pondicherry","Ponnani","Ponneri","Ponnur","Porbandar","Porsa","Port Blair","Powayan","Prantij","Pratapgarh","Pratapgarh","Prithvipur","Proddatur","Pudukkottai","Pudupattinam","Pukhrayan","Pulgaon","Puliyankudi","Punalur","Punch","Pune","Punganur","Punjaipugalur","Puranpur","Puri","Purna","Purnia","PurqUrban Agglomerationzi","Purulia","Purwa","Pusad","Puthuppally","Puttur","Puttur","Qadian","Raayachuru","Rabkavi Banhatti","Radhanpur","Rae Bareli","Rafiganj","Raghogarh-Vijaypur","Raghunathganj","Raghunathpur","Rahatgarh","Rahuri","Raiganj","Raigarh","Raikot","Raipur","Rairangpur","Raisen","Raisinghnagar","Rajagangapur","Rajahmundry","Rajakhera","Rajaldesar","Rajam","Rajampet","Rajapalayam","Rajauri","Rajgarh (Alwar)","Rajgarh (Churu)","Rajgarh","Rajgir","Rajkot","Rajnandgaon","Rajpipla","Rajpura","Rajsamand","Rajula","Rajura","Ramachandrapuram","Ramagundam","Ramanagaram","Ramanathapuram","Ramdurg","Rameshwaram","Ramganj Mandi","Ramgarh","Ramnagar","Ramnagar","Ramngarh","Rampur Maniharan","Rampur","Rampura Phul","Rampurhat","Ramtek","Ranaghat","Ranavav","Ranchi","Ranebennuru","Rangia","Rania","Ranibennur","Ranipet","Rapar","Rasipuram","Rasra","Ratangarh","Rath","Ratia","Ratlam","Ratnagiri","Rau","Raurkela","Raver","Rawatbhata","Rawatsar","Raxaul Bazar","Rayachoti","Rayadurg","Rayagada","Reengus","Rehli","Renigunta","Renukoot","Reoti","Repalle","Revelganj","Rewa","Rewari","Rishikesh","Risod","Robertsganj","Robertson Pet","Rohtak","Ron","Roorkee","Rosera","Rudauli","Rudrapur","Rudrapur","Rupnagar","Sabalgarh","Sadabad","Sadalagi","Sadasivpet","Sadri","Sadulpur","Sadulshahar","Safidon","Safipur","Sagar","Sagara","Sagwara","Saharanpur","Saharsa","Sahaspur","Sahaswan","Sahawar","Sahibganj","Sahjanwa","Saidpur","Saiha","Sailu","Sainthia","Sakaleshapura","Sakti","Salaya","Salem","Salur","Samalkha","Samalkot","Samana","Samastipur","Sambalpur","Sambhal","Sambhar","Samdhan","Samthar","Sanand","Sanawad","Sanchore","Sandi","Sandila","Sanduru","Sangamner","Sangareddy","Sangaria","Sangli","Sangole","Sangrur","Sankarankovil","Sankari","Sankeshwara","Santipur","Sarangpur","Sardarshahar","Sardhana","Sarni","Sarsod","Sasaram","Sasvad","Satana","Satara","Sathyamangalam"];

 const errorResponse = (msg) => {
  return {status: 'error', message: msg};
}

const successResponse = (data) => {
  return {status: 'success', data: data };
}


/*===============================================
 * weatherLib
 ===============================================*/
const API_BASE = 'http://api.weatherapi.com/v1/';

const cityData = async (name) => {
    const url = buildUrl('current.json', {q: name});
    const data = await fetch(url)
        .then(res => res.json())
    return data;
}

const forecastData =  async (name, days) => {
  const url = buildUrl('forecast.json', {q: name, days: days});
  const data = await fetch(url)
      .then(res => res.json())
  return data;
}

const buildUrl = (endpoint, params) => {
    const url = new URL(API_BASE+''+endpoint);
    params['key'] = process.env.API_KEY;
    url.search = new URLSearchParams(params);
    return url;
}
  