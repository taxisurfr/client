
export function getRouteDescription(price){
    return price ? price.startroute.name +' to ' + price.endroute.name : '';
}

export function getFormatedPrice(price){
    return price ? '$US' + price.cents / 100:'';
}

export function getFormatedRupeePrice(price,shareAnnouncement){
    return price  && !shareAnnouncement ? price.cents*154/100+' rupeesx': '';
}

export function isAirportPickup(price){
    return price && price.startroute.name === 'COLOMBO AIRPORT'
}
export function getPickup(price){
    var isAirport = isAirportPickup(price);
    return {
        type: isAirport ? 'Flight No.'  : 'Pickup point',
        typeHint: isAirport ? 'QR123.'  : 'Hotel Relax',
        time: isAirport ? 'Landing time'  : 'Pickup time',
        timeHint: isAirport ? '11:40am'  : '11:40am',
    }
}
