module.exports = function dogs(callback) {
    let beagle = {
        name: 'Barney',
        breed: 'Beagle',
        speak: () => `\nNo! ${beagle.name} says... woof! 🐾`
    }

    callback(`${beagle.name}'s breed is ${beagle.breed} and it's saying...`, beagle.speak());
};