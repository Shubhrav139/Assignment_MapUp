// Importing Turf module
const turf = require('@turf/turf');

// Importing static data for scattered lines
const scatteredLines = require('../scatteredLines.json');

// Service which returns points of intersection 
async function intersection(long_line) {
    try {
        // Object which will contain scattered lines, long line and points of intersection
        let allFeatures = {
            type: "FeatureCollection",
            features: [],
        };
        // Object which will contain points of intersection
        let intersectionPoints = {
            type: "FeatureCollection",
            features: [],
        };

        long_line.properties = {
            stroke: 'red'
        }
        // Long line data pushed in allFeatures features array
        allFeatures.features.push(long_line);

        // Mapping scattered lines data and converting it to GeoJSON
        scatteredLines.data.map((line) => {
            let lineString = turf.lineString([...line.line.coordinates]);
            allFeatures.features.push(lineString);

            // Finding intersection points
            let intersect = turf.lineIntersect(lineString, long_line);
            if (intersect.features.length > 0) {
                intersectionPoints.features.push(intersect.features[0]);
                allFeatures.features.push(intersect.features[0]);
            }
        });

        return {
            pointsOfIntersection: intersectionPoints,
            allFeatures: allFeatures,
        };

    } catch (error) {
        throw error;
    }
}

module.exports = { intersection };