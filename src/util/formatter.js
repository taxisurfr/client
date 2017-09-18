
export function getRouteDescription(route){
    return route ? route.startroute +' to ' + route.endroute : '';
}
export function getRouteLongDescription(route){
    var desc = '';
    if (route){
            desc = 'Direct from '+ route.startroute +' to ' + route.endroute+'.';
    }
    return desc;
}

export function getFormatedPrice(route, cents){
    if (route && route.pickupType.startsWith('SHUTTLE_')){
        return cents ? '$US' + (cents / 100) + ' per passenger' : null
    } else {
        return cents ? '$US' + cents / 100 : null;
    }
}
export function getFormatedEndPrice(route, booking, cents){
    if (route && route.pickupType.startsWith('SHUTTLE_') && booking){
        return cents ? '$US' + (cents / 100)* booking.pax : null
    } else {
        return cents ? '$US' + cents / 100 : null;
    }
}

export function getFormatedRupeePrice(route,shareAnnouncement){
    return route && !shareAnnouncement ? '(approx. ' +route.cents*154/100+' rupees)': null;
}


export function getPickup(route){
    var isAiport = route.pickupType === 'AIRPORT';
    var isShuttleAirport = route.pickupType==='SHUTTLE_AIRPORT';

    if (route.pickupType==='SHUTTLE_AIRPORT'){
        return {
            type: 'Meeting Point',
            time: 'Shuttle departs'
        }
    }
    if (route.pickupType==='SHUTTLE_HOTEL'){
        return {
            type: 'Hotel/Pickup point',
            time: 'Shuttle departs'
        }
    }
    return {
        type: route.pickupType === 'AIRPORT' ? 'Flight No.'  : 'Pickup point',
        typeHint: route.pickupType === 'AIRPORT' ? 'QR123.'  : 'Hotel Relax',
        time: route.pickupType === 'AIRPORT' ? 'Landing time'  : 'Pickup time',
        timeHint: route.pickupType === 'AIRPORT' ? '11:40am'  : '11:40am',
    }
}
