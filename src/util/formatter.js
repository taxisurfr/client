
export function getRouteDescription(prices){
    const price = getPrice(prices);
    return price ? price.startroute.name +' to ' + price.endroute.name : '';
}
export function getRouteLongDescription(prices){
    const price = getPrice(prices);
    var desc = '';
    if (price){
            desc = 'Direct from '+ price.startroute.name +' to ' + price.endroute.name+'.';
    }
    return desc;
}

export function getFormatedPrice(prices){
    console.log('prices:'+prices);
    const price = getPrice(prices);
    return price ? '$US' + prices[0].cents / 100:'';
}

export function getFormatedEndPrice(prices, booking){
    const price = getPrice(prices);
    return price ? '$US' + prices[0].cents / 100:'';
}

export function getFormatedRupeePrice(prices,shareAnnouncement){
    const price = getPrice(prices);
    return price  && !shareAnnouncement ? price.cents*154/100+' rupees': '';
}

function getPrice(prices) {
    return prices && prices.length >0 ? prices[0]:null;
}

export function getPickup(prices){

    const price = getPrice(prices);
    var isAiport = price.startroute.name === 'COLOMBO AIRPORT';

    return {
        type: isAiport ? 'Flight No.'  : 'Pickup point',
        typeHint: isAiport ? 'QR123.'  : 'Hotel Relax',
        time: isAiport ? 'Landing time'  : 'Pickup time',
        timeHint: isAiport ? '11:40am'  : '11:40am',
    }
}
