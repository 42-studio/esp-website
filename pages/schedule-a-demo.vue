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
    value: "LESS_2500",
    text: "Less than 2500 Employees"
  },
  {
    value: "BETWEEN_2501_5000",
    text: "2501 - 5000 Employees"
  },
  {
    value: "BETWEEN_5001_10000",
    text: "5001 - 10,000 Employees"
  },
  {
    value: "BETWEEN_10001_20000",
    text: "10,001 - 20,000 Employees"
  },
  {
    value: "GREATER_20001",
    text: "20,000+ Employees"
  }
]

const countries = [
  {
    value: "UNITED_KINGDOM",
    text: "United Kingdom"
  },
  {
    value: "CANADA",
    text: "Canada"
  },
  {
    value: "FRANCE",
    text: "France"
  },
  {
    value: "GERMANY",
    text: "Germany"
  },
  {
    value: "NETHERLANDS",
    text: "Netherlands"
  },
  {
    value: "SWITZERLAND",
    text: "Switzerland"
  },
  {
    value: "JAPAN",
    text: "Japan"
  },
  {
    value: "AUSTRALIA",
    text: "Australia"
  },
  {
    value: "SWEDEN",
    text: "Sweden"
  },
  {
    value: "BELGIUM",
    text: "Belgium"
  },
  {
    value: "MEXICO",
    text: "Mexico"
  },
  {
    value: "INDIA",
    text: "India"
  },
  {
    value: "CHINA",
    text: "China"
  },
  {
    value: "IRELAND",
    text: "Ireland"
  },
  {
    value: "DENMARK",
    text: "Denmark"
  },
  {
    value: "SPAIN",
    text: "Spain"
  },
  {
    value: "BRAZIL",
    text: "Brazil"
  },
  {
    value: "FINLAND",
    text: "Finland"
  },
  {
    value: "ISLE_OF_MAN",
    text: "Isle of Man"
  },
  {
    value: "ISRAEL",
    text: "Israel"
  },
  {
    value: "SINGAPORE",
    text: "Singapore"
  },
  {
    value: "MALTA",
    text: "Malta"
  },
  {
    value: "ITALY",
    text: "Italy"
  },
  {
    value: "SOUTH_AFRICA",
    text: "South Africa"
  },
  {
    value: "AUSTRIA",
    text: "Austria"
  },
  {
    value: "LUXEMBOURG",
    text: "Luxembourg"
  },
  {
    value: "NEW_ZEALAND",
    text: "New Zealand"
  },
  {
    value: "KOREA_REPUBLIC_OF",
    text: "Korea Republic of"
  },
  {
    value: "NORWAY",
    text: "Norway"
  },
  {
    value: "CHILE",
    text: "Chile"
  },
  {
    value: "BERMUDA",
    text: "Bermuda"
  },
  {
    value: "TURKEY",
    text: "Turkey"
  },
  {
    value: "SAUDI_ARABIA",
    text: "Saudi Arabia"
  },
  {
    value: "PORTUGAL",
    text: "Portugal"
  },
  {
    value: "AFGHANISTAN",
    text: "Afghanistan"
  },
  {
    value: "ALAND_ISLANDS",
    text: "Åland Islands"
  },
  {
    value: "ALBANIA",
    text: "Albania"
  },
  {
    value: "ALGERIA",
    text: "Algeria"
  },
  {
    value: "AMERICAN_SAMOA",
    text: "American Samoa"
  },
  {
    value: "ANDORRA",
    text: "Andorra"
  },
  {
    value: "ANGOLA",
    text: "Angola"
  },
  {
    value: "ANGUILLA",
    text: "Anguilla"
  },
  {
    value: "ANTARCTICA",
    text: "Antarctica"
  },
  {
    value: "ANTIGUA_AND_BARBUDA",
    text: "Antigua and Barbuda"
  },
  {
    value: "ARGENTINA",
    text: "Argentina"
  },
  {
    value: "ARMENIA",
    text: "Armenia"
  },
  {
    value: "ARUBA",
    text: "Aruba"
  },
  {
    value: "AZERBAIJAN",
    text: "Azerbaijan"
  },
  {
    value: "BAHAMAS",
    text: "Bahamas"
  },
  {
    value: "BAHRAIN",
    text: "Bahrain"
  },
  {
    value: "BANGLADESH",
    text: "Bangladesh"
  },
  {
    value: "BARBADOS",
    text: "Barbados"
  },
  {
    value: "BELARUS",
    text: "Belarus"
  },
  {
    value: "BELIZE",
    text: "Belize"
  },
  {
    value: "BENIN",
    text: "Benin"
  },
  {
    value: "BHUTAN",
    text: "Bhutan"
  },
  {
    value: "BOLIVIA_PLURINATIONAL_STATE_OF",
    text: "Bolivia Plurinational State of"
  },
  {
    value: "BONAIRE_SINT_EUSTATIUS_AND_SABA",
    text: "Bonaire Sint Eustatius and Saba"
  },
  {
    value: "BOSNIA_AND_HERZEGOVINA",
    text: "Bosnia and Herzegovina"
  },
  {
    value: "BOTSWANA",
    text: "Botswana"
  },
  {
    value: "BOUVET_ISLAND",
    text: "Bouvet Island"
  },
  {
    value: "BRITISH_INDIAN_OCEAN_TERRITORY",
    text: "British Indian Ocean Territory"
  },
  {
    value: "BRUNEI_DARUSSALAM",
    text: "Brunei Darussalam"
  },
  {
    value: "BULGARIA",
    text: "Bulgaria"
  },
  {
    value: "BURKINA_FASO",
    text: "Burkina Faso"
  },
  {
    value: "BURUNDI",
    text: "Burundi"
  },
  {
    value: "CAMBODIA",
    text: "Cambodia"
  },
  {
    value: "CAMEROON",
    text: "Cameroon"
  },
  {
    value: "CAPE_VERDE",
    text: "Cape Verde"
  },
  {
    value: "CAYMAN_ISLANDS",
    text: "Cayman Islands"
  },
  {
    value: "CENTRAL_AFRICAN_REPUBLIC",
    text: "Central African Republic"
  },
  {
    value: "CHAD",
    text: "Chad"
  },
  {
    value: "CHRISTMAS_ISLAND",
    text: "Christmas Island"
  },
  {
    value: "COCOS_KEELING_ISLANDS",
    text: "Cocos (Keeling) Islands"
  },
  {
    value: "COLOMBIA",
    text: "Colombia"
  },
  {
    value: "COM",
    text: "COM"
  },
  {
    value: "CONGO_THE_DEMOCRATIC_REPUBLIC_OF_THE",
    text: "Congo the Democratic Republic of the"
  },
  {
    value: "CONGO",
    text: "Congo"
  },
  {
    value: "COOK_ISLANDS",
    text: "Cook Islands"
  },
  {
    value: "COSTA_RICA",
    text: "Costa Rica"
  },
  {
    value: "COTE_DIVOIRE",
    text: "Côte d'Ivoire"
  },
  {
    value: "CROATIA",
    text: "Croatia"
  },
  {
    value: "CUBA",
    text: "Cuba"
  },
  {
    value: "CURACAO",
    text: "Curaçao"
  },
  {
    value: "CYPRUS",
    text: "Cyprus"
  },
  {
    value: "CZECH_REPUBLIC",
    text: "Czech Republic"
  },
  {
    value: "DJIBOUTI",
    text: "Djibouti"
  },
  {
    value: "DOMINICA",
    text: "Dominica"
  },
  {
    value: "DOMINICAN_REPUBLIC",
    text: "Dominican Republic"
  },
  {
    value: "ECUADOR",
    text: "Ecuador"
  },
  {
    value: "EGYPT",
    text: "Egypt"
  },
  {
    value: "EL_SALVADOR",
    text: "El Salvador"
  },
  {
    value: "EQUATORIAL_GUINEA",
    text: "Equatorial Guinea"
  },
  {
    value: "ERITREA",
    text: "Eritrea"
  },
  {
    value: "ESTONIA",
    text: "Estonia"
  },
  {
    value: "ETHIOPIA",
    text: "Ethiopia"
  },
  {
    value: "FALKLAND_ISLANDS_MALVINAS",
    text: "Falkland Islands (Malvinas)"
  },
  {
    value: "FAROE_ISLANDS",
    text: "Faroe Islands"
  },
  {
    value: "FIJI",
    text: "Fiji"
  },
  {
    value: "FRENCH_GUIANA",
    text: "French Guiana"
  },
  {
    value: "FRENCH_POLYNESIA",
    text: "French Polynesia"
  },
  {
    value: "FRENCH_SOUTHERN_TERRITORIES",
    text: "French Southern Territories"
  },
  {
    value: "GABON",
    text: "Gabon"
  },
  {
    value: "GAMBIA",
    text: "Gambia"
  },
  {
    value: "GEORGIA",
    text: "Georgia"
  },
  {
    value: "GHANA",
    text: "Ghana"
  },
  {
    value: "GIBRALTAR",
    text: "Gibraltar"
  },
  {
    value: "GREECE",
    text: "Greece"
  },
  {
    value: "GREENLAND",
    text: "Greenland"
  },
  {
    value: "GRENADA",
    text: "Grenada"
  },
  {
    value: "GUADELOUPE",
    text: "Guadeloupe"
  },
  {
    value: "GUAM",
    text: "Guam"
  },
  {
    value: "GUATEMALA",
    text: "Guatemala"
  },
  {
    value: "GUERNSEY",
    text: "Guernsey"
  },
  {
    value: "GUINEA_BISSAU",
    text: "Guinea-Bissau"
  },
  {
    value: "GUINEA",
    text: "Guinea"
  },
  {
    value: "GUYANA",
    text: "Guyana"
  },
  {
    value: "HAITI",
    text: "Haiti"
  },
  {
    value: "HEARD_ISLAND_AND_MCDONALD_ISLANDS",
    text: "Heard Island and McDonald Islands"
  },
  {
    value: "HOLY_SEE_VATICAN_CITY_STATE",
    text: "Holy See (Vatican City State)"
  },
  {
    value: "HONDURAS",
    text: "Honduras"
  },
  {
    value: "HONG_KONG",
    text: "Hong Kong"
  },
  {
    value: "HUNGARY",
    text: "Hungary"
  },
  {
    value: "ICELAND",
    text: "Iceland"
  },
  {
    value: "INDONESIA",
    text: "Indonesia"
  },
  {
    value: "IRAN_ISLAMIC_REPUBLIC_OF",
    text: "Iran Islamic Republic of"
  },
  {
    value: "IRAQ",
    text: "Iraq"
  },
  {
    value: "JAMAICA",
    text: "Jamaica"
  },
  {
    value: "JERSEY",
    text: "Jersey"
  },
  {
    value: "JORDAN",
    text: "Jordan"
  },
  {
    value: "KAZAKHSTAN",
    text: "Kazakhstan"
  },
  {
    value: "KENYA",
    text: "Kenya"
  },
  {
    value: "KIRIBATI",
    text: "Kiribati"
  },
  {
    value: "KOREA_DEMOCRATIC_PEOPLES_REPUBLIC_OF",
    text: "Korea Democratic People's Republic of"
  },
  {
    value: "KUWAIT",
    text: "Kuwait"
  },
  {
    value: "KYRGYZSTAN",
    text: "Kyrgyzstan"
  },
  {
    value: "LAO_PEOPLES_DEMOCRATIC_REPUBLIC",
    text: "Lao People's Democratic Republic"
  },
  {
    value: "LATVIA",
    text: "Latvia"
  },
  {
    value: "LEBANON",
    text: "Lebanon"
  },
  {
    value: "LESOTHO",
    text: "Lesotho"
  },
  {
    value: "LIBERIA",
    text: "Liberia"
  },
  {
    value: "LBY",
    text: "LBY"
  },
  {
    value: "LIECHTENSTEIN",
    text: "Liechtenstein"
  },
  {
    value: "LITHUANIA",
    text: "Lithuania"
  },
  {
    value: "MACAO",
    text: "Macao"
  },
  {
    value: "MACEDONIA_THE_FORMER_YUGOSLAV_REPUBLIC_OF",
    text: "Macedonia the former Yugoslav Republic of"
  },
  {
    value: "MADAGASCAR",
    text: "Madagascar"
  },
  {
    value: "MALAWI",
    text: "Malawi"
  },
  {
    value: "MALAYSIA",
    text: "Malaysia"
  },
  {
    value: "MALDIVES",
    text: "Maldives"
  },
  {
    value: "MALI",
    text: "Mali"
  },
  {
    value: "MARSHALL_ISLANDS",
    text: "Marshall Islands"
  },
  {
    value: "MARTINIQUE",
    text: "Martinique"
  },
  {
    value: "MAURITANIA",
    text: "Mauritania"
  },
  {
    value: "MAURITIUS",
    text: "Mauritius"
  },
  {
    value: "MAYOTTE",
    text: "Mayotte"
  },
  {
    value: "MICRONESIA_FEDERATED_STATES_OF",
    text: "Micronesia Federated States of"
  },
  {
    value: "MOLDOVA_REPUBLIC_OF",
    text: "Moldova Republic of"
  },
  {
    value: "MONACO",
    text: "Monaco"
  },
  {
    value: "MONGOLIA",
    text: "Mongolia"
  },
  {
    value: "MONTENEGRO",
    text: "Montenegro"
  },
  {
    value: "MONTSERRAT",
    text: "Montserrat"
  },
  {
    value: "MOROCCO",
    text: "Morocco"
  },
  {
    value: "MOZAMBIQUE",
    text: "Mozambique"
  },
  {
    value: "MYANMAR",
    text: "Myanmar"
  },
  {
    value: "NAMIBIA",
    text: "Namibia"
  },
  {
    value: "NAURU",
    text: "Nauru"
  },
  {
    value: "NEPAL",
    text: "Nepal"
  },
  {
    value: "NEW_CALEDONIA",
    text: "New Caledonia"
  },
  {
    value: "NICARAGUA",
    text: "Nicaragua"
  },
  {
    value: "NIGER",
    text: "Niger"
  },
  {
    value: "NIGERIA",
    text: "Nigeria"
  },
  {
    value: "NIUE",
    text: "Niue"
  },
  {
    value: "NORFOLK_ISLAND",
    text: "Norfolk Island"
  },
  {
    value: "NORTHERN_MARIANA_ISLANDS",
    text: "Northern Mariana Islands"
  },
  {
    value: "OMAN",
    text: "Oman"
  },
  {
    value: "PAKISTAN",
    text: "Pakistan"
  },
  {
    value: "PALAU",
    text: "Palau"
  },
  {
    value: "PALESTINIAN_TERRITORY_OCCUPIED",
    text: "Palestinian Territory Occupied"
  },
  {
    value: "PANAMA",
    text: "Panama"
  },
  {
    value: "PAPUA_NEW_GUINEA",
    text: "Papua New Guinea"
  },
  {
    value: "PARAGUAY",
    text: "Paraguay"
  },
  {
    value: "PERU",
    text: "Peru"
  },
  {
    value: "PHILIPPINES",
    text: "Philippines"
  },
  {
    value: "PITCAIRN",
    text: "Pitcairn"
  },
  {
    value: "POLAND",
    text: "Poland"
  },
  {
    value: "PUERTO_RICO",
    text: "Puerto Rico"
  },
  {
    value: "QATAR",
    text: "Qatar"
  },
  {
    value: "REUNION",
    text: "Réunion"
  },
  {
    value: "ROMANIA",
    text: "Romania"
  },
  {
    value: "RUSSIAN_FEDERATION",
    text: "Russian Federation"
  },
  {
    value: "RWANDA",
    text: "Rwanda"
  },
  {
    value: "SAINT_BARTHELEMY",
    text: "Saint Barthélemy"
  },
  {
    value: "SAINT_HELENA_ASCENSION_AND_TRISTAN_DA_CUNHA",
    text: "Saint Helena Ascension and Tristan da Cunha"
  },
  {
    value: "SAINT_KITTS_AND_NEVIS",
    text: "Saint Kitts and Nevis"
  },
  {
    value: "SAINT_LUCIA",
    text: "Saint Lucia"
  },
  {
    value: "SAINT_MARTIN_FRENCH_PART",
    text: "Saint Martin (French part)"
  },
  {
    value: "SAINT_PIERRE_AND_MIQUELON",
    text: "Saint Pierre and Miquelon"
  },
  {
    value: "SAINT_VINCENT_AND_THE_GRENADINES",
    text: "Saint Vincent and the Grenadines"
  },
  {
    value: "SAMOA",
    text: "Samoa"
  },
  {
    value: "SAN_MARINO",
    text: "San Marino"
  },
  {
    value: "SAO_TOME_AND_PRINCIPE",
    text: "Sao Tome and Principe"
  },
  {
    value: "SENEGAL",
    text: "Senegal"
  },
  {
    value: "SERBIA",
    text: "Serbia"
  },
  {
    value: "SEYCHELLES",
    text: "Seychelles"
  },
  {
    value: "SIERRA_LEONE",
    text: "Sierra Leone"
  },
  {
    value: "SINT_MAARTEN_DUTCH_PART",
    text: "Sint Maarten (Dutch part)"
  },
  {
    value: "SLOVAKIA",
    text: "Slovakia"
  },
  {
    value: "SLOVENIA",
    text: "Slovenia"
  },
  {
    value: "SOLOMON_ISLANDS",
    text: "Solomon Islands"
  },
  {
    value: "SOMALIA",
    text: "Somalia"
  },
  {
    value: "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS",
    text: "South Georgia and the South Sandwich Islands"
  },
  {
    value: "SOUTH_SUDAN",
    text: "South Sudan"
  },
  {
    value: "SRI_LANKA",
    text: "Sri Lanka"
  },
  {
    value: "SUDAN",
    text: "Sudan"
  },
  {
    value: "SURINAME",
    text: "Suriname"
  },
  {
    value: "SVALBARD_AND_JAN_MAYEN",
    text: "Svalbard and Jan Mayen"
  },
  {
    value: "SWAZILAND",
    text: "Swaziland"
  },
  {
    value: "SYRIAN_ARAB_REPUBLIC",
    text: "Syrian Arab Republic"
  },
  {
    value: "TAIWAN_PROVINCE_OF_CHINA",
    text: "Taiwan Province of China"
  },
  {
    value: "TAJIKISTAN",
    text: "Tajikistan"
  },
  {
    value: "TANZANIA_UNITED_REPUBLIC_OF",
    text: "Tanzania United Republic of"
  },
  {
    value: "THAILAND",
    text: "Thailand"
  },
  {
    value: "TIMOR_LESTE",
    text: "Timor-Leste"
  },
  {
    value: "TOGO",
    text: "Togo"
  },
  {
    value: "TOKELAU",
    text: "Tokelau"
  },
  {
    value: "TONGA",
    text: "Tonga"
  },
  {
    value: "TRINIDAD_AND_TOBAGO",
    text: "Trinidad and Tobago"
  },
  {
    value: "TUNISIA",
    text: "Tunisia"
  },
  {
    value: "TURKMENISTAN",
    text: "Turkmenistan"
  },
  {
    value: "TURKS_AND_CAICOS_ISLANDS",
    text: "Turks and Caicos Islands"
  },
  {
    value: "TUVALU",
    text: "Tuvalu"
  },
  {
    value: "UGANDA",
    text: "Uganda"
  },
  {
    value: "UKRAINE",
    text: "Ukraine"
  },
  {
    value: "UNITED_ARAB_EMIRATES",
    text: "United Arab Emirates"
  },
  {
    value: "UNITED_STATES_MINOR_OUTLYING_ISLANDS",
    text: "United States Minor Outlying Islands"
  },
  {
    value: "URUGUAY",
    text: "Uruguay"
  },
  {
    value: "UZBEKISTAN",
    text: "Uzbekistan"
  },
  {
    value: "VANUATU",
    text: "Vanuatu"
  },
  {
    value: "VENEZUELA_BOLIVARIAN_REPUBLIC_OF",
    text: "Venezuela Bolivarian Republic of"
  },
  {
    value: "VIET_NAM",
    text: "Viet Nam"
  },
  {
    value: "VIRGIN_ISLANDS_BRITISH",
    text: "Virgin Islands British"
  },
  {
    value: "VIRGIN_ISLANDS_US",
    text: "Virgin Islands U.S."
  },
  {
    value: "WALLIS_AND_FUTUNA",
    text: "Wallis and Futuna"
  },
  {
    value: "WESTERN_SAHARA",
    text: "Western Sahara"
  },
  {
    value: "YEMEN",
    text: "Yemen"
  },
  {
    value: "ZAMBIA",
    text: "Zambia"
  },
  {
    value: "ZIMBABWE",
    text: "ZimbabweSaint Barthélemy"
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
          A representative will explain and demonstrate how our solution works and how it can benefit your organisation over a web meeting using screen share.<br />
        </p>

        <p class="mt-6 text-lg leading-8 text-slate-400">
          We recommend reserving at least 30 minuets, there is a lot talk about.
        </p>

      </div>

      <div class="w-full md:w-6/12">
        <img src="@/assets/img/brain.svg" class="mx-auto md:mr-0 md:pl-10 mt-20 md:mt-0 breath" />
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
              <select v-model="form.body.companySize" type="text" tabindex="6" v-bind="props">
                <template v-for="size in companySizes" :key="size.value">
                  <option :value="size.value">{{ size.text }}</option>
                </template>
              </select>
            </elements-input-field>

            <elements-input-field label="Country or Region" name="country" :errors="form.errors" v-slot="props">
              <select v-model="form.body.country" type="text" tabindex="7" v-bind="props">
                <template v-for="country in countries" :key="country.value">
                  <option :value="country.value">{{ country.text }}</option>
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

    </div>

  </div>

</template>
