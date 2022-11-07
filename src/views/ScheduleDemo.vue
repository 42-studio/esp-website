<template>
  <esp-background
    image="backgrounds/fibre.jpg"
    class="section-content padded schedule-demo"
  >
    <b-container class="my-4">
      <div class="text-center mx-auto my-4">
        <h1 class="text-white">
          Schedule A Demo
        </h1>

        <p class="text-lead text-white">
          To learn how our solutions can benefit your organisation.
        </p>
      </div>

      <b-form @submit.prevent="send" class="mx-auto">
        <b-card>
          <div class="swapper" :class="{ swapped: form.success }">
            <div class="swap-to">
              <i
                class="fa fa-check text-success mb-5"
                style="font-size: 5rem"
              />

              <p class="text-center">
                Thank you for requesting a product demonstration.<br />
                A representative should reach out to you within 14 hours to
                arrange the most suitable time for a demonstration.
              </p>

              <p>
                To ensure you are able receive correspondence, whitelist our
                domain <strong>esprofiler.com</strong>
              </p>

              <brand-icon
                primary="#E00C13"
                width="64px"
                height="64px"
                class="mt-5"
              />
            </div>

            <b-row>
              <b-col>
                <label class="w-100">
                  First Name

                  <b-input-group class="mt-2">
                    <b-input-group-prepend is-text>
                      <i class="fas fa-user-circle" />
                    </b-input-group-prepend>

                    <b-form-input
                      v-model="form.input.firstName"
                      :state="form.error.state('firstName')"
                    />

                    <b-form-invalid-feedback>
                      {{ form.error.get("firstName") }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                </label>
              </b-col>

              <b-col>
                <label class="w-100">
                  Last Name

                  <b-input-group class="mt-2">
                    <b-input-group-prepend is-text>
                      <i class="far fa-user-circle" />
                    </b-input-group-prepend>

                    <b-form-input
                      v-model="form.input.lastName"
                      :state="form.error.state('lastName')"
                    />

                    <b-form-invalid-feedback>
                      {{ form.error.get("lastName") }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                </label>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <label class="w-100">
                  Email address

                  <b-input-group class="mt-2">
                    <b-input-group-prepend is-text>
                      <i class="fa fa-at" />
                    </b-input-group-prepend>

                    <b-form-input
                      v-model="form.input.email"
                      :state="form.error.state('email')"
                    />

                    <b-form-invalid-feedback>
                      {{ form.error.get("email") }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                </label>
              </b-col>

              <b-col>
                <label class="w-100">
                  Phone Number

                  <b-input-group class="mt-2">
                    <b-input-group-prepend is-text>
                      <i class="fa fa-phone" />
                    </b-input-group-prepend>

                    <b-form-input
                      v-model="form.input.phoneNumber"
                      :state="form.error.state('phoneNumber')"
                    />

                    <b-form-invalid-feedback>
                      {{ form.error.get("phoneNumber") }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                </label>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <label class="w-100">
                  Company Name

                  <b-input-group class="mt-2">
                    <b-input-group-prepend is-text>
                      <i class="fa fa-building" />
                    </b-input-group-prepend>

                    <b-form-input
                      v-model="form.input.companyName"
                      :state="form.error.state('companyName')"
                    />

                    <b-form-invalid-feedback>
                      {{ form.error.get("companyName") }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                </label>

                <label class="w-100">
                  Company Size

                  <b-input-group class="mt-2">
                    <b-input-group-prepend is-text>
                      <i class="fa fa-users" />
                    </b-input-group-prepend>

                    <b-form-select
                      v-model="form.input.companySize"
                      :options="companySizes"
                      :state="form.error.state('companySize')"
                    />

                    <b-form-invalid-feedback>
                      {{ form.error.get("companySize") }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                </label>

                <label class="w-100">
                  Country

                  <b-input-group class="mt-2">
                    <b-input-group-prepend is-text>
                      <i class="fa fa-map-marker" />
                    </b-input-group-prepend>

                    <b-form-select
                      v-model="form.input.country"
                      :options="countries"
                      :state="form.error.state('country')"
                    />

                    <b-form-invalid-feedback>
                      {{ form.error.get("country") }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                </label>
              </b-col>

              <b-col>
                <label class="w-100">
                  <i class="fa fa-comment ml-1 mr-2" /> Comments

                  <b-input-group class="mt-2">
                    <b-form-textarea
                      v-model="form.input.comments"
                      :state="form.error.state('comments')"
                      rows="9"
                      no-resize
                    />

                    <b-form-invalid-feedback>
                      {{ form.error.get("comments") }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                </label>
              </b-col>
            </b-row>

            <b-row>
              <b-col
                class="d-flex flex-column"
                style="justify-content: flex-end"
              >
                <div class="spacer" />

                <input-newsletter v-model="form.input.marketing" />
              </b-col>

              <b-col class="d-flex flex-column" style="align-items: flex-end">
                <div class="spacer" />

                <b-button
                  type="submit"
                  :variant="condition.state"
                  :disabled="form.loading"
                  class="swapper"
                  :class="{ swapped: form.loading }"
                >
                  <div class="swap-to">
                    <b-spinner small />
                  </div>

                  <span>
                    {{ condition.text }}
                    <i :class="condition.icon" class="ml-3" />
                  </span>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-form>
    </b-container>
  </esp-background>
</template>

<script>
import Form from "@/utility/Form";

export default {
  data: () => ({
    form: new Form({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      companySize: "",
      country: "",
      comments: "",
      marketing: false
    }),

    companySizes: [
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
    ],

    countries: [
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
  }),

  computed: {
    condition() {
      if (this.form.error.fatal) {
        return {
          state: "danger",
          text: "Retry",
          icon: "fa fa-redo"
        };
      }

      if (this.form.success) {
        return {
          state: "success",
          text: "Success",
          icon: "fa fa-check"
        };
      }

      return {
        state: "primary",
        text: "Send Request",
        icon: "far fa-paper-plane"
      };
    }
  },

  methods: {
    send() {
      this.form.submit(input => this.$http.post("demo-request", input));
    }
  }
};
</script>

<style lang="scss">
.schedule-demo {
  margin-bottom: 6rem;

  .container {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    background-color: rgba(10, 10, 10, 0.2);
    backdrop-filter: blur(15px);
    border-radius: 1rem;
  }

  p {
    opacity: 0.6;
  }
}
</style>
