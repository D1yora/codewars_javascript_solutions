const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let maxDistance = mpg * fuelLeft;
  if(maxDistance >= distanceToPump) {
    return true;
  } else {
    return false;
  }
}; 
