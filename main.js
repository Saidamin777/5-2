

let strng = prompt('String typedagi malumotlarni kiriting');

let num = Number(prompt('Number typedagi malumot kiriting'));

let bl = prompt('Boolean typedagi malumotni kiriting') === 'true';

confirm('Hamma malumotlarni togri kiritganingizga komilmisiz?');

alert(`Siz kiritgan "${strng}" so'zi ${typeof strng} typega tegishli.
Siz kiritgan "${num}" so'zi ${typeof num} typega tegishli.
Siz kiritgan "${bl}" so'zi ${typeof bl} typega tegishli.`);
