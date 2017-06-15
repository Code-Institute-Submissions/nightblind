SectionControllers.factory('MemberFactory',function(){
    var members = [
        {
            "shortname":"Cormac_Liston",
            "name": "Cormac Liston",
            "instrument": "Guitar / Vocals",
            "gear": "Fender Blacktop Stratocaster HH, Epiphone Les Paul - Zakk Wylde Custom, Vox AC30 VR"
        },
        {
            "shortname":"Hugh_OConnor",
            "name": "Hugh O'Connor",
            "instrument": "Guitar / Vocals",
            "gear": "Fender Stratocaster, Vox AC30 VR"
        },
        {
            "shortname":"Davy_Dwyer",
            "name": "Davy Dwyer",
            "instrument": "Drums",
            "gear": "Peavy, Paiste - Nicko McBrain Custom"
        },
        {
            "shortname":"Freek_Vermeer",
            "name": "Freek Vermeer",
            "instrument": "Bass",
            "gear": "Fender Jazz Bass, Trace Elliot GP12"
        }
    ];

    // create empty factory object
    var factory = {};
    factory.getMembers = function(){
        //	return members to factory object
        return members;
    }
    return factory;

});
