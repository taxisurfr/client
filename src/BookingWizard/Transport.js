/**
 * Created by peter on 28/01/2017.
 */
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import Combobox from 'react-widgets/lib/Combobox'
import Panel from 'muicss/lib/react/panel';
import TaxisurfrYoutube from "../Widget/TaxisurfrYoutube";
import {Label, Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const locations = [
    'COLOMBO AIRPORT',
    'AGALAWATTA',
    'AHANGAMA', 'AHUNGALLA', 'AKKARAIPATTU', 'AKURANA', 'AKURESSA', 'ALAUWA', 'ALUTHGAMA', 'AMBALANGODA', 'AMBALANTHOTA', 'AMBATALE', 'AMBEPUSSA', 'AMPARAI', 'ANAMADUWA', 'ANDIGAMA', 'ANGODA', 'ANGULANA', 'ANURADHAPURA',
    'ARANAYAKE', 'ATTANAGALA', 'ATHTHIDIYA', 'ATHURUGIRIYA',
    'AWISSAWELLA', 'AMBAMPOLA', 'BADALGAMA', 'BADULLA', 'BAGAWANTHALAWA',
    'BALANGODA', 'BALAPITIYA', 'BANDARAGAMA', 'BANDARAKOSWATTA',
    'BANDARAWELA', 'BANGADENIYA', 'BATHTHARAMULLA',
    'BATTICALOA', 'BATTULUOYA', 'BELIATHTHA', 'BELIHULOYA', 'BELLANWILA',
    'BENTOTA', 'BERUWALA', 'BIBILE', 'BLUELAGOON', 'BLUE OCEANIC',
    'BOLAWATTA', 'BOPITIYA', 'BORALASGAMUWA', 'BULATHKOHUPITIYA', 'BULATHSINHALA', 'BADURALIYA', 'BERAGALA', 'BIYAGAMA', 'BOOSSA', 'BUTHTALA', 'BALUMMAHARA', 'BINGIRIYA',
    'BOPATHTHALAWA', 'BULNEWA', 'CHILAW',
    'COLOMBO DOWNTOWN', 'CHAWAKACHCHERI',
    'DAMBULLA', 'DAMBADENIYA', 'DANDUGAMA',
    'DANKOTUWA', 'DEHIOWITA',
    'DEHIWALA', 'DELGODA',
    'DENIYAYA', 'DERANIYAGALA',
    'DICKWELLA', 'DIGANA',
    'DIVULAPITIYA', 'DIYATALAWA', 'DODANGASLANDA', 'DODANGODA',
    'DOLPHINE HOTEL', 'DOMPE', 'DUMMALASOORIYA', 'DUNAGAHA', 'DEVUNDARA', 'DAMBOKKE', 'DIMBULA', 'DEBARAWEWA', 'EHALIYAGODA', 'EKALA', 'ELAHERA', 'ELPITIYA',
    'ELLA',
    'EMBILIPITIYA', 'ENDERAMULLA',
    'EPPAWALA', 'ERAVUR', 'ELEPHANT PASS', 'GALAGEDARA (KANDY)', 'HABARANA',
    'GALAGEDARA (MIPE)', 'GALAHA', 'GALAHITIYAWA (HOROMBAWA)',
    'GALEWELA', 'GALGAMUWA', 'GALIGAMUWA', 'GALLE', 'GAMPAHA',
    'GAMPOLA', 'GANEMULLA', 'GANAGODAWILA', 'GELIOYA',
    'GINIGATHHENA', 'GIRITHALE', 'GIRIULLA',
    'GOLDI SANDI HOTEL', 'GORAKANA', 'GOTHATUWA',
    'GALENBIDUNUWEWA', 'GALOYA',
    'GOKARELLA', 'GALAPITAMADA', 'GIRADURUKOTTE',
    'GALNEWA', 'TIYA', 'HAPUTALE',
    'HUNGAMA', 'HOKANDARA', 'IBBAGAMUWA',
    'INDURUWA', 'INGINIYAGALA', 'INGIRIYA',
    'I.D.H.', 'IMBULGODA', 'IRANAMADU',
    'IMADUWA', 'JA-ELA', 'JAFFNA-PE', 'KADAWATHA',
    'KADUGANNAWA', 'KADUWELA', 'KAHATAGASDIGILIYA',
    'KAHAWATTA', 'KALAGEDIHENA', 'KALAOYA',
    'KALAWANA', 'KALAWEWA',
    'KALMUNAI', 'KALPITIYA',
    'KALUBOWILA', 'KALUTARA',
    'KANDANA',
    'KANDY',
    'KANTALE',
    'KATANA',
    'KATHANKUDY',
    'KATHARAGAMA',
    'KATTUWA',
    'KATUBEDDA',
    'KATUGASTOTA',
    'KEBILITHIGOLLAWA',
    'KEGALLE',
    'KEKIRAWA',
    'KELANIYA',
    'KESBEWA',
    'KIBULAPITIYA',
    'KINIYA',
    'KIRIBATHGODA',
    'KIRIDIWELA',
    'KIRINDA',
    'KIRULAPANA',
    'KITHULGALA',
    'KOCHCHIKADE',
    'KOGGALA',
    'KOHUWALA',
    'KOLONNAWA',
    'KOSGODA',
    'KOTADENIYAWA',
    'KOTAGALA',
    'KOTIKAWATTA',
    'KOTIYAKUBURA',
    'KOTMALE',
    'KOTTRAMULLA',
    'KOTTAWA',
    'KOTTE',
    'KULIYAPITIYA',
    'KURUNEGALA',
    'KURUWITA',
    'KAHAWA',
    'KATUNERIYA',
    'KALATHTHEWA',
    'KOSGAMA',
    'KOSLANDA',
    'KALUAGGALA (GINIGATHHENA ROAD)',
    'KALUAGGALA (HIGH LEVEL ROAD)',
    'KARAWANELLA',
    'KATUNAYAKE',
    'KINNIMADUWA',
    'KURANA',
    'KILINOCHCHI',
    'KANKASANTHUREI',
    'LABUGAMA',
    'LATHPANDURA',
    'LUNAWA',
    'LUNUWILA',
    'LUNUGAMWEHERA',
    'MABOLE',
    'MADAMPE',
    'MADAMPELLA',
    'MADATUGAMA',
    'MADIPOLA',
    'MEDIRIGIRIYA',
    'MADURANKULIYA',
    'MAGGONA',
    'MAHABAGE',
    'MAHAGAMA',
    'MAHARAGAMA',
    'MAHAWEWA',
    'MAHIYANGANAYA',
    'MAHO',
    'MAKANDURA',
    'MAKOLA',
    'MALAMBE',
    'MALWANA',
    'MANAMPITIYA',
    'MANNAR',
    'MARANDAGAHAMULA',
    'MARADANKADAWALA',
    'MARAWILA',
    'MASKELIYA',
    'MATALE',
    'MATARA',
    'MATHUGAMA',
    'MAWANELLA',
    'MAWARAMANDIYA',
    'MAWATHAGAMA',
    'MEDAWACHCHIYA',
    'MEEGODA',
    'MEETHOTAMULLA',
    'MELSIRIPURA',
    'MENIKHINNA',
    'MIHINTHALE',
    'MINIPE',
    'MINNERIYA',
    'MINUWANGODA',
    'MIRIGAMA',
    'MIRIHANA',
    'MIRISSA',
    'MONARAGALA',
    'MORAGOLLA',
    'MORATUWA',
    'MT.LAVINIA',
    'MUNAMALDENIYA',
    'MUNDALAMA',
    'MURUTHALAWA',
    'MUTTHUR',
    'MAHAOYA',
    'MANGALAELIYA',
    'MEEPE',
    'MEDAGAMA',
    'MIRISWATTE',
    'MULLERIYAWA',
    'MANKULAM',
    'MURUKKAN',
    'MORAWAKA ( VIA AKURESSA )',
    'NAGAMA',
    'NAGAMPAHA',
    'NAGODA  ( KANADANA )',
    'NAINAMADAMA',
    'NAKIYADENIYA',
    'NAKULUGAMUWA',
    'NALANDA',
    'NANUOYA',
    'NARAMMALA',
    'NATHTHANDIYA',
    'NAVINNA',
    'NAWAGATHEGAMA',
    'NAWALA',
    'NAWALAPITIYA',
    'NEGOMBO',
    'NELUNDENIYA',
    'NIKAWERATIYA',
    'NITTAMBUWA',
    'NOCHCHIYAGAMA',
    'NORTONBRIDGE',
    'NUGEGODA',
    'NUWARAELIYA',
    'NAIWALA',
    'NAWAGAMUWA',
    'NALLUR',
    'ORIENT PEARL',
    'ORUWALA',
    'OPANAYAKE',
    'OMANTHEI',
    'PADAVIYA',
    'PADUKKA',
    'PALAVI',
    'PAMUNUGAMA',
    'PANADURA',
    'PANAGODA',
    'PANNALA',
    'PANNIPITIYA',
    'PARAGAHADENIYA',
    'PASIKUDA',
    'PASSARA',
    'PASYALA',
    'PAYAGALA',
    'PEGASUS REEF',
    'PELAWATTA ( MATUGAMA)',
    'PELAWATTA',
    'PELIYAGODA',
    'PELMADULLA',
    'PEPILIYAWALA',
    'PERADENIYA',
    'PILIMATHALAWA',
    'PILIYANDALA',
    'POLGAHAWELA',
    'POLGASOWITA',
    'POLONNARUWA',
    'POLPITHIGAMA',
    'POOJAPITIYA',
    'PORUTHOTA',
    'POTHUHERA',
    'PUGADA',
    'PUSSELLAWA',
    'PUTTALAM',
    'PUWAKPITIYA',
    'PADIYATALAWA',
    'POTHUVIL',
    'PULMIDEI',
    'PELLAWATTE',
    'PITIGALA',
    'RADALLA',
    'RADAWANA',
    'RADDOLUGAMA',
    'RAJAKADALUWA',
    'RAGAMA',
    'RAJAGIRIYA',
    'RAJANGANA',
    'RAKWANA',
    'RAMBUKKANA',
    'RANALA',
    'RANPOKUNAGAMA',
    'RANWELI BEACH',
    'RATMALANA',
    'RATNAPURA',
    'RIDIGAMA',
    'RUWANWELLA',
    'RAMBAWEWA',
    'RAMBO',
    'SADALANKAWA',
    'SANGATIKULAM',
    'SAPUGASKANDA',
    'SEEDUWA', 'SIGIRIYA',
    'SIPPIKULAM', 'SAMANTHUREI',
    'SITHULPAWWA', 'SURIYAKANDA',
    'SIYAMBALANDUWA', 'THALAHENA',
    'THALANGAMA', 'THALAPATHPITI',
    'THALAWAKELE',
    'THALAWATHUGODA',
    'THAMBUTTEGAMA',
    'THANGALLE',
    'THELDENIYA',
    'THIHARIYA',
    'THISSAMAHARAMA',
    'TRINCOMALEE',
    'THALAWA',
    'THAMPALAGAMUWA', 'THANAMALWILA', 'THABBOWA',
    'THIRUWANAKETIYA', 'THULHIRIYA', 'THALEIMANNAR', 'UDUBADDAWA',
    'UDUGAMPOLA', 'UKUWELA', 'ULAPANE', 'URAGASMANHANDIYA',
    'UDAWALAWA', 'VALACHCHENAI', 'VAUNIYA', 'VEYANGODA', 'WADDUWA', 'WAIKKALA', 'WARAKAPOLA', 'WARIYAPOLA', 'WATTALA', 'WELIGAMA', 'WELIMADA', 'WELIPENNA', 'WELIWERIYA', 'WELLAMPITIYA', 'WELLAWAYA', 'WENNAPUWA',
    'WIJERAMA', 'WALASMULLA', 'WATAWALA', 'WEERAWILA', 'WELIKANDA', 'WATADENIYA',
    'WATHTHEGAMA', 'WELISARA', 'YAKKALA', 'YATIYANTOTA', 'YALA',
    'ARUGAM BAY',
    'UNAWATUNA','YALA TISSAMAHARAMA','TANGALLE','BATIKALLO','POLUNARUWA','MIDIGAMA','HIKKADUWA','PASSIKUDA','KITULGALA'
];

const renderCombobox = ({input, data, label, meta: {touched, error}}) =>
    <div style={noborder}>
        <h2 className="mui--text-headline mui--text-left">{label}</h2>
        <Combobox style={centerer} {...input}
                  data={data}
                  defaultValue={data[1]}
                  onChange={input.onChange}
                  suggest
                  caseSensitive={false}
                  minLength={2}
                  filter="contains"
        />
        <div>{touched && error && <span>{error}</span>}</div>
    </div>

var style = {
    color: 'red'
};

var styleCenter1 = {
    margin: 'auto',
    width: '100%',
    border: '3px solid blue',
    paddingx: '10px'
};

var centerer = {
    display: 'block',
    margin: '0 auto',
    border: '1px solid'
}
var noborder = {
    border: 'none'
}


var filler = {
    margin: 'auto',
    border: '3px solid green',
}
var styleCenter3 = {}

class Transport extends React.Component {
    state = {
        selectedPickup: '',
        selectedDropoff: '',
    }
    handlePickupChange = (selectedOption) => {
        this.setState({selectedPickup: selectedOption});
        this.props.onPickupDropoffUpdate('PICKUP', selectedOption.value);
    }
    handleDropoffChange = (selectedOption) => {
        this.setState({selectedDropoff: selectedOption});
        this.props.onPickupDropoffUpdate('DROPOFF', selectedOption.value);

    }

    render() {
        const {selectedPickup} = this.state;
        const value = selectedPickup && selectedPickup.value;
        const block = {float: 'left'}
        const noborder = {border: 'none'};
        const show = {backgroundColor: 'HoneyDew'};
        const message1 = 'taxisurfr is for the independent traveller wanting to connect with local trusted operators. Passengers will be met at the airport, hotel, train station or arranged meeting point.'
        const {handleSubmit, noRouteMessage} = this.props;
        const {startlocations, endlocations} = this.props;
        const isNoRoute = typeof noRouteMessage != 'undefined' && noRouteMessage != null && noRouteMessage != '';
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mui--text-center mui--text-title" itemScope itemType="http://schema.org/Offer">
                        <Panel style={show}>
                            <div>
                                <div className="mui--text-left mui--text-title" style={noborder}>
                                    <div width="100px" style={noborder}>
                                        <h2>Taxi Booking in Sri Lanka.</h2>
                                        <h3>{message1}</h3>
                                        <h2>Some of our most popular routes</h2>
                                        <div>
                                            <a href="https://app.taxisurfr.com/taxi-colombo-airport--arugam-bay"
                                               target="_blank">Colombo
                                                Airport to Arugam Bay</a>
                                        </div>

                                        <div>
                                        <a href="https://app.taxisurfr.com/taxi-colombo-airport--mirissa"
                                        target="_blank">Colombo
                                        Airport to Mirissa</a>
                                        </div>
                                        <div>
                                            <a href="https://app.taxisurfr.com/taxi-colombo-airport--weligama"
                                               target="_blank">Colombo
                                                Airport to Weligama</a>
                                        </div>
                                        {/*<div>
                                        <a href="https://app.taxisurfr.com/taxi-colombo-airport-arugam-bay" target="_blank">Colombo
                                            Airport to Arugam Bay</a>
                                    </div>*/}
                                    </div>
                                </div>
                            </div>
                        </Panel>
                        <Panel style={show}>
                            <div style={noborder}>
                                <div className="mui--text-left mui--text-headline style"
                                     style={noborder}>{noRouteMessage}</div>
                                <div className="mui--text-left">
                                <h1 className="mui--text-left">
                                    Pickup
                                </h1>
                                </div>
                                <Select
                                    placeholder='please type a name'
                                    name="form-pickup"
                                    value={this.state.selectedPickup.value}
                                    onChange={this.handlePickupChange}
                                    options={
                                        locations.map((v) => {
                                            var option = {value: v, label: v};
                                            return option;
                                        })}

                                />
                                <h1 className="mui--text-left">
                                    Dropoff
                                </h1>
                                <Select
                                    placeholder='please type a name'
                                    name="form-dropoff"
                                    value={this.state.selectedDropoff.value}
                                    onChange={this.handleDropoffChange}
                                    options={
                                        locations.map((v) => {
                                            var option = {value: v, label: v};
                                            return option;
                                        })}

                                />


                                <div className="mui--text-left" style={noborder}>
                                    <button disabled={isNoRoute} type="submit" className="next">See details.</button>
                                </div>
                            </div>
                        </Panel>
                        <Panel style={show}>
                            <div className="mui--text-left mui--text-title">
                                <TaxisurfrYoutube/>
                                <h2>Useful Links</h2>
                                <div>
                                    <a href="http://arugam.info" target="_blank">Arugam Info</a>
                                    <br/>
                                    <a href="http://www.sanjutravels.com/" target="_blank">Sanju Travels</a>
                                </div>
                            </div>
                        </Panel>
                    </div>
                </form>
            </div>
        )
    }
}












export default reduxForm({
    form: 'wizard',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(Transport)
