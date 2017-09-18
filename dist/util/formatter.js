'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRouteDescription = getRouteDescription;
exports.getRouteLongDescription = getRouteLongDescription;
exports.getFormatedPrice = getFormatedPrice;
exports.getFormatedEndPrice = getFormatedEndPrice;
exports.getFormatedRupeePrice = getFormatedRupeePrice;
exports.getPickup = getPickup;
function getRouteDescription(route) {
    return route ? route.startroute + ' to ' + route.endroute : '';
}
function getRouteLongDescription(route) {
    var desc = '';
    if (route) {
        desc = 'Direct from ' + route.startroute + ' to ' + route.endroute + '.';
    }
    return desc;
}

function getFormatedPrice(route, cents) {
    if (route && route.pickupType.startsWith('SHUTTLE_')) {
        return cents ? '$US' + cents / 100 + ' per passenger' : null;
    } else {
        return cents ? '$US' + cents / 100 : null;
    }
}
function getFormatedEndPrice(route, booking, cents) {
    if (route && route.pickupType.startsWith('SHUTTLE_') && booking) {
        return cents ? '$US' + cents / 100 * booking.pax : null;
    } else {
        return cents ? '$US' + cents / 100 : null;
    }
}

function getFormatedRupeePrice(route, shareAnnouncement) {
    return route && !shareAnnouncement ? '(approx. ' + route.cents * 154 / 100 + ' rupees)' : null;
}

function getPickup(route) {
    var isAiport = route.pickupType === 'AIRPORT';
    var isShuttleAirport = route.pickupType === 'SHUTTLE_AIRPORT';

    if (route.pickupType === 'SHUTTLE_AIRPORT') {
        return {
            type: 'Meeting Point',
            time: 'Shuttle departs'
        };
    }
    if (route.pickupType === 'SHUTTLE_HOTEL') {
        return {
            type: 'Hotel/Pickup point',
            time: 'Shuttle departs'
        };
    }
    return {
        type: route.pickupType === 'AIRPORT' ? 'Flight No.' : 'Pickup point',
        typeHint: route.pickupType === 'AIRPORT' ? 'QR123.' : 'Hotel Relax',
        time: route.pickupType === 'AIRPORT' ? 'Landing time' : 'Pickup time',
        timeHint: route.pickupType === 'AIRPORT' ? '11:40am' : '11:40am'
    };
}