Intersections API

- POST request API protected with a header based auth check.

- It takes a really long lineString in GeoJSON in the request body (long_line).

- It takes scattered lines and converts them to GeoJSON using lineString.

- Then find the points of intersection between long_line and scattered lines using lineIntersect.

- The API returns two objects :
1. pointsOfIntersection - if points are found then this will contain the featureCollection with all points of intersection as individual features otherwise  it will be an empty array.
2. allFeatures - this object contains long_line, scattered lines as well as points of intersection, copy the whole object and check it on geojson.io for visualization of lines and points.


Test API using Postman

1. At first clone the source code and run it using the command - node app.js

2. Open a tab in Postman, send a POST request with the URL - http://localhost:9000/api/intersection

3. Then go to headers and add a new Key - Authorization, and enter its value "f0ce43ead3d2db62e4f10ff2daf08665bc25ae504e1775"
Note: This access token key can also be found in middlewares/auth.js in the source code. (Hard-coded access tokens are not recommended)

4. Select Body and set its type to raw, JSON.

5. Enter the GeoJSON for long_line in the request body. Follow the syntax given below:
{
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "LineString",
	      "coordinates": [[latitude, longitude], [latitude, longitude], ...]
	}
}

6. Scattered lines data is static, if you want to change the coordinates of scattered lines then go to scatteredLines.json and change the coordinates accordingly.

7. Hit the Send button.

