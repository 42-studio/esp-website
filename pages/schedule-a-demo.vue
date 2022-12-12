<script setup>
const config = useRuntimeConfig()

const form = reactive({

  body: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    phoneNumber: '',
    companyName: '',
    companySize: '',
    country: '',
    message: '',
    marketing: false
  },

  response: null,
  errors: {},
  pending: false

})

const submit = async () => {
  form.pending = true
  form.errors = {}

  try {
    const { data } = await $fetch(`${ config.public.pes }/demo-request`, {
      method: 'POST',
      body: form.body
    })

    form.response = data
    form.pending = false
    await navigateTo('/request-success')
  } catch (error) {
    console.info('error?.response')
    console.dir(error?.response?._data)
    form.errors = error?.response?._data?.errors ?? {}

    form.pending = false
  }

}

const companySizes = [
  {
    "label": "Less than 2,500",
    "description": "",
    "value": "LESS_2500"
  },
  {
    "label": "2,501 - 5,000",
    "description": "",
    "value": "BETWEEN_2501_5000"
  },
  {
    "label": "5,001 - 10,000",
    "description": "",
    "value": "BETWEEN_5001_10000"
  },
  {
    "label": "10,001 - 20,000",
    "description": "",
    "value": "BETWEEN_10001_20000"
  },
  {
    "label": "20,001 - 50,000",
    "description": "",
    "value": "BETWEEN_20001_50000"
  },
  {
    "label": "50,001 - 100,000",
    "description": "",
    "value": "BETWEEN_50001_100000"
  },
  {
    "label": "Greater than 100,000",
    "description": "",
    "value": "GREATER_100001"
  }
]

const countries = [
  {
    "label": "AFG - Afghanistan",
    "description": "",
    "value": "AFG"
  },
  {
    "label": "ALB - Albania",
    "description": "",
    "value": "ALB"
  },
  {
    "label": "DZA - Algeria",
    "description": "",
    "value": "DZA"
  },
  {
    "label": "ASM - American Samoa",
    "description": "",
    "value": "ASM"
  },
  {
    "label": "AND - Andorra",
    "description": "",
    "value": "AND"
  },
  {
    "label": "AGO - Angola",
    "description": "",
    "value": "AGO"
  },
  {
    "label": "AIA - Anguilla",
    "description": "",
    "value": "AIA"
  },
  {
    "label": "ATA - Antarctica",
    "description": "",
    "value": "ATA"
  },
  {
    "label": "ATG - Antigua and Barbuda",
    "description": "",
    "value": "ATG"
  },
  {
    "label": "ARG - Argentina",
    "description": "",
    "value": "ARG"
  },
  {
    "label": "ARM - Armenia",
    "description": "",
    "value": "ARM"
  },
  {
    "label": "ABW - Aruba",
    "description": "",
    "value": "ABW"
  },
  {
    "label": "AUS - Australia",
    "description": "",
    "value": "AUS"
  },
  {
    "label": "AUT - Austria",
    "description": "",
    "value": "AUT"
  },
  {
    "label": "AZE - Azerbaijan",
    "description": "",
    "value": "AZE"
  },
  {
    "label": "BHS - Bahamas",
    "description": "",
    "value": "BHS"
  },
  {
    "label": "BHR - Bahrain",
    "description": "",
    "value": "BHR"
  },
  {
    "label": "BGD - Bangladesh",
    "description": "",
    "value": "BGD"
  },
  {
    "label": "BRB - Barbados",
    "description": "",
    "value": "BRB"
  },
  {
    "label": "BLR - Belarus",
    "description": "",
    "value": "BLR"
  },
  {
    "label": "BEL - Belgium",
    "description": "",
    "value": "BEL"
  },
  {
    "label": "BLZ - Belize",
    "description": "",
    "value": "BLZ"
  },
  {
    "label": "BEN - Benin",
    "description": "",
    "value": "BEN"
  },
  {
    "label": "BMU - Bermuda",
    "description": "",
    "value": "BMU"
  },
  {
    "label": "BTN - Bhutan",
    "description": "",
    "value": "BTN"
  },
  {
    "label": "BOL - Bolivia",
    "description": "",
    "value": "BOL"
  },
  {
    "label": "BES - Bonaire, Sint Eustatius and Saba",
    "description": "",
    "value": "BES"
  },
  {
    "label": "BIH - Bosnia and Herzegovina",
    "description": "",
    "value": "BIH"
  },
  {
    "label": "BWA - Botswana",
    "description": "",
    "value": "BWA"
  },
  {
    "label": "BVT - Bouvet Island",
    "description": "",
    "value": "BVT"
  },
  {
    "label": "BRA - Brazil",
    "description": "",
    "value": "BRA"
  },
  {
    "label": "IOT - British Indian Ocean Territory",
    "description": "",
    "value": "IOT"
  },
  {
    "label": "BRN - Brunei Darussalam",
    "description": "",
    "value": "BRN"
  },
  {
    "label": "BGR - Bulgaria",
    "description": "",
    "value": "BGR"
  },
  {
    "label": "BFA - Burkina Faso",
    "description": "",
    "value": "BFA"
  },
  {
    "label": "BDI - Burundi",
    "description": "",
    "value": "BDI"
  },
  {
    "label": "KHM - Cambodia (Kampuchea)",
    "description": "",
    "value": "KHM"
  },
  {
    "label": "CMR - Cameroon",
    "description": "",
    "value": "CMR"
  },
  {
    "label": "CAN - Canada",
    "description": "",
    "value": "CAN"
  },
  {
    "label": "CPV - Cape Verde",
    "description": "",
    "value": "CPV"
  },
  {
    "label": "CYM - Cayman Islands",
    "description": "",
    "value": "CYM"
  },
  {
    "label": "CAF - Central African Republic",
    "description": "",
    "value": "CAF"
  },
  {
    "label": "TCD - Chad",
    "description": "",
    "value": "TCD"
  },
  {
    "label": "CHL - Chile",
    "description": "",
    "value": "CHL"
  },
  {
    "label": "CHN - China",
    "description": "",
    "value": "CHN"
  },
  {
    "label": "CXR - Christmas Island",
    "description": "",
    "value": "CXR"
  },
  {
    "label": "CCK - Cocos (Keeling) Islands",
    "description": "",
    "value": "CCK"
  },
  {
    "label": "COL - Colombia",
    "description": "",
    "value": "COL"
  },
  {
    "label": "COM - Comoros",
    "description": "",
    "value": "COM"
  },
  {
    "label": "COG - Congo",
    "description": "",
    "value": "COG"
  },
  {
    "label": "COD - Congo, The Democratic Republic Of The",
    "description": "",
    "value": "COD"
  },
  {
    "label": "COK - Cook Islands",
    "description": "",
    "value": "COK"
  },
  {
    "label": "CRI - Costa Rica",
    "description": "",
    "value": "CRI"
  },
  {
    "label": "CIV - Cote d'Ivoire(Ivory Coast)",
    "description": "",
    "value": "CIV"
  },
  {
    "label": "HRV - Croatia (Hrvatska)",
    "description": "",
    "value": "HRV"
  },
  {
    "label": "CUW - Curacao",
    "description": "",
    "value": "CUW"
  },
  {
    "label": "CYP - Cyprus",
    "description": "",
    "value": "CYP"
  },
  {
    "label": "CZE - Czech Republic",
    "description": "",
    "value": "CZE"
  },
  {
    "label": "DNK - Denmark",
    "description": "",
    "value": "DNK"
  },
  {
    "label": "DJI - Djibouti",
    "description": "",
    "value": "DJI"
  },
  {
    "label": "DMA - Dominica",
    "description": "",
    "value": "DMA"
  },
  {
    "label": "DOM - Dominican Republic",
    "description": "",
    "value": "DOM"
  },
  {
    "label": "ECU - Ecuador",
    "description": "",
    "value": "ECU"
  },
  {
    "label": "EGY - Egypt",
    "description": "",
    "value": "EGY"
  },
  {
    "label": "SLV - El Salvador",
    "description": "",
    "value": "SLV"
  },
  {
    "label": "GNQ - Equatorial Guinea",
    "description": "",
    "value": "GNQ"
  },
  {
    "label": "ERI - Eritrea",
    "description": "",
    "value": "ERI"
  },
  {
    "label": "EST - Estonia",
    "description": "",
    "value": "EST"
  },
  {
    "label": "ETH - Ethiopia",
    "description": "",
    "value": "ETH"
  },
  {
    "label": "FLK - Falkland Islands (Malvinas)",
    "description": "",
    "value": "FLK"
  },
  {
    "label": "FRO - Faroe Islands",
    "description": "",
    "value": "FRO"
  },
  {
    "label": "FJI - Fiji",
    "description": "",
    "value": "FJI"
  },
  {
    "label": "FIN - Finland",
    "description": "",
    "value": "FIN"
  },
  {
    "label": "FRA - France",
    "description": "",
    "value": "FRA"
  },
  {
    "label": "GUF - French Guiana",
    "description": "",
    "value": "GUF"
  },
  {
    "label": "PYF - French Polynesia",
    "description": "",
    "value": "PYF"
  },
  {
    "label": "ATF - French Southern Territories",
    "description": "",
    "value": "ATF"
  },
  {
    "label": "GAB - Gabon",
    "description": "",
    "value": "GAB"
  },
  {
    "label": "GMB - Gambia",
    "description": "",
    "value": "GMB"
  },
  {
    "label": "GEO - Georgia",
    "description": "",
    "value": "GEO"
  },
  {
    "label": "DEU - Germany",
    "description": "",
    "value": "DEU"
  },
  {
    "label": "GHA - Ghana",
    "description": "",
    "value": "GHA"
  },
  {
    "label": "GIB - Gibraltar",
    "description": "",
    "value": "GIB"
  },
  {
    "label": "GRC - Greece",
    "description": "",
    "value": "GRC"
  },
  {
    "label": "GRL - Greenland",
    "description": "",
    "value": "GRL"
  },
  {
    "label": "GRD - Grenada",
    "description": "",
    "value": "GRD"
  },
  {
    "label": "GLP - Guadeloupe",
    "description": "",
    "value": "GLP"
  },
  {
    "label": "GUM - Guam",
    "description": "",
    "value": "GUM"
  },
  {
    "label": "GTM - Guatemala",
    "description": "",
    "value": "GTM"
  },
  {
    "label": "GGY - Guernsey",
    "description": "",
    "value": "GGY"
  },
  {
    "label": "GIN - Guinea",
    "description": "",
    "value": "GIN"
  },
  {
    "label": "GNB - Guinea-Bissau",
    "description": "",
    "value": "GNB"
  },
  {
    "label": "GUY - Guyana",
    "description": "",
    "value": "GUY"
  },
  {
    "label": "HTI - Haiti",
    "description": "",
    "value": "HTI"
  },
  {
    "label": "HMD - Heard Island And Mcdonald Islands",
    "description": "",
    "value": "HMD"
  },
  {
    "label": "VAT - Holy See (Vatican City State)",
    "description": "",
    "value": "VAT"
  },
  {
    "label": "HND - Honduras",
    "description": "",
    "value": "HND"
  },
  {
    "label": "HKG - Hong Kong",
    "description": "",
    "value": "HKG"
  },
  {
    "label": "HUN - Hungary",
    "description": "",
    "value": "HUN"
  },
  {
    "label": "ISL - Iceland",
    "description": "",
    "value": "ISL"
  },
  {
    "label": "IND - India",
    "description": "",
    "value": "IND"
  },
  {
    "label": "IDN - Indonesia",
    "description": "",
    "value": "IDN"
  },
  {
    "label": "IRQ - Iraq",
    "description": "",
    "value": "IRQ"
  },
  {
    "label": "IRL - Ireland",
    "description": "",
    "value": "IRL"
  },
  {
    "label": "IMN - Isle of Man",
    "description": "",
    "value": "IMN"
  },
  {
    "label": "ISR - Israel",
    "description": "",
    "value": "ISR"
  },
  {
    "label": "ITA - Italy",
    "description": "",
    "value": "ITA"
  },
  {
    "label": "JAM - Jamaica",
    "description": "",
    "value": "JAM"
  },
  {
    "label": "JPN - Japan",
    "description": "",
    "value": "JPN"
  },
  {
    "label": "JEY - Jersey",
    "description": "",
    "value": "JEY"
  },
  {
    "label": "JOR - Jordan",
    "description": "",
    "value": "JOR"
  },
  {
    "label": "KAZ - Kazakhstan",
    "description": "",
    "value": "KAZ"
  },
  {
    "label": "KEN - Kenya",
    "description": "",
    "value": "KEN"
  },
  {
    "label": "KIR - Kiribati",
    "description": "",
    "value": "KIR"
  },
  {
    "label": "KWT - Kuwait",
    "description": "",
    "value": "KWT"
  },
  {
    "label": "KGZ - Kyrgyzstan",
    "description": "",
    "value": "KGZ"
  },
  {
    "label": "LAO - Lao People's Democratic Republic",
    "description": "",
    "value": "LAO"
  },
  {
    "label": "LVA - Latvia",
    "description": "",
    "value": "LVA"
  },
  {
    "label": "LBN - Lebanon",
    "description": "",
    "value": "LBN"
  },
  {
    "label": "LSO - Lesotho",
    "description": "",
    "value": "LSO"
  },
  {
    "label": "LBR - Liberia",
    "description": "",
    "value": "LBR"
  },
  {
    "label": "LBY - Libyan Arab Jamahiriya",
    "description": "",
    "value": "LBY"
  },
  {
    "label": "LIE - Liechtenstein",
    "description": "",
    "value": "LIE"
  },
  {
    "label": "LTU - Lithuania",
    "description": "",
    "value": "LTU"
  },
  {
    "label": "LUX - Luxembourg",
    "description": "",
    "value": "LUX"
  },
  {
    "label": "MAC - Macao",
    "description": "",
    "value": "MAC"
  },
  {
    "label": "MDG - Madagascar",
    "description": "",
    "value": "MDG"
  },
  {
    "label": "MWI - Malawi",
    "description": "",
    "value": "MWI"
  },
  {
    "label": "MYS - Malaysia",
    "description": "",
    "value": "MYS"
  },
  {
    "label": "MDV - Maldives",
    "description": "",
    "value": "MDV"
  },
  {
    "label": "MLI - Mali",
    "description": "",
    "value": "MLI"
  },
  {
    "label": "MLT - Malta",
    "description": "",
    "value": "MLT"
  },
  {
    "label": "MHL - Marshall Islands",
    "description": "",
    "value": "MHL"
  },
  {
    "label": "MTQ - Martinique",
    "description": "",
    "value": "MTQ"
  },
  {
    "label": "MRT - Mauritania",
    "description": "",
    "value": "MRT"
  },
  {
    "label": "MUS - Mauritius",
    "description": "",
    "value": "MUS"
  },
  {
    "label": "MYT - Mayotte",
    "description": "",
    "value": "MYT"
  },
  {
    "label": "MEX - Mexico",
    "description": "",
    "value": "MEX"
  },
  {
    "label": "FSM - Micronesia, Federated States of",
    "description": "",
    "value": "FSM"
  },
  {
    "label": "MDA - Moldova",
    "description": "",
    "value": "MDA"
  },
  {
    "label": "MCO - Monaco",
    "description": "",
    "value": "MCO"
  },
  {
    "label": "MNG - Mongolia",
    "description": "",
    "value": "MNG"
  },
  {
    "label": "MNE - Montenegro",
    "description": "",
    "value": "MNE"
  },
  {
    "label": "MSR - Montserrat",
    "description": "",
    "value": "MSR"
  },
  {
    "label": "MAR - Morocco",
    "description": "",
    "value": "MAR"
  },
  {
    "label": "MOZ - Mozambique",
    "description": "",
    "value": "MOZ"
  },
  {
    "label": "MMR - Myanmar",
    "description": "",
    "value": "MMR"
  },
  {
    "label": "NAM - Namibia",
    "description": "",
    "value": "NAM"
  },
  {
    "label": "NRU - Nauru",
    "description": "",
    "value": "NRU"
  },
  {
    "label": "NPL - Nepal",
    "description": "",
    "value": "NPL"
  },
  {
    "label": "NLD - Netherlands",
    "description": "",
    "value": "NLD"
  },
  {
    "label": "ANT - Netherlands Antilles",
    "description": "",
    "value": "ANT"
  },
  {
    "label": "NCL - New Caledonia",
    "description": "",
    "value": "NCL"
  },
  {
    "label": "NZL - New Zealand",
    "description": "",
    "value": "NZL"
  },
  {
    "label": "NIC - Nicaragua",
    "description": "",
    "value": "NIC"
  },
  {
    "label": "NER - Niger",
    "description": "",
    "value": "NER"
  },
  {
    "label": "NGA - Nigeria",
    "description": "",
    "value": "NGA"
  },
  {
    "label": "NIU - Niue",
    "description": "",
    "value": "NIU"
  },
  {
    "label": "NFK - Norfolk Island",
    "description": "",
    "value": "NFK"
  },
  {
    "label": "MNP - Northern Mariana Islands",
    "description": "",
    "value": "MNP"
  },
  {
    "label": "MKD - North Macedonia",
    "description": "",
    "value": "MKD"
  },
  {
    "label": "NOR - Norway",
    "description": "",
    "value": "NOR"
  },
  {
    "label": "OMN - Oman",
    "description": "",
    "value": "OMN"
  },
  {
    "label": "PAK - Pakistan",
    "description": "",
    "value": "PAK"
  },
  {
    "label": "PLW - Palau",
    "description": "",
    "value": "PLW"
  },
  {
    "label": "PSE - Palestinian Territory, Occupied",
    "description": "",
    "value": "PSE"
  },
  {
    "label": "PAN - Panama",
    "description": "",
    "value": "PAN"
  },
  {
    "label": "PNG - Papua New Guinea",
    "description": "",
    "value": "PNG"
  },
  {
    "label": "PRY - Paraguay",
    "description": "",
    "value": "PRY"
  },
  {
    "label": "PER - Peru",
    "description": "",
    "value": "PER"
  },
  {
    "label": "PHL - Philippines",
    "description": "",
    "value": "PHL"
  },
  {
    "label": "PCN - Pitcairn",
    "description": "",
    "value": "PCN"
  },
  {
    "label": "POL - Poland",
    "description": "",
    "value": "POL"
  },
  {
    "label": "PRT - Portugal",
    "description": "",
    "value": "PRT"
  },
  {
    "label": "PRI - Puerto Rico",
    "description": "",
    "value": "PRI"
  },
  {
    "label": "QAT - Qatar",
    "description": "",
    "value": "QAT"
  },
  {
    "label": "KOR - Republic of Korea",
    "description": "",
    "value": "KOR"
  },
  {
    "label": "XKX - Republic of Kosovo",
    "description": "",
    "value": "XKX"
  },
  {
    "label": "REU - Reunion",
    "description": "",
    "value": "REU"
  },
  {
    "label": "ROU - Romania",
    "description": "",
    "value": "ROU"
  },
  {
    "label": "RUS - Russian Federation",
    "description": "",
    "value": "RUS"
  },
  {
    "label": "RWA - Rwanda",
    "description": "",
    "value": "RWA"
  },
  {
    "label": "BLM - Saint Barthelemy",
    "description": "",
    "value": "BLM"
  },
  {
    "label": "SHN - Saint Helena",
    "description": "",
    "value": "SHN"
  },
  {
    "label": "KNA - Saint Kitts And Nevis",
    "description": "",
    "value": "KNA"
  },
  {
    "label": "LCA - Saint Lucia",
    "description": "",
    "value": "LCA"
  },
  {
    "label": "MAF - Saint Martin (France),",
    "description": "",
    "value": "MAF"
  },
  {
    "label": "SPM - Saint Pierre And Miquelon",
    "description": "",
    "value": "SPM"
  },
  {
    "label": "VCT - Saint Vincent And The Grenadines",
    "description": "",
    "value": "VCT"
  },
  {
    "label": "WSM - Samoa",
    "description": "",
    "value": "WSM"
  },
  {
    "label": "SMR - San Marino",
    "description": "",
    "value": "SMR"
  },
  {
    "label": "STP - Sao Tome and Principe",
    "description": "",
    "value": "STP"
  },
  {
    "label": "SAU - Saudi Arabia",
    "description": "",
    "value": "SAU"
  },
  {
    "label": "SEN - Senegal",
    "description": "",
    "value": "SEN"
  },
  {
    "label": "SRB - Serbia",
    "description": "",
    "value": "SRB"
  },
  {
    "label": "SCG - Serbia And Montenegro",
    "description": "",
    "value": "SCG"
  },
  {
    "label": "SYC - Seychelles",
    "description": "",
    "value": "SYC"
  },
  {
    "label": "SLE - Sierra Leone",
    "description": "",
    "value": "SLE"
  },
  {
    "label": "SGP - Singapore",
    "description": "",
    "value": "SGP"
  },
  {
    "label": "SXM - Sint Maarten (Dutch Part)",
    "description": "",
    "value": "SXM"
  },
  {
    "label": "SVK - Slovakia",
    "description": "",
    "value": "SVK"
  },
  {
    "label": "SVN - Slovenia",
    "description": "",
    "value": "SVN"
  },
  {
    "label": "SLB - Solomon Islands",
    "description": "",
    "value": "SLB"
  },
  {
    "label": "SOM - Somalia",
    "description": "",
    "value": "SOM"
  },
  {
    "label": "ZAF - South Africa",
    "description": "",
    "value": "ZAF"
  },
  {
    "label": "SGS - South Georgia And The South Sandwich Islands",
    "description": "",
    "value": "SGS"
  },
  {
    "label": "SSD - South Sudan",
    "description": "",
    "value": "SSD"
  },
  {
    "label": "ESP - Spain",
    "description": "",
    "value": "ESP"
  },
  {
    "label": "LKA - Sri Lanka",
    "description": "",
    "value": "LKA"
  },
  {
    "label": "SDN - Sudan",
    "description": "",
    "value": "SDN"
  },
  {
    "label": "SUR - Suriname",
    "description": "",
    "value": "SUR"
  },
  {
    "label": "SJM - Svalbard And Jan Mayen",
    "description": "",
    "value": "SJM"
  },
  {
    "label": "SWZ - Swaziland",
    "description": "",
    "value": "SWZ"
  },
  {
    "label": "SWE - Sweden",
    "description": "",
    "value": "SWE"
  },
  {
    "label": "CHE - Switzerland",
    "description": "",
    "value": "CHE"
  },
  {
    "label": "TWN - Taiwan",
    "description": "",
    "value": "TWN"
  },
  {
    "label": "TJK - Tajikistan",
    "description": "",
    "value": "TJK"
  },
  {
    "label": "TZA - Tanzania, United Republic Of",
    "description": "",
    "value": "TZA"
  },
  {
    "label": "THA - Thailand",
    "description": "",
    "value": "THA"
  },
  {
    "label": "TLS - Timor-Leste",
    "description": "",
    "value": "TLS"
  },
  {
    "label": "TGO - Togo",
    "description": "",
    "value": "TGO"
  },
  {
    "label": "TKL - Tokelau",
    "description": "",
    "value": "TKL"
  },
  {
    "label": "TON - Tonga",
    "description": "",
    "value": "TON"
  },
  {
    "label": "TTO - Trinidad and Tobago",
    "description": "",
    "value": "TTO"
  },
  {
    "label": "TUN - Tunisia",
    "description": "",
    "value": "TUN"
  },
  {
    "label": "TUR - Turkey",
    "description": "",
    "value": "TUR"
  },
  {
    "label": "TKM - Turkmenistan",
    "description": "",
    "value": "TKM"
  },
  {
    "label": "TCA - Turks And Caicos Islands",
    "description": "",
    "value": "TCA"
  },
  {
    "label": "TUV - Tuvalu",
    "description": "",
    "value": "TUV"
  },
  {
    "label": "UGA - Uganda",
    "description": "",
    "value": "UGA"
  },
  {
    "label": "UKR - Ukraine",
    "description": "",
    "value": "UKR"
  },
  {
    "label": "ARE - United Arab Emirates",
    "description": "",
    "value": "ARE"
  },
  {
    "label": "GBR - United Kingdom",
    "description": "",
    "value": "GBR"
  },
  {
    "label": "USA - United States",
    "description": "",
    "value": "USA"
  },
  {
    "label": "UMI - United States Minor Outlying Islands",
    "description": "",
    "value": "UMI"
  },
  {
    "label": "URY - Uruguay",
    "description": "",
    "value": "URY"
  },
  {
    "label": "UZB - Uzbekistan",
    "description": "",
    "value": "UZB"
  },
  {
    "label": "VUT - Vanuatu",
    "description": "",
    "value": "VUT"
  },
  {
    "label": "VEN - Venezuela",
    "description": "",
    "value": "VEN"
  },
  {
    "label": "VNM - Viet Nam",
    "description": "",
    "value": "VNM"
  },
  {
    "label": "VGB - Virgin Islands, British",
    "description": "",
    "value": "VGB"
  },
  {
    "label": "VIR - Virgin Islands, U.S.",
    "description": "",
    "value": "VIR"
  },
  {
    "label": "WLF - Wallis And Futuna",
    "description": "",
    "value": "WLF"
  },
  {
    "label": "ESH - Western Sahara",
    "description": "",
    "value": "ESH"
  },
  {
    "label": "YEM - Yemen",
    "description": "",
    "value": "YEM"
  },
  {
    "label": "ZMB - Zambia",
    "description": "",
    "value": "ZMB"
  },
  {
    "label": "ZWE - Zimbabwe",
    "description": "",
    "value": "ZWE"
  }
]

</script>

<template>

  <div class="container relative mt-[15vh]">

    <div class="flex flex-wrap mb-20">

      <div class="w-full md:w-6/12">
        <h1 class="text-2xl font-bold tracking-tight sm:text-5xl">
          Schedule a demo
        </h1>

        <p class="mt-6 text-lg leading-8 text-slate-300">
          Let's kickstart your Continuous Security Investment Validation journey and put threats at the heart of
          your strategy.<br>
        </p>

        <p class="mt-6 text-lg leading-8 text-slate-400">
          A representative will reach out to schedule a suitable time.
        </p>

      </div>

      <div class="w-full md:w-6/12">
        <img src="~/assets/img/brain.svg" class="mx-auto md:mr-0 md:pl-10 mt-20 md:mt-0 breath" />
      </div>

    </div>

    <div>

      <form @submit.prevent="submit">

        <div class="flex flex-wrap justify-center">

          <div class="w-6/12 pr-5">

            <elements-input-field label="Given Name" name="firstName" :errors="form.errors" v-slot="props">
              <input v-model="form.body.firstName" type="text" tabindex="1" placeholder="..." v-bind="props" />
            </elements-input-field>

            <elements-input-field label="Your email" name="email" :errors="form.errors" v-slot="props">
              <input v-model="form.body.email" type="email" tabindex="3" placeholder="..." v-bind="props" />
            </elements-input-field>

            <elements-input-field label="Company Name" name="companyName" :errors="form.errors" v-slot="props">
              <input v-model="form.body.companyName" type="text" tabindex="5" placeholder="..." v-bind="props" />
            </elements-input-field>

            <elements-input-field label="Company Size" name="companySize" :errors="form.errors" v-slot="props">
              <select v-model="form.body.companySize" tabindex="6" v-bind="props">
                <template v-for="size in companySizes" :key="size.value">
                  <option :value="size.value">{{ size.label }}</option>
                </template>
              </select>
            </elements-input-field>

            <elements-input-field label="Country or Region" name="country" :errors="form.errors" v-slot="props">
              <select v-model="form.body.country" tabindex="7" v-bind="props">
                <template v-for="country in countries" :key="country.value">
                  <option :value="country.value">{{ country.label }}</option>
                </template>
              </select>
            </elements-input-field>

          </div>

          <div class="w-6/12 pl-5">

            <elements-input-field label="Family Name" name="lastName" :errors="form.errors" v-slot="props">
              <input v-model="form.body.lastName" type="text" tabindex="2" placeholder="..." v-bind="props" />
            </elements-input-field>

            <elements-input-field label="Phone Number" name="phoneNumber" :errors="form.errors" v-slot="props">
              <input v-model="form.body.phoneNumber" type="tel" tabindex="4" placeholder="..." pattern="\d{11}" v-bind="props" />
            </elements-input-field>

            <elements-input-field label="Job Title" name="jobTitle" :errors="form.errors" v-slot="props">
              <input v-model="form.body.jobTitle" type="text" tabindex="6" v-bind="props" />
            </elements-input-field>

            <elements-input-field label="Message" name="message" :errors="form.errors" v-slot="props">
              <textarea v-model="form.body.message" rows="6" tabindex="8" placeholder="..." v-bind="props" />
            </elements-input-field>

          </div>

        </div>

        <div class="flex justify-between items-center">

          <div class="inline-flex items-center">
            <input v-model="form.marketing" id="input-newsletter" type="checkbox" class="form-check">
            <label for="input-newsletter" class="ml-2 text-sm font-medium text-slat-500">I would like to signup for the newsletter</label>
          </div>

          <button type="submit" class="ml-8 button-primary" :disabled="form.pending">Send Request</button>
        </div>

      </form>

      <p class="text-sm mt-10">
        ESPROFILER is committed to protecting and respecting your privacy. We will only use your personal information to
        administer your account and to provide the products and services you have requested from us. By clicking 'Send
        Request' above, you consent to allow ESPROFILER to store and process the personal information submitted above to
        provide you the content requested.
      </p>

    </div>

  </div>

</template>
