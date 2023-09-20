const { HighLight } = require("./highlight.Model");
const { Hotel } = require("./hotel.Model");
const { Point } = require("./point.Model");
const { Review } = require("./review.Model");
const { TimeTitleBody } = require("./timeTitleBody.Model");
const { TourRoute } = require("./tourRoute.Model");
const { TourRoutePassTime } = require("./tourRoutePassTime.Model");
const { Travel } = require("./travel.Model");
const { VirtualTour } = require("./virtualTour.Model");

Hotel.hasMany(Review, {
    foreignKey: 'hotel_id',
    as: 'review'
})

Review.belongsTo(Hotel, {
    foreignKey: 'hotel_id',
    as: 'hotel'
})

/// ======================


Point.hasMany(VirtualTour, {
    foreignKey: 'point_id',
    as: 'virtualtour'
})

VirtualTour.belongsTo(Point, {
    foreignKey: 'point_id',
    as: 'point'
})

/// ======================

Travel.hasMany(HighLight, {
    foreignKey: 'travel_id',
    as: 'highlight'
})

HighLight.belongsTo(Travel, {
    foreignKey: 'travel_id',
    as: 'travel'
})

/// ======================

Travel.hasMany(TourRoute, {
    foreignKey: 'travel_id',
    as: 'tourroute'
})

TourRoute.belongsTo(Travel, {
    foreignKey: 'travel_id',
    as: 'travel'
})

/// ======================
TourRoute.hasMany(TourRoutePassTime, {
    foreignKey: 'tour_route_id',
    as: 'tourroutepasstime'
})

TourRoutePassTime.belongsTo(TourRoute, {
    foreignKey: 'tour_route_id',
    as: 'tourroute'
})

/// ======================
TourRoutePassTime.hasMany(TimeTitleBody, {
    foreignKey: 'tour_route_pass_time_id',
    as: 'tourroutepasstime'
})

TimeTitleBody.belongsTo(TourRoutePassTime, {
    foreignKey: 'tour_route_pass_time_id',
    as: 'timetitlebody'
})

module.exports = {
    Hotel,
    Review,
    Travel,
    TourRoute,
    TourRoutePassTime,
    TimeTitleBody,
    VirtualTour,
    Point,
    HighLight
}