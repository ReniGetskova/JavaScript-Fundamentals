console.log('Problem 1. Planar coordinates');
/*Write functions for working with shapes in standard Planar coordinate system.
 Points are represented by coordinates P(X, Y)
 Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
 Calculate the distance between two points.
 Check if three segment lines can form a triangle.*/

function buildPoint(xCoordinate, yCoordinate){
    var point = {
        x: xCoordinate,
        y : yCoordinate
    }
    return point;
}

function calculateDistance(point1, point2) {
    return Math.sqrt((point1.x - point2.x) * (point1.x - point2.x) +
        (point1.y - point2.y) * (point1.y - point2.y));
}

function buildLine(point1, point2){
    var line = {
        p1 : point1,
        p2 : point2,
        length : calculateDistance(point1, point2)
    }
    return line;
}

function canFormTriangle(sideA, sideB, sideC) {
    if ((sideA.length + sideB.length > sideC.length) &&
        (sideA.length + sideC.length > sideB.length) &&
        (sideB.length + sideC.length > sideA.length)) {
        return true;
    } else {
        return false;
    }
}

function test() {
    var x1 = 1,
        y1 = 2,
        x2 = 5,
        y2 = 3,
        x3 = 0,
        y3 = 4,
        x4 = 2,
        y4 = 6,
        x5 = 3,
        y5 = 1,
        x6 = 6,
        y6 = 3,
        point1 = buildPoint(x1, y1),
        point2 = buildPoint(x2, y2),
        point3 = buildPoint(x3, y3),
        point4 = buildPoint(x4, y4),
        point5 = buildPoint(x5, y5),
        point6 = buildPoint(x6, y6),
        line1 = buildLine(point1, point2),
        line2 = buildLine(point3, point4),
        line3 = buildLine(point5, point6);
    console.log('There are three lines');
    console.log('Line 1 length:', line1.length);
    console.log('Line 2 length:', line2.length);
    console.log('Line 3 length:', line3.length);
    console.log('Can these three lines form triangle -> ', canFormTriangle(line1, line2, line3));
}
test();