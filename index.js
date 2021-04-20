//Bereken de oppervlakte van een cirkel
function calculateCircleArea(radius){
    const area = (Math.PI) * radius * radius;
    const rounded = Math.round(area * 100) / 100;
    return rounded;

}

console.log(calculateCircleArea(2));

module.exports = {
    calculateCircleArea: calculateCircleArea,
};
