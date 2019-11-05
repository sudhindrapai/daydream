import axios from 'axios';
import * as actionTypes from './actionTypes'
import * as endpoint from '../../http/endpoints';

let anomaliesResponse = {data:{
    "status": "success",
    "message": "Found 730 anomalies.",
    "anomalyDataList": [
        {
            "timestamp": "2016-12-01",
            "changePercentage": null,
            "actual": "6564",
            "predicted": "10153.30657",
            "upperBound": "14515.79084",
            "lowerBound": "5932.024104"
        },
        {
            "timestamp": "2016-12-02",
            "changePercentage": "10.195509648704498",
            "actual": "6291",
            "predicted": "11280.65844",
            "upperBound": "15418.56429",
            "lowerBound": "6932.399512"
        },
        {
            "timestamp": "2016-12-03",
            "changePercentage": null,
            "actual": "6292",
            "predicted": "10185.12176",
            "upperBound": "14405.69211",
            "lowerBound": "5638.799512"
        },
        {
            "timestamp": "2016-12-04",
            "changePercentage": null,
            "actual": "6347",
            "predicted": "7814.364733",
            "upperBound": "12151.68514",
            "lowerBound": "3568.441417"
        },
        {
            "timestamp": "2016-12-05",
            "changePercentage": null,
            "actual": "7516",
            "predicted": "6813.124254",
            "upperBound": "11127.17912",
            "lowerBound": "2529.705096"
        },
        {
            "timestamp": "2016-12-06",
            "changePercentage": null,
            "actual": "6539",
            "predicted": "5501.791049",
            "upperBound": "10072.06901",
            "lowerBound": "887.8898186"
        },
        {
            "timestamp": "2016-12-07",
            "changePercentage": null,
            "actual": "6406",
            "predicted": "4865.034801",
            "upperBound": "9061.656162",
            "lowerBound": "498.7551481"
        },
        {
            "timestamp": "2016-12-08",
            "changePercentage": null,
            "actual": "6411",
            "predicted": "5183.167018",
            "upperBound": "9608.085348",
            "lowerBound": "645.5144596"
        },
        {
            "timestamp": "2016-12-09",
            "changePercentage": null,
            "actual": "6785",
            "predicted": "6683.88438",
            "upperBound": "11189.71105",
            "lowerBound": "2023.596011"
        },
        {
            "timestamp": "2016-12-10",
            "changePercentage": null,
            "actual": "6301",
            "predicted": "6006.446552",
            "upperBound": "10318.11314",
            "lowerBound": "1732.709049"
        },
        {
            "timestamp": "2016-12-11",
            "changePercentage": null,
            "actual": "6495",
            "predicted": "4090.888263",
            "upperBound": "8741.207795",
            "lowerBound": "-342.4884617"
        },
        {
            "timestamp": "2016-12-12",
            "changePercentage": null,
            "actual": "6115",
            "predicted": "3573.717262",
            "upperBound": "7722.467542",
            "lowerBound": "-695.8143134"
        },
        {
            "timestamp": "2016-12-13",
            "changePercentage": null,
            "actual": "6189",
            "predicted": "2766.679465",
            "upperBound": "7322.80839",
            "lowerBound": "-1332.734167"
        },
        {
            "timestamp": "2016-12-14",
            "changePercentage": "3.3198040916760423",
            "actual": "7112",
            "predicted": "2645.57178",
            "upperBound": "6875.895533",
            "lowerBound": "-1769.07195"
        },
        {
            "timestamp": "2016-12-15",
            "changePercentage": null,
            "actual": "7504",
            "predicted": "3481.795991",
            "upperBound": "8093.040901",
            "lowerBound": "-804.2430702"
        },
        {
            "timestamp": "2016-12-16",
            "changePercentage": null,
            "actual": "8134",
            "predicted": "5494.291806",
            "upperBound": "9931.37933",
            "lowerBound": "858.8046881"
        },
        {
            "timestamp": "2016-12-17",
            "changePercentage": null,
            "actual": "7684",
            "predicted": "5313.898618",
            "upperBound": "9661.165868",
            "lowerBound": "1082.997561"
        },
        {
            "timestamp": "2016-12-18",
            "changePercentage": null,
            "actual": "6472",
            "predicted": "3872.741397",
            "upperBound": "7770.956946",
            "lowerBound": "-318.1591658"
        },
        {
            "timestamp": "2016-12-19",
            "changePercentage": "5.504114652735091",
            "actual": "8135",
            "predicted": "3800.088342",
            "upperBound": "7687.240273",
            "lowerBound": "-741.4614245"
        },
        {
            "timestamp": "2016-12-20",
            "changePercentage": null,
            "actual": "6892",
            "predicted": "3401.257916",
            "upperBound": "7760.873532",
            "lowerBound": "-1079.447961"
        },
        {
            "timestamp": "2016-12-21",
            "changePercentage": null,
            "actual": "7111",
            "predicted": "3646.552604",
            "upperBound": "8417.584717",
            "lowerBound": "-634.4558113"
        },
        {
            "timestamp": "2016-12-22",
            "changePercentage": null,
            "actual": "6779",
            "predicted": "4802.910117",
            "upperBound": "9405.471122",
            "lowerBound": "225.3861587"
        },
        {
            "timestamp": "2016-12-23",
            "changePercentage": null,
            "actual": "7210",
            "predicted": "7085.908173",
            "upperBound": "11473.9124",
            "lowerBound": "2703.827284"
        },
        {
            "timestamp": "2016-12-24",
            "changePercentage": null,
            "actual": "5927",
            "predicted": "7124.171015",
            "upperBound": "11740.18283",
            "lowerBound": "2883.786823"
        },
        {
            "timestamp": "2016-12-25",
            "changePercentage": null,
            "actual": "4469",
            "predicted": "2671.251618",
            "upperBound": "6986.248858",
            "lowerBound": "-1532.200605"
        },
        {
            "timestamp": "2016-12-26",
            "changePercentage": null,
            "actual": "4960",
            "predicted": "4896.832058",
            "upperBound": "9462.730066",
            "lowerBound": "406.5559598"
        },
        {
            "timestamp": "2016-12-27",
            "changePercentage": null,
            "actual": "7215",
            "predicted": "5551.639926",
            "upperBound": "9959.926066",
            "lowerBound": "1250.640999"
        },
        {
            "timestamp": "2016-12-28",
            "changePercentage": null,
            "actual": "6846",
            "predicted": "5809.01758",
            "upperBound": "10222.27523",
            "lowerBound": "1491.833734"
        },
        {
            "timestamp": "2016-12-29",
            "changePercentage": null,
            "actual": "6718",
            "predicted": "6931.39298",
            "upperBound": "11373.47398",
            "lowerBound": "2467.077227"
        },
        {
            "timestamp": "2016-12-30",
            "changePercentage": null,
            "actual": "6677",
            "predicted": "9138.44311",
            "upperBound": "13353.19683",
            "lowerBound": "4610.382009"
        },
        {
            "timestamp": "2016-12-31",
            "changePercentage": null,
            "actual": "7096",
            "predicted": "9063.626498",
            "upperBound": "13284.43472",
            "lowerBound": "4575.484913"
        },
        {
            "timestamp": "2017-01-01",
            "changePercentage": null,
            "actual": "8679",
            "predicted": "10758.61596",
            "upperBound": "15273.18458",
            "lowerBound": "6319.641189"
        },
        {
            "timestamp": "2017-01-02",
            "changePercentage": null,
            "actual": "8334",
            "predicted": "8281.016905",
            "upperBound": "12552.98327",
            "lowerBound": "4046.204576"
        },
        {
            "timestamp": "2017-01-03",
            "changePercentage": null,
            "actual": "6536",
            "predicted": "6985.438273",
            "upperBound": "11498.22807",
            "lowerBound": "2684.098407"
        },
        {
            "timestamp": "2017-01-04",
            "changePercentage": null,
            "actual": "6948",
            "predicted": "7039.179504",
            "upperBound": "11297.53264",
            "lowerBound": "2757.390255"
        },
        {
            "timestamp": "2017-01-05",
            "changePercentage": null,
            "actual": "6912",
            "predicted": "7950.816963",
            "upperBound": "12417.07671",
            "lowerBound": "3519.858226"
        },
        {
            "timestamp": "2017-01-06",
            "changePercentage": null,
            "actual": "7770",
            "predicted": "9946.113245",
            "upperBound": "14113.26996",
            "lowerBound": "5459.19992"
        },
        {
            "timestamp": "2017-01-07",
            "changePercentage": null,
            "actual": "7523",
            "predicted": "9664.288893",
            "upperBound": "13872.38709",
            "lowerBound": "5336.625261"
        },
        {
            "timestamp": "2017-01-08",
            "changePercentage": null,
            "actual": "6685",
            "predicted": "8047.155445",
            "upperBound": "12614.64988",
            "lowerBound": "3689.036795"
        },
        {
            "timestamp": "2017-01-09",
            "changePercentage": null,
            "actual": "7076",
            "predicted": "7734.697651",
            "upperBound": "11845.02577",
            "lowerBound": "2987.198656"
        },
        {
            "timestamp": "2017-01-10",
            "changePercentage": null,
            "actual": "7089",
            "predicted": "7043.689723",
            "upperBound": "11420.7923",
            "lowerBound": "2673.920764"
        },
        {
            "timestamp": "2017-01-11",
            "changePercentage": null,
            "actual": "6987",
            "predicted": "6956.330455",
            "upperBound": "11766.5955",
            "lowerBound": "2532.269299"
        },
        {
            "timestamp": "2017-01-12",
            "changePercentage": null,
            "actual": "6967",
            "predicted": "7751.595466",
            "upperBound": "12128.97298",
            "lowerBound": "3382.245733"
        },
        {
            "timestamp": "2017-01-13",
            "changePercentage": null,
            "actual": "7508",
            "predicted": "9656.950066",
            "upperBound": "14271.11533",
            "lowerBound": "5229.447585"
        },
        {
            "timestamp": "2017-01-14",
            "changePercentage": null,
            "actual": "7461",
            "predicted": "9312.477941",
            "upperBound": "13845.18032",
            "lowerBound": "5018.661968"
        },
        {
            "timestamp": "2017-01-15",
            "changePercentage": null,
            "actual": "6719",
            "predicted": "7660.026961",
            "upperBound": "12168.5418",
            "lowerBound": "3230.244821"
        },
        {
            "timestamp": "2017-01-16",
            "changePercentage": null,
            "actual": "7462",
            "predicted": "7779.928456",
            "upperBound": "12189.84506",
            "lowerBound": "3547.768033"
        },
        {
            "timestamp": "2017-01-17",
            "changePercentage": null,
            "actual": "6533",
            "predicted": "6664.153301",
            "upperBound": "11219.46608",
            "lowerBound": "2197.799742"
        },
        {
            "timestamp": "2017-01-18",
            "changePercentage": null,
            "actual": "6902",
            "predicted": "6616.047779",
            "upperBound": "10852.89698",
            "lowerBound": "2294.712088"
        },
        {
            "timestamp": "2017-01-19",
            "changePercentage": null,
            "actual": "7186",
            "predicted": "7470.744802",
            "upperBound": "11638.19344",
            "lowerBound": "2988.18184"
        },
        {
            "timestamp": "2017-01-20",
            "changePercentage": null,
            "actual": "8187",
            "predicted": "9452.491425",
            "upperBound": "13761.03787",
            "lowerBound": "4967.859625"
        },
        {
            "timestamp": "2017-01-21",
            "changePercentage": null,
            "actual": "7372",
            "predicted": "9197.784644",
            "upperBound": "13596.45048",
            "lowerBound": "4789.751362"
        },
        {
            "timestamp": "2017-01-22",
            "changePercentage": null,
            "actual": "7115",
            "predicted": "7644.633564",
            "upperBound": "12236.95216",
            "lowerBound": "3221.266352"
        },
        {
            "timestamp": "2017-01-23",
            "changePercentage": null,
            "actual": "7673",
            "predicted": "7428.295185",
            "upperBound": "11867.93783",
            "lowerBound": "3014.401017"
        },
        {
            "timestamp": "2017-01-24",
            "changePercentage": null,
            "actual": "6678",
            "predicted": "6860.063854",
            "upperBound": "11042.46235",
            "lowerBound": "2341.788595"
        },
        {
            "timestamp": "2017-01-25",
            "changePercentage": null,
            "actual": "7334",
            "predicted": "6916.093926",
            "upperBound": "11679.96468",
            "lowerBound": "2398.924438"
        },
        {
            "timestamp": "2017-01-26",
            "changePercentage": null,
            "actual": "7200",
            "predicted": "7868.948373",
            "upperBound": "12308.79811",
            "lowerBound": "3599.828698"
        },
        {
            "timestamp": "2017-01-27",
            "changePercentage": null,
            "actual": "8392",
            "predicted": "9939.511218",
            "upperBound": "13955.94884",
            "lowerBound": "5370.476405"
        },
        {
            "timestamp": "2017-01-28",
            "changePercentage": null,
            "actual": "7153",
            "predicted": "9761.313423",
            "upperBound": "14103.37304",
            "lowerBound": "5442.972184"
        },
        {
            "timestamp": "2017-01-29",
            "changePercentage": null,
            "actual": "7053",
            "predicted": "8269.868176",
            "upperBound": "12594.3342",
            "lowerBound": "3861.244554"
        },
        {
            "timestamp": "2017-01-30",
            "changePercentage": null,
            "actual": "7842",
            "predicted": "8098.464057",
            "upperBound": "12643.40924",
            "lowerBound": "3892.083353"
        },
        {
            "timestamp": "2017-01-31",
            "changePercentage": null,
            "actual": "6813",
            "predicted": "7556.994941",
            "upperBound": "12167.17424",
            "lowerBound": "3090.180687"
        },
        {
            "timestamp": "2017-02-01",
            "changePercentage": null,
            "actual": "7714",
            "predicted": "7620.805543",
            "upperBound": "12127.09513",
            "lowerBound": "3173.337634"
        },
        {
            "timestamp": "2017-02-02",
            "changePercentage": null,
            "actual": "7477",
            "predicted": "8562.245184",
            "upperBound": "13286.66469",
            "lowerBound": "3991.672826"
        },
        {
            "timestamp": "2017-02-03",
            "changePercentage": null,
            "actual": "8315",
            "predicted": "10602.56801",
            "upperBound": "14734.50748",
            "lowerBound": "6192.56098"
        },
        {
            "timestamp": "2017-02-04",
            "changePercentage": null,
            "actual": "8226",
            "predicted": "10376.23018",
            "upperBound": "14468.31531",
            "lowerBound": "5874.897421"
        },
        {
            "timestamp": "2017-02-05",
            "changePercentage": null,
            "actual": "7877",
            "predicted": "8820.181161",
            "upperBound": "13045.96577",
            "lowerBound": "4452.909575"
        },
        {
            "timestamp": "2017-02-06",
            "changePercentage": null,
            "actual": "8135",
            "predicted": "8569.599443",
            "upperBound": "12593.53587",
            "lowerBound": "4450.117315"
        },
        {
            "timestamp": "2017-02-07",
            "changePercentage": null,
            "actual": "7966",
            "predicted": "7936.653479",
            "upperBound": "12379.37827",
            "lowerBound": "3185.452369"
        },
        {
            "timestamp": "2017-02-08",
            "changePercentage": null,
            "actual": "7469",
            "predicted": "7899.269096",
            "upperBound": "12478.50849",
            "lowerBound": "3583.055706"
        },
        {
            "timestamp": "2017-02-09",
            "changePercentage": null,
            "actual": "8352",
            "predicted": "8732.598524",
            "upperBound": "13064.60038",
            "lowerBound": "4295.383771"
        },
        {
            "timestamp": "2017-02-10",
            "changePercentage": null,
            "actual": "8763",
            "predicted": "10660.83189",
            "upperBound": "15037.96233",
            "lowerBound": "6522.550047"
        },
        {
            "timestamp": "2017-02-11",
            "changePercentage": null,
            "actual": "8738",
            "predicted": "10321.40443",
            "upperBound": "14924.67845",
            "lowerBound": "5873.357367"
        },
        {
            "timestamp": "2017-02-12",
            "changePercentage": null,
            "actual": "7901",
            "predicted": "8654.199224",
            "upperBound": "13220.84782",
            "lowerBound": "4030.472375"
        },
        {
            "timestamp": "2017-02-13",
            "changePercentage": null,
            "actual": "7777",
            "predicted": "8297.198374",
            "upperBound": "12443.81637",
            "lowerBound": "3780.653329"
        },
        {
            "timestamp": "2017-02-14",
            "changePercentage": null,
            "actual": "8311",
            "predicted": "7565.165733",
            "upperBound": "12083.00195",
            "lowerBound": "2827.759463"
        },
        {
            "timestamp": "2017-02-15",
            "changePercentage": null,
            "actual": "8699",
            "predicted": "7438.344688",
            "upperBound": "11886.72211",
            "lowerBound": "3122.266353"
        },
        {
            "timestamp": "2017-02-16",
            "changePercentage": null,
            "actual": "7974",
            "predicted": "8193.867905",
            "upperBound": "12569.67656",
            "lowerBound": "3448.602217"
        },
        {
            "timestamp": "2017-02-17",
            "changePercentage": null,
            "actual": "8082",
            "predicted": "10057.52141",
            "upperBound": "14357.37694",
            "lowerBound": "5626.770956"
        },
        {
            "timestamp": "2017-02-18",
            "changePercentage": null,
            "actual": "8170",
            "predicted": "9667.917329",
            "upperBound": "14179.19484",
            "lowerBound": "5354.329925"
        },
        {
            "timestamp": "2017-02-19",
            "changePercentage": null,
            "actual": "7390",
            "predicted": "7965.675835",
            "upperBound": "12210.24589",
            "lowerBound": "3385.769263"
        },
        {
            "timestamp": "2017-02-20",
            "changePercentage": null,
            "actual": "8205",
            "predicted": "8465.314465",
            "upperBound": "12767.49158",
            "lowerBound": "4037.572426"
        },
        {
            "timestamp": "2017-02-21",
            "changePercentage": null,
            "actual": "7767",
            "predicted": "6852.712331",
            "upperBound": "11372.53546",
            "lowerBound": "2384.81018"
        },
        {
            "timestamp": "2017-02-22",
            "changePercentage": null,
            "actual": "7217",
            "predicted": "6736.278698",
            "upperBound": "11297.63205",
            "lowerBound": "2419.985469"
        },
        {
            "timestamp": "2017-02-23",
            "changePercentage": null,
            "actual": "7771",
            "predicted": "7515.944183",
            "upperBound": "11740.44281",
            "lowerBound": "3190.066407"
        },
        {
            "timestamp": "2017-02-24",
            "changePercentage": null,
            "actual": "8322",
            "predicted": "9416.19339",
            "upperBound": "13628.37983",
            "lowerBound": "5113.446866"
        },
        {
            "timestamp": "2017-02-25",
            "changePercentage": null,
            "actual": "8472",
            "predicted": "9074.045026",
            "upperBound": "13595.94188",
            "lowerBound": "4385.31762"
        },
        {
            "timestamp": "2017-02-26",
            "changePercentage": null,
            "actual": "7343",
            "predicted": "7428.293793",
            "upperBound": "11697.75929",
            "lowerBound": "2973.250821"
        },
        {
            "timestamp": "2017-02-27",
            "changePercentage": null,
            "actual": "7850",
            "predicted": "7115.219931",
            "upperBound": "11404.7096",
            "lowerBound": "2557.111297"
        },
        {
            "timestamp": "2017-02-28",
            "changePercentage": null,
            "actual": "6190",
            "predicted": "6447.347425",
            "upperBound": "11222.49676",
            "lowerBound": "2104.163716"
        },
        {
            "timestamp": "2017-03-01",
            "changePercentage": null,
            "actual": "7904",
            "predicted": "6402.231401",
            "upperBound": "10843.53467",
            "lowerBound": "1837.329985"
        },
        {
            "timestamp": "2017-03-02",
            "changePercentage": null,
            "actual": "8193",
            "predicted": "7253.968564",
            "upperBound": "11762.86029",
            "lowerBound": "3077.883365"
        },
        {
            "timestamp": "2017-03-03",
            "changePercentage": null,
            "actual": "8158",
            "predicted": "9225.069597",
            "upperBound": "13758.91207",
            "lowerBound": "5017.525731"
        },
        {
            "timestamp": "2017-03-04",
            "changePercentage": null,
            "actual": "8416",
            "predicted": "8950.744252",
            "upperBound": "13430.91766",
            "lowerBound": "4422.880248"
        },
        {
            "timestamp": "2017-03-05",
            "changePercentage": null,
            "actual": "8205",
            "predicted": "7368.196098",
            "upperBound": "12028.67384",
            "lowerBound": "2926.207175"
        },
        {
            "timestamp": "2017-03-06",
            "changePercentage": null,
            "actual": "8208",
            "predicted": "7112.376379",
            "upperBound": "11605.45969",
            "lowerBound": "2403.665913"
        },
        {
            "timestamp": "2017-03-07",
            "changePercentage": null,
            "actual": "7616",
            "predicted": "6494.776745",
            "upperBound": "10772.38473",
            "lowerBound": "2443.273949"
        },
        {
            "timestamp": "2017-03-08",
            "changePercentage": null,
            "actual": "7937",
            "predicted": "6492.240516",
            "upperBound": "11202.84835",
            "lowerBound": "2425.436282"
        },
        {
            "timestamp": "2017-03-09",
            "changePercentage": null,
            "actual": "7905",
            "predicted": "7378.485773",
            "upperBound": "11486.99498",
            "lowerBound": "2964.499027"
        },
        {
            "timestamp": "2017-03-10",
            "changePercentage": null,
            "actual": "8752",
            "predicted": "9375.979031",
            "upperBound": "13928.07478",
            "lowerBound": "4669.583583"
        },
        {
            "timestamp": "2017-03-11",
            "changePercentage": null,
            "actual": "8940",
            "predicted": "9120.210374",
            "upperBound": "13601.32023",
            "lowerBound": "4487.457719"
        },
        {
            "timestamp": "2017-03-12",
            "changePercentage": null,
            "actual": "8363",
            "predicted": "7548.967591",
            "upperBound": "11853.11884",
            "lowerBound": "2909.761609"
        },
        {
            "timestamp": "2017-03-13",
            "changePercentage": null,
            "actual": "8509",
            "predicted": "7298.059596",
            "upperBound": "11647.78735",
            "lowerBound": "3061.040737"
        },
        {
            "timestamp": "2017-03-14",
            "changePercentage": null,
            "actual": "8578",
            "predicted": "6680.070073",
            "upperBound": "11006.09103",
            "lowerBound": "1966.884292"
        },
        {
            "timestamp": "2017-03-15",
            "changePercentage": null,
            "actual": "8482",
            "predicted": "6673.122411",
            "upperBound": "11028.02882",
            "lowerBound": "2190.589973"
        },
        {
            "timestamp": "2017-03-16",
            "changePercentage": null,
            "actual": "8081",
            "predicted": "7552.350848",
            "upperBound": "11973.44736",
            "lowerBound": "3249.776159"
        },
        {
            "timestamp": "2017-03-17",
            "changePercentage": null,
            "actual": "9284",
            "predicted": "9541.718356",
            "upperBound": "13589.31291",
            "lowerBound": "4568.071659"
        },
        {
            "timestamp": "2017-03-18",
            "changePercentage": null,
            "actual": "9257",
            "predicted": "9278.234048",
            "upperBound": "13907.6602",
            "lowerBound": "4925.728821"
        },
        {
            "timestamp": "2017-03-19",
            "changePercentage": null,
            "actual": "7994",
            "predicted": "7701.169525",
            "upperBound": "12006.48742",
            "lowerBound": "3467.399368"
        },
        {
            "timestamp": "2017-03-20",
            "changePercentage": null,
            "actual": "9307",
            "predicted": "7447.726378",
            "upperBound": "11948.83676",
            "lowerBound": "3082.295557"
        },
        {
            "timestamp": "2017-03-21",
            "changePercentage": null,
            "actual": "8648",
            "predicted": "6831.73756",
            "upperBound": "11021.97454",
            "lowerBound": "2505.123261"
        },
        {
            "timestamp": "2017-03-22",
            "changePercentage": null,
            "actual": "8499",
            "predicted": "6832.385405",
            "upperBound": "11286.44182",
            "lowerBound": "2446.817264"
        },
        {
            "timestamp": "2017-03-23",
            "changePercentage": null,
            "actual": "8289",
            "predicted": "7725.632679",
            "upperBound": "12184.20703",
            "lowerBound": "3278.030221"
        },
        {
            "timestamp": "2017-03-24",
            "changePercentage": null,
            "actual": "9552",
            "predicted": "9736.008442",
            "upperBound": "13991.47466",
            "lowerBound": "5485.334003"
        },
        {
            "timestamp": "2017-03-25",
            "changePercentage": null,
            "actual": "9092",
            "predicted": "9500.802512",
            "upperBound": "14144.262",
            "lowerBound": "5115.521276"
        },
        {
            "timestamp": "2017-03-26",
            "changePercentage": null,
            "actual": "8013",
            "predicted": "7959.268612",
            "upperBound": "12177.12631",
            "lowerBound": "3591.168176"
        },
        {
            "timestamp": "2017-03-27",
            "changePercentage": null,
            "actual": "8676",
            "predicted": "7748.288797",
            "upperBound": "12021.98724",
            "lowerBound": "3213.223157"
        },
        {
            "timestamp": "2017-03-28",
            "changePercentage": null,
            "actual": "8847",
            "predicted": "7181.081916",
            "upperBound": "11776.84202",
            "lowerBound": "2962.407816"
        },
        {
            "timestamp": "2017-03-29",
            "changePercentage": null,
            "actual": "8792",
            "predicted": "7235.938605",
            "upperBound": "11806.99786",
            "lowerBound": "3000.158203"
        },
        {
            "timestamp": "2017-03-30",
            "changePercentage": null,
            "actual": "9481",
            "predicted": "8187.678615",
            "upperBound": "12672.52762",
            "lowerBound": "3897.878086"
        },
        {
            "timestamp": "2017-03-31",
            "changePercentage": null,
            "actual": "9727",
            "predicted": "10259.47136",
            "upperBound": "14563.33856",
            "lowerBound": "6012.575373"
        },
        {
            "timestamp": "2017-04-01",
            "changePercentage": null,
            "actual": "9646",
            "predicted": "10087.07233",
            "upperBound": "14539.17213",
            "lowerBound": "5515.933283"
        },
        {
            "timestamp": "2017-04-02",
            "changePercentage": null,
            "actual": "8736",
            "predicted": "8608.074133",
            "upperBound": "12854.67221",
            "lowerBound": "4284.351785"
        },
        {
            "timestamp": "2017-04-03",
            "changePercentage": null,
            "actual": "8813",
            "predicted": "8457.623102",
            "upperBound": "12756.73936",
            "lowerBound": "4089.374223"
        },
        {
            "timestamp": "2017-04-04",
            "changePercentage": null,
            "actual": "8851",
            "predicted": "7947.182707",
            "upperBound": "12274.32682",
            "lowerBound": "3647.377828"
        },
        {
            "timestamp": "2017-04-05",
            "changePercentage": null,
            "actual": "9057",
            "predicted": "8053.324379",
            "upperBound": "12552.62863",
            "lowerBound": "3664.881193"
        },
        {
            "timestamp": "2017-04-06",
            "changePercentage": null,
            "actual": "9374",
            "predicted": "9049.239856",
            "upperBound": "13697.22723",
            "lowerBound": "4224.940866"
        },
        {
            "timestamp": "2017-04-07",
            "changePercentage": null,
            "actual": "10163",
            "predicted": "11156.61418",
            "upperBound": "15640.13645",
            "lowerBound": "6970.488921"
        },
        {
            "timestamp": "2017-04-08",
            "changePercentage": null,
            "actual": "9981",
            "predicted": "11009.91037",
            "upperBound": "15547.18823",
            "lowerBound": "6529.629905"
        },
        {
            "timestamp": "2017-04-09",
            "changePercentage": null,
            "actual": "8970",
            "predicted": "9545.662906",
            "upperBound": "14385.0385",
            "lowerBound": "5044.610172"
        },
        {
            "timestamp": "2017-04-10",
            "changePercentage": null,
            "actual": "9440",
            "predicted": "9398.229898",
            "upperBound": "14212.86056",
            "lowerBound": "5181.240146"
        },
        {
            "timestamp": "2017-04-11",
            "changePercentage": null,
            "actual": "8872",
            "predicted": "8878.583756",
            "upperBound": "13397.37273",
            "lowerBound": "4474.926201"
        },
        {
            "timestamp": "2017-04-12",
            "changePercentage": null,
            "actual": "9112",
            "predicted": "8963.120397",
            "upperBound": "13142.80155",
            "lowerBound": "4540.8803"
        },
        {
            "timestamp": "2017-04-13",
            "changePercentage": null,
            "actual": "9855",
            "predicted": "9925.180404",
            "upperBound": "14513.71528",
            "lowerBound": "5709.032245"
        },
        {
            "timestamp": "2017-04-14",
            "changePercentage": null,
            "actual": "10554",
            "predicted": "11986.92105",
            "upperBound": "16312.87901",
            "lowerBound": "7421.386897"
        },
        {
            "timestamp": "2017-04-15",
            "changePercentage": null,
            "actual": "9407",
            "predicted": "11783.59026",
            "upperBound": "16135.55687",
            "lowerBound": "7319.929129"
        },
        {
            "timestamp": "2017-04-16",
            "changePercentage": null,
            "actual": "7798",
            "predicted": "10252.8",
            "upperBound": "14725.49057",
            "lowerBound": "5615.190687"
        },
        {
            "timestamp": "2017-04-17",
            "changePercentage": null,
            "actual": "8161",
            "predicted": "10030.24956",
            "upperBound": "14252.43701",
            "lowerBound": "5573.777433"
        },
        {
            "timestamp": "2017-04-18",
            "changePercentage": null,
            "actual": "8704",
            "predicted": "9428.479544",
            "upperBound": "13845.05421",
            "lowerBound": "4880.712704"
        },
        {
            "timestamp": "2017-04-19",
            "changePercentage": null,
            "actual": "9447",
            "predicted": "9425.637665",
            "upperBound": "14088.55218",
            "lowerBound": "5165.607776"
        },
        {
            "timestamp": "2017-04-20",
            "changePercentage": null,
            "actual": "9788",
            "predicted": "10296.95111",
            "upperBound": "14479.69167",
            "lowerBound": "6185.954316"
        },
        {
            "timestamp": "2017-04-21",
            "changePercentage": null,
            "actual": "10318",
            "predicted": "12266.54596",
            "upperBound": "16582.0171",
            "lowerBound": "7321.018593"
        },
        {
            "timestamp": "2017-04-22",
            "changePercentage": null,
            "actual": "10071",
            "predicted": "11971.66623",
            "upperBound": "16514.57206",
            "lowerBound": "7717.491978"
        },
        {
            "timestamp": "2017-04-23",
            "changePercentage": null,
            "actual": "9417",
            "predicted": "10351.8919",
            "upperBound": "14666.62954",
            "lowerBound": "5901.350402"
        },
        {
            "timestamp": "2017-04-24",
            "changePercentage": null,
            "actual": "9850",
            "predicted": "10044.8078",
            "upperBound": "14367.36335",
            "lowerBound": "5672.553066"
        },
        {
            "timestamp": "2017-04-25",
            "changePercentage": null,
            "actual": "9086",
            "predicted": "9364.706022",
            "upperBound": "13874.46961",
            "lowerBound": "4874.162245"
        },
        {
            "timestamp": "2017-04-26",
            "changePercentage": null,
            "actual": "9181",
            "predicted": "9291.304475",
            "upperBound": "13435.59107",
            "lowerBound": "4700.742178"
        },
        {
            "timestamp": "2017-04-27",
            "changePercentage": null,
            "actual": "10093",
            "predicted": "10101.17764",
            "upperBound": "14283.28174",
            "lowerBound": "6046.244927"
        },
        {
            "timestamp": "2017-04-28",
            "changePercentage": null,
            "actual": "11045",
            "predicted": "12019.54135",
            "upperBound": "16447.54153",
            "lowerBound": "7519.146741"
        },
        {
            "timestamp": "2017-04-29",
            "changePercentage": null,
            "actual": "10348",
            "predicted": "11684.44505",
            "upperBound": "16211.90143",
            "lowerBound": "7409.401237"
        },
        {
            "timestamp": "2017-04-30",
            "changePercentage": null,
            "actual": "9578",
            "predicted": "10035.97179",
            "upperBound": "14384.70271",
            "lowerBound": "5635.237996"
        },
        {
            "timestamp": "2017-05-01",
            "changePercentage": null,
            "actual": "10023",
            "predicted": "9711.898117",
            "upperBound": "14100.94394",
            "lowerBound": "5552.007066"
        },
        {
            "timestamp": "2017-05-02",
            "changePercentage": null,
            "actual": "9781",
            "predicted": "9026.396975",
            "upperBound": "13830.17195",
            "lowerBound": "4472.728743"
        },
        {
            "timestamp": "2017-05-03",
            "changePercentage": null,
            "actual": "10315",
            "predicted": "8958.765782",
            "upperBound": "13355.43099",
            "lowerBound": "4687.931111"
        },
        {
            "timestamp": "2017-05-04",
            "changePercentage": null,
            "actual": "11208",
            "predicted": "9784.875744",
            "upperBound": "14036.58672",
            "lowerBound": "5527.044217"
        },
        {
            "timestamp": "2017-05-05",
            "changePercentage": null,
            "actual": "12870",
            "predicted": "11728.98327",
            "upperBound": "16135.33017",
            "lowerBound": "7503.323279"
        },
        {
            "timestamp": "2017-05-06",
            "changePercentage": null,
            "actual": "11181",
            "predicted": "11427.9563",
            "upperBound": "15628.47398",
            "lowerBound": "7049.029401"
        },
        {
            "timestamp": "2017-05-07",
            "changePercentage": null,
            "actual": "10370",
            "predicted": "9820.514324",
            "upperBound": "14286.59846",
            "lowerBound": "5662.669566"
        },
        {
            "timestamp": "2017-05-08",
            "changePercentage": null,
            "actual": "10276",
            "predicted": "9542.933454",
            "upperBound": "13622.58737",
            "lowerBound": "4947.429066"
        },
        {
            "timestamp": "2017-05-09",
            "changePercentage": null,
            "actual": "10447",
            "predicted": "8907.797691",
            "upperBound": "13395.68984",
            "lowerBound": "4947.106772"
        },
        {
            "timestamp": "2017-05-10",
            "changePercentage": null,
            "actual": "10496",
            "predicted": "8892.777418",
            "upperBound": "13336.66581",
            "lowerBound": "4424.333577"
        },
        {
            "timestamp": "2017-05-11",
            "changePercentage": null,
            "actual": "11377",
            "predicted": "9772.12935",
            "upperBound": "14022.33373",
            "lowerBound": "5124.481491"
        },
        {
            "timestamp": "2017-05-12",
            "changePercentage": null,
            "actual": "12321",
            "predicted": "11768.55735",
            "upperBound": "16216.28653",
            "lowerBound": "7349.779204"
        },
        {
            "timestamp": "2017-05-13",
            "changePercentage": null,
            "actual": "10737",
            "predicted": "11517.48529",
            "upperBound": "15655.19371",
            "lowerBound": "7012.864377"
        },
        {
            "timestamp": "2017-05-14",
            "changePercentage": null,
            "actual": "11329",
            "predicted": "9956.339464",
            "upperBound": "14396.62096",
            "lowerBound": "5446.871449"
        },
        {
            "timestamp": "2017-05-15",
            "changePercentage": null,
            "actual": "12290",
            "predicted": "9720.290427",
            "upperBound": "14154.55269",
            "lowerBound": "5297.978306"
        },
        {
            "timestamp": "2017-05-16",
            "changePercentage": null,
            "actual": "10571",
            "predicted": "9121.03443",
            "upperBound": "13384.11093",
            "lowerBound": "4785.702333"
        },
        {
            "timestamp": "2017-05-17",
            "changePercentage": null,
            "actual": "10502",
            "predicted": "9135.594598",
            "upperBound": "13910.41532",
            "lowerBound": "4999.330341"
        },
        {
            "timestamp": "2017-05-18",
            "changePercentage": null,
            "actual": "10633",
            "predicted": "10037.83538",
            "upperBound": "14430.14597",
            "lowerBound": "5636.806958"
        },
        {
            "timestamp": "2017-05-19",
            "changePercentage": null,
            "actual": "11298",
            "predicted": "12050.32935",
            "upperBound": "16225.07307",
            "lowerBound": "7800.825251"
        },
        {
            "timestamp": "2017-05-20",
            "changePercentage": null,
            "actual": "10410",
            "predicted": "11808.62743",
            "upperBound": "16370.80421",
            "lowerBound": "7277.768705"
        },
        {
            "timestamp": "2017-05-21",
            "changePercentage": null,
            "actual": "9645",
            "predicted": "10250.53014",
            "upperBound": "14593.03368",
            "lowerBound": "5840.554436"
        },
        {
            "timestamp": "2017-05-22",
            "changePercentage": null,
            "actual": "10685",
            "predicted": "10011.81034",
            "upperBound": "14634.78001",
            "lowerBound": "5477.672356"
        },
        {
            "timestamp": "2017-05-23",
            "changePercentage": null,
            "actual": "10966",
            "predicted": "9404.968229",
            "upperBound": "13646.31701",
            "lowerBound": "4843.069734"
        },
        {
            "timestamp": "2017-05-24",
            "changePercentage": null,
            "actual": "11504",
            "predicted": "9407.999587",
            "upperBound": "13883.74904",
            "lowerBound": "4859.129665"
        },
        {
            "timestamp": "2017-05-25",
            "changePercentage": null,
            "actual": "11473",
            "predicted": "10295.87213",
            "upperBound": "14410.00218",
            "lowerBound": "5875.846637"
        },
        {
            "timestamp": "2017-05-26",
            "changePercentage": null,
            "actual": "11334",
            "predicted": "12292.35016",
            "upperBound": "16993.49445",
            "lowerBound": "7971.366845"
        },
        {
            "timestamp": "2017-05-27",
            "changePercentage": null,
            "actual": "10923",
            "predicted": "12034.22005",
            "upperBound": "16199.81508",
            "lowerBound": "7745.510388"
        },
        {
            "timestamp": "2017-05-28",
            "changePercentage": null,
            "actual": "10161",
            "predicted": "10460.51572",
            "upperBound": "14907.17769",
            "lowerBound": "6026.93117"
        },
        {
            "timestamp": "2017-05-29",
            "changePercentage": null,
            "actual": "10689",
            "predicted": "10379.08427",
            "upperBound": "14764.54171",
            "lowerBound": "6032.436298"
        },
        {
            "timestamp": "2017-05-30",
            "changePercentage": null,
            "actual": "10403",
            "predicted": "9590.85578",
            "upperBound": "13930.26862",
            "lowerBound": "5105.727289"
        },
        {
            "timestamp": "2017-05-31",
            "changePercentage": null,
            "actual": "10738",
            "predicted": "9587.454859",
            "upperBound": "13988.77286",
            "lowerBound": "5507.489352"
        },
        {
            "timestamp": "2017-06-01",
            "changePercentage": null,
            "actual": "10928",
            "predicted": "10473.75806",
            "upperBound": "14880.48801",
            "lowerBound": "6069.08202"
        },
        {
            "timestamp": "2017-06-02",
            "changePercentage": null,
            "actual": "12032",
            "predicted": "12474.13056",
            "upperBound": "17015.0326",
            "lowerBound": "8034.561803"
        },
        {
            "timestamp": "2017-06-03",
            "changePercentage": null,
            "actual": "11493",
            "predicted": "12225.74041",
            "upperBound": "16361.59492",
            "lowerBound": "7739.280623"
        },
        {
            "timestamp": "2017-06-04",
            "changePercentage": null,
            "actual": "10117",
            "predicted": "10667.76867",
            "upperBound": "14905.38055",
            "lowerBound": "6370.033616"
        },
        {
            "timestamp": "2017-06-05",
            "changePercentage": null,
            "actual": "11120",
            "predicted": "10437.07935",
            "upperBound": "14710.96391",
            "lowerBound": "6323.885045"
        },
        {
            "timestamp": "2017-06-06",
            "changePercentage": null,
            "actual": "11222",
            "predicted": "9846.931918",
            "upperBound": "14260.57606",
            "lowerBound": "5332.558427"
        },
        {
            "timestamp": "2017-06-07",
            "changePercentage": null,
            "actual": "10291",
            "predicted": "9875.718626",
            "upperBound": "14240.6819",
            "lowerBound": "5249.84005"
        },
        {
            "timestamp": "2017-06-08",
            "changePercentage": null,
            "actual": "11048",
            "predicted": "10798.42251",
            "upperBound": "15355.42152",
            "lowerBound": "6254.099104"
        },
        {
            "timestamp": "2017-06-09",
            "changePercentage": null,
            "actual": "12614",
            "predicted": "12838.43692",
            "upperBound": "17346.09186",
            "lowerBound": "8400.920019"
        },
        {
            "timestamp": "2017-06-10",
            "changePercentage": null,
            "actual": "11966",
            "predicted": "12631.79938",
            "upperBound": "17082.08012",
            "lowerBound": "8100.818322"
        },
        {
            "timestamp": "2017-06-11",
            "changePercentage": null,
            "actual": "10697",
            "predicted": "11116.43839",
            "upperBound": "15416.46034",
            "lowerBound": "6858.092043"
        },
        {
            "timestamp": "2017-06-12",
            "changePercentage": null,
            "actual": "11632",
            "predicted": "10927.88468",
            "upperBound": "15214.21688",
            "lowerBound": "6450.007073"
        },
        {
            "timestamp": "2017-06-13",
            "changePercentage": null,
            "actual": "11266",
            "predicted": "10378.0279",
            "upperBound": "14766.48343",
            "lowerBound": "6046.894404"
        },
        {
            "timestamp": "2017-06-14",
            "changePercentage": null,
            "actual": "11346",
            "predicted": "10443.8999",
            "upperBound": "14741.97167",
            "lowerBound": "5720.132844"
        },
        {
            "timestamp": "2017-06-15",
            "changePercentage": null,
            "actual": "11453",
            "predicted": "11399.17874",
            "upperBound": "15446.44008",
            "lowerBound": "6995.971111"
        },
        {
            "timestamp": "2017-06-16",
            "changePercentage": null,
            "actual": "13067",
            "predicted": "13466.05293",
            "upperBound": "18155.21068",
            "lowerBound": "9293.37212"
        },
        {
            "timestamp": "2017-06-17",
            "changePercentage": null,
            "actual": "12673",
            "predicted": "13279.497",
            "upperBound": "17590.46443",
            "lowerBound": "8937.928584"
        },
        {
            "timestamp": "2017-06-18",
            "changePercentage": null,
            "actual": "12117",
            "predicted": "11776.55607",
            "upperBound": "16391.28082",
            "lowerBound": "7597.573966"
        },
        {
            "timestamp": "2017-06-19",
            "changePercentage": null,
            "actual": "12809",
            "predicted": "11592.08912",
            "upperBound": "16111.62712",
            "lowerBound": "7158.748593"
        },
        {
            "timestamp": "2017-06-20",
            "changePercentage": null,
            "actual": "12265",
            "predicted": "11037.55133",
            "upperBound": "15221.76621",
            "lowerBound": "6531.193491"
        },
        {
            "timestamp": "2017-06-21",
            "changePercentage": null,
            "actual": "12315",
            "predicted": "11089.79553",
            "upperBound": "15439.7263",
            "lowerBound": "6661.648255"
        },
        {
            "timestamp": "2017-06-22",
            "changePercentage": null,
            "actual": "14384",
            "predicted": "12022.58635",
            "upperBound": "16604.92189",
            "lowerBound": "7366.783574"
        },
        {
            "timestamp": "2017-06-23",
            "changePercentage": null,
            "actual": "14780",
            "predicted": "14058.46609",
            "upperBound": "18766.36669",
            "lowerBound": "9659.680223"
        },
        {
            "timestamp": "2017-06-24",
            "changePercentage": null,
            "actual": "13326",
            "predicted": "13833.02354",
            "upperBound": "18166.48703",
            "lowerBound": "9525.806901"
        },
        {
            "timestamp": "2017-06-25",
            "changePercentage": null,
            "actual": "11736",
            "predicted": "12284.16313",
            "upperBound": "16803.12142",
            "lowerBound": "8051.510503"
        },
        {
            "timestamp": "2017-06-26",
            "changePercentage": null,
            "actual": "12814",
            "predicted": "12047.82512",
            "upperBound": "16715.49648",
            "lowerBound": "7817.002156"
        },
        {
            "timestamp": "2017-06-27",
            "changePercentage": null,
            "actual": "13162",
            "predicted": "11436.73738",
            "upperBound": "15846.99897",
            "lowerBound": "6922.054181"
        },
        {
            "timestamp": "2017-06-28",
            "changePercentage": null,
            "actual": "12917",
            "predicted": "11429.18",
            "upperBound": "15759.41177",
            "lowerBound": "7140.175595"
        },
        {
            "timestamp": "2017-06-29",
            "changePercentage": null,
            "actual": "14127",
            "predicted": "12300.45734",
            "upperBound": "17174.996",
            "lowerBound": "7959.902582"
        },
        {
            "timestamp": "2017-06-30",
            "changePercentage": null,
            "actual": "14312",
            "predicted": "14274.71794",
            "upperBound": "18821.16154",
            "lowerBound": "9937.403075"
        },
        {
            "timestamp": "2017-07-01",
            "changePercentage": null,
            "actual": "12546",
            "predicted": "13989.17479",
            "upperBound": "18187.53613",
            "lowerBound": "9597.841401"
        },
        {
            "timestamp": "2017-07-02",
            "changePercentage": null,
            "actual": "12399",
            "predicted": "12383.32514",
            "upperBound": "16661.97675",
            "lowerBound": "7942.613802"
        },
        {
            "timestamp": "2017-07-03",
            "changePercentage": null,
            "actual": "12296",
            "predicted": "12094.62171",
            "upperBound": "16594.67377",
            "lowerBound": "7298.713469"
        },
        {
            "timestamp": "2017-07-04",
            "changePercentage": null,
            "actual": "12781",
            "predicted": "11417.98029",
            "upperBound": "16073.8544",
            "lowerBound": "7092.138172"
        },
        {
            "timestamp": "2017-07-05",
            "changePercentage": null,
            "actual": "12236",
            "predicted": "11390.48921",
            "upperBound": "15840.17359",
            "lowerBound": "6971.659345"
        },
        {
            "timestamp": "2017-07-06",
            "changePercentage": null,
            "actual": "12831",
            "predicted": "12230.86747",
            "upperBound": "16778.04367",
            "lowerBound": "7957.246614"
        },
        {
            "timestamp": "2017-07-07",
            "changePercentage": null,
            "actual": "14239",
            "predicted": "14183.22883",
            "upperBound": "18640.6372",
            "lowerBound": "9601.996569"
        },
        {
            "timestamp": "2017-07-08",
            "changePercentage": null,
            "actual": "13085",
            "predicted": "13885.2897",
            "upperBound": "18228.80149",
            "lowerBound": "9541.596688"
        },
        {
            "timestamp": "2017-07-09",
            "changePercentage": null,
            "actual": "11759",
            "predicted": "12276.77026",
            "upperBound": "16632.70103",
            "lowerBound": "7893.880415"
        },
        {
            "timestamp": "2017-07-10",
            "changePercentage": null,
            "actual": "13492",
            "predicted": "11995.05815",
            "upperBound": "16397.2761",
            "lowerBound": "7706.841677"
        },
        {
            "timestamp": "2017-07-11",
            "changePercentage": null,
            "actual": "13427",
            "predicted": "11353.91499",
            "upperBound": "15915.91052",
            "lowerBound": "7079.41292"
        },
        {
            "timestamp": "2017-07-12",
            "changePercentage": null,
            "actual": "12652",
            "predicted": "11332.2084",
            "upperBound": "15791.5485",
            "lowerBound": "6652.48503"
        },
        {
            "timestamp": "2017-07-13",
            "changePercentage": null,
            "actual": "14059",
            "predicted": "12205.36528",
            "upperBound": "16716.07457",
            "lowerBound": "7839.710917"
        },
        {
            "timestamp": "2017-07-14",
            "changePercentage": null,
            "actual": "15267",
            "predicted": "14197.18728",
            "upperBound": "18620.16159",
            "lowerBound": "9849.548504"
        },
        {
            "timestamp": "2017-07-15",
            "changePercentage": null,
            "actual": "14076",
            "predicted": "13944.08153",
            "upperBound": "18440.7831",
            "lowerBound": "9297.066132"
        },
        {
            "timestamp": "2017-07-16",
            "changePercentage": null,
            "actual": "13585",
            "predicted": "12384.30517",
            "upperBound": "16339.87478",
            "lowerBound": "7966.508107"
        },
        {
            "timestamp": "2017-07-17",
            "changePercentage": null,
            "actual": "14500",
            "predicted": "12153.67523",
            "upperBound": "16934.49887",
            "lowerBound": "7902.445159"
        },
        {
            "timestamp": "2017-07-18",
            "changePercentage": null,
            "actual": "12298",
            "predicted": "11564.32502",
            "upperBound": "16003.42046",
            "lowerBound": "6847.884128"
        },
        {
            "timestamp": "2017-07-19",
            "changePercentage": null,
            "actual": "12459",
            "predicted": "11593.48801",
            "upperBound": "16005.52845",
            "lowerBound": "7450.240371"
        },
        {
            "timestamp": "2017-07-20",
            "changePercentage": null,
            "actual": "13412",
            "predicted": "12515.00341",
            "upperBound": "16942.23212",
            "lowerBound": "8239.702229"
        },
        {
            "timestamp": "2017-07-21",
            "changePercentage": null,
            "actual": "14535",
            "predicted": "14551.18293",
            "upperBound": "18656.13599",
            "lowerBound": "10128.38644"
        },
        {
            "timestamp": "2017-07-22",
            "changePercentage": null,
            "actual": "14712",
            "predicted": "14337.08967",
            "upperBound": "18701.63531",
            "lowerBound": "9742.750096"
        },
        {
            "timestamp": "2017-07-23",
            "changePercentage": null,
            "actual": "12787",
            "predicted": "12809.8267",
            "upperBound": "17144.3635",
            "lowerBound": "8465.048072"
        },
        {
            "timestamp": "2017-07-24",
            "changePercentage": null,
            "actual": "13247",
            "predicted": "12604.28499",
            "upperBound": "16970.75057",
            "lowerBound": "8033.135913"
        },
        {
            "timestamp": "2017-07-25",
            "changePercentage": null,
            "actual": "12191",
            "predicted": "12031.9309",
            "upperBound": "16254.17592",
            "lowerBound": "7597.918998"
        },
        {
            "timestamp": "2017-07-26",
            "changePercentage": null,
            "actual": "12301",
            "predicted": "12069.6129",
            "upperBound": "16424.57199",
            "lowerBound": "7707.948862"
        },
        {
            "timestamp": "2017-07-27",
            "changePercentage": null,
            "actual": "14611",
            "predicted": "12991.08127",
            "upperBound": "17110.5827",
            "lowerBound": "8896.632532"
        },
        {
            "timestamp": "2017-07-28",
            "changePercentage": null,
            "actual": "16214",
            "predicted": "15018.85938",
            "upperBound": "19419.85858",
            "lowerBound": "10726.69219"
        },
        {
            "timestamp": "2017-07-29",
            "changePercentage": null,
            "actual": "14259",
            "predicted": "14788.51755",
            "upperBound": "19243.17706",
            "lowerBound": "10635.39391"
        },
        {
            "timestamp": "2017-07-30",
            "changePercentage": null,
            "actual": "14790",
            "predicted": "13237.94696",
            "upperBound": "17188.58984",
            "lowerBound": "8978.119774"
        },
        {
            "timestamp": "2017-07-31",
            "changePercentage": null,
            "actual": "14843",
            "predicted": "13003.08381",
            "upperBound": "17348.45562",
            "lowerBound": "8602.580368"
        },
        {
            "timestamp": "2017-08-01",
            "changePercentage": null,
            "actual": "14122",
            "predicted": "12396.66432",
            "upperBound": "16837.52367",
            "lowerBound": "8144.531532"
        },
        {
            "timestamp": "2017-08-02",
            "changePercentage": null,
            "actual": "14467",
            "predicted": "12396.99165",
            "upperBound": "16704.34375",
            "lowerBound": "8056.511262"
        },
        {
            "timestamp": "2017-08-03",
            "changePercentage": null,
            "actual": "15508",
            "predicted": "13279.40919",
            "upperBound": "17818.07907",
            "lowerBound": "8973.108631"
        },
        {
            "timestamp": "2017-08-04",
            "changePercentage": null,
            "actual": "17077",
            "predicted": "15268.12055",
            "upperBound": "20104.25069",
            "lowerBound": "11201.74826"
        },
        {
            "timestamp": "2017-08-05",
            "changePercentage": null,
            "actual": "15029",
            "predicted": "15000.40878",
            "upperBound": "19238.47465",
            "lowerBound": "10339.84833"
        },
        {
            "timestamp": "2017-08-06",
            "changePercentage": null,
            "actual": "13696",
            "predicted": "13415.8539",
            "upperBound": "17829.68395",
            "lowerBound": "9198.242145"
        },
        {
            "timestamp": "2017-08-07",
            "changePercentage": null,
            "actual": "15187",
            "predicted": "13152.00072",
            "upperBound": "17309.07351",
            "lowerBound": "8568.033238"
        },
        {
            "timestamp": "2017-08-08",
            "changePercentage": null,
            "actual": "14386",
            "predicted": "12523.05949",
            "upperBound": "16779.2711",
            "lowerBound": "8186.905428"
        },
        {
            "timestamp": "2017-08-09",
            "changePercentage": null,
            "actual": "13896",
            "predicted": "12508.62197",
            "upperBound": "16916.27934",
            "lowerBound": "7945.274125"
        },
        {
            "timestamp": "2017-08-10",
            "changePercentage": null,
            "actual": "14860",
            "predicted": "13385.08921",
            "upperBound": "17764.09905",
            "lowerBound": "9127.960147"
        },
        {
            "timestamp": "2017-08-11",
            "changePercentage": null,
            "actual": "15477",
            "predicted": "15377.45278",
            "upperBound": "19755.5455",
            "lowerBound": "10615.3186"
        },
        {
            "timestamp": "2017-08-12",
            "changePercentage": null,
            "actual": "15004",
            "predicted": "15123.4833",
            "upperBound": "19335.9698",
            "lowerBound": "10653.42062"
        },
        {
            "timestamp": "2017-08-13",
            "changePercentage": null,
            "actual": "14443",
            "predicted": "13562.92645",
            "upperBound": "17941.29408",
            "lowerBound": "9494.70973"
        },
        {
            "timestamp": "2017-08-14",
            "changePercentage": null,
            "actual": "14359",
            "predicted": "13333.15918",
            "upperBound": "17724.15357",
            "lowerBound": "8822.110591"
        },
        {
            "timestamp": "2017-08-15",
            "changePercentage": null,
            "actual": "13744",
            "predicted": "12747.88926",
            "upperBound": "17093.03423",
            "lowerBound": "8570.403826"
        },
        {
            "timestamp": "2017-08-16",
            "changePercentage": null,
            "actual": "13654",
            "predicted": "12785.8807",
            "upperBound": "17018.12785",
            "lowerBound": "8253.217091"
        },
        {
            "timestamp": "2017-08-17",
            "changePercentage": null,
            "actual": "14305",
            "predicted": "13722.40149",
            "upperBound": "18040.68991",
            "lowerBound": "9215.608939"
        },
        {
            "timestamp": "2017-08-18",
            "changePercentage": null,
            "actual": "16485",
            "predicted": "15781.03458",
            "upperBound": "20493.35668",
            "lowerBound": "11365.51995"
        },
        {
            "timestamp": "2017-08-19",
            "changePercentage": null,
            "actual": "15327",
            "predicted": "15597.90544",
            "upperBound": "19668.33309",
            "lowerBound": "11273.18238"
        },
        {
            "timestamp": "2017-08-20",
            "changePercentage": null,
            "actual": "14551",
            "predicted": "14110.92497",
            "upperBound": "18761.93567",
            "lowerBound": "9896.516382"
        },
        {
            "timestamp": "2017-08-21",
            "changePercentage": null,
            "actual": "14420",
            "predicted": "13955.49948",
            "upperBound": "18474.75813",
            "lowerBound": "9558.290991"
        },
        {
            "timestamp": "2017-08-22",
            "changePercentage": null,
            "actual": "13659",
            "predicted": "13443.28883",
            "upperBound": "17856.04422",
            "lowerBound": "8955.839939"
        },
        {
            "timestamp": "2017-08-23",
            "changePercentage": null,
            "actual": "14162",
            "predicted": "13550.99401",
            "upperBound": "17997.20978",
            "lowerBound": "9172.226027"
        },
        {
            "timestamp": "2017-08-24",
            "changePercentage": null,
            "actual": "14349",
            "predicted": "14551.86821",
            "upperBound": "18996.63785",
            "lowerBound": "10135.62277"
        },
        {
            "timestamp": "2017-08-25",
            "changePercentage": null,
            "actual": "14478",
            "predicted": "16667.59071",
            "upperBound": "21000.59004",
            "lowerBound": "12415.43117"
        },
        {
            "timestamp": "2017-08-26",
            "changePercentage": null,
            "actual": "16336",
            "predicted": "16547.72419",
            "upperBound": "21047.11579",
            "lowerBound": "12498.03472"
        },
        {
            "timestamp": "2017-08-27",
            "changePercentage": null,
            "actual": "16127",
            "predicted": "15113.50523",
            "upperBound": "19661.65438",
            "lowerBound": "10809.16109"
        },
        {
            "timestamp": "2017-08-28",
            "changePercentage": null,
            "actual": "15911",
            "predicted": "14999.1122",
            "upperBound": "19615.27659",
            "lowerBound": "10629.69901"
        },
        {
            "timestamp": "2017-08-29",
            "changePercentage": null,
            "actual": "14514",
            "predicted": "14515.29569",
            "upperBound": "19072.66522",
            "lowerBound": "9923.582852"
        },
        {
            "timestamp": "2017-08-30",
            "changePercentage": null,
            "actual": "14468",
            "predicted": "14638.19852",
            "upperBound": "18859.60257",
            "lowerBound": "10256.10803"
        },
        {
            "timestamp": "2017-08-31",
            "changePercentage": null,
            "actual": "16136",
            "predicted": "15640.88878",
            "upperBound": "20054.07655",
            "lowerBound": "11382.53358"
        },
        {
            "timestamp": "2017-09-01",
            "changePercentage": null,
            "actual": "17944",
            "predicted": "17745.24445",
            "upperBound": "22314.29016",
            "lowerBound": "13348.48242"
        },
        {
            "timestamp": "2017-09-02",
            "changePercentage": null,
            "actual": "17432",
            "predicted": "17586.24022",
            "upperBound": "22200.0808",
            "lowerBound": "13222.87552"
        },
        {
            "timestamp": "2017-09-03",
            "changePercentage": null,
            "actual": "14684",
            "predicted": "16101.23334",
            "upperBound": "20485.44583",
            "lowerBound": "11544.9362"
        },
        {
            "timestamp": "2017-09-04",
            "changePercentage": "31.618636753445646",
            "actual": "16325",
            "predicted": "25970.43277",
            "upperBound": "30267.00738",
            "lowerBound": "21486.74245"
        },
        {
            "timestamp": "2017-09-05",
            "changePercentage": null,
            "actual": "14253",
            "predicted": "15371.99246",
            "upperBound": "19874.43723",
            "lowerBound": "10769.84755"
        },
        {
            "timestamp": "2017-09-06",
            "changePercentage": null,
            "actual": "13303",
            "predicted": "15418.12754",
            "upperBound": "19934.18501",
            "lowerBound": "11319.07153"
        },
        {
            "timestamp": "2017-09-07",
            "changePercentage": null,
            "actual": "13701",
            "predicted": "16339.25077",
            "upperBound": "20772.25987",
            "lowerBound": "11762.86479"
        },
        {
            "timestamp": "2017-09-08",
            "changePercentage": null,
            "actual": "14863",
            "predicted": "18359.46639",
            "upperBound": "22590.82309",
            "lowerBound": "14004.1216"
        },
        {
            "timestamp": "2017-09-09",
            "changePercentage": null,
            "actual": "16063",
            "predicted": "18116.05539",
            "upperBound": "22722.60481",
            "lowerBound": "13814.17525"
        },
        {
            "timestamp": "2017-09-10",
            "changePercentage": null,
            "actual": "15564",
            "predicted": "16548.69078",
            "upperBound": "21124.75944",
            "lowerBound": "12196.75496"
        },
        {
            "timestamp": "2017-09-11",
            "changePercentage": null,
            "actual": "13976",
            "predicted": "16295.10061",
            "upperBound": "20782.20458",
            "lowerBound": "12049.29397"
        },
        {
            "timestamp": "2017-09-12",
            "changePercentage": null,
            "actual": "13016",
            "predicted": "15669.7613",
            "upperBound": "20192.36625",
            "lowerBound": "11428.28066"
        },
        {
            "timestamp": "2017-09-13",
            "changePercentage": null,
            "actual": "13099",
            "predicted": "15652.60409",
            "upperBound": "19744.66751",
            "lowerBound": "11140.24065"
        },
        {
            "timestamp": "2017-09-14",
            "changePercentage": null,
            "actual": "13503",
            "predicted": "16520.43125",
            "upperBound": "20848.94888",
            "lowerBound": "12551.95585"
        },
        {
            "timestamp": "2017-09-15",
            "changePercentage": null,
            "actual": "16902",
            "predicted": "18498.68387",
            "upperBound": "22673.75067",
            "lowerBound": "14024.50786"
        },
        {
            "timestamp": "2017-09-16",
            "changePercentage": null,
            "actual": "15206",
            "predicted": "18225.61581",
            "upperBound": "22980.2443",
            "lowerBound": "13920.43643"
        },
        {
            "timestamp": "2017-09-17",
            "changePercentage": null,
            "actual": "16968",
            "predicted": "16641.47407",
            "upperBound": "21022.78253",
            "lowerBound": "12529.39039"
        },
        {
            "timestamp": "2017-09-18",
            "changePercentage": null,
            "actual": "14505",
            "predicted": "16384.13919",
            "upperBound": "20673.55988",
            "lowerBound": "11749.32739"
        },
        {
            "timestamp": "2017-09-19",
            "changePercentage": null,
            "actual": "13052",
            "predicted": "15797.79612",
            "upperBound": "20196.60248",
            "lowerBound": "11676.55316"
        },
        {
            "timestamp": "2017-09-20",
            "changePercentage": null,
            "actual": "13414",
            "predicted": "15831.68307",
            "upperBound": "20385.40331",
            "lowerBound": "11379.69272"
        },
        {
            "timestamp": "2017-09-21",
            "changePercentage": null,
            "actual": "14313",
            "predicted": "16761.48697",
            "upperBound": "20927.17011",
            "lowerBound": "12532.28767"
        },
        {
            "timestamp": "2017-09-22",
            "changePercentage": null,
            "actual": "16258",
            "predicted": "18811.15528",
            "upperBound": "23198.54348",
            "lowerBound": "14459.66816"
        },
        {
            "timestamp": "2017-09-23",
            "changePercentage": null,
            "actual": "19593",
            "predicted": "18617.11367",
            "upperBound": "23042.39065",
            "lowerBound": "14442.71771"
        },
        {
            "timestamp": "2017-09-24",
            "changePercentage": null,
            "actual": "16877",
            "predicted": "17117.50193",
            "upperBound": "21763.15892",
            "lowerBound": "12974.11907"
        },
        {
            "timestamp": "2017-09-25",
            "changePercentage": null,
            "actual": "14244",
            "predicted": "16947.87985",
            "upperBound": "21318.63683",
            "lowerBound": "12473.06669"
        },
        {
            "timestamp": "2017-09-26",
            "changePercentage": null,
            "actual": "14133",
            "predicted": "16419.98477",
            "upperBound": "21031.38652",
            "lowerBound": "11967.82688"
        },
        {
            "timestamp": "2017-09-27",
            "changePercentage": null,
            "actual": "13889",
            "predicted": "16510.52192",
            "upperBound": "20984.78359",
            "lowerBound": "12103.41858"
        },
        {
            "timestamp": "2017-09-28",
            "changePercentage": null,
            "actual": "14494",
            "predicted": "17492.68208",
            "upperBound": "21668.50335",
            "lowerBound": "13310.17383"
        },
        {
            "timestamp": "2017-09-29",
            "changePercentage": null,
            "actual": "17738",
            "predicted": "19588.02546",
            "upperBound": "24184.44546",
            "lowerBound": "15198.42999"
        },
        {
            "timestamp": "2017-09-30",
            "changePercentage": null,
            "actual": "18796",
            "predicted": "19430.78307",
            "upperBound": "23594.84749",
            "lowerBound": "15299.23193"
        },
        {
            "timestamp": "2017-10-01",
            "changePercentage": null,
            "actual": "18223",
            "predicted": "17957.17216",
            "upperBound": "22660.75984",
            "lowerBound": "13647.70825"
        },
        {
            "timestamp": "2017-10-02",
            "changePercentage": null,
            "actual": "16133",
            "predicted": "17801.1751",
            "upperBound": "21866.82497",
            "lowerBound": "13529.89911"
        },
        {
            "timestamp": "2017-10-03",
            "changePercentage": null,
            "actual": "15046",
            "predicted": "17273.36091",
            "upperBound": "21679.51182",
            "lowerBound": "12834.22264"
        },
        {
            "timestamp": "2017-10-04",
            "changePercentage": null,
            "actual": "15855",
            "predicted": "17349.72835",
            "upperBound": "21328.88035",
            "lowerBound": "13401.11178"
        },
        {
            "timestamp": "2017-10-05",
            "changePercentage": null,
            "actual": "16447",
            "predicted": "18303.26309",
            "upperBound": "22846.89914",
            "lowerBound": "13956.72957"
        },
        {
            "timestamp": "2017-10-06",
            "changePercentage": null,
            "actual": "18902",
            "predicted": "20355.84648",
            "upperBound": "24708.60828",
            "lowerBound": "15789.80673"
        },
        {
            "timestamp": "2017-10-07",
            "changePercentage": null,
            "actual": "19945",
            "predicted": "20142.56577",
            "upperBound": "24696.64763",
            "lowerBound": "15863.50362"
        },
        {
            "timestamp": "2017-10-08",
            "changePercentage": null,
            "actual": "18122",
            "predicted": "18601.02181",
            "upperBound": "22906.81021",
            "lowerBound": "14026.01885"
        },
        {
            "timestamp": "2017-10-09",
            "changePercentage": null,
            "actual": "15636",
            "predicted": "16225.35339",
            "upperBound": "20119.93643",
            "lowerBound": "11697.81623"
        },
        {
            "timestamp": "2017-10-10",
            "changePercentage": null,
            "actual": "15777",
            "predicted": "17753.6669",
            "upperBound": "22088.25237",
            "lowerBound": "13353.06051"
        },
        {
            "timestamp": "2017-10-11",
            "changePercentage": null,
            "actual": "14949",
            "predicted": "17739.52341",
            "upperBound": "22224.78558",
            "lowerBound": "12893.33421"
        },
        {
            "timestamp": "2017-10-12",
            "changePercentage": null,
            "actual": "15574",
            "predicted": "18600.72278",
            "upperBound": "23138.02703",
            "lowerBound": "14156.29564"
        },
        {
            "timestamp": "2017-10-13",
            "changePercentage": null,
            "actual": "18008",
            "predicted": "20562.47823",
            "upperBound": "24941.7618",
            "lowerBound": "15998.94798"
        },
        {
            "timestamp": "2017-10-14",
            "changePercentage": null,
            "actual": "19634",
            "predicted": "20291.74101",
            "upperBound": "24544.86324",
            "lowerBound": "15925.91631"
        },
        {
            "timestamp": "2017-10-15",
            "changePercentage": null,
            "actual": "17994",
            "predicted": "18701.26338",
            "upperBound": "23351.99514",
            "lowerBound": "14194.39027"
        },
        {
            "timestamp": "2017-10-16",
            "changePercentage": null,
            "actual": "15171",
            "predicted": "18430.38405",
            "upperBound": "22408.46096",
            "lowerBound": "13646.40426"
        },
        {
            "timestamp": "2017-10-17",
            "changePercentage": null,
            "actual": "14342",
            "predicted": "17795.31612",
            "upperBound": "22438.65864",
            "lowerBound": "13736.84619"
        },
        {
            "timestamp": "2017-10-18",
            "changePercentage": null,
            "actual": "16306",
            "predicted": "17777.82167",
            "upperBound": "22062.18329",
            "lowerBound": "13293.0468"
        },
        {
            "timestamp": "2017-10-19",
            "changePercentage": null,
            "actual": "16166",
            "predicted": "18656.58959",
            "upperBound": "23022.12296",
            "lowerBound": "14526.60032"
        },
        {
            "timestamp": "2017-10-20",
            "changePercentage": null,
            "actual": "18947",
            "predicted": "20658.95935",
            "upperBound": "25107.66449",
            "lowerBound": "15977.54963"
        },
        {
            "timestamp": "2017-10-21",
            "changePercentage": null,
            "actual": "19533",
            "predicted": "20425.04554",
            "upperBound": "24775.83853",
            "lowerBound": "16168.91909"
        },
        {
            "timestamp": "2017-10-22",
            "changePercentage": null,
            "actual": "17797",
            "predicted": "18896.86477",
            "upperBound": "23307.3975",
            "lowerBound": "14535.88747"
        },
        {
            "timestamp": "2017-10-23",
            "changePercentage": null,
            "actual": "16091",
            "predicted": "18713.91926",
            "upperBound": "22934.47459",
            "lowerBound": "14582.00945"
        },
        {
            "timestamp": "2017-10-24",
            "changePercentage": null,
            "actual": "14118",
            "predicted": "18191.82199",
            "upperBound": "22667.89762",
            "lowerBound": "13657.4046"
        },
        {
            "timestamp": "2017-10-25",
            "changePercentage": null,
            "actual": "15722",
            "predicted": "18310.94784",
            "upperBound": "22777.228",
            "lowerBound": "13645.96737"
        },
        {
            "timestamp": "2017-10-26",
            "changePercentage": null,
            "actual": "16496",
            "predicted": "19347.80921",
            "upperBound": "23510.58957",
            "lowerBound": "15073.25064"
        },
        {
            "timestamp": "2017-10-27",
            "changePercentage": null,
            "actual": "19817",
            "predicted": "21526.79911",
            "upperBound": "25844.94403",
            "lowerBound": "17384.29564"
        },
        {
            "timestamp": "2017-10-28",
            "changePercentage": null,
            "actual": "20702",
            "predicted": "21484.35699",
            "upperBound": "25925.21918",
            "lowerBound": "17206.39214"
        },
        {
            "timestamp": "2017-10-29",
            "changePercentage": null,
            "actual": "19325",
            "predicted": "20158.1584",
            "upperBound": "24188.71077",
            "lowerBound": "15613.92027"
        },
        {
            "timestamp": "2017-10-30",
            "changePercentage": null,
            "actual": "16132",
            "predicted": "20182.78164",
            "upperBound": "24602.06323",
            "lowerBound": "15941.86155"
        },
        {
            "timestamp": "2017-10-31",
            "changePercentage": "1.077520656814445",
            "actual": "15225",
            "predicted": "19868.43465",
            "upperBound": "24153.98291",
            "lowerBound": "15389.05252"
        },
        {
            "timestamp": "2017-11-01",
            "changePercentage": null,
            "actual": "17010",
            "predicted": "20189.7246",
            "upperBound": "24473.24131",
            "lowerBound": "15976.99888"
        },
        {
            "timestamp": "2017-11-02",
            "changePercentage": null,
            "actual": "18174",
            "predicted": "21417.16566",
            "upperBound": "26046.26301",
            "lowerBound": "17320.06673"
        },
        {
            "timestamp": "2017-11-03",
            "changePercentage": null,
            "actual": "20709",
            "predicted": "23769.06513",
            "upperBound": "28672.06314",
            "lowerBound": "19320.7273"
        },
        {
            "timestamp": "2017-11-04",
            "changePercentage": null,
            "actual": "20905",
            "predicted": "23875.83956",
            "upperBound": "28369.54541",
            "lowerBound": "19419.07931"
        },
        {
            "timestamp": "2017-11-05",
            "changePercentage": null,
            "actual": "18974",
            "predicted": "22669.35823",
            "upperBound": "26996.22252",
            "lowerBound": "18119.59439"
        },
        {
            "timestamp": "2017-11-06",
            "changePercentage": "4.394765337250035",
            "actual": "17702",
            "predicted": "22778.76333",
            "upperBound": "27179.57857",
            "lowerBound": "18479.96136"
        },
        {
            "timestamp": "2017-11-07",
            "changePercentage": "21.265754181966553",
            "actual": "14706",
            "predicted": "22520.81509",
            "upperBound": "26708.87151",
            "lowerBound": "17833.34181"
        },
        {
            "timestamp": "2017-11-08",
            "changePercentage": "4.846374950768015",
            "actual": "17773",
            "predicted": "22854.39499",
            "upperBound": "27179.78814",
            "lowerBound": "18634.34622"
        },
        {
            "timestamp": "2017-11-09",
            "changePercentage": "7.250201566871854",
            "actual": "17870",
            "predicted": "24046.54959",
            "upperBound": "28365.03488",
            "lowerBound": "19165.61102"
        },
        {
            "timestamp": "2017-11-10",
            "changePercentage": null,
            "actual": "21178",
            "predicted": "25145.97057",
            "upperBound": "29616.18321",
            "lowerBound": "20532.15046"
        },
        {
            "timestamp": "2017-11-11",
            "changePercentage": null,
            "actual": "22261",
            "predicted": "25714.62427",
            "upperBound": "30009.59621",
            "lowerBound": "21380.3507"
        },
        {
            "timestamp": "2017-11-12",
            "changePercentage": null,
            "actual": "21366",
            "predicted": "24886.82278",
            "upperBound": "29208.47175",
            "lowerBound": "20598.92758"
        },
        {
            "timestamp": "2017-11-13",
            "changePercentage": "5.425563800062098",
            "actual": "19326",
            "predicted": "24755.28172",
            "upperBound": "29117.14882",
            "lowerBound": "20374.54446"
        },
        {
            "timestamp": "2017-11-14",
            "changePercentage": "33.7774689239021",
            "actual": "14915",
            "predicted": "24195.08032",
            "upperBound": "28372.2994",
            "lowerBound": "19952.90949"
        },
        {
            "timestamp": "2017-11-15",
            "changePercentage": "21.645533878504665",
            "actual": "16264",
            "predicted": "24179.46222",
            "upperBound": "28519.72458",
            "lowerBound": "19784.42963"
        },
        {
            "timestamp": "2017-11-16",
            "changePercentage": "21.619152405478165",
            "actual": "17086",
            "predicted": "24979.47195",
            "upperBound": "29558.23174",
            "lowerBound": "20779.84838"
        },
        {
            "timestamp": "2017-11-17",
            "changePercentage": "16.639495612676782",
            "actual": "19374",
            "predicted": "26815.89604",
            "upperBound": "31624.49222",
            "lowerBound": "22597.73588"
        },
        {
            "timestamp": "2017-11-18",
            "changePercentage": null,
            "actual": "22347",
            "predicted": "26323.58926",
            "upperBound": "30645.26777",
            "lowerBound": "21873.94311"
        },
        {
            "timestamp": "2017-11-19",
            "changePercentage": null,
            "actual": "20991",
            "predicted": "24440.78217",
            "upperBound": "28896.1979",
            "lowerBound": "19930.76812"
        },
        {
            "timestamp": "2017-11-20",
            "changePercentage": "9.304137447484958",
            "actual": "17614",
            "predicted": "23804.81922",
            "upperBound": "28170.98943",
            "lowerBound": "19252.83077"
        },
        {
            "timestamp": "2017-11-21",
            "changePercentage": "16.313127110544766",
            "actual": "15695",
            "predicted": "22730.90787",
            "upperBound": "27453.99872",
            "lowerBound": "18255.3453"
        },
        {
            "timestamp": "2017-11-22",
            "changePercentage": "4.073600763134729",
            "actual": "17035",
            "predicted": "22200.85942",
            "upperBound": "26750.41408",
            "lowerBound": "17728.93789"
        },
        {
            "timestamp": "2017-11-23",
            "changePercentage": "16.85871525877628",
            "actual": "17177",
            "predicted": "24488.01116",
            "upperBound": "29023.87003",
            "lowerBound": "20072.82152"
        },
        {
            "timestamp": "2017-11-24",
            "changePercentage": "6.985561585499025",
            "actual": "18316",
            "predicted": "23841.50907",
            "upperBound": "28038.44761",
            "lowerBound": "19595.47546"
        },
        {
            "timestamp": "2017-11-25",
            "changePercentage": null,
            "actual": "21554",
            "predicted": "22885.39035",
            "upperBound": "27374.30507",
            "lowerBound": "18619.94332"
        },
        {
            "timestamp": "2017-11-26",
            "changePercentage": null,
            "actual": "19121",
            "predicted": "20572.7571",
            "upperBound": "25048.53555",
            "lowerBound": "16213.82969"
        },
        {
            "timestamp": "2017-11-27",
            "changePercentage": null,
            "actual": "16047",
            "predicted": "19548.80443",
            "upperBound": "23766.84647",
            "lowerBound": "14901.2747"
        },
        {
            "timestamp": "2017-11-28",
            "changePercentage": null,
            "actual": "14866",
            "predicted": "18135.90196",
            "upperBound": "22385.75024",
            "lowerBound": "13813.78595"
        },
        {
            "timestamp": "2017-11-29",
            "changePercentage": null,
            "actual": "16028",
            "predicted": "17322.1758",
            "upperBound": "21577.60984",
            "lowerBound": "13141.42324"
        },
        {
            "timestamp": "2017-11-30",
            "changePercentage": null,
            "actual": "17542",
            "predicted": "17392.79519",
            "upperBound": "21927.85873",
            "lowerBound": "13190.53972"
        },
        {
            "timestamp": "2017-12-01",
            "changePercentage": null,
            "actual": "19893",
            "predicted": "18581.60836",
            "upperBound": "22994.0132",
            "lowerBound": "14325.46303"
        },
        {
            "timestamp": "2017-12-02",
            "changePercentage": null,
            "actual": "21563",
            "predicted": "17535.18435",
            "upperBound": "21916.93236",
            "lowerBound": "13125.32335"
        },
        {
            "timestamp": "2017-12-03",
            "changePercentage": "5.63673132810229",
            "actual": "20646",
            "predicted": "15201.86367",
            "upperBound": "19482.24045",
            "lowerBound": "10832.36965"
        },
        {
            "timestamp": "2017-12-04",
            "changePercentage": null,
            "actual": "17252",
            "predicted": "14227.27349",
            "upperBound": "18635.18984",
            "lowerBound": "9848.635226"
        },
        {
            "timestamp": "2017-12-05",
            "changePercentage": null,
            "actual": "15229",
            "predicted": "12932.89305",
            "upperBound": "17487.05717",
            "lowerBound": "8099.862956"
        },
        {
            "timestamp": "2017-12-06",
            "changePercentage": null,
            "actual": "16030",
            "predicted": "12304.65448",
            "upperBound": "16984.01777",
            "lowerBound": "7989.762235"
        },
        {
            "timestamp": "2017-12-07",
            "changePercentage": "0.7674453000999346",
            "actual": "17011",
            "predicted": "12624.27778",
            "upperBound": "16880.44988",
            "lowerBound": "8267.469291"
        },
        {
            "timestamp": "2017-12-08",
            "changePercentage": "2.044427979998934",
            "actual": "18599",
            "predicted": "14120.98294",
            "upperBound": "18218.75684",
            "lowerBound": "9548.372692"
        },
        {
            "timestamp": "2017-12-09",
            "changePercentage": "14.372111401177145",
            "actual": "21068",
            "predicted": "13435.63434",
            "upperBound": "18040.08357",
            "lowerBound": "9149.783213"
        },
        {
            "timestamp": "2017-12-10",
            "changePercentage": "20.41081862303613",
            "actual": "19986",
            "predicted": "11509.91774",
            "upperBound": "15906.69379",
            "lowerBound": "6955.270664"
        },
        {
            "timestamp": "2017-12-11",
            "changePercentage": "11.349213413565463",
            "actual": "17117",
            "predicted": "10982.00255",
            "upperBound": "15174.35514",
            "lowerBound": "6340.314972"
        },
        {
            "timestamp": "2017-12-12",
            "changePercentage": "11.764827177491767",
            "actual": "16705",
            "predicted": "10165.27127",
            "upperBound": "14739.68562",
            "lowerBound": "5723.256869"
        },
        {
            "timestamp": "2017-12-13",
            "changePercentage": "16.327926877241694",
            "actual": "17286",
            "predicted": "10037.0978",
            "upperBound": "14463.55456",
            "lowerBound": "5861.98901"
        },
        {
            "timestamp": "2017-12-14",
            "changePercentage": "20.298145167198697",
            "actual": "19109",
            "predicted": "10870.36849",
            "upperBound": "15230.22744",
            "lowerBound": "6732.568569"
        },
        {
            "timestamp": "2017-12-15",
            "changePercentage": "15.083113564051096",
            "actual": "20429",
            "predicted": "12885.38492",
            "upperBound": "17347.67073",
            "lowerBound": "8457.070359"
        },
        {
            "timestamp": "2017-12-16",
            "changePercentage": "20.058227586206897",
            "actual": "21605",
            "predicted": "12714.19877",
            "upperBound": "17271.41993",
            "lowerBound": "8199.346044"
        },
        {
            "timestamp": "2017-12-17",
            "changePercentage": "19.7730148780004",
            "actual": "20164",
            "predicted": "11289.97461",
            "upperBound": "16176.96928",
            "lowerBound": "7072.176755"
        },
        {
            "timestamp": "2017-12-18",
            "changePercentage": "21.563131694772764",
            "actual": "20221",
            "predicted": "11242.82883",
            "upperBound": "15860.71914",
            "lowerBound": "6946.632731"
        },
        {
            "timestamp": "2017-12-19",
            "changePercentage": "19.041532442245963",
            "actual": "19003",
            "predicted": "10878.72281",
            "upperBound": "15384.53759",
            "lowerBound": "6657.945737"
        },
        {
            "timestamp": "2017-12-20",
            "changePercentage": "15.312067997202647",
            "actual": "18589",
            "predicted": "11168.38776",
            "upperBound": "15742.63968",
            "lowerBound": "6464.962255"
        },
        {
            "timestamp": "2017-12-21",
            "changePercentage": "23.469698603887217",
            "actual": "21918",
            "predicted": "12378.97225",
            "upperBound": "16773.91146",
            "lowerBound": "7982.467705"
        },
        {
            "timestamp": "2017-12-22",
            "changePercentage": "16.45571627456164",
            "actual": "22698",
            "predicted": "14726.04847",
            "upperBound": "18962.88152",
            "lowerBound": "10373.21947"
        },
        {
            "timestamp": "2017-12-23",
            "changePercentage": "7.06295728655426",
            "actual": "20579",
            "predicted": "14838.0253",
            "upperBound": "19125.51402",
            "lowerBound": "10351.26088"
        },
        {
            "timestamp": "2017-12-24",
            "changePercentage": null,
            "actual": "17842",
            "predicted": "13645.56277",
            "upperBound": "18246.46557",
            "lowerBound": "9298.84443"
        },
        {
            "timestamp": "2017-12-25",
            "changePercentage": null,
            "actual": "12650",
            "predicted": "10599.90078",
            "upperBound": "15178.79025",
            "lowerBound": "6261.059485"
        },
        {
            "timestamp": "2017-12-26",
            "changePercentage": null,
            "actual": "14590",
            "predicted": "13539.39308",
            "upperBound": "17777.28527",
            "lowerBound": "9228.503051"
        },
        {
            "timestamp": "2017-12-27",
            "changePercentage": "11.248741681643763",
            "actual": "20587",
            "predicted": "13903.15286",
            "upperBound": "18271.22155",
            "lowerBound": "9315.345944"
        },
        {
            "timestamp": "2017-12-28",
            "changePercentage": "8.37610479780352",
            "actual": "21489",
            "predicted": "15137.86541",
            "upperBound": "19689.05884",
            "lowerBound": "11062.7639"
        },
        {
            "timestamp": "2017-12-29",
            "changePercentage": "4.333614194961668",
            "actual": "22825",
            "predicted": "17462.10965",
            "upperBound": "21835.85256",
            "lowerBound": "13083.09035"
        },
        {
            "timestamp": "2017-12-30",
            "changePercentage": "0.03640825106420748",
            "actual": "22082",
            "predicted": "17508.18983",
            "upperBound": "22073.96033",
            "lowerBound": "12832.58914"
        },
        {
            "timestamp": "2017-12-31",
            "changePercentage": "5.1513248500272715",
            "actual": "22004",
            "predicted": "16211.42903",
            "upperBound": "20870.50248",
            "lowerBound": "11822.3596"
        },
        {
            "timestamp": "2018-01-01",
            "changePercentage": null,
            "actual": "21406",
            "predicted": "19321.06525",
            "upperBound": "23846.45282",
            "lowerBound": "14867.14584"
        },
        {
            "timestamp": "2018-01-02",
            "changePercentage": "6.036800549885833",
            "actual": "21459",
            "predicted": "15803.14761",
            "upperBound": "20163.56297",
            "lowerBound": "11601.9387"
        },
        {
            "timestamp": "2018-01-03",
            "changePercentage": null,
            "actual": "18022",
            "predicted": "15980.96621",
            "upperBound": "20540.88746",
            "lowerBound": "11653.62022"
        },
        {
            "timestamp": "2018-01-04",
            "changePercentage": null,
            "actual": "16900",
            "predicted": "17014.79303",
            "upperBound": "21275.8497",
            "lowerBound": "12462.0699"
        },
        {
            "timestamp": "2018-01-05",
            "changePercentage": null,
            "actual": "20110",
            "predicted": "19129.49461",
            "upperBound": "23780.37111",
            "lowerBound": "14770.76152"
        },
        {
            "timestamp": "2018-01-06",
            "changePercentage": null,
            "actual": "21112",
            "predicted": "18963.51974",
            "upperBound": "23581.04772",
            "lowerBound": "14415.19691"
        },
        {
            "timestamp": "2018-01-07",
            "changePercentage": null,
            "actual": "18051",
            "predicted": "17458.04724",
            "upperBound": "22067.51474",
            "lowerBound": "13286.26826"
        },
        {
            "timestamp": "2018-01-08",
            "changePercentage": null,
            "actual": "16282",
            "predicted": "17252.57878",
            "upperBound": "21961.71578",
            "lowerBound": "13140.64153"
        },
        {
            "timestamp": "2018-01-09",
            "changePercentage": null,
            "actual": "16349",
            "predicted": "16663.56157",
            "upperBound": "21305.96493",
            "lowerBound": "12439.04242"
        },
        {
            "timestamp": "2018-01-10",
            "changePercentage": null,
            "actual": "17953",
            "predicted": "16673.02561",
            "upperBound": "21069.70378",
            "lowerBound": "12282.48566"
        },
        {
            "timestamp": "2018-01-11",
            "changePercentage": null,
            "actual": "20599",
            "predicted": "17559.93376",
            "upperBound": "21776.57242",
            "lowerBound": "13010.85218"
        },
        {
            "timestamp": "2018-01-12",
            "changePercentage": null,
            "actual": "22846",
            "predicted": "19551.88849",
            "upperBound": "23996.44301",
            "lowerBound": "14926.22829"
        },
        {
            "timestamp": "2018-01-13",
            "changePercentage": null,
            "actual": "22265",
            "predicted": "19289.25058",
            "upperBound": "23719.39056",
            "lowerBound": "15023.95076"
        },
        {
            "timestamp": "2018-01-14",
            "changePercentage": null,
            "actual": "19106",
            "predicted": "17714.27155",
            "upperBound": "22300.91766",
            "lowerBound": "13358.47594"
        },
        {
            "timestamp": "2018-01-15",
            "changePercentage": null,
            "actual": "18222",
            "predicted": "17907.79658",
            "upperBound": "22390.92578",
            "lowerBound": "13339.83262"
        },
        {
            "timestamp": "2018-01-16",
            "changePercentage": null,
            "actual": "17817",
            "predicted": "16862.40184",
            "upperBound": "21512.90711",
            "lowerBound": "12429.77373"
        },
        {
            "timestamp": "2018-01-17",
            "changePercentage": null,
            "actual": "16764",
            "predicted": "16882.10967",
            "upperBound": "21264.58271",
            "lowerBound": "12430.87308"
        },
        {
            "timestamp": "2018-01-18",
            "changePercentage": null,
            "actual": "18055",
            "predicted": "17802.77792",
            "upperBound": "22445.04434",
            "lowerBound": "13609.30746"
        },
        {
            "timestamp": "2018-01-19",
            "changePercentage": null,
            "actual": "20624",
            "predicted": "19845.73704",
            "upperBound": "24515.33635",
            "lowerBound": "15426.73652"
        },
        {
            "timestamp": "2018-01-20",
            "changePercentage": null,
            "actual": "22240",
            "predicted": "19651.90707",
            "upperBound": "24149.8532",
            "lowerBound": "15349.57659"
        },
        {
            "timestamp": "2018-01-21",
            "changePercentage": null,
            "actual": "19680",
            "predicted": "18160.03422",
            "upperBound": "22695.987",
            "lowerBound": "13752.08419"
        },
        {
            "timestamp": "2018-01-22",
            "changePercentage": null,
            "actual": "17865",
            "predicted": "18006.07395",
            "upperBound": "22188.28424",
            "lowerBound": "13040.80757"
        },
        {
            "timestamp": "2018-01-23",
            "changePercentage": null,
            "actual": "17433",
            "predicted": "17501.96147",
            "upperBound": "21923.30945",
            "lowerBound": "13013.27299"
        },
        {
            "timestamp": "2018-01-24",
            "changePercentage": null,
            "actual": "17552",
            "predicted": "17624.41784",
            "upperBound": "21764.29736",
            "lowerBound": "12911.16676"
        },
        {
            "timestamp": "2018-01-25",
            "changePercentage": null,
            "actual": "19514",
            "predicted": "18646.48446",
            "upperBound": "23322.53651",
            "lowerBound": "14337.28163"
        },
        {
            "timestamp": "2018-01-26",
            "changePercentage": null,
            "actual": "22894",
            "predicted": "20789.42452",
            "upperBound": "25165.36555",
            "lowerBound": "15964.59896"
        },
        {
            "timestamp": "2018-01-27",
            "changePercentage": null,
            "actual": "23037",
            "predicted": "20687.04101",
            "upperBound": "25104.17912",
            "lowerBound": "16273.36155"
        },
        {
            "timestamp": "2018-01-28",
            "changePercentage": null,
            "actual": "20250",
            "predicted": "19275.00742",
            "upperBound": "23410.52255",
            "lowerBound": "14674.05304"
        },
        {
            "timestamp": "2018-01-29",
            "changePercentage": null,
            "actual": "18134",
            "predicted": "19186.65974",
            "upperBound": "23717.08283",
            "lowerBound": "14588.94039"
        },
        {
            "timestamp": "2018-01-30",
            "changePercentage": null,
            "actual": "19116",
            "predicted": "18731.82842",
            "upperBound": "23022.63755",
            "lowerBound": "14384.54667"
        },
        {
            "timestamp": "2018-01-31",
            "changePercentage": null,
            "actual": "18590",
            "predicted": "18885.68922",
            "upperBound": "23531.53751",
            "lowerBound": "14779.2837"
        },
        {
            "timestamp": "2018-02-01",
            "changePercentage": null,
            "actual": "19732",
            "predicted": "19920.32503",
            "upperBound": "24499.6452",
            "lowerBound": "15424.12241"
        },
        {
            "timestamp": "2018-02-02",
            "changePercentage": null,
            "actual": "23325",
            "predicted": "22056.63686",
            "upperBound": "26535.44749",
            "lowerBound": "17484.10546"
        },
        {
            "timestamp": "2018-02-03",
            "changePercentage": null,
            "actual": "25841",
            "predicted": "21928.65394",
            "upperBound": "26218.88017",
            "lowerBound": "17691.21526"
        },
        {
            "timestamp": "2018-02-04",
            "changePercentage": null,
            "actual": "21892",
            "predicted": "20472.83974",
            "upperBound": "24822.88865",
            "lowerBound": "16007.49544"
        },
        {
            "timestamp": "2018-02-05",
            "changePercentage": null,
            "actual": "18738",
            "predicted": "20323.84366",
            "upperBound": "24771.15684",
            "lowerBound": "15828.51617"
        },
        {
            "timestamp": "2018-02-06",
            "changePercentage": null,
            "actual": "19248",
            "predicted": "19793.27872",
            "upperBound": "24682.9056",
            "lowerBound": "15737.29994"
        },
        {
            "timestamp": "2018-02-07",
            "changePercentage": null,
            "actual": "20181",
            "predicted": "19858.50607",
            "upperBound": "24371.89221",
            "lowerBound": "15079.68626"
        },
        {
            "timestamp": "2018-02-08",
            "changePercentage": null,
            "actual": "21191",
            "predicted": "20794.12082",
            "upperBound": "25332.77791",
            "lowerBound": "16119.4716"
        },
        {
            "timestamp": "2018-02-09",
            "changePercentage": null,
            "actual": "24433",
            "predicted": "22823.77965",
            "upperBound": "27132.32007",
            "lowerBound": "18150.78896"
        },
        {
            "timestamp": "2018-02-10",
            "changePercentage": null,
            "actual": "25757",
            "predicted": "22584.42295",
            "upperBound": "26882.80122",
            "lowerBound": "17829.76195"
        },
        {
            "timestamp": "2018-02-11",
            "changePercentage": null,
            "actual": "23369",
            "predicted": "21015.49088",
            "upperBound": "25383.0983",
            "lowerBound": "16721.09648"
        },
        {
            "timestamp": "2018-02-12",
            "changePercentage": null,
            "actual": "20106",
            "predicted": "20746.33523",
            "upperBound": "25014.88237",
            "lowerBound": "16417.30964"
        },
        {
            "timestamp": "2018-02-13",
            "changePercentage": null,
            "actual": "17874",
            "predicted": "20099.66347",
            "upperBound": "24705.14405",
            "lowerBound": "15354.76817"
        },
        {
            "timestamp": "2018-02-14",
            "changePercentage": null,
            "actual": "20875",
            "predicted": "20055.4911",
            "upperBound": "24215.39833",
            "lowerBound": "15698.2669"
        },
        {
            "timestamp": "2018-02-15",
            "changePercentage": null,
            "actual": "25267",
            "predicted": "20890.80624",
            "upperBound": "25406.32497",
            "lowerBound": "16180.25694"
        },
        {
            "timestamp": "2018-05-25",
            "changePercentage": null,
            "actual": "31627",
            "predicted": "29881.90076",
            "upperBound": "34292.23813",
            "lowerBound": "25298.59977"
        },
        {
            "timestamp": "2018-05-26",
            "changePercentage": null,
            "actual": "30056",
            "predicted": "29634.74965",
            "upperBound": "34031.64397",
            "lowerBound": "25563.98187"
        },
        {
            "timestamp": "2018-05-27",
            "changePercentage": null,
            "actual": "27259",
            "predicted": "28071.25781",
            "upperBound": "32347.22794",
            "lowerBound": "23739.404"
        },
        {
            "timestamp": "2018-05-28",
            "changePercentage": null,
            "actual": "27689",
            "predicted": "27999.11466",
            "upperBound": "32191.11961",
            "lowerBound": "23421.71385"
        },
        {
            "timestamp": "2018-05-29",
            "changePercentage": null,
            "actual": "27401",
            "predicted": "27219.12952",
            "upperBound": "31873.53446",
            "lowerBound": "22794.26262"
        },
        {
            "timestamp": "2018-05-30",
            "changePercentage": null,
            "actual": "27173",
            "predicted": "27222.84772",
            "upperBound": "31720.9128",
            "lowerBound": "23113.9516"
        },
        {
            "timestamp": "2018-05-31",
            "changePercentage": null,
            "actual": "28549",
            "predicted": "28115.1111",
            "upperBound": "32244.10389",
            "lowerBound": "23386.10245"
        },
        {
            "timestamp": "2018-06-01",
            "changePercentage": null,
            "actual": "31725",
            "predicted": "30120.2963",
            "upperBound": "34615.90237",
            "lowerBound": "25833.60834"
        },
        {
            "timestamp": "2018-06-02",
            "changePercentage": null,
            "actual": "30702",
            "predicted": "29875.62904",
            "upperBound": "34361.21836",
            "lowerBound": "25255.85496"
        },
        {
            "timestamp": "2018-06-03",
            "changePercentage": null,
            "actual": "28833",
            "predicted": "28320.39264",
            "upperBound": "32931.34743",
            "lowerBound": "23966.38542"
        },
        {
            "timestamp": "2018-06-04",
            "changePercentage": null,
            "actual": "28612",
            "predicted": "28091.59496",
            "upperBound": "32704.89022",
            "lowerBound": "23613.8683"
        },
        {
            "timestamp": "2018-06-05",
            "changePercentage": null,
            "actual": "26574",
            "predicted": "27502.67632",
            "upperBound": "32033.76276",
            "lowerBound": "23311.06761"
        },
        {
            "timestamp": "2018-06-06",
            "changePercentage": null,
            "actual": "26781",
            "predicted": "27532.24105",
            "upperBound": "32251.21043",
            "lowerBound": "23224.50272"
        },
        {
            "timestamp": "2018-06-07",
            "changePercentage": null,
            "actual": "27839",
            "predicted": "28455.50862",
            "upperBound": "33018.79787",
            "lowerBound": "23917.79307"
        },
        {
            "timestamp": "2018-06-08",
            "changePercentage": null,
            "actual": "31621",
            "predicted": "30496.12541",
            "upperBound": "34795.88393",
            "lowerBound": "26044.68794"
        },
        {
            "timestamp": "2018-06-09",
            "changePercentage": null,
            "actual": "31008",
            "predicted": "30290.39013",
            "upperBound": "34696.88195",
            "lowerBound": "25815.59588"
        },
        {
            "timestamp": "2018-06-10",
            "changePercentage": null,
            "actual": "28487",
            "predicted": "28776.492",
            "upperBound": "33127.30042",
            "lowerBound": "24399.06058"
        },
        {
            "timestamp": "2018-06-11",
            "changePercentage": null,
            "actual": "28060",
            "predicted": "28590.21312",
            "upperBound": "32890.70844",
            "lowerBound": "24228.46885"
        },
        {
            "timestamp": "2018-06-12",
            "changePercentage": null,
            "actual": "26997",
            "predicted": "28043.67664",
            "upperBound": "32124.19159",
            "lowerBound": "23391.06445"
        },
        {
            "timestamp": "2018-06-13",
            "changePercentage": null,
            "actual": "27709",
            "predicted": "28085.68042",
            "upperBound": "32478.75863",
            "lowerBound": "24060.92863"
        },
        {
            "timestamp": "2018-06-14",
            "changePercentage": null,
            "actual": "27862",
            "predicted": "29018.51838",
            "upperBound": "33330.0628",
            "lowerBound": "24742.79085"
        },
        {
            "timestamp": "2018-06-15",
            "changePercentage": null,
            "actual": "30959",
            "predicted": "31064.5138",
            "upperBound": "35613.24144",
            "lowerBound": "26788.97701"
        },
        {
            "timestamp": "2018-06-16",
            "changePercentage": null,
            "actual": "29728",
            "predicted": "30858.73144",
            "upperBound": "35412.15308",
            "lowerBound": "26496.16521"
        },
        {
            "timestamp": "2018-06-17",
            "changePercentage": null,
            "actual": "29532",
            "predicted": "29338.25837",
            "upperBound": "33786.99236",
            "lowerBound": "24720.39757"
        },
        {
            "timestamp": "2018-06-18",
            "changePercentage": null,
            "actual": "28617",
            "predicted": "29137.94515",
            "upperBound": "33233.36072",
            "lowerBound": "24952.08224"
        },
        {
            "timestamp": "2018-06-19",
            "changePercentage": null,
            "actual": "26833",
            "predicted": "28569.18759",
            "upperBound": "32871.36918",
            "lowerBound": "24133.22446"
        },
        {
            "timestamp": "2018-06-20",
            "changePercentage": null,
            "actual": "27441",
            "predicted": "28608.72931",
            "upperBound": "32965.58157",
            "lowerBound": "24336.70767"
        },
        {
            "timestamp": "2018-06-21",
            "changePercentage": null,
            "actual": "28942",
            "predicted": "29530.17852",
            "upperBound": "34044.53144",
            "lowerBound": "24940.24306"
        },
        {
            "timestamp": "2018-06-22",
            "changePercentage": null,
            "actual": "31921",
            "predicted": "31555.87819",
            "upperBound": "35802.90809",
            "lowerBound": "27595.31225"
        },
        {
            "timestamp": "2018-06-23",
            "changePercentage": null,
            "actual": "30525",
            "predicted": "31321.18038",
            "upperBound": "35875.38829",
            "lowerBound": "26920.05688"
        },
        {
            "timestamp": "2018-06-24",
            "changePercentage": null,
            "actual": "29284",
            "predicted": "29763.7224",
            "upperBound": "34241.70165",
            "lowerBound": "25032.90287"
        },
        {
            "timestamp": "2018-07-18",
            "changePercentage": null,
            "actual": "27906",
            "predicted": "28205.61032",
            "upperBound": "32539.96964",
            "lowerBound": "23780.78565"
        },
        {
            "timestamp": "2018-07-19",
            "changePercentage": null,
            "actual": "28929",
            "predicted": "29066.15546",
            "upperBound": "33797.06969",
            "lowerBound": "24888.94039"
        },
        {
            "timestamp": "2018-07-20",
            "changePercentage": null,
            "actual": "31749",
            "predicted": "31042.76702",
            "upperBound": "35608.29214",
            "lowerBound": "26782.37285"
        },
        {
            "timestamp": "2018-07-21",
            "changePercentage": null,
            "actual": "29918",
            "predicted": "30770.64217",
            "upperBound": "34962.16787",
            "lowerBound": "26136.939"
        },
        {
            "timestamp": "2018-07-22",
            "changePercentage": null,
            "actual": "27555",
            "predicted": "29186.96484",
            "upperBound": "33646.46784",
            "lowerBound": "24715.0626"
        },
        {
            "timestamp": "2018-07-23",
            "changePercentage": null,
            "actual": "28230",
            "predicted": "28926.65078",
            "upperBound": "33434.16887",
            "lowerBound": "24328.94006"
        },
        {
            "timestamp": "2018-07-24",
            "changePercentage": null,
            "actual": "27563",
            "predicted": "28301.13384",
            "upperBound": "32409.59969",
            "lowerBound": "23769.14294"
        },
        {
            "timestamp": "2018-07-25",
            "changePercentage": null,
            "actual": "27083",
            "predicted": "28287.1735",
            "upperBound": "33032.14539",
            "lowerBound": "23972.6755"
        },
        {
            "timestamp": "2018-07-26",
            "changePercentage": null,
            "actual": "28421",
            "predicted": "29158.37699",
            "upperBound": "33464.55252",
            "lowerBound": "24801.09339"
        },
        {
            "timestamp": "2018-07-27",
            "changePercentage": null,
            "actual": "29698",
            "predicted": "31137.07492",
            "upperBound": "35603.54173",
            "lowerBound": "26343.28588"
        },
        {
            "timestamp": "2018-07-28",
            "changePercentage": null,
            "actual": "27856",
            "predicted": "30858.60106",
            "upperBound": "34955.19687",
            "lowerBound": "26490.96909"
        },
        {
            "timestamp": "2018-07-29",
            "changePercentage": null,
            "actual": "26892",
            "predicted": "29260.5737",
            "upperBound": "33853.23079",
            "lowerBound": "24801.95893"
        },
        {
            "timestamp": "2018-07-30",
            "changePercentage": null,
            "actual": "28573",
            "predicted": "28978.62835",
            "upperBound": "33448.72601",
            "lowerBound": "24420.54506"
        },
        {
            "timestamp": "2018-07-31",
            "changePercentage": null,
            "actual": "27291",
            "predicted": "28325.18252",
            "upperBound": "32697.22419",
            "lowerBound": "23960.50664"
        },
        {
            "timestamp": "2018-08-01",
            "changePercentage": null,
            "actual": "27903",
            "predicted": "28233.55752",
            "upperBound": "32651.48758",
            "lowerBound": "23768.78079"
        },
        {
            "timestamp": "2018-08-02",
            "changePercentage": null,
            "actual": "28013",
            "predicted": "29023.42852",
            "upperBound": "33427.65225",
            "lowerBound": "24581.85729"
        },
        {
            "timestamp": "2018-08-03",
            "changePercentage": null,
            "actual": "29771",
            "predicted": "30918.68928",
            "upperBound": "35335.04714",
            "lowerBound": "26708.47164"
        },
        {
            "timestamp": "2018-08-04",
            "changePercentage": null,
            "actual": "27406",
            "predicted": "30556.33705",
            "upperBound": "34957.4246",
            "lowerBound": "26007.57905"
        },
        {
            "timestamp": "2018-08-05",
            "changePercentage": null,
            "actual": "25678",
            "predicted": "28875.69997",
            "upperBound": "32998.81278",
            "lowerBound": "24364.74943"
        },
        {
            "timestamp": "2018-08-06",
            "changePercentage": null,
            "actual": "28923",
            "predicted": "28514.11368",
            "upperBound": "32790.45781",
            "lowerBound": "24016.75159"
        },
        {
            "timestamp": "2018-08-07",
            "changePercentage": null,
            "actual": "28187",
            "predicted": "27785.62956",
            "upperBound": "32175.79359",
            "lowerBound": "23357.2951"
        },
        {
            "timestamp": "2018-08-08",
            "changePercentage": null,
            "actual": "26168",
            "predicted": "27669.73687",
            "upperBound": "31853.29836",
            "lowerBound": "23157.55781"
        },
        {
            "timestamp": "2018-08-09",
            "changePercentage": null,
            "actual": "27160",
            "predicted": "28442.79491",
            "upperBound": "32951.08015",
            "lowerBound": "23814.37364"
        },
        {
            "timestamp": "2018-08-10",
            "changePercentage": null,
            "actual": "29450",
            "predicted": "30329.81673",
            "upperBound": "34772.06016",
            "lowerBound": "26006.30554"
        },
        {
            "timestamp": "2018-08-11",
            "changePercentage": null,
            "actual": "28912",
            "predicted": "29968.6582",
            "upperBound": "34301.70669",
            "lowerBound": "25432.95407"
        },
        {
            "timestamp": "2018-08-12",
            "changePercentage": null,
            "actual": "27154",
            "predicted": "28299.21251",
            "upperBound": "32835.42261",
            "lowerBound": "23611.03967"
        },
        {
            "timestamp": "2018-08-13",
            "changePercentage": null,
            "actual": "27248",
            "predicted": "27959.06292",
            "upperBound": "32486.20216",
            "lowerBound": "23376.37187"
        },
        {
            "timestamp": "2018-08-14",
            "changePercentage": null,
            "actual": "26094",
            "predicted": "27262.17686",
            "upperBound": "31548.72588",
            "lowerBound": "22877.70013"
        },
        {
            "timestamp": "2018-08-15",
            "changePercentage": null,
            "actual": "25499",
            "predicted": "27187.62428",
            "upperBound": "31658.25367",
            "lowerBound": "22875.35509"
        },
        {
            "timestamp": "2018-08-16",
            "changePercentage": null,
            "actual": "28778",
            "predicted": "28011.0166",
            "upperBound": "32166.75795",
            "lowerBound": "23271.18185"
        },
        {
            "timestamp": "2018-08-17",
            "changePercentage": null,
            "actual": "30287",
            "predicted": "29956.30772",
            "upperBound": "34336.99425",
            "lowerBound": "25555.58229"
        },
        {
            "timestamp": "2018-08-18",
            "changePercentage": null,
            "actual": "28500",
            "predicted": "29660.01046",
            "upperBound": "33990.38813",
            "lowerBound": "24939.73714"
        },
        {
            "timestamp": "2018-08-19",
            "changePercentage": null,
            "actual": "26979",
            "predicted": "28060.42787",
            "upperBound": "32835.72393",
            "lowerBound": "23773.41798"
        },
        {
            "timestamp": "2018-08-20",
            "changePercentage": null,
            "actual": "28096",
            "predicted": "27793.35106",
            "upperBound": "32357.26209",
            "lowerBound": "23430.62976"
        },
        {
            "timestamp": "2018-08-21",
            "changePercentage": null,
            "actual": "28442",
            "predicted": "27170.80544",
            "upperBound": "31509.95544",
            "lowerBound": "22658.09469"
        },
        {
            "timestamp": "2018-08-22",
            "changePercentage": null,
            "actual": "27349",
            "predicted": "27169.82667",
            "upperBound": "31448.20605",
            "lowerBound": "22768.64981"
        },
        {
            "timestamp": "2018-08-23",
            "changePercentage": null,
            "actual": "26638",
            "predicted": "28063.96097",
            "upperBound": "32693.837",
            "lowerBound": "23663.80129"
        },
        {
            "timestamp": "2018-08-24",
            "changePercentage": null,
            "actual": "29379",
            "predicted": "30075.12944",
            "upperBound": "34401.96637",
            "lowerBound": "25538.40853"
        },
        {
            "timestamp": "2018-08-25",
            "changePercentage": null,
            "actual": "29540",
            "predicted": "29837.90768",
            "upperBound": "34684.27683",
            "lowerBound": "25157.00217"
        },
        {
            "timestamp": "2018-09-03",
            "changePercentage": "10.544820191445428",
            "actual": "47951",
            "predicted": "38306.91992",
            "upperBound": "42894.65327",
            "lowerBound": "33822.13039"
        },
        {
            "timestamp": "2018-09-04",
            "changePercentage": "13.545595943116625",
            "actual": "36777",
            "predicted": "27609.84126",
            "upperBound": "31795.33618",
            "lowerBound": "22926.32526"
        },
        {
            "timestamp": "2018-09-05",
            "changePercentage": null,
            "actual": "26353",
            "predicted": "27557.44479",
            "upperBound": "31855.10805",
            "lowerBound": "23229.0689"
        },
        {
            "timestamp": "2018-09-08",
            "changePercentage": null,
            "actual": "32350",
            "predicted": "29956.07529",
            "upperBound": "34515.50091",
            "lowerBound": "25552.91525"
        },
        {
            "timestamp": "2018-09-09",
            "changePercentage": "1.2900307317219943",
            "actual": "33223",
            "predicted": "28286.36535",
            "upperBound": "32794.41309",
            "lowerBound": "23775.59943"
        },
        {
            "timestamp": "2018-09-10",
            "changePercentage": null,
            "actual": "29337",
            "predicted": "27928.56377",
            "upperBound": "32511.46664",
            "lowerBound": "23440.96641"
        },
        {
            "timestamp": "2018-09-11",
            "changePercentage": null,
            "actual": "26955",
            "predicted": "27196.88319",
            "upperBound": "31585.18039",
            "lowerBound": "22561.07334"
        },
        {
            "timestamp": "2018-09-12",
            "changePercentage": null,
            "actual": "25746",
            "predicted": "27071.05911",
            "upperBound": "31341.64352",
            "lowerBound": "22825.36296"
        },
        {
            "timestamp": "2018-09-13",
            "changePercentage": null,
            "actual": "28886",
            "predicted": "27827.77302",
            "upperBound": "31950.78255",
            "lowerBound": "23317.99816"
        },
        {
            "timestamp": "2018-09-14",
            "changePercentage": "0.08541012236792973",
            "actual": "34241",
            "predicted": "29692.42493",
            "upperBound": "34211.75472",
            "lowerBound": "25509.20941"
        },
        {
            "timestamp": "2018-09-15",
            "changePercentage": null,
            "actual": "33691",
            "predicted": "29303.30949",
            "upperBound": "33760.40866",
            "lowerBound": "24928.56327"
        },
        {
            "timestamp": "2018-09-16",
            "changePercentage": null,
            "actual": "32114",
            "predicted": "27600.79614",
            "upperBound": "32240.48923",
            "lowerBound": "22910.67467"
        },
        {
            "timestamp": "2018-09-17",
            "changePercentage": null,
            "actual": "28182",
            "predicted": "27222.96642",
            "upperBound": "31663.73376",
            "lowerBound": "22830.93845"
        },
        {
            "timestamp": "2018-09-18",
            "changePercentage": null,
            "actual": "25723",
            "predicted": "26484.29226",
            "upperBound": "30935.92927",
            "lowerBound": "22244.30391"
        },
        {
            "timestamp": "2018-09-19",
            "changePercentage": null,
            "actual": "25666",
            "predicted": "26364.33846",
            "upperBound": "30943.75664",
            "lowerBound": "21955.1353"
        },
        {
            "timestamp": "2018-09-20",
            "changePercentage": null,
            "actual": "28315",
            "predicted": "27139.18631",
            "upperBound": "31481.9763",
            "lowerBound": "22868.36124"
        },
        {
            "timestamp": "2018-09-21",
            "changePercentage": "2.5834550543779295",
            "actual": "34297",
            "predicted": "29033.22051",
            "upperBound": "33410.95242",
            "lowerBound": "24650.32594"
        },
        {
            "timestamp": "2018-09-22",
            "changePercentage": "4.474060060748464",
            "actual": "34898",
            "predicted": "28683.33299",
            "upperBound": "33336.64252",
            "lowerBound": "24019.09386"
        },
        {
            "timestamp": "2018-09-23",
            "changePercentage": null,
            "actual": "29450",
            "predicted": "27028.14387",
            "upperBound": "31113.48124",
            "lowerBound": "22751.27098"
        },
        {
            "timestamp": "2018-09-24",
            "changePercentage": null,
            "actual": "26503",
            "predicted": "26703.69147",
            "upperBound": "31152.453",
            "lowerBound": "22257.97563"
        },
        {
            "timestamp": "2018-09-25",
            "changePercentage": null,
            "actual": "26543",
            "predicted": "26022.17374",
            "upperBound": "30360.79897",
            "lowerBound": "21903.88393"
        },
        {
            "timestamp": "2018-09-26",
            "changePercentage": null,
            "actual": "27740",
            "predicted": "25960.72266",
            "upperBound": "30112.06755",
            "lowerBound": "21948.71817"
        },
        {
            "timestamp": "2018-09-27",
            "changePercentage": null,
            "actual": "27824",
            "predicted": "26792.90658",
            "upperBound": "31210.30966",
            "lowerBound": "22151.51828"
        },
        {
            "timestamp": "2018-09-28",
            "changePercentage": null,
            "actual": "31600",
            "predicted": "28740.60002",
            "upperBound": "33087.80528",
            "lowerBound": "24650.08192"
        },
        {
            "timestamp": "2018-09-29",
            "changePercentage": "1.4034178969569113",
            "actual": "33190",
            "predicted": "28438.27254",
            "upperBound": "32724.2056",
            "lowerBound": "23906.86857"
        },
        {
            "timestamp": "2018-09-30",
            "changePercentage": "1.906468047114837",
            "actual": "31922",
            "predicted": "26822.29378",
            "upperBound": "31313.41727",
            "lowerBound": "22381.54843"
        },
        {
            "timestamp": "2018-10-01",
            "changePercentage": null,
            "actual": "27980",
            "predicted": "26526.70435",
            "upperBound": "30810.49375",
            "lowerBound": "21610.10004"
        },
        {
            "timestamp": "2018-10-02",
            "changePercentage": null,
            "actual": "28498",
            "predicted": "25862.03209",
            "upperBound": "30303.34934",
            "lowerBound": "21269.07024"
        },
        {
            "timestamp": "2018-10-03",
            "changePercentage": null,
            "actual": "27621",
            "predicted": "25804.13299",
            "upperBound": "29852.52665",
            "lowerBound": "21377.41856"
        },
        {
            "timestamp": "2018-10-04",
            "changePercentage": null,
            "actual": "26958",
            "predicted": "26625.7492",
            "upperBound": "31113.95591",
            "lowerBound": "22107.99813"
        },
        {
            "timestamp": "2018-10-05",
            "changePercentage": null,
            "actual": "31372",
            "predicted": "28548.42187",
            "upperBound": "32728.09981",
            "lowerBound": "24022.2498"
        },
        {
            "timestamp": "2018-10-06",
            "changePercentage": null,
            "actual": "28588",
            "predicted": "28206.80868",
            "upperBound": "32825.05852",
            "lowerBound": "23803.31385"
        },
        {
            "timestamp": "2018-10-07",
            "changePercentage": null,
            "actual": "25351",
            "predicted": "26538.00178",
            "upperBound": "30909.88837",
            "lowerBound": "22329.44571"
        },
        {
            "timestamp": "2018-10-08",
            "changePercentage": null,
            "actual": "24631",
            "predicted": "24035.56531",
            "upperBound": "28292.07517",
            "lowerBound": "19917.78486"
        },
        {
            "timestamp": "2018-10-09",
            "changePercentage": null,
            "actual": "25436",
            "predicted": "25436.98062",
            "upperBound": "29973.41004",
            "lowerBound": "21110.91694"
        },
        {
            "timestamp": "2018-10-10",
            "changePercentage": null,
            "actual": "24862",
            "predicted": "25295.1512",
            "upperBound": "29922.02534",
            "lowerBound": "21117.83281"
        }
    ]
}};

let updateAnomaliesObj = (response) => {
    if (response !== undefined && response.length > 0) {
        let x = [];
        let actual = [];
        let predicted = [];
        let changePercentage = [];
        let predictedMax = [];
        let predictedMin = [];
        let anomaliesValues = [];
        for (let responseObj of response) {

            if (responseObj !== undefined && Object.keys(responseObj).length > 0) {

                if (responseObj.timestamp !== undefined && responseObj.timestamp !== null) {
                    let updatedTimeStamp = (responseObj.timestamp).split("T")[0];
                    x.push(updatedTimeStamp);
                }

                if (responseObj.actual !== undefined && responseObj.actual !== null) {
                    actual.push(parseInt(responseObj.actual));
                }

                if (responseObj.predicted !== undefined && responseObj.predicted !== null) {
                    predicted.push(parseInt(responseObj.predicted));
                }

                if (responseObj.changePercentage !== undefined && responseObj.changePercentage !== null) {
                    changePercentage.push(parseInt(responseObj.actual));
                    anomaliesValues.push(responseObj.changePercentage);
                } else {
                    changePercentage.push("");
                    anomaliesValues.push("")
                }

                if (responseObj.upperBound !== undefined && responseObj.upperBound !== null) {
                    predictedMax.push(parseInt(responseObj.upperBound));
                }

                if (responseObj.lowerBound !== undefined && responseObj.lowerBound !== null) {
                    predictedMin.push(responseObj.lowerBound);
                }
            }
        }
        let updatedObj = {};
        updatedObj["x"] = x;
        updatedObj["actual"] = actual;
        updatedObj["predicted"] = predicted;
        updatedObj["changePercentage"] = changePercentage;
        updatedObj["predictedMax"] = predictedMax;
        updatedObj["predictedMin"] = predictedMin;
        updatedObj["anomaliesValues"] = anomaliesValues;
        return updatedObj
    }
};

const updateAnomaliesResponse = (response,graphMetric,arrayIndex) => {
    let updatedResponse = updateAnomaliesObj(response);
    let graphObj = {};
    if (response !== undefined && graphMetric !== undefined && arrayIndex !== undefined) {
        graphObj["cardTitle"] = graphMetric.split("_").join(" ");
        graphObj["sortIndex"] = arrayIndex;
        graphObj["graphValues"] = [
            {
                name:"Actual",
                mode:'lines',
                type: 'scatter',
                line: {
                    color: '#000000',
                    width: 1
                },
                x:updatedResponse.x,
                y:updatedResponse.actual
            },
            {
                name:"Predicted",
                mode:'lines',
                type: 'scatter',
                line: {
                    color: '#0072B2',
                    width: 1
                },
                x:updatedResponse.x,
                y:updatedResponse.predicted
            },
            {
                name:"Anomalies",
                type: 'scatter',
                marker: {
                    color: '#fb2629',
                    size: 4
                },
                mode:'markers',
                x:updatedResponse.x,
                y:updatedResponse.changePercentage
            },
            {
                name:"Predicted Max",
                fill: 'tonexty',
                type: 'scatter',
                mode:'lines',
                marker:{
                    color:'rgba(0, 114, 178, 0.2)'
                },
                line:{
                    width: 0,
                },
                fillcolor : 'rgba(0, 114, 178, 0.2)',
                x:updatedResponse.x,
                y:updatedResponse.predictedMax
            },
            {
                name:"Predicted Min",
                fill:'tonexty',
                type: 'scatter',
                mode:'lines',
                marker:{
                    color:'rgba(0, 114, 178, 0.2)',
                },
                line:{
                    width: 0,
                },
                fillcolor : 'rgba(0, 114, 178, 0.2)',
                x:updatedResponse.x,
                y:updatedResponse.predictedMin
            }
        ]
    }
    return{
        type: actionTypes.SET_ANOMALIES_RESPONSE,
        anomaliesGraphObj:graphObj
    }
};

const clearAnomaliesResponse = () => {
    return{
        type: actionTypes.CLEAR_ANOMALIES_RESPONSE
    }
};

export const getAnomaliesData = (accountType,graphMetric,arrayIndex) => {
    let anomaliesRequestObj = {};
    anomaliesRequestObj["account"] = accountType;
    anomaliesRequestObj["metric"] = graphMetric;
    return dispath => {
        if (arrayIndex === 0) {
            dispath(clearAnomaliesResponse());
        }
        axios.post(endpoint.getAnomaliesDataEndPoint,anomaliesRequestObj)
            .then((response) => {
                dispath(updateAnomaliesResponse(response.data.anomalyDataList,graphMetric,arrayIndex));
            })
            .catch((error) => {
                dispath(updateAnomaliesResponse(anomaliesResponse.data.anomalyDataList,graphMetric,arrayIndex));
            })
    };
};
