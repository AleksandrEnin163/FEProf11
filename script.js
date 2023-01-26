function isFridayToday(){
    let today = new Date().getDay()
    if(today == 5){
        console.log('Сегодня пятница')
    } else if (today == 6){
        console.log('Пятница была вчера')
    } else if (today == 4){
        console.log('Завтра пятница!')
    } else if(today == 0){
        console.log(`Пятница будет через ${today} дней`)
    } else {
        console.log(`Пятница будет через ${today} дня`)
    }
}

let prices = [ 
    'Цена товара - 1200$', 
    'Стоимость - 500$', 
    'Цена не определена', '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
     ]

function getInfo(prices){
    const startsWith = prices.filter(elem => elem.startsWith('Цена')).length
    const endsWith = prices.filter(elem => elem.endsWith('$')).length
    return [startsWith, endsWith]
}

let arrays = [ 
    '89840959944 exampleonemain@mail.ru', 
    '+79840959933 forreason@yandex.net', 
    'somemail@mail.ru', 
    '89840959900 example@gmil.ru', 
    '+79840959911', 
    'grandthere@mail.ru',
    'jetpackfor@gmail.ru',
     '89840959922 some@yandex.com',
     ] 
    

const phone = /\+*\d{11}/;
const mail = /\w+\@\w+\.\w+\.*\w*/;

const only_phones = arrays.map(elem => elem.split(' ').filter(elem => elem.match(phone))).filter(elem => elem.length != 0).map(elem => elem.join());
const only_mails = arrays.map(elem => elem.split(' ').filter(elem => elem.match(mail))).filter(elem => elem.length != 0).map(elem => elem.join());

let phones = [ 
    '4000 0012 0056 9499', 
    '4000 0013 5456 7379', 
    '4000 0014 1456 9869', 
    '4000 0015 3466 7859', 
    '4000 0016 3556 6899', 
    '4000 0017 4456 4699'
    ]

const new_phones = phones.map(elem => `${elem.slice(0,4)}*****${elem.slice(elem.length-4)}`);
console.log(new_phones);