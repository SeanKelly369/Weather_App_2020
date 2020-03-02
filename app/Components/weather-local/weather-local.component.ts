import { Component, OnInit, DoCheck, Input, OnChanges } from '@angular/core';
import { WeatherDataService } from '../../Services/weather-data.service';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-weather-local',
  templateUrl: './weather-local.component.html',
  styleUrls: ['./weather-local.component.scss']
})
export class WeatherLocalComponent implements OnInit, DoCheck, OnChanges {

  constructor(public getWeather: WeatherDataService) {}

  isCLocal: boolean;
  public currentTime = Date.now();
  public abbreviatedCountry = 'IE';
  public country = 'Ireland';
  public localWeather: any;
  locality = 'Dublin';
  temp = 273.48;
  @Input() isC: boolean;


  getLocationDetail() {
    this.getWeather.getLocationName().subscribe((data: any) => {
      this.localWeather = data;
      this.userLocationAdd( this.localWeather);
    });
  }

  async ngOnInit() {

    await this.getWeather.initialize();
    this.getLocationDetail();
  }

  ngDoCheck() {
    setTimeout(() => {
      this.currentTime = Date.now();
    }, 15000);
  }

  ngOnChanges() {
    this.receiveIsCP(this.isC);
  }

  receiveIsCP(isC: boolean) {
    this.isCLocal = isC;
  }


  public userLocationAdd(localWeather) {

    // console.log(this.localWeather);
    this.abbreviatedCountry = this.localWeather.sys.country;
    this.locality = this.localWeather.name;
    this.temp = this.localWeather.main.temp;
    console.log(this.temp);

    switch (this.abbreviatedCountry) {
      case 'AF':
        this.country = 'Afghanistan';
        break;
      case 'AL':
        this.country = 'Albania';
        break;
      case 'DZ':
        this.country = 'Algeria';
        break;
      case 'AS':
        this.country = 'American Samoa';
        break;
      case 'AD':
        this.country = 'Andorra';
        break;
      case 'AO':
        this.country = 'Angolla';
        break;
      case 'AI':
        this.country = 'Anguilla';
        break;
      case 'AQ':
        this.country = 'Antarctica';
        break;
      case 'AG':
        this.country = 'Antigua and Barbuda';
        break;

      case 'AR':
        this.country = 'Argentina';
        break;
      case 'AM':
        this.country = 'Armenia';
        break;
      case 'AW':
        this.country = 'Aruba';
        break;
      case 'AU':
        this.country = 'Australia';
        break;
      case 'AT':
        this.country = 'Austria';
        break;
      case 'AZ':
        this.country = 'Azerbaijan';
        break;
      case 'BS':
        this.country = 'Bahamas';
        break;
      case 'BH':
        this.country = 'Bahrain';
        break;
      case 'BD':
        this.country = 'Bangladesh';
        break;

      case 'BY':
        this.country = 'Belarus';
        break;
      case 'BE':
        this.country = 'Belgium';
        break;
      case 'BZ':
        this.country = 'Belize';
        break;
      case 'BM':
        this.country = 'Bermuda';
        break;
      case 'BT':
        this.country = 'Bhutan';
        break;
      case 'BO':
        this.country = 'Bolivia';
        break;
      case 'BA':
        this.country = 'Bosnia and Herzegovina';
        break;
      case 'BW':
        this.country = 'Botswana';
        break;
      case 'BV':
        this.country = 'Bouvet Island';
        break;

      case 'BR':
        this.country = 'Brazil';
        break;
      case 'IO':
        this.country = 'British Indian Ocean Territory';
        break;
      case 'BN':
        this.country = 'Brunei Darussalam';
        break;
      case 'BG':
        this.country = 'Bulgaria';
        break;
      case 'BF':
        this.country = 'Burkina Faso';
        break;
      case 'BI':
        this.country = 'Burundi';
        break;
      case 'KH':
        this.country = 'Cambodia';
        break;
      case 'CA':
        this.country = 'Canada';
        break;
      case 'CV':
        this.country = 'Cape Verde';
        break;

      case 'KY':
        this.country = 'Cayman Islands';
        break;
      case 'CF':
        this.country = 'Central African Republic';
        break;
      case 'TD':
        this.country = 'Chad';
        break;
      case 'CL':
        this.country = 'Chile';
        break;
      case 'CN':
        this.country = 'China';
        break;
      case 'CX':
        this.country = 'Chrismas Island';
        break;
      case 'CC':
        this.country = 'Cocos (Keeling) Islands';
        break;
      case 'CO':
        this.country = 'Colombia';
        break;
      case 'KM':
        this.country = 'Comoros';
        break;

      case 'CG':
        this.country = 'Congo';
        break;
      case 'CD':
        this.country = 'Congo, The Democratic Republic of';
        break;
      case 'CK':
        this.country = 'Cook Islands';
        break;
      case 'CR':
        this.country = 'Costa Rica';
        break;
      case 'CI':
        this.country = 'Côte D\'Ivoire';
        break;
      case 'HR':
        this.country = 'Croatia';
        break;
      case 'CU':
        this.country = 'Cuba';
        break;
      case 'CY':
        this.country = 'Cyprus';
        break;
      case 'CZ':
        this.country = 'Czech Republic';
        break;

      case 'DK':
        this.country = 'Denmark';
        break;
      case 'BDJ':
        this.country = 'Djibouti';
        break;
      case 'DM':
        this.country = 'Dominica';
        break;
      case 'DO':
        this.country = 'Dominican Republic';
        break;
      case 'EC':
        this.country = 'Ecuador';
        break;
      case 'EG':
        this.country = 'Egypt';
        break;
      case 'SV':
        this.country = 'El Salvador';
        break;
      case 'GQ':
        this.country = 'Equatorial Guinea';
        break;
      case 'ER':
        this.country = 'Eritrea';
        break;

      case 'EE':
        this.country = 'Estonia';
        break;
      case 'ET':
        this.country = 'Ethiopia';
        break;
      case 'FK':
        this.country = 'Falkland Islands';
        break;
      case 'FO':
        this.country = 'Faroe Islands';
        break;
      case 'FJ':
        this.country = 'Fiji';
        break;
      case 'GF':
        this.country = 'French Guiana';
        break;
      case 'PF':
        this.country = 'French Polynesia';
        break;
      case 'TF':
        this.country = 'French Southern Territories';
        break;
      case 'GA':
        this.country = 'Gabon';
        break;

      case 'GM':
        this.country = 'Gambia';
        break;
      case 'GE':
        this.country = 'Georgia';
        break;
      case 'DE':
        this.country = 'Germany';
        break;
      case 'GH':
        this.country = 'Ghana';
        break;
      case 'GI':
        this.country = 'Gibraltar';
        break;
      case 'GR':
        this.country = 'Greece';
        break;
      case 'GL':
        this.country = 'Greenland';
        break;
      case 'GD':
        this.country = 'Grenada';
        break;
      case 'GP':
        this.country = 'Guadeloupe';
        break;

      case 'GU':
        this.country = 'Guam';
        break;
      case 'GT':
        this.country = 'Guatemala';
        break;
      case 'FGN':
        this.country = 'Guinea';
        break;
      case 'GW':
        this.country = 'Guinea-Bissau';
        break;
      case 'GY':
        this.country = 'Guyana';
        break;
      case 'HT':
        this.country = 'Haiti';
        break;
      case 'HM':
        this.country = 'Heard Island and McDonald Islands';
        break;
      case 'HN':
        this.country = 'Honduras';
        break;
      case 'HK':
        this.country = 'Hong Kong';
        break;

      case 'HU':
        this.country = 'Hungary';
        break;
      case 'IS':
        this.country = 'Iceland';
        break;
      case 'IN':
        this.country = 'India';
        break;
      case 'ID':
        this.country = 'Indonesia';
        break;
      case 'IR':
        this.country = 'Iran, Islamic Republic of';
        break;
      case 'IQ':
        this.country = 'Iraq';
        break;
      case 'IE':
        this.country = 'Ireland';
        break;
      case 'IL':
        this.country = 'Israel';
        break;
      case 'IT':
        this.country = 'Italy';
        break;

      case 'JM':
        this.country = 'Jamaica';
        break;
      case 'JP':
        this.country = 'Japan';
        break;
      case 'JO':
        this.country = 'Jordan';
        break;
      case 'KZ':
        this.country = 'Kazakhstan';
        break;
      case 'KE':
        this.country = 'Kenya';
        break;
      case 'KI':
        this.country = 'Kiribati';
        break;
      case 'KP':
        this.country = 'Korea, Democratic People\'s Republic of';
        break;
      case 'KR':
        this.country = 'Korea, Republic of';
        break;
      case 'KW':
        this.country = 'Kuwait';
        break;

      case 'KG':
        this.country = 'Kyrgyzstan';
        break;
      case 'LA':
        this.country = 'Lao People\'s Democratic Republic';
        break;
      case 'LV':
        this.country = 'Latvia';
        break;
      case 'LB':
        this.country = 'Lebanon';
        break;
      case 'LS':
        this.country = 'Lesotho';
        break;
      case 'LR':
        this.country = 'Liberia';
        break;
      case 'SLY':
        this.country = 'Libyan Arab Jamahiriya';
        break;
      case 'LI':
        this.country = 'Liechtenstein';
        break;
      case 'LT':
        this.country = 'Lithuania';
        break;

      case 'LU':
        this.country = 'Luxembourg';
        break;
      case 'MO':
        this.country = 'Ethiopia';
        break;
      case 'FK':
        this.country = 'Macao';
        break;
      case 'MK':
        this.country = 'Macedonia, The Former Yugoslav Republic of';
        break;
      case 'MG':
        this.country = 'Madagascar';
        break;
      case 'MW':
        this.country = 'Malawi';
        break;
      case 'MY':
        this.country = 'Malaysia';
        break;
      case 'MV':
        this.country = 'Maldives';
        break;
      case 'ML':
        this.country = 'Mali';
        break;

      case 'MT':
        this.country = 'Malta';
        break;
      case 'MH':
        this.country = 'Marshall Islands';
        break;
      case 'MQ':
        this.country = 'Martinique';
        break;
      case 'MR':
        this.country = 'Mauritania';
        break;
      case 'MU':
        this.country = 'Mauritius';
        break;
      case 'YT':
        this.country = 'Mayotte';
        break;
      case 'MX':
        this.country = 'Mexico';
        break;
      case 'FM':
        this.country = 'Micronesia, Federated States of';
        break;
      case 'MD':
        this.country = 'Moldava, Republic of';
        break;

      case 'MC':
        this.country = 'Monaco';
        break;
      case 'MN':
        this.country = 'Mongolia';
        break;
      case 'MS':
        this.country = 'Montserrat';
        break;
      case 'MA':
        this.country = 'Morocco';
        break;
      case 'MZ':
        this.country = 'Mozambique';
        break;
      case 'MM':
        this.country = 'Myanmar';
        break;
      case 'NA':
        this.country = 'Namibia';
        break;
      case 'NR':
        this.country = 'Nauru';
        break;
      case 'NP':
        this.country = 'Nepal';
        break;

      case 'NL':
        this.country = 'Netherlands';
        break;
      case 'AN':
        this.country = 'Netherlands Antilles';
        break;
      case 'NC':
        this.country = 'New Caledonia';
        break;
      case 'NZ':
        this.country = 'New Zealand';
        break;
      case 'NI':
        this.country = 'Nicaragua';
        break;
      case 'NE':
        this.country = 'Niger';
        break;
      case 'NG':
        this.country = 'Nigeria';
        break;
      case 'NU':
        this.country = 'Niue';
        break;
      case 'NF':
        this.country = 'Norfolk Island';
        break;


      case 'MP':
        this.country = 'Northern Mariana Islands';
        break;
      case 'NO':
        this.country = 'Norway';
        break;
      case 'OM':
        this.country = 'Oman';
        break;
      case 'PK':
        this.country = 'Pakistan';
        break;
      case 'PW':
        this.country = 'Palau';
        break;
      case 'PS':
        this.country = 'Palestinian Territory, Occupied';
        break;
      case 'PA':
        this.country = 'Panama';
        break;
      case 'PG':
        this.country = 'Papua New Guinea';
        break;
      case 'PY':
        this.country = 'Paraguay';
        break;

      case 'PE':
        this.country = 'Peru';
        break;
      case 'PH':
        this.country = 'Philippines';
        break;
      case 'PN':
        this.country = 'Pitcairn';
        break;
      case 'PL':
        this.country = 'Poland';
        break;
      case 'PT':
        this.country = 'Portugal';
        break;
      case 'PR':
        this.country = 'Puerto Rico';
        break;
      case 'QA':
        this.country = 'Qatar';
        break;
      case 'RE':
        this.country = 'Réunion';
        break;
      case 'RO':
        this.country = 'Romania';
        break;

      case 'RU':
        this.country = 'Russian Federation';
        break;
      case 'RW':
        this.country = 'Rwanda';
        break;
      case 'SH':
        this.country = 'Saint Helena';
        break;
      case 'HN':
        this.country = 'Saint Kitts and Nevis';
        break;
      case 'LC':
        this.country = 'Saint Lucia';
        break;
      case 'PM':
        this.country = 'Saint Pierre and Miquelon';
        break;
      case 'VC':
        this.country = 'Saint Vincent and the Grenadines';
        break;
      case 'WS':
        this.country = 'Samoa';
        break;
      case 'SM':
        this.country = 'San Marino';
        break;


      case 'ST':
        this.country = 'Sao Tome and Principe';
        break;
      case 'SA':
        this.country = 'Saudi Arabia';
        break;
      case 'SN':
        this.country = 'Senegal';
        break;
      case 'CS':
        this.country = 'Serbia and Montenegro';
        break;
      case 'SC':
        this.country = 'Seychelles';
        break;
      case 'SL':
        this.country = 'Sierra Leone';
        break;
      case 'SG':
        this.country = 'Singapore';
        break;
      case 'SK':
        this.country = 'Slovakia';
        break;
      case 'SI':
        this.country = 'Slovenia';
        break;

      case 'SB':
        this.country = 'Solomon Islands';
        break;
      case 'SO':
        this.country = 'Somalia';
        break;
      case 'ZA':
        this.country = 'South Africa';
        break;
      case 'GS':
        this.country = 'South Georgia and South Sandwich Islands';
        break;
      case 'ES':
        this.country = 'Spain';
        break;
      case 'LK':
        this.country = 'Sri Lanka';
        break;
      case 'SD':
        this.country = 'Sudan';
        break;
      case 'SR':
        this.country = 'Suriname';
        break;
      case 'SJ':
        this.country = 'Svalbard and Jan Mayen';
        break;

      case 'SZ':
        this.country = 'Swaziland';
        break;
      case 'SE':
        this.country = 'Sweden';
        break;
      case 'CH':
        this.country = 'Switzerland';
        break;
      case 'SY':
        this.country = 'Syrian Arab Republic';
        break;
      case 'TW':
        this.country = 'Taiwan, Republic of China';
        break;
      case 'TJ':
        this.country = 'Tajikistan';
        break;
      case 'TZ':
        this.country = 'Tanzania, United Republic of';
        break;
      case 'TH':
        this.country = 'Thailand';
        break;
      case 'TL':
        this.country = 'Timor-Leste';
        break;


      case 'TG':
        this.country = 'Togo';
        break;
      case 'TK':
        this.country = 'Tokelau';
        break;
      case 'TO':
        this.country = 'Tonga';
        break;
      case 'TT':
        this.country = 'Trinidad and Tobago';
        break;
      case 'TN':
        this.country = 'Tunisia';
        break;
      case 'TR':
        this.country = 'Turkey';
        break;
      case 'TM':
        this.country = 'Turkmenistan';
        break;
      case 'TC':
        this.country = 'Turks and Caicos Islands';
        break;
      case 'TV':
        this.country = 'Tuvalu';
        break;

      case 'UG':
        this.country = 'Uganda';
        break;
      case 'UA':
        this.country = 'Ukraine';
        break;
      case 'AE':
        this.country = 'United Arab Emirates';
        break;
      case 'GB':
        this.country = 'United Kingdom';
        break;
      case 'US':
        this.country = 'United States';
        break;
      case 'UM':
        this.country = 'United States Minor Outlying Islands';
        break;
      case 'UY':
        this.country = 'Uruguay';
        break;
      case 'UZ':
        this.country = 'Uzbekistan';
        break;
      case 'VU':
        this.country = 'Vanuatu';
        break;

      case 'VN':
        this.country = 'Vietnam';
        break;
      case 'VG':
        this.country = 'Virgin Islands, British';
        break;
      case 'VI':
        this.country = 'Virgin Islands, U.S.';
        break;
      case 'WF':
        this.country = 'Wallis and Futuna';
        break;
      case 'EH':
        this.country = 'Western Sahara';
        break;
      case 'YE':
        this.country = 'Yemen';
        break;
      case 'ZW':
        this.country = 'Zimbabwe';
        break;

      default:
        this.country = 'Earth';
    }
  }
}
