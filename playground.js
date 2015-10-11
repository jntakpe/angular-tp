var vehicule = {
    roues: 4,
    permis: {
        type: 'B'
    }
};
var moto = Object.create(vehicule);
var camion = Object.create(vehicule);
console.log("1) Moto roues : " + moto.roues);
moto.roues = 2;
console.log("2) Vehicule roues : " + vehicule.roues);
console.log("3) Moto roues : " + moto.roues);
moto.permis.type = 'A';
console.log("4) Vehicule permis : " + vehicule.permis.type);
console.log("5) Moto permis : " + moto.permis.type);
console.log("6) Camion permis : " + camion.permis.type);