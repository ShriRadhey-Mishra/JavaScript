const circle = {
    radius: 1,
    draw: function() {
        console.log('draw');    
    }
};

for (let keys in circle)                        // returns the keys of the object
    console.log(keys);

for (let keys of Object.keys(circle))           // returns the keys of the object
    console.log(keys);

for (let entries of Object.entries(circle))     // returns the complete array of key value
    console.log(entries);

if ('radius' in circle) console.log('yes');     // checks the condition if the specified key is in the object

