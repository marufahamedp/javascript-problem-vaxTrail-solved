const persons = [
    {
        name: 'Maruf',
        age: 97,
        temperature: 140,
    },
    {
        name: 'Rahat',
        age: 36,
        temperature: 93,
    },
    {
        name: 'Bithe',
        age: 55,
        temperature: 101,
    },
    {
        name: 'Rakib',
        age: 45,
        temperature: 96,
    },
    {
        name: 'Rohim',
        age: 36,
        temperature: 96,
    },
    {
        name: 'Jannat',
        age: 25,
        temperature: 90,
    },
    {
        name: 'Husna',
        age: 26,
        temperature: 90,
    },
    {
        name: 'Tania',
        age: 56,
        temperature: 150,
    },
    {
        name: 'Sohana',
        age: 28,
        temperature: 90,
    },
    {
        name: 'Poly',
        age: 31,
        temperature: 90,
    },
    {
        name: 'Popy',
        age: 41,
        temperature: 90,
    },
    {
        name: 'Tiger',
        age: 50,
        temperature: 90,
    },
    {
        name: 'Ashik',
        age: 26,
        temperature: 103,
    }
]
function vaxTrail(persons){
   const A =  persons.filter(person=> person.age>=20 && person.age<=30 && person.temperature<100);
   const B =  persons.filter(person=> person.age>=31 && person.age<=40 && person.temperature<100);
   const C =  persons.filter(person=> person.age>=41 && person.age<=50 && person.temperature<100);
   const D =  persons.filter(person=>  person.temperature>=100);
    let rtn_obj = {
        A,
        B,
        C,
        D
    
    }

   console.log(rtn_obj)
   return rtn_obj;

}
vaxTrail(persons);
