const foods = [
    {
        id: '1',
        name: 'กาแฟสด',
        type: 'เครื่องดื่ม',
        price: '10',
        shop_id: '1',
        tag: "กาแฟ,น้ำ,เครื่องดื่ม,กาแฟสด,เอสเพรสโซ่,คาปูชิโน่,ลาเต้"
    },
    {
        id: '2',
        name: 'ชาเขียว',
        type: 'เครื่องดื่ม',
        price: '10',
        shop_id: '1',
        tag: "ชา,ชาเขียว,ชาเย็น,น้ำ,เครื่องดื่ม"
    },
    {
        id: '3',
        name: 'ชาเย็น',
        type: 'เครื่องดื่ม',
        price: '10',
        shop_id: '2',
        tag: "ชา,ชาเย็น,น้ำ,เครื่องดื่ม"
    },
    {
        id: '4',
        name: 'ชามะนาว',
        type: 'เครื่องดื่ม',
        price: '10',
        shop_id: '2',
        tag: "ชา,ชามะนาว,ชาเย็น,น้ำ,เครื่องดื่ม,มะนาว"
    },
    {
        id: '5',
        name: 'น้ำใบเตย',
        type: 'เครื่องดื่ม',
        price: '10',
        shop_id: '2',
        tag: "น้ำใบเตย,น้ำ,เครื่องดื่ม,ใบเตย"
    },
    {
        id: '6',
        name: 'น้ำลำใย',
        type: 'เครื่องดื่ม',
        price: '10',
        shop_id: '2',
        tag: "ลำไย,น้ำ,เครื่องดื่ม,น้ำลำใย"
    },
    {
        id: '7',
        name: 'น้ำกระเจี๊ยบ',
        type: 'เครื่องดื่ม',
        price: '10',
        shop_id: '2',
        tag: "กระเจี๊ยบ,น้ำ,เครื่องดื่ม,น้ำกระเจี๊ยบ"
    },
    {
        id: '8',
        name: 'แกงเขียวหวานไก่',
        type: 'อาหาร',
        price: '25',
        shop_id: '3',
        tag: "แกง,ไก่,แกงเขียนหวาน,แกงเขียวหวานไก่,ฮาลาล,อาหารฮาลาล,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '9',
        name: 'แกงข่า',
        type: 'อาหาร',
        price: '25',
        shop_id: '3',
        tag: "แกง,ไก่,ข่า,แกงข่า,ฮาลาล,อาหารฮาลาล,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '10',
        name: 'ข้าวหมูกรอบ',
        type: 'อาหาร',
        price: '30',
        shop_id: '4',
        tag: "ข้าว,หมู,หมูกรอบ,ข้าวหมูกรอบ"
    },
    {
        id: '11',
        name: 'บะหมี่เกี๊ยวหมูกรอบ/หมูแดง',
        type: 'ก๋วยเตี๋ยว',
        price: '25',
        shop_id: '4',
        tag: "ก๋วยเตี๋ยว,บะหมี่,เกี๋ยว,หมู,หมูกรอบ,หมูแดง,อาหารจีน,บะหมี่เกี๊ยวหมูกรอบ,บะหมี่เกี๊ยวหมูแดง,อาหารจีน,จีน"
    },
    {
        id: '12',
        name: 'ก๋วยเตี๋ยวต้มยำ',
        type: 'ก๋วยเตี๋ยว',
        price: '25',
        shop_id: '4',
        tag: "ก๋วยเตี๋ยว,ต้มยำ,อาหารจีน,เผ็ด,ก๋วยเตี๋ยวต้มยำ,จีน,หมู"
    },
    {
        id: '13',
        name: 'ก๋วยเตี๊ยวเย็นตาโฟ',
        type: 'ก๋วยเตี๋ยว',
        price: '25',
        shop_id: '4',
        tag: "ก๋วยเตี๋ยว,เย็นตาโฟ,อาหารจีน,ก๋วยเตี๋ยวเย็นตาโฟ,จีน,หมู"
    },
    {
        id: '14',
        name: 'หมูสามชั้นทอด',
        type: 'อาหาร',
        price: '30',
        shop_id: '5',
        tag: "หมู,หมูสามชั้น,ทอด,หมูสามชั้นทอด,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '15',
        name: 'ผัดเผ็ดปลาดุกใบยี่หร่า',
        type: 'อาหาร',
        price: '30',
        shop_id: '5',
        tag: "ผัดเผ็ด,ปลา,ปลาดุก,ใบยี่หร่า,เผ็ด,ผัดเผ็ดปลาดุกใบยี่หร่า,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '16',
        name: 'ข้าวไก่ทอดราดแกงกะหรี่',
        type: 'อาหาร',
        price: '30',
        shop_id: '6',
        tag: "ข้าว,ไก่,ไก่ทอด,แกงกะหรี่,ญี่ปุ่น,อาหารญี่ปุ่น,ข้าวราดแกงกะหรี่,ข้าวไก่ทอดราดแกงกะหรี่,ฮาลาล,อาหารฮาลาล"
    },
    {
        id: '17',
        name: 'มัสมั่น',
        type: 'อาหาร',
        price: '30',
        shop_id: '6',
        tag: "แกง,มัสมั่น,ไก่,แกงมัสมั่น,แกงมัสมั่นไก่,ฮาลาล,อาหารฮาลาล,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '18',
        name: 'ไก่ย่างซอสกะเพรา',
        type: 'อาหาร',
        price: '30',
        shop_id: '6',
        tag: "ไก่,ไก่ย่าง,กะเพรา,ไก่ย่างซอสกะเพรา,ฮาลาล,อาหารฮาลาล,ข้าว"
    },
    {
        id: '19',
        name: 'ไก่ย่างมัสมั่นไก่',
        type: 'อาหาร',
        price: '30',
        shop_id: '6',
        tag: "ไก่,ไก่ย่าง,มัสมั่น,ไก่ย่างมัสมั่นไก่่,ฮาลาล,อาหารฮาลาล,ข้าว"
    },
    {
        id: '20',
        name: 'ข้าวหมกไก่',
        type: 'อาหาร',
        price: '30',
        shop_id: '6',
        tag: "ข้าว,ไก่,หมก,ข้าวหมกไก่,ฮาลาล,อาหารฮาลาล,ข้าว"
    },
    {
        id: '21',
        name: 'หมูเกาหลี',
        type: 'อาหาร',
        price: '35',
        shop_id: '7',
        tag: "ข้าว,หมู,อาหารเกาหลี,ข้าวหมูเกาหลี"
    },
    {
        id: '22',
        name: 'แกงกะหรี่',
        type: 'อาหาร',
        price: '35',
        shop_id: '7',
        tag: "แกง,แกงกะหรี่,อาหารญี่ปุ่น,ญี่ปุ่น,ข้าวแกงกะหรี่,ข้าว"
    },
    {
        id: '23',
        name: 'ไก่แซ่บ',
        type: 'อาหาร',
        price: '30',
        shop_id: '7',
        tag: "ไก่,เผ็ด,ไก่แซ่บ,ข้าว"
    },
    {
        id: '24',
        name: 'ไก่ทอดผัดซอส',
        type: 'อาหาร',
        price: '25',
        shop_id: '8',
        tag: "ไก่,ไก่ทอด,ผัด,ไก่ทอดผัดซอส,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '25',
        name: 'ยำผักรวมทอด',
        type: 'อาหาร',
        price: '25',
        shop_id: '8',
        tag: "ยำ,ผัก,ทอด,ยำผักรวมทอด,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '26',
        name: 'ปลานึ่งมะนาว',
        type: 'อาหาร',
        price: '20',
        shop_id: '8',
        tag: "ปลา,นึ่ง,มะนาว,ปลานึ่งมะนาว,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '27',
        name: 'ไก่ทอด',
        type: 'อาหาร',
        price: '25',
        shop_id: '8',
        tag: "ไก่,ไก่ทอด,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '28',
        name: 'แกงยอดมะพร้าว',
        type: 'อาหาร',
        price: '25',
        shop_id: '8',
        tag: "ยอดมะพร้าว,แกงยอดมะพร้าว,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '29',
        name: 'ไข่ตุ๋น',
        type: 'อาหาร',
        price: '25',
        shop_id: '8',
        tag: "ไข่,ตุ๋น,ไข่ตุ๋น,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '30',
        name: 'ข้าวไก่ย่างน้ำจิ้มแจ่ว',
        type: 'อาหาร',
        price: '30',
        shop_id: '9',
        tag: "ข้าว,ไก่,ไก่ย่าง,นำจิ้มแจ่ว,ข้าวไก่ย่างน้ำจิ้มแจ่ว,ข้าว"
    },
    {
        id: '31',
        name: 'ข้าวแกงกะหรี่ไก่ทอด',
        type: 'อาหาร',
        price: '30',
        shop_id: '9',
        tag: "ข้าว,แกงกะหรี่,ไก่,ไก่ทอด,ข้าวแกงกะหรี่,ข้าวราดแกงกะหรี่,อาหารญี่ปุ่น,ญี่ปุ่น"
    },
    {
        id: '32',
        name: 'ขนมจีนแกงเขียวหวานไก่',
        type: 'อาหาร',
        price: '25',
        shop_id: '9',
        tag: "ขนมจีน,แกงเขียวหวาน,ไก่,ขนมจีนแกงเขียวหวาน,ขนมจีนแกงเขียวหวานไก่,ข้าว"
    },
    {
        id: '33',
        name: 'ไก่ทอดซอสเปรี้ยวหวาน',
        type: 'อาหาร',
        price: '25',
        shop_id: '9',
        tag: "ไก่,ไก่ทอด,เปรี้ยวหวาน,ไก่ทอดซอสเปรี้ยวหวาน,ข้าว"
    },
    {
        id: '34',
        name: 'ผัดเผ็ดปลาดุก',
        type: 'อาหาร',
        price: '25',
        shop_id: '10',
        tag: "ปลา,ปลาดุก,ผัดเผ็ด,ผัดเผ็ดปลาดุก,ปลาดุกผัดเผ็ด,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '35',
        name: 'ไก่คั่วพริก',
        type: 'อาหาร',
        price: '25',
        shop_id: '10',
        tag: "ไก่,คั่วพริก,ไก่ครั่วพริก,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '36',
        name: 'ผัดกะเพราหมูสับ',
        type: 'อาหาร',
        price: '25',
        shop_id: '10',
        tag: "ผัด,กะเพรา,หมู,หมูสับ,ผักกะเพรา,ผัดกระเพราหมูสับ,ข้าวแกง,ข้าวราดแกง,ราดแกง,ราดข้าว,ข้าว"
    },
    {
        id: '37',
        name: 'น้ำส้ม',
        type: 'เครื่องดื่ม',
        price: '10',
        shop_id: '11',
        tag: "น้ำ,น้ำผลไม้,ส้ม,น้ำส้ม"
    },
    {
        id: '38',
        name: 'นมเย็น',
        type: 'เครื่องดื่ม',
        price: '10',
        shop_id: '11',
        tag: "น้ำ,นม,นมเย็น"
    },
    {
        id: '39',
        name: 'น้ำมะพร้าว',
        type: 'เครื่องดื่ม',
        price: '10',
        shop_id: '11',
        tag: "น้ำ,น้ำผลไม้,มะพร้าว,น้ำมะพร้าว"
    }
]

exports.seed = function (knex) {
    return knex('foods').del().then(function () {
        return knex('foods').insert(foods);
    });
};
